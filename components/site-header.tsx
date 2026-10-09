"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ArrowRightIcon, MenuIcon } from "lucide-react"

import { BrandLogo } from "@/components/brand"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { nav, site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-transparent bg-background/80 backdrop-blur-xl transition-colors duration-300",
        scrolled && "border-border"
      )}
    >
      <nav
        aria-label="Principal"
        className="container-page flex h-18 items-center justify-between gap-6"
      >
        <BrandLogo priority />

        {/* Escritorio */}
        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group/nav relative px-3.5 py-2 text-xs font-semibold tracking-[0.16em] text-muted-foreground transition-colors duration-300 hover:text-foreground aria-[current=page]:text-foreground",
                  "after:absolute after:inset-x-3.5 after:bottom-1 after:h-px after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-500 after:ease-(--ease-out-expo) hover:after:origin-left hover:after:scale-x-100 aria-[current=page]:after:scale-x-100"
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <Button
            variant="brand"
            size="pill"
            className="ml-3"
            nativeButton={false}
            render={
              <a href={site.whatsappUrl} target="_blank" rel="noopener" />
            }
          >
            Pedir ahora
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </div>

        {/* Celular */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon-lg"
                className="size-11 rounded-full lg:hidden"
                aria-label="Abrir menú"
              />
            }
          >
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="right" className="w-[86%] gap-0 bg-background">
            <SheetHeader className="px-6 pt-6">
              <SheetTitle className="font-heading text-2xl">
                {site.name}
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col px-6">
              {nav.map((link, i) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className="group/m flex items-center justify-between py-4 text-sm font-semibold tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:text-primary"
                  >
                    {link.label}
                    <ArrowRightIcon className="size-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover/m:translate-x-0 group-hover/m:opacity-100" />
                  </Link>
                  {i < nav.length - 1 && <Separator />}
                </div>
              ))}
            </div>
            <div className="mt-auto p-6">
              <Button
                variant="brand"
                size="xl"
                className="w-full"
                nativeButton={false}
                render={
                  <a href={site.whatsappUrl} target="_blank" rel="noopener" />
                }
              >
                Pedir ahora
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
