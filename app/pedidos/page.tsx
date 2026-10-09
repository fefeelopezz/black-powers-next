import type { Metadata } from "next"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  BanknoteIcon,
  CheckIcon,
  LandmarkIcon,
  MessageCircleIcon,
  SmartphoneIcon,
  TriangleAlertIcon,
  TruckIcon,
} from "lucide-react"

import { InstagramIcon } from "@/components/brand"
import { Reveal, Stagger, StaggerItem } from "@/components/motion"
import {
  Accent,
  CtaBand,
  Eyebrow,
  PageHero,
  Section,
} from "@/components/sections"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Pedidos",
  description:
    "Como hacer un pedido en Black Powers: paso a paso, delivery, take away y metodos de pago.",
}

const linkClass =
  "font-semibold text-primary underline underline-offset-4 hover:text-foreground"

const messageItems = ["Pedido", "Direccion", "Entre Calles", "Metodo de Pago"]

const deliveryItems: { icon: LucideIcon; text: string }[] = [
  { icon: TruckIcon, text: "Delivery sin cargo (consultar zonas) y take away" },
  { icon: BanknoteIcon, text: "Efectivo" },
  { icon: LandmarkIcon, text: "Transferencia Bancaria" },
  { icon: SmartphoneIcon, text: "Mercado Pago" },
]

export default function PedidosPage() {
  const steps = [
    {
      title: "Mira la carta",
      body: (
        <>
          Mira nuestro{" "}
          <Link href="/menu" className={linkClass}>
            menú
          </Link>{" "}
          y{" "}
          <Link href="/promos" className={linkClass}>
            promociones
          </Link>
          .
        </>
      ),
    },
    {
      title: "Elegi",
      body: "Elegi una de nuestras hamburguesas o promociones.",
    },
    {
      title: "Escribinos",
      body: (
        <>
          Contactanos por{" "}
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener"
            className={linkClass}
          >
            Instagram
          </a>{" "}
          o por{" "}
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener"
            className={linkClass}
          >
            WhatsApp
          </a>{" "}
          para coordinar el pedido.
        </>
      ),
    },
  ]

  return (
    <>
      <PageHero
        eyebrow="PEDIDOS"
        title={
          <>
            Queres hacer un pedido?{" "}
            <Accent>Te mostramos el paso a paso!</Accent>
          </>
        }
        description="Tomamos pedidos por orden de llegada por Instagram o WhatsApp."
      />

      <Section className="pt-10 md:pt-14">
        <Stagger as="ol" className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <StaggerItem as="li" key={step.title}>
              <Card className="group/step h-full gap-3 px-7 py-8 transition-[translate] duration-500 ease-(--ease-out-expo) hover:-translate-y-1.5 hover:ring-primary/35">
                <span className="font-heading text-6xl leading-none font-bold text-transparent italic transition-colors duration-500 [-webkit-text-stroke:1.5px_var(--color-primary)] group-hover/step:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.body}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full gap-6 py-8">
              <CardHeader className="gap-4 px-8">
                <Eyebrow line>TU MENSAJE</Eyebrow>
                <CardTitle className="font-heading text-4xl font-bold">
                  Escribi <Accent>detalladamente</Accent>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8">
                <ul className="flex flex-col gap-3">
                  {messageItems.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-lg">
                      <span className="grid size-7 place-items-center rounded-full bg-primary/15 text-primary">
                        <CheckIcon className="size-4" aria-hidden />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="h-full gap-6 py-8">
              <CardHeader className="gap-4 px-8">
                <Eyebrow line>ENTREGA Y PAGO</Eyebrow>
                <CardTitle className="font-heading text-4xl font-bold">
                  Como te <Accent>llega</Accent>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8">
                <ul className="flex flex-col gap-3">
                  {deliveryItems.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3 text-lg">
                      <span className="grid size-7 place-items-center rounded-full bg-primary/15 text-primary">
                        <Icon className="size-4" aria-hidden />
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <Alert className="border-primary/40 bg-primary/5 px-5 py-4">
            <TriangleAlertIcon className="text-primary" />
            <AlertTitle className="text-primary">IMPORTANTE</AlertTitle>
            <AlertDescription className="text-foreground/90">
              En caso de abonar por transferencia o mercado pago, el pedido no
              se iniciara hasta que se envie el comprobante de pago.
            </AlertDescription>
          </Alert>
        </Reveal>
      </Section>

      <Section>
        <CtaBand
          eyebrow="PLANCHA ENCENDIDA"
          title={
            <>
              Listo para <Accent>pedir</Accent>?
            </>
          }
          description="Escribinos por WhatsApp o Instagram y coordinamos tu pedido."
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
            Pedir por WhatsApp
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
            Pedir por Instagram
          </Button>
        </CtaBand>
      </Section>
    </>
  )
}
