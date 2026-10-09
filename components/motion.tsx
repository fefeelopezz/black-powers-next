"use client"

import { MotionConfig, motion, type Variants } from "motion/react"
import type { ReactNode } from "react"

// Curva "back-out" suave (preset Stagger List de UI/UX Pro Max): entra con un leve rebote.
const easeBack = [0.34, 1.56, 0.64, 1] as const

const makeItem = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: easeBack, delay },
  },
})

const item = makeItem()

// Respeta "reducir movimiento" del sistema en todas las animaciones de motion.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

type Props = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      variants={delay ? makeItem(delay) : item}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({
  children,
  className,
  as = "div",
}: Props & { as?: "div" | "ul" | "ol" }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      variants={{ show: { transition: { staggerChildren: 0.07 } } }}
    >
      {children}
    </Tag>
  )
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: Props & { as?: "div" | "li" }) {
  const Tag = motion[as]
  return (
    <Tag className={className} variants={item}>
      {children}
    </Tag>
  )
}
