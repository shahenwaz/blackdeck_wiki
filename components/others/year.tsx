"use client";
import { useEffect, useState } from "react";

export default function Year() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  // suppressHydrationWarning here guards even if SSR gave a different value.
  return <span suppressHydrationWarning>{year ?? ""}</span>;
}
