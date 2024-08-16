import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { PrismaClient } from "@repo/db/client";


export default function Home() {
  return (
    <div className="text-2xl">
      Hello from the User App
    </div>
  );
}
