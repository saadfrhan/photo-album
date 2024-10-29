import { Card } from "../ui/card";
import { SidebarTrigger } from "../ui/sidebar";
import ThemeToggler from "../utils/theme-toggler";

export default function Header() {
  return (
    <Card className="border-r-0 border-l-0 border-b flex h-16 items-center rounded-none justify-between px-4 w-full">
      <SidebarTrigger />
      <ThemeToggler />
    </Card>
  );
}
