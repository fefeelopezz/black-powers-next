import type { StaticImageData } from "next/image"

import burntOnion from "@/assets/img/hamburguesas/BurntOnion.webp"
import cheeseB from "@/assets/img/hamburguesas/CheeseB.webp"
import dijon from "@/assets/img/hamburguesas/Dijon.webp"
import falkner from "@/assets/img/hamburguesas/Falkner.webp"
import lacar from "@/assets/img/hamburguesas/Lacar.webp"
import power from "@/assets/img/hamburguesas/Power.webp"
import rings from "@/assets/img/hamburguesas/Rings.webp"
import tromen from "@/assets/img/hamburguesas/Tromen.webp"
import aros from "@/assets/img/parapicar/Aros.webp"
import chicken from "@/assets/img/parapicar/Chicken.webp"
import friedBox2 from "@/assets/img/parapicar/FriedBox2.webp"
import mozza from "@/assets/img/parapicar/Mozza.webp"
import nuggets from "@/assets/img/parapicar/Nuggets.webp"
import paraPicar from "@/assets/img/parapicar/ParaPicar.webp"
import promos1 from "@/assets/img/promos/promos1.webp"
import promos2 from "@/assets/img/promos/promos2.webp"
import promos3 from "@/assets/img/promos/promos3.webp"

export type Burger = {
  slug: string
  name: string
  tag: string
  description: string
  image: StaticImageData
  alt: string
}

export type RankedBurger = Burger & {
  ingredients: string[]
}

export type Snack = {
  name: string
  price: string
  description: string
  image: StaticImageData
  alt: string
}

export type Extra = {
  name: string
  description: string
  price: string
}

export type Promo = {
  title: string
  tag: string
  description: string
  price: string
  note: string
  image: StaticImageData
  alt: string
  featured?: boolean
}

// ---------- Carta ----------

export const burgers: Burger[] = [
  {
    slug: "burnt-onion",
    name: "BURNT ONION",
    tag: "Smash",
    description: "Medallon doble Smasheado con Cebolla, dambo x3 y Salsa MVP",
    image: burntOnion,
    alt: "Hamburguesa Burnt Onion",
  },
  {
    slug: "cheese-b",
    name: "CHEESE B",
    tag: "Favorita",
    description: "Medallon de 110g, doble cheddar",
    image: cheeseB,
    alt: "Hamburguesa Cheese Burguer",
  },
  {
    slug: "dijon",
    name: "DIJON",
    tag: "Especial",
    description:
      "Medallon de 110g, cheddar, panceta, cebolla morada, provolone, salsa Dijon",
    image: dijon,
    alt: "Hamburguesa Dijon",
  },
  {
    slug: "falkner",
    name: "FALKNER",
    tag: "Fresca",
    description:
      "Medallon 110g, cheddar, lechuga francesa, cebolla morada y tomate",
    image: falkner,
    alt: "Hamburguesa Falkner",
  },
  {
    slug: "lacar",
    name: "LACAR",
    tag: "Intensa",
    description:
      "Medallon 110g, queso dambo, roquefort, provolone y cebolla caramelizada",
    image: lacar,
    alt: "Hamburguesa Lacar",
  },
  {
    slug: "power",
    name: "POWER",
    tag: "Clasica",
    description: "Medallon de 110g, cheddar, huevo y panceta",
    image: power,
    alt: "Hamburguesa Power",
  },
  {
    slug: "rings",
    name: "RINGS",
    tag: "Crujiente",
    description: "Medallon 110g, cheddar, panceta, barbacoa y aros de cebolla",
    image: rings,
    alt: "Hamburguesa Rings",
  },
  {
    slug: "tromen",
    name: "TROMEN",
    tag: "Gourmet",
    description:
      "Medallon de 110g, cheddar, huevo, cebolla caramelizada, salsa secreta",
    image: tromen,
    alt: "Hamburguesa Tromen",
  },
]

