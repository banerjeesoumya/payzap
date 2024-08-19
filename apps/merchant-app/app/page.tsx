"use client"

import { useBalance } from "@repo/store/useBalance";

export default function() {
  console.log("Reached here")
  const balance = useBalance();
  return (
    <div>
      Hello from Merchant App
      hi there {balance}
    </div>
  )
} 