import type { LucideIcon } from "lucide-react"
import { FlameIcon } from "lucide-react"
import type { ReactNode } from "react"

import { Reveal } from "@/components/motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

// ---------- Entrada del hero (CSS puro: no depende de JS, el contenido nunca queda oculto) ----------

export function HeroIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <div
      className={cn(
        "animate-in duration-700 ease-(--ease-out-expo) fade-in slide-in-from-bottom-4",
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
    >
      {children}
    </div>
  )
}

// ---------- Etiqueta superior de sección ----------

export function Eyebrow({
  children,
  line = false,
  className,
}: {
  children: ReactNode
  line?: boolean
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase",
        className
      )}
    >
      {line ? (
        <span aria-hidden className="h-px w-8 bg-primary" />
      ) : (
        <span aria-hidden className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
          <span className="relative inline-flex size-2 rounded-full bg-primary" />
        </span>
      )}
      {children}
    </span>
  )
}

// ---------- Encabezado de sección ----------

export function SectionHeading({
  eyebrow,
  title,
  description,
  line = true,
  center = false,
  className,
}: {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  line?: boolean
  center?: boolean
  className?: string
}) {
  return (
    <Reveal
      className={cn(
        "mb-10 flex max-w-2xl flex-col gap-4 md:mb-14",
        center && "mx-auto items-center text-center",
        className
      )}
    >
      <Eyebrow line={line}>{eyebrow}</Eyebrow>
      <h2 className="text-4xl leading-[1.08] font-bold md:text-5xl">{title}</h2>
      {description && (
        <p className="text-lg text-pretty text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  )
}

// Palabra destacada de los titulares: itálica dorada.
export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-primary italic">{children}</span>
}

// ---------- Sección con separador ----------

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 border-t py-20 md:py-28", className)}
    >
      <div className="container-page">{children}</div>
    </section>
  )
}

// ---------- Hero de páginas internas ----------

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
  children,
}: {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  aside?: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden pt-14 pb-12 md:pt-24 md:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative container-page flex flex-col gap-6">
        <HeroIn>
          <Eyebrow>{eyebrow}</Eyebrow>
        </HeroIn>
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <HeroIn delay={60} className="flex flex-col gap-5">
            <h1 className="text-5xl leading-[1.02] font-bold md:text-7xl">
              {title}
            </h1>
            {description && (
              <p className="max-w-[56ch] text-lg text-pretty text-muted-foreground">
                {description}
              </p>
            )}
          </HeroIn>
          {aside && <HeroIn delay={120}>{aside}</HeroIn>}
        </div>
        {children && <HeroIn delay={180}>{children}</HeroIn>}
      </div>
    </section>
  )
}

// ---------- Pastilla informativa ----------

export function InfoPill({
  icon: Icon,
  children,
}: {
  icon: LucideIcon
  children: ReactNode
}) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm text-muted-foreground">
      <Icon className="size-4 text-primary" aria-hidden />
      {children}
    </span>
  )
}

// ---------- Tarjeta informativa (shadcn Card) ----------

export function InfoCard({
  icon: Icon,
  label,
  title,
  children,
  action,
}: {
  icon: LucideIcon | ((props: React.SVGProps<SVGSVGElement>) => ReactNode)
  label: string
  title: string
  children: ReactNode
  action?: ReactNode
}) {
  return (
    <Card className="group/info h-full gap-5 py-7 transition-[translate,box-shadow] duration-500 ease-(--ease-out-expo) hover:-translate-y-1 hover:ring-primary/30">
      <CardHeader className="gap-3 px-7">
        <span className="mb-2 grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 ease-(--ease-back) group-hover/info:scale-110 group-hover/info:-rotate-6">
          <Icon className="size-5.5" aria-hidden />
        </span>
        <CardDescription className="text-xs font-semibold tracking-[0.18em] uppercase">
          {label}
        </CardDescription>
        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col items-start gap-5 px-7">
        <div className="text-[0.95rem] leading-relaxed text-muted-foreground">
          {children}
        </div>
        {action && <div className="mt-auto">{action}</div>}
      </CardContent>
    </Card>
  )
}

// ---------- Banda de llamada a la acción ----------

export function CtaBand({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: ReactNode
  description: ReactNode
  children: ReactNode
}) {
  return (
    <Reveal>
      <div className="relative isolate overflow-hidden rounded-[2rem] border bg-card px-6 py-16 text-center md:px-16 md:py-24">
        <div
          aria-hidden
          className="absolute inset-x-0 -top-24 -z-10 mx-auto h-64 w-[min(42rem,90%)] rounded-full bg-primary/15 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -right-16 -bottom-24 -z-10 size-64 rounded-full bg-ember/15 blur-3xl"
        />
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-4xl leading-[1.08] font-bold md:text-5xl">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">{description}</p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            {children}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

// ---------- Cinta en movimiento (decorativa) ----------

export function Marquee({ words }: { words: string[] }) {
  const row = (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {words.map((w) => (
        <span key={w} className="flex items-center gap-8">
          <span className="font-heading text-2xl font-bold tracking-tight text-foreground/85 italic md:text-3xl">
            {w}
          </span>
          <FlameIcon className="size-5 text-ember" aria-hidden />
        </span>
      ))}
    </div>
  )

  return (
    <div
      aria-hidden
      className="group/marquee relative flex overflow-hidden border-y bg-card/60 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)] py-5"
    >
      <div className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused]">
        {row}
        {row}
      </div>
    </div>
  )
}
