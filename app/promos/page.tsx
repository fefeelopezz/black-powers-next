import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRightIcon,
  BanknoteIcon,
  ClockIcon,
  ListOrderedIcon,
  MessageCircleIcon,
  TruckIcon,
} from "lucide-react"

import { PromoCard } from "@/components/cards"
import { Reveal, Stagger, StaggerItem } from "@/components/motion"
import {
  Accent,
  CtaBand,
  InfoPill,
  PageHero,
  Section,
} from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { promos } from "@/lib/menu"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Promos",
  description:
    "Promociones Black Powers: combos de Cheese Burgers para compartir. Solo en efectivo.",
}

const conditions = [
  {
    icon: BanknoteIcon,
    title: "Solo en efectivo",
    text: "Las promos no aplican a transferencia ni Mercado Pago.",
  },
  {
    icon: ClockIcon,
    title: site.hours.days,
    text: `De ${site.hours.open} a ${site.hours.close} hs.`,
  },
  {
    icon: TruckIcon,
    title: "Delivery sin cargo",
    text: "Consultar zonas. Tambien take away.",
  },
  {
    icon: ListOrderedIcon,
    title: "Por orden de llegada",
    text: "Tomamos los pedidos a medida que entran.",
  },
]

export default function PromosPage() {
  return (
    <>
      <PageHero
        eyebrow="PROMOCIONES"
        title={
          <>
            Conoce nuestras <Accent>promociones</Accent>
          </>
        }
        description="Combos de Cheese Burgers pensados para compartir. Mismo smash, mismo cheddar fundido, mejor precio."
      >
        <InfoPill icon={BanknoteIcon}>Solo en efectivo</InfoPill>
      </PageHero>

      <Section className="pt-10 md:pt-14">
        <div className="flex flex-col gap-6">
          {promos.map((promo, i) => (
            <Reveal key={promo.title}>
              <PromoCard promo={promo} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map(({ icon: Icon, title, text }) => (
            <StaggerItem key={title}>
              <Card
                size="sm"
                className="group/cond h-full flex-row items-start gap-3 px-5 py-5 transition-[translate] duration-500 hover:-translate-y-1"
              >
                <Icon
                  className="mt-0.5 size-5 shrink-0 text-primary transition-transform duration-500 ease-(--ease-back) group-hover/cond:scale-115"
                  aria-hidden
                />
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <CtaBand
          eyebrow="ELEGISTE TU PROMO"
          title={
            <>
              Escribinos y la ponemos en la <Accent>plancha</Accent>
            </>
          }
          description="Mandanos la promo que queres, tu direccion y entre calles."
        >
          <Button
            variant="chat"
            size="xl"
            nativeButton={false}
            render={
              <a href={site.whatsappUrl} target="_blank" rel="noopener" />
            }
          >
            <MessageCircleIcon data-icon="inline-start" />
            Pedir por WhatsApp
          </Button>
          <Button
            variant="underline"
            size="inline"
            className="self-center"
            nativeButton={false}
            render={<Link href="/pedidos" />}
          >
            Como hacer un pedido
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </CtaBand>
      </Section>
    </>
  )
}
