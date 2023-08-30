import { cn } from "@/lib/utils";

export default function H1(
	{children, className}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
) {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>
      {children}
    </h1>
  )
}
