import Image from "next/image"
import Link from "next/link"
import type { SVGProps } from "react"
import { cn } from "@/lib/utils"

import logo from "@/assets/img/logo.png"

// Lucide v1 ya no incluye logos de marcas: Instagram dibujado con el mismo trazo.
export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

// El PNG del logo es un emblema circular con margen transparente: se amplía dentro de un círculo.
export function BrandLogo({
  className,
  priority = false,
}: {
  className?: string
  priority?: boolean
}) {
  return (
    <Link
      href="/"
      aria-label="Black Powers, inicio"
      className={cn(
        "group/logo relative block size-14 shrink-0 overflow-hidden rounded-full outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className
      )}
    >
      <Image
        src={logo}
        alt="Black Powers"
        sizes="80px"
        fetchPriority={priority ? "high" : undefined}
        className="size-full scale-[1.26] transition-transform duration-700 ease-(--ease-back) group-hover/logo:scale-[1.32] group-hover/logo:-rotate-12"
      />
    </Link>
  )
}
