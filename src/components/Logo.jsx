import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"}>
      Items<span className="">Tracker</span>
    </Link>
  );
}
