import Image from "next/image"
import Link from "next/link"
import {
  ArrowRightIcon,
  CircleCheckIcon,
  ClockIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
  UtensilsIcon,
} from "lucide-react"

import banner from "@/assets/img/bannerindex.webp"
import { InstagramIcon } from "@/components/brand"
import { RankCard } from "@/components/cards"
import { Stagger, StaggerItem } from "@/components/motion"
import {
  Accent,
  HeroIn,
  CtaBand,
  Eyebrow,
  InfoCard,
  Marquee,
  Section,
  SectionHeading,
} from "@/components/sections"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ranking, rankingMonth } from "@/lib/menu"
import { site } from "@/lib/site"

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 -left-40 size-[34rem] rounded-full bg-primary/10 blur-3xl"
        />
        <div className="relative container-page grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="flex flex-col items-start gap-7">
            <HeroIn>
              <Eyebrow>BLACK POWERS · BUENOS AIRES</Eyebrow>
            </HeroIn>
            <HeroIn delay={60}>
              <h1 className="text-6xl leading-[0.98] font-bold md:text-8xl">
                Smash burguers <br />
                <Accent>de verdad.</Accent>
              </h1>
            </HeroIn>
            <HeroIn delay={120}>
              <p className="max-w-[46ch] text-lg text-pretty text-muted-foreground">
                Sin vueltas ni ingredientes raros: pura plancha, queso derretido
                y pan brioche que se banca todo.
              </p>
            </HeroIn>
            <HeroIn delay={180} className="flex flex-wrap gap-3">
              <Button
                variant="brand"
                size="xl"
                nativeButton={false}
                render={<Link href="/menu" />}
              >
                <UtensilsIcon data-icon="inline-start" />
                Mira el menu
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
              <Button
                variant="sweep"
                size="xl"
                nativeButton={false}
                render={<Link href="/promos" />}
              >
                Ver promos
              </Button>
            </HeroIn>
            <HeroIn delay={240}>
              <ul className="flex flex-wrap gap-x-6 gap-y-3 pt-1">
                {[
                  "100% CARNE VACUNA SELECCIONADA",
                  "PAN BRIOCHE ARTESANAL",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-foreground"
                  >
                    <CircleCheckIcon
                      className="size-4 text-primary"
                      aria-hidden
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </HeroIn>
          </div>

          <HeroIn delay={100} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border bg-card">
              <Image
                src={banner}
                alt="Degustacion de Hamburguesa"
                fill
                preload
                placeholder="blur"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="animate-slow-zoom object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border bg-background/85 px-4 py-3 shadow-2xl backdrop-blur-xl md:-right-5 md:left-auto">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-ember/70" />
                <span className="relative inline-flex size-2.5 rounded-full bg-ember" />
              </span>
              <span className="text-sm">
                <strong className="font-semibold">Plancha encendida</strong>
                <span className="text-muted-foreground">
                  {" "}
                  · {site.hours.days}
                </span>
              </span>
            </div>
          </HeroIn>
        </div>
      </section>

      <Marquee
        words={[
          "Smash",
          "Cheddar fundido",
          "Pan brioche",
          "Plancha al fuego",
          "Salsas caseras",
        ]}
      />

      {/* Ranking */}
      <Section className="border-t-0">
        <SectionHeading
          eyebrow="RANKING BLACK POWERS"
          title={
            <>
              Lo que mas salio en <Accent>{rankingMonth}</Accent>
            </>
          }
        />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ranking.map((burger, i) => (
            <StaggerItem
              key={burger.slug}
              className={i === 2 ? "sm:col-span-2 lg:col-span-1" : undefined}
            >
              <RankCard burger={burger} position={i + 1} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Donde encontrarnos */}
      <Section>
        <SectionHeading
          eyebrow="DONDE ENCONTRARNOS"
          line={false}
          title="La noche nos queda bien."
          description="Local en Zona Oeste para take-away al paso o envios directos con tu hamburguesa caliente."
        />
        <Stagger className="grid gap-6 md:grid-cols-3">
          <StaggerItem>
            <InfoCard
              icon={MapPinIcon}
              label={site.location.city}
              title="Buenos Aires"
              action={<Badge variant="outline">TAKE AWAY &amp; DELIVERY</Badge>}
            >
              Zona Oeste, Buenos Aires, Argentina. Local para retiros rapidos y
              envios inmediatos por el barrio
            </InfoCard>
          </StaggerItem>
          <StaggerItem>
            <InfoCard
              icon={PhoneIcon}
              label="Linea Directa"
              title={site.phone}
              action={
                <Button
                  variant="chat"
                  size="pill"
                  nativeButton={false}
                  render={
                    <a href={site.whatsappUrl} target="_blank" rel="noopener" />
                  }
                >
                  <MessageCircleIcon data-icon="inline-start" />
                  Abrir el chat de pedidos
                </Button>
              }
            >
              Escribinos por whatsapp sin intermediarios ni demoras extra.
              Coordinamos tu pedido en el acto
            </InfoCard>
          </StaggerItem>
          <StaggerItem>
            <InfoCard
              icon={ClockIcon}
              label="Dias & Horarios"
              title={site.hours.days}
              action={<Badge variant="outline">TURNO NOCTURNO</Badge>}
            >
              {site.hours.closedDays}: Cerrado
            </InfoCard>
          </StaggerItem>
        </Stagger>
      </Section>

      {/* Llamada a la acción */}
      <Section>
        <CtaBand
          eyebrow="PLANCHA ENCENDIDA"
          title={
            <>
              No cocines nada, dejanos la plancha a <Accent>nosotros</Accent>
            </>
          }
          description="Escribinos por Whatsapp o Instagram y coordinamos tu pedido."
        >
          <Button
            variant="brand"
            size="xl"
            nativeButton={false}
            render={
              <a href={site.whatsappUrl} target="_blank" rel="noopener" />
            }
          >
            <MessageCircleIcon data-icon="inline-start" />
            Escribinos a WhatsApp
          </Button>
          <Button
            variant="gradient"
            size="xl"
            nativeButton={false}
            render={
              <a href={site.instagramUrl} target="_blank" rel="noopener" />
            }
          >
            <InstagramIcon data-icon="inline-start" />
            Seguinos en Instagram
          </Button>
        </CtaBand>
      </Section>
    </>
  )
}
