import { cn } from "@/lib/utils";

export function P(
	{ children, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
) {
  return (
    <p className={cn("leading-7", props.className)}>
      {children}
    </p>
  )
}
