import Image from "next/image";
import Link from "next/link";

import { master } from "@/data/master";
import logo from "@/assets/images/logo-hairskull-gold.png";

import Container from "./Container";

const monoClassName =
  "font-mono text-xs tracking-[0.08em] text-text-dim uppercase";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
        <Link href="/#top" className="shrink-0">
          <Image
            src={logo}
            alt="Hair Skull"
            sizes="58px"
            className="h-16 w-auto"
          />
        </Link>

        <p className={monoClassName}>
          {master.fullName} · {master.profession} · Преподаватель
        </p>

        <p className={monoClassName}>© {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
}
