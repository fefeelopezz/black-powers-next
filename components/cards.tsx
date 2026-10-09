import Image from "next/image"
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  MessageCircleIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Burger, Promo, RankedBurger, Snack } from "@/lib/menu"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const cardHover =
  "group/card h-full pt-0 transition-[translate,box-shadow] duration-500 ease-(--ease-out-expo) hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-30px_var(--color-primary)] hover:ring-primary/35"

function CardImage({
  src,
  alt,
  sizes,
  className,
}: {
  src: Burger["image"]
  alt: string
  sizes: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative aspect-[4/3] overflow-hidden bg-muted",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        placeholder="blur"
        className="object-cover transition-transform duration-1000 ease-(--ease-out-expo) group-hover/card:scale-[1.07]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-card via-card/10 to-transparent opacity-70 transition-opacity duration-500 group-hover/card:opacity-40"
      />
    </div>
  )
}

// ---------- Ranking del mes (index) ----------

export function RankCard({
  burger,
  position,
}: {
  burger: RankedBurger
  position: number
}) {
  return (
    <Card className={cardHover}>
      <div className="relative">
        <CardImage
          src={burger.image}
          alt={burger.alt}
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
        />
        <span className="absolute top-3 left-4 font-heading text-6xl font-bold text-transparent italic transition-transform duration-700 ease-(--ease-back) [-webkit-text-stroke:1.5px_var(--color-primary)] group-hover/card:-translate-y-1 group-hover/card:scale-110">
          {String(position).padStart(2, "0")}
        </span>
      </div>
      <CardHeader className="gap-2 px-6">
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="font-heading text-2xl font-bold">
            {burger.name}
          </CardTitle>
          <Badge variant="outline" className="border-primary/40 text-primary">
            {burger.tag}
          </Badge>
        </div>
        <CardDescription className="text-[0.95rem] leading-relaxed">
          {burger.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-6 px-6 pb-2">
        <ul className="flex flex-wrap gap-1.5">
          {burger.ingredients.map((i) => (
            <li key={i}>
              <Badge variant="secondary">{i}</Badge>
            </li>
          ))}
        </ul>
        <Button
          variant="reveal"
          size="pill"
          className="mt-auto w-full"
          nativeButton={false}
          render={<a href={site.whatsappUrl} target="_blank" rel="noopener" />}
        >
          Pedila Ahora
          <ArrowUpRightIcon data-icon="inline-end" />
        </Button>
      </CardContent>
    </Card>
  )
}

// ---------- Hamburguesas (menu) ----------

export function BurgerCard({ burger }: { burger: Burger }) {
  return (
    <Card className={cardHover}>
      <CardImage
        src={burger.image}
        alt={burger.alt}
        sizes="(min-width: 1280px) 290px, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <CardHeader className="gap-2 px-5">
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-lg font-bold tracking-wide">
            {burger.name}
          </CardTitle>
          <Badge variant="outline" className="border-primary/40 text-primary">
            {burger.tag}
          </Badge>
        </div>
        <CardDescription className="leading-relaxed">
          {burger.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto px-5 pb-1">
        <Button
          variant="chat"
          size="pill"
          className="w-full"
          nativeButton={false}
          render={<a href={site.whatsappUrl} target="_blank" rel="noopener" />}
        >
          <MessageCircleIcon data-icon="inline-start" />
          Pedir por WhatsApp
        </Button>
      </CardContent>
    </Card>
  )
}

// ---------- Para picar (menu) ----------

export function SnackCard({ snack }: { snack: Snack }) {
  return (
    <Card className={cn(cardHover, "pb-5")}>
      <CardImage
        src={snack.image}
        alt={snack.alt}
        sizes="(min-width: 1280px) 290px, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <CardHeader className="gap-2 px-5">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-base font-bold tracking-wide">
            {snack.name}
          </CardTitle>
          <span className="font-heading text-xl font-bold text-primary">
            {snack.price}
          </span>
        </div>
        <CardDescription>{snack.description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

// ---------- Promos ----------

export function PromoCard({
  promo,
  flip = false,
}: {
  promo: Promo
  flip?: boolean
}) {
  return (
    <Card
      className={cn(
        "group/card grid gap-0 py-0 transition-shadow duration-500 hover:shadow-[0_30px_80px_-40px_var(--color-primary)] md:grid-cols-[1.1fr_1fr]",
        promo.featured && "ring-primary/45"
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/11] overflow-hidden bg-muted md:aspect-auto md:min-h-[380px]",
          flip && "md:order-2"
        )}
      >
        <Image
          src={promo.image}
          alt={promo.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          placeholder="blur"
          className="object-cover transition-transform duration-1000 ease-(--ease-out-expo) group-hover/card:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center gap-5 p-7 md:p-12">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="border-primary/40 text-primary">
            {promo.tag}
          </Badge>
          {promo.featured && (
            <Badge className="bg-ember text-ember-foreground">
              Mejor precio
            </Badge>
          )}
        </div>
        <h3 className="font-heading text-3xl leading-tight font-bold md:text-4xl">
          {promo.title}
        </h3>
        <p className="text-muted-foreground">{promo.description}</p>
        <div className="flex flex-wrap items-baseline gap-3">
          <span className="font-heading text-5xl leading-none font-bold text-primary">
            {promo.price}
          </span>
          <span className="text-xs font-semibold tracking-[0.14em] text-muted-foreground">
            {promo.note}
          </span>
        </div>
        <CardFooter className="border-0 bg-transparent p-0">
          <Button
            variant="brand"
            size="xl"
            nativeButton={false}
            render={
              <a href={site.whatsappUrl} target="_blank" rel="noopener" />
            }
          >
            Pedir esta promo
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}
