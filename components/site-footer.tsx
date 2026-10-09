import Link from "next/link"
import { ArrowRightIcon, MessageCircleIcon } from "lucide-react"

import { BrandLogo } from "@/components/brand"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { hoursLabel, nav, site } from "@/lib/site"

const linkClass =
  "text-[0.95rem] text-foreground/90 transition-colors duration-300 hover:text-primary"

export function SiteFooter() {
  return (
    <>
      <footer className="border-t pt-16 pb-28 md:pb-10">
        <div className="container-page">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-4">
              <BrandLogo />
              <p className="max-w-[30ch] text-sm text-muted-foreground">
                Smash burgers artesanales en {site.location.city},{" "}
                {site.location.zone}.
              </p>
            </div>

            <FooterColumn title="Navegacion">
              {nav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
                  </Link>
                </li>
              ))}
            </FooterColumn>

            <FooterColumn title="Contacto">
              <li>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener"
                  className={linkClass}
                >
                  WhatsApp · {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener"
                  className={linkClass}
                >
                  Instagram · {site.instagramHandle}
                </a>
              </li>
              <li className="text-[0.95rem] text-foreground/90">
                {site.location.city}, {site.location.region}
              </li>
            </FooterColumn>

            <FooterColumn title="Horarios">
              <li className="text-[0.95rem] text-foreground/90">
                {site.hours.days}
              </li>
              <li className="text-[0.95rem] text-primary">{hoursLabel}</li>
            </FooterColumn>
          </div>

          <Separator className="my-8" />
          <p className="text-center text-xs text-muted-foreground/70">
            {site.name} - {site.tagline} 2026. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* CTA fijo en celular: pedir siempre a un toque */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t bg-background/90 p-3 backdrop-blur-xl md:hidden">
        <Button
          variant="brand"
          size="xl"
          className="w-full"
          nativeButton={false}
          render={<a href={site.whatsappUrl} target="_blank" rel="noopener" />}
        >
          <MessageCircleIcon data-icon="inline-start" />
          Pedir por WhatsApp
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </div>
    </>
  )
}

function FooterColumn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  )
}
