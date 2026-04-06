"use client";

import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Save to Firestore
      await addDoc(collection(db, "contacts"), {
        name: form.name,
        email: form.email,
        message: form.message,
        createdAt: serverTimestamp(), // server timestamp is safer than new Date()
      });

      // 2️⃣ Send Email using EmailJS
      const templateParams = {
        from_name: form.name,
        reply_to: form.email,
        message: form.message,
        to_email: "seharmughal881@gmail.com", // Your actual email address
      };
      
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("✅ Your message has been sent successfully!");
      setForm({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("❌ Error sending message:", error);
      
      // More specific error messages
      if (error.message.includes("EMAILJS")) {
        alert("Email service error. Please contact me directly at [your-email@example.com]");
      } else if (error.message.includes("permission-denied")) {
        alert("Database permission error. Please try again later.");
      } else {
        alert(`Error: ${error.message || "Something went wrong. Please try again!"}`);
      }
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="border p-2 w-full rounded focus:ring-2 focus:ring-violet-500 outline-none"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="border p-2 w-full rounded focus:ring-2 focus:ring-violet-500 outline-none"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        className="border p-2 w-full rounded h-32 focus:ring-2 focus:ring-violet-500 outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

    </form>
  );
}
