import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRightIcon,
  CheckIcon,
  MapPinIcon,
  MessageCircleIcon,
} from "lucide-react"

import banner from "@/assets/img/bannerindex.webp"
import burntOnion from "@/assets/img/hamburguesas/BurntOnion.webp"
import power from "@/assets/img/hamburguesas/Power.webp"
import rings from "@/assets/img/hamburguesas/Rings.webp"
import tromen from "@/assets/img/hamburguesas/Tromen.webp"
import friedBox2 from "@/assets/img/parapicar/FriedBox2.webp"
import { InstagramIcon } from "@/components/brand"
import { Reveal, Stagger, StaggerItem } from "@/components/motion"
import {
  Accent,
  Eyebrow,
  HeroIn,
  InfoCard,
  Section,
  SectionHeading,
} from "@/components/sections"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacto Black Powers: WhatsApp, Instagram, ubicacion en Hurlingham y horarios.",
}

const gallery = [
  { src: banner, alt: "Smash burger Black Powers" },
  { src: burntOnion, alt: "Hamburguesa Burnt Onion" },
  { src: rings, alt: "Hamburguesa Rings" },
  { src: friedBox2, alt: "Fried Box" },
  { src: power, alt: "Hamburguesa Power" },
]

const toSend = [
  "Tu pedido, bien detallado",
  "Direccion y entre calles",
  "Metodo de pago: efectivo, transferencia o Mercado Pago",
]

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-0 size-[30rem] rounded-full bg-primary/10 blur-3xl"
        />
        <div className="relative container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
            <HeroIn>
              <Eyebrow>CONTACTO</Eyebrow>
            </HeroIn>
            <HeroIn delay={60}>
              <h1 className="text-6xl leading-[1] font-bold md:text-7xl">
                Hablemos de <Accent>tu pedido</Accent>
              </h1>
            </HeroIn>
            <HeroIn delay={120}>
              <p className="max-w-[48ch] text-lg text-muted-foreground">
                Para hacer un pedido, visita la pagina de{" "}
                <Link
                  href="/pedidos"
                  className="font-semibold text-primary underline underline-offset-4 hover:text-foreground"
                >
                  Pedidos
                </Link>{" "}
                y segui los pasos. Tambien podes escribirnos directo por
                WhatsApp o Instagram.
              </p>
            </HeroIn>
            <HeroIn delay={180} className="flex flex-wrap gap-3">
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
            </HeroIn>
          </div>
          <HeroIn delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border bg-card">
              <Image
                src={tromen}
                alt="Hamburguesa Tromen recien salida de la plancha"
                fill
                preload
                placeholder="blur"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="animate-slow-zoom object-cover"
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-background/80 px-4 py-2 text-sm font-semibold backdrop-blur-xl">
                Respondemos en el turno · Jue a Dom
              </span>
            </div>
          </HeroIn>
        </div>
      </section>

      {/* Canales */}
      <Section>
        <SectionHeading
          eyebrow="CANALES"
          title={
            <>
              Donde <Accent>encontrarnos</Accent>
            </>
          }
        />
        <Stagger className="grid gap-6 md:grid-cols-3">
          <StaggerItem>
            <InfoCard
              icon={MessageCircleIcon}
              label="WhatsApp"
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
                  Abrir chat
                </Button>
              }
            >
              Linea directa para pedidos. Coordinamos todo en el acto, sin
              intermediarios.
            </InfoCard>
          </StaggerItem>
          <StaggerItem>
            <InfoCard
              icon={InstagramIcon}
              label="Instagram"
              title={site.instagramHandle}
              action={
                <Button
                  variant="sweep"
                  size="pill"
                  nativeButton={false}
                  render={
                    <a
                      href={site.instagramUrl}
                      target="_blank"
                      rel="noopener"
                    />
                  }
                >
                  Ver perfil
                </Button>
              }
            >
              Novedades, promos y fotos de lo que sale de la plancha. Tambien
              tomamos pedidos por DM.
            </InfoCard>
          </StaggerItem>
          <StaggerItem>
            <InfoCard
              icon={MapPinIcon}
              label="Ubicacion"
              title={site.location.city}
              action={<Badge variant="outline">TAKE AWAY &amp; DELIVERY</Badge>}
            >
              {site.location.zone}, {site.location.region}. Take away en el
              local y delivery sin cargo (consultar zonas).
            </InfoCard>
          </StaggerItem>
        </Stagger>
      </Section>

      {/* Horarios + qué mandar */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full gap-6 py-8">
              <CardHeader className="gap-4 px-8">
                <Eyebrow line>HORARIOS</Eyebrow>
                <CardTitle className="font-heading text-4xl font-bold">
                  Turno <Accent>nocturno</Accent>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8">
                <ul>
                  {site.hours.schedule.map((row, i) => (
                    <li key={row.day}>
                      <div className="flex items-center justify-between gap-4 py-3.5 text-[0.95rem]">
                        <span>{row.day}</span>
                        <span
                          className={cn(
                            "font-semibold",
                            row.closed
                              ? "font-normal text-muted-foreground"
                              : "text-primary"
                          )}
                        >
                          {row.closed
                            ? "Cerrado"
                            : `${site.hours.open} – ${site.hours.close}`}
                        </span>
                      </div>
                      {i < site.hours.schedule.length - 1 && <Separator />}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="h-full gap-6 py-8">
              <CardHeader className="gap-4 px-8">
                <Eyebrow line>PEDIDOS</Eyebrow>
                <CardTitle className="font-heading text-4xl font-bold">
                  Que nos tenes que <Accent>mandar</Accent>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-start gap-8 px-8">
                <ul className="flex flex-col gap-3">
                  {toSend.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                        <CheckIcon className="size-3.5" aria-hidden />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="underline"
                  size="inline"
                  nativeButton={false}
                  render={<Link href="/pedidos" />}
                >
                  Ver el paso a paso
                  <ArrowRightIcon data-icon="inline-end" />
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Galería */}
      <Section>
        <SectionHeading
          eyebrow={site.instagramHandle.toUpperCase()}
          line={false}
          center
          title={
            <>
              Lo que sale de la <Accent>plancha</Accent>
            </>
          }
        />
        <Stagger className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.map((img, i) => (
            <StaggerItem
              key={img.alt}
              className={cn(
                "group/g relative aspect-square overflow-hidden rounded-2xl bg-card",
                i === 0 && "col-span-2 md:row-span-2"
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                placeholder="blur"
                sizes={
                  i === 0
                    ? "(min-width: 768px) 50vw, 100vw"
                    : "(min-width: 768px) 25vw, 50vw"
                }
                className="object-cover saturate-90 transition-[scale,filter] duration-1000 ease-(--ease-out-expo) group-hover/g:scale-110 group-hover/g:saturate-110"
              />
              <span className="absolute inset-x-3 bottom-3 translate-y-2 rounded-full bg-background/80 px-3 py-1.5 text-xs font-semibold opacity-0 backdrop-blur-xl transition-all duration-500 group-hover/g:translate-y-0 group-hover/g:opacity-100">
                {img.alt}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 flex justify-center">
          <Button
            variant="gradient"
            size="xl"
            nativeButton={false}
            render={
              <a href={site.instagramUrl} target="_blank" rel="noopener" />
            }
          >
            <InstagramIcon data-icon="inline-start" />
            Ver mas en Instagram
          </Button>
        </Reveal>
      </Section>
    </>
  )
}
