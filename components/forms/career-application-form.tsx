"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type CareerFormState = {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  coverLetter: string;
};

export function CareerApplicationForm() {
  const [form, setForm] = useState<CareerFormState>({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { success: boolean; message: string }>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/career", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ success: true, message: data.message });
        setForm({ fullName: "", email: "", phone: "", position: "", coverLetter: "" });
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
        placeholder="Email Address"
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
        placeholder="Cover Letter / Additional Information"
        rows={5}
      />

      <Button type="submit" size="lg" disabled={loading}>
        {loading ? "Submitting..." : "Submit Application"}
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
