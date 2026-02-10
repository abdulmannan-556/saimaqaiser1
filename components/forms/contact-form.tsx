"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  // Form state
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Loading and status
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { success: boolean; message: string }>(null);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ success: true, message: data.message });
        setForm({ name: "", email: "", subject: "", message: "" }); // Reset form
      } else {
        setStatus({ success: false, message: data.error });
      }
    } catch (error) {
      setStatus({ success: false, message: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col gap-4 p-4 sm:p-0">
      <Input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <Input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
      />
      <Input
        name="subject"
        value={form.subject}
        onChange={handleChange}
        placeholder="Subject"
        required
      />
      <Textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        rows={5}
        required
      />

      <Button type="submit" size="lg" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </Button>

      {status && (
        <p
          className={`mt-2 text-sm ${
            status.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
