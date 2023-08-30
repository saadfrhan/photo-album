import { cn } from "@/lib/utils";

export function H3(
	{ children, ...props }: React.DetailedHTMLProps< React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
) {
  return (
    <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", props.className)}>
      {children}
    </h3>
  )
}
