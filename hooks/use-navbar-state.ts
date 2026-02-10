"use client";

import { useEffect, useState } from "react";

export function useNavbarState() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // Navbar becomes sticky after 50px scroll
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isOpen, toggle, isSticky };
}
