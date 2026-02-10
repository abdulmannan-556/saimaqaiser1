"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscribed:", email);
    // API call to save email
    setEmail(""); // Reset after submit
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
      <Input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit" size="lg">Subscribe</Button>
    </form>
  );
}
