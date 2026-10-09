// Datos del negocio: un solo lugar para cambiar teléfono, links u horarios.

export const site = {
  name: "Black Powers",
  tagline: "Hamburguesas Artesanales",
  description:
    "Smash burgers artesanales en Hurlingham, Buenos Aires. Take away y delivery de jueves a domingos.",
  phone: "11 3651 2183",
  whatsappUrl:
    "https://api.whatsapp.com/message/4JBG3H4MV5HTO1?autoload=1&app_absent=0&utm_source=ig",
  instagramUrl: "https://www.instagram.com/black.powers_/",
  instagramHandle: "@black.powers_",
  location: {
    city: "Hurlingham",
    region: "Buenos Aires",
    zone: "Zona Oeste",
  },
  hours: {
    days: "Jueves a Domingos",
    closedDays: "Lunes a Miercoles",
    open: "19:30",
    close: "23:30",
    schedule: [
      { day: "Lunes a Miercoles", closed: true },
      { day: "Jueves", closed: false },
      { day: "Viernes", closed: false },
      { day: "Sabado", closed: false },
      { day: "Domingo", closed: false },
    ],
  },
  payments: ["Efectivo", "Transferencia Bancaria", "Mercado Pago"],
} as const

export const nav = [
  { href: "/menu", label: "MENU" },
  { href: "/promos", label: "PROMOS" },
  { href: "/pedidos", label: "PEDIDOS" },
  { href: "/contacto", label: "CONTACTO" },
] as const

export const hoursLabel = `${site.hours.open} a ${site.hours.close} hs`