// Ranking del mes (index). Textos tal cual el sitio original.
export const ranking: RankedBurger[] = [
  {
    slug: "dijon",
    name: "Dijon",
    tag: "Especial",
    description:
      "Pan brioche dorado, medallon 130g con costra crocante, doble cheddar, panceta ahumada, cebolla morada fresca, provolone y Salsa Dijon",
    ingredients: ["Panceta", "Provolone", "Salsa Dijon", "Cebolla Morada"],
    image: dijon,
    alt: "Imagen de Hamburguesa Dijon",
  },
  {
    slug: "lacar",
    name: "Lacar",
    tag: "Gourmet",
    description:
      "Pan de papa dorado, medallon smash de 110g, queso Dambo, roquefort fresco, provolone y cebolla caramelizada",
    ingredients: ["Cebolla caramelizada", "Queso Dambo", "Provolone"],
    image: lacar,
    alt: "Imagen de Hamburguesa Lacar",
  },
  {
    slug: "falkner",
    name: "Falkner",
    tag: "Clasica BP",
    description:
      "Medallon smash de 110g, queso cheddar, lechuga francesa, cebolla morada y tomate",
    ingredients: ["Lechuga francesa", "Cebolla morada", "Tomate"],
    image: falkner,
    alt: "Imagen de Hamburguesa Falkner",
  },
]

export const rankingMonth = "Agosto"

// ---------- Para picar ----------

export const friedBox = {
  name: "FRIED BOX",
  badge: "ESTRELLA DEL PICOTEO",
  description:
    "Fritas, Nuggets, Chicken Fingers y Mozza Sticks + 2 DIP A Eleccion.",
  prices: [
    { label: "COMUN", price: "$30.000" },
    { label: "CON AROS", price: "$34.000" },
  ],
  image: paraPicar,
  alt: "Fried Box",
}

export const snacks: Snack[] = [
  {
    name: "AROS DE CEBOLLA",
    price: "$11.000",
    description: "Aros de cebolla rebozados y fritos",
    image: aros,
    alt: "Aros de Cebolla",
  },
  {
    name: "CHICKEN FINGERS",
    price: "$11.000",
    description: "Chicken Fingers rebozados y fritos",
    image: chicken,
    alt: "Chicken Fingers",
  },
  {
    name: "NUGGETS",
    price: "$11.000",
    description: "Nuggets de pollo rebozados y fritos",
    image: nuggets,
    alt: "Nuggets",
  },
  {
    name: "MOZZA STICKS",
    price: "$11.000",
    description: "Palitos de mozzarella rebozados y fritos",
    image: mozza,
    alt: "Mozza Sticks",
  },
]

export const extras: Extra[] = [
  { name: "DIP CHEDDAR", description: "Queso cheddar fundido", price: "$2.500" },
  {
    name: "DIP SALSA BP",
    description: "Nuestra salsa especial de la casa",
    price: "$2.000",
  },
  { name: "DIP BARBACOA", description: "Salsa barbacoa artesanal", price: "$2.000" },
  {
    name: "EXTRA CARNE",
    description: "Medallon smash adicional de 110g",
    price: "$3.500",
  },
]

export const friedBoxDips = { image: friedBox2, alt: "Fried Box con dips" }

// ---------- Promos ----------

export const promos: Promo[] = [
  {
    title: "2 Cheese Burger Simples",
    tag: "Para dos",
    description:
      "Dos Cheese B con medallon smash de 110g y doble cheddar, en pan brioche artesanal.",
    price: "$23.000",
    note: "EFECTIVO",
    image: promos1,
    alt: "Promo 2 Cheese Burger Simples",
  },
  {
    title: "2 Cheese Burger Dobles",
    tag: "Doble carne",
    description:
      "La version doble de nuestra Cheese B: mas carne smash y mas cheddar fundido en cada mordida.",
    price: "$29.000",
    note: "EFECTIVO",
    image: promos2,
    alt: "Promo 2 Cheese Burger Dobles",
  },
  {
    title: "2 Cheese Burger Simples + 2 Cheese Burger Dobles",
    tag: "La mas completa",
    description:
      "Cuatro burgers para toda la mesa. Pagas menos que pidiendo las dos promos por separado.",
    price: "$50.000",
    note: "EFECTIVO · AHORRAS $2.000",
    image: promos3,
    alt: "Promo 2 Cheese Burger Simples y 2 Cheese Burger Dobles",
    featured: true,
  },
]
