import type { Metadata } from "next"
import Image from "next/image"
import {
  ArrowRightIcon,
  ClockIcon,
  InfoIcon,
  SandwichIcon,
  StarIcon,
  SquareStarIcon,
} from "lucide-react"

import { BurgerCard, SnackCard } from "@/components/cards"
import { Reveal, Stagger, StaggerItem } from "@/components/motion"
import {
  Accent,
  InfoPill,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/sections"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { burgers, extras, friedBox, friedBoxDips, snacks } from "@/lib/menu"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Carta Black Powers: smash burgers, Fried Box, snacks para picar y dips.",
}

const categories = [
  { href: "#hamburguesas", label: "Hamburguesas" },
  { href: "#para-picar", label: "Para picar" },
  { href: "#dips", label: "Dips & extras" },
]

const tipText =
  "Suma cualquiera de los agregados para picar a tu burguer y hacela aun mas deliciosa. ¡No te olvides de los dips!"

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="SMASH BURGUERS Y PLANCHA AL FUEGO"
        title={
          <>
            Carta <Accent>Black Powers</Accent>
          </>
        }
        description="Medallones smasheados de 110g, quesos fundidos, panes brioche artesanales y salsas secretas caseras"
        aside={
          <div className="flex gap-3">
            {[
              { value: "110g", label: "CARNE SMASH" },
              { value: "100%", label: "PLANCHA & SABOR" },
            ].map((s) => (
              <Card
                key={s.label}
                size="sm"
                className="min-w-36 px-5 py-4 transition-[translate] duration-500 hover:-translate-y-1"
              >
                <span className="font-heading text-4xl leading-none font-bold text-primary">
                  {s.value}
                </span>
                <span className="text-[0.7rem] font-semibold tracking-[0.16em] text-muted-foreground">
                  {s.label}
                </span>
              </Card>
            ))}
          </div>
        }
      >
        <InfoPill icon={ClockIcon}>
          {site.hours.days} de {site.hours.open} a {site.hours.close}hs ·{" "}
          {site.location.city}, {site.location.region}
        </InfoPill>
      </PageHero>

      {/* Atajos de categoría */}
      <nav
        aria-label="Categorias del menu"
        className="sticky top-18 z-30 border-y bg-background/85 backdrop-blur-xl"
      >
        <div className="container-page flex [scrollbar-width:none] gap-2 overflow-x-auto py-3">
          {categories.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="shrink-0 rounded-full border px-4 py-2 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              {c.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Hamburguesas */}
      <Section id="hamburguesas" className="border-t-0">
        <SectionHeading
          eyebrow="SELECCION EXCLUSIVA"
          title={
            <>
              Conoce nuestras <Accent>hamburguesas</Accent>
            </>
          }
        />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {burgers.map((burger) => (
            <StaggerItem key={burger.slug}>
              <BurgerCard burger={burger} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Para picar */}
      <Section id="para-picar">
        <SectionHeading
          eyebrow="PARA PICAR"
          title={
            <>
              Conoce nuestro menu <Accent>para picar</Accent>
            </>
          }
        />

        <Reveal>
          <Card className="group/card grid gap-0 py-0 md:grid-cols-[1.1fr_1fr]">
            <div className="relative min-h-72 overflow-hidden bg-muted">
              <Image
                src={friedBox.image}
                alt={friedBox.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover transition-transform duration-1000 ease-(--ease-out-expo) group-hover/card:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center gap-5 p-7 md:p-12">
              <Badge className="gap-1.5">
                <StarIcon data-icon="inline-start" />
                {friedBox.badge}
              </Badge>
              <h3 className="font-heading text-4xl font-bold md:text-5xl">
                {friedBox.name}
              </h3>
              <p className="text-lg text-muted-foreground">
                {friedBox.description}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {friedBox.prices.map((p) => (
                  <div
                    key={p.label}
                    className="rounded-xl border bg-secondary/60 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary"
                  >
                    <span className="block text-[0.7rem] font-semibold tracking-[0.16em] text-muted-foreground">
                      {p.label}
                    </span>
                    <span className="font-heading text-3xl font-bold text-primary">
                      {p.price}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <Button
                  variant="brand"
                  size="xl"
                  nativeButton={false}
                  render={
                    <a href={site.whatsappUrl} target="_blank" rel="noopener" />
                  }
                >
                  Pedir Fried Box
                  <ArrowRightIcon data-icon="inline-end" />
                </Button>
              </div>
            </div>
          </Card>
        </Reveal>

        <Stagger className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {snacks.map((snack) => (
            <StaggerItem key={snack.name}>
              <SnackCard snack={snack} />
            </StaggerItem>
          ))}
        </Stagger>

        {/* Dips y agregados */}
        <div
          id="dips"
          className="mt-14 grid scroll-mt-40 gap-6 lg:grid-cols-[1.2fr_1fr]"
        >
          <Reveal>
            <Card className="h-full py-7">
              <CardHeader className="px-7">
                <CardTitle className="flex items-center gap-2.5 text-base font-normal">
                  <InfoIcon className="size-4.5 text-primary" aria-hidden />
                  Pedi tus salsas extras para sumarle a tus burguers
                </CardTitle>
              </CardHeader>
              <CardContent className="px-7">
                <ul>
                  {extras.map((extra, i) => (
                    <li key={extra.name}>
                      <div className="group/row flex items-center gap-4 py-5 transition-[padding] duration-500 ease-(--ease-out-expo) hover:pl-2">
                        <div className="flex-1">
                          <h3 className="font-semibold tracking-wide transition-colors group-hover/row:text-primary">
                            {extra.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {extra.description}
                          </p>
                        </div>
                        <span
                          aria-hidden
                          className="hidden h-px flex-1 border-t border-dashed sm:block"
                        />
                        <span className="font-heading text-2xl font-bold text-primary">
                          {extra.price}
                        </span>
                      </div>
                      {i < extras.length - 1 && <Separator />}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col gap-6">
            <div className="group/card relative aspect-[16/10] overflow-hidden rounded-2xl border bg-muted">
              <Image
                src={friedBoxDips.image}
                alt={friedBoxDips.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-1000 ease-(--ease-out-expo) group-hover/card:scale-105"
              />
            </div>
            {[
              {
                icon: SquareStarIcon,
                title: "COMBINALO CON TUS AGREGADOS FAVORITOS",
              },
              {
                icon: SandwichIcon,
                title: "COMBINA TU BURGUER COMO PREFIERAS",
              },
            ].map(({ icon: Icon, title }) => (
              <Card key={title} size="sm" className="gap-2 px-5 py-5">
                <h4 className="flex items-center gap-2.5 text-sm font-bold tracking-wide">
                  <Icon className="size-5 text-primary" aria-hidden />
                  {title}
                </h4>
                <p className="text-sm text-muted-foreground">{tipText}</p>
              </Card>
            ))}
          </Reveal>
        </div>
      </Section>
    </>
  )
}
