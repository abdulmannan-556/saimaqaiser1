"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function AccountOpeningForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    accountType: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Account opening form submitted:", form);
    // Add API call to create new account
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
      <Textarea
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Address"
        rows={3}
        required
      />
      <Select
        name="accountType"
        value={form.accountType}
        onChange={handleChange}
        required
      >
        <option value="">Select Account Type</option>
        <option value="individual">Individual</option>
        <option value="corporate">Corporate</option>
      </Select>
      <Textarea
        name="notes"
        value={form.notes}
        onChange={handleChange}
        placeholder="Additional Notes (optional)"
        rows={3}
      />
      <Button type="submit" size="lg">Open Account</Button>
    </form>
  );
}
