import { cn } from "@/lib/utils";

export default function H2(
	{ children, ...props }: React.DetailedHTMLProps< React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
) {
  return (
    <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0", props.className)}>
      {children}
    </h2>
  )
}
