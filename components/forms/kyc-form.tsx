"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function KycForm() {
  const [form, setForm] = useState({
    fullName: "",
    cnic: "",
    email: "",
    phone: "",
    address: "",
    incomeRange: "",
    document: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
    console.log("KYC form submitted:", form);
    // API call to submit KYC details
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
        name="cnic"
        value={form.cnic}
        onChange={handleChange}
        placeholder="CNIC / ID Number"
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
        name="incomeRange"
        value={form.incomeRange}
        onChange={handleChange}
        required
      >
        <option value="">Select Income Range</option>
        <option value="0-50k">0 - 50,000 PKR</option>
        <option value="50k-200k">50,000 - 200,000 PKR</option>
        <option value="200k+">200,000+ PKR</option>
      </Select>
      <Input
        type="file"
        name="document"
        onChange={handleChange}
        accept=".pdf,.jpg,.png"
        required
      />
      <Button type="submit" size="lg">Submit KYC</Button>
    </form>
  );
}
