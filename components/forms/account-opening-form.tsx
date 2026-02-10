"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type AccountFormState = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  accountType: string;
};

export function AccountOpeningForm() {
  const [form, setForm] = useState<AccountFormState>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    accountType: "",
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
      const res = await fetch("/api/account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ success: true, message: data.message });
        setForm({ fullName: "", email: "", phone: "", address: "", accountType: "" });
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
      <Textarea
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Address"
        rows={3}
        required
      />
      <Input
        name="accountType"
        value={form.accountType}
        onChange={handleChange}
        placeholder="Account Type (e.g., Individual, Corporate)"
        required
      />

      <Button type="submit" size="lg" disabled={loading}>
        {loading ? "Submitting..." : "Open Account"}
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
