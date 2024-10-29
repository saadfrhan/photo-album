import { Heart, ImageIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import AlbumAccordion from "./layout/album-accordion";
import { Folder } from "@/types";
import Link from "next/link";

const items = [
  {
    title: "Gallery",
    url: "/",
    icon: ImageIcon,
  },
  {
    title: "Album",
  },
  {
    title: "Favorites",
    url: "/favorites",
    icon: Heart,
  },
];

export function AppSidebar({ folders }: { folders: Folder[] }) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Explore</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                if (!item.icon) {
                  return <AlbumAccordion key={item.title} folders={folders} />;
                }
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
