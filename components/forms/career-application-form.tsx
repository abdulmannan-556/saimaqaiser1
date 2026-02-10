"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function CareerApplicationForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Career application submitted:", form);
    // Add API call to submit application
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col gap-4">
      <Input
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />
      <Input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <Input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
      />
      <Input
        name="position"
        value={form.position}
        onChange={handleChange}
        placeholder="Position Applied For"
        required
      />
      <Textarea
        name="coverLetter"
        value={form.coverLetter}
        onChange={handleChange}
        placeholder="Cover Letter"
        rows={4}
      />
      <Input
        type="file"
        name="resume"
        onChange={handleChange}
        accept=".pdf,.doc,.docx"
        required
      />
      <Button type="submit" size="lg">Submit Application</Button>
    </form>
  );
}
