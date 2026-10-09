import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",

        // ---- Variantes de marca Black Powers (cada una con su propio hover) ----

        // Dorado: se eleva, lo cruza un brillo y la flecha avanza.
        brand:
          "relative isolate overflow-hidden rounded-full bg-primary font-semibold text-primary-foreground duration-300 ease-(--ease-out-expo) before:absolute before:inset-0 before:-z-10 before:-translate-x-full before:bg-linear-to-r before:from-transparent before:via-white/45 before:to-transparent before:transition-transform before:duration-700 before:ease-(--ease-out-expo) hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-14px_var(--color-primary)] hover:before:translate-x-full [&_svg[data-icon=inline-end]]:transition-transform [&_svg[data-icon=inline-end]]:duration-300 hover:[&_svg[data-icon=inline-end]]:translate-x-1",

        // Contorno: el dorado barre de izquierda a derecha y el texto se invierte.
        sweep:
          "rounded-full border-input bg-transparent bg-no-repeat font-semibold text-foreground transition-[background-size,color,border-color,translate] duration-500 ease-(--ease-out-expo) [background-image:linear-gradient(var(--primary),var(--primary))] [background-position:0_0] [background-size:0%_100%] hover:border-primary hover:text-primary-foreground hover:[background-size:100%_100%]",

        // Pastilla con círculo: el círculo de la flecha crece hasta llenar el botón.
        reveal:
          "relative isolate justify-start overflow-hidden rounded-full border-border bg-secondary pr-12! pl-5! font-semibold text-foreground duration-500 ease-(--ease-out-expo) before:absolute before:top-1/2 before:right-1.5 before:-z-10 before:size-8 before:-translate-y-1/2 before:rounded-full before:bg-primary before:transition-transform before:duration-500 before:ease-(--ease-out-expo) hover:text-primary-foreground hover:before:scale-[14] [&_svg[data-icon=inline-end]]:absolute [&_svg[data-icon=inline-end]]:right-3.5 [&_svg[data-icon=inline-end]]:text-primary-foreground [&_svg[data-icon=inline-end]]:transition-transform [&_svg[data-icon=inline-end]]:duration-500 hover:[&_svg[data-icon=inline-end]]:-rotate-45",

        // WhatsApp: el globo se sacude y un anillo late alrededor.
        chat:
          "relative rounded-full border-input bg-transparent font-semibold text-foreground duration-300 after:pointer-events-none after:absolute after:-inset-px after:rounded-full after:border after:border-primary/70 after:opacity-0 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:after:animate-ping-soft hover:[&_svg[data-icon=inline-start]]:animate-wiggle",

        // Instagram: aparece un borde degradado dorado → brasa y el ícono gira.
        gradient:
          "relative isolate rounded-full bg-transparent font-semibold text-foreground before:absolute before:-inset-px before:-z-20 before:rounded-full before:bg-linear-120 before:from-primary before:via-ember before:to-primary before:opacity-35 before:transition-opacity before:duration-500 after:absolute after:inset-px after:-z-10 after:rounded-full after:bg-background after:transition-colors after:duration-500 hover:before:opacity-100 hover:after:bg-card [&_svg]:transition-transform [&_svg]:duration-500 [&_svg]:ease-(--ease-back) hover:[&_svg]:-rotate-12 hover:[&_svg]:scale-110",

        // Link con subrayado que se dibuja de izquierda a derecha.
        underline:
          "rounded-none bg-no-repeat font-semibold text-primary transition-[background-size] duration-500 ease-(--ease-out-expo) [background-image:linear-gradient(currentColor,currentColor)] [background-position:0_100%] [background-size:0%_1px] hover:[background-size:100%_1px] [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-1",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        pill: "h-11 gap-2 px-5 text-sm",
        xl: "h-12 gap-2 px-6 text-[0.95rem] [&_svg:not([class*='size-'])]:size-[1.15em]",
        inline: "h-auto gap-2 p-0 pb-0.5 text-[0.95rem]",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
