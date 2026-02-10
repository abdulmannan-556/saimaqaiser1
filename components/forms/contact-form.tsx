"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Here you can add API call to send form data
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col gap-4">
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
        placeholder="Message"
        rows={5}
        required
      />
      <Button type="submit" size="lg">Send Message</Button>
    </form>
  );
}
