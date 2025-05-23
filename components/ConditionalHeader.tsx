"use client"

import { usePathname } from "next/navigation"
import { Header } from "@/components/header"

export default function ConditionalHeader() {
  const pathname = usePathname()

  // Do not render header on /get-quote page
  if (pathname === "/get-quote" || pathname.startsWith("/get-quote/")) {
    return null
  }

  return <Header />
}
