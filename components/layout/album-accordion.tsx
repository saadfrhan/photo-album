import { AlbumIcon, ChevronDown, MinusIcon } from 'lucide-react'
import Link from 'next/link'
import { Folder } from '@/types'
import { SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'

export default function AlbumAccordion(
  { folders }: { folders: Folder[] }
) {
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarMenuItem>
        <SidebarMenuButton>
          <CollapsibleTrigger asChild>
            <div className='flex w-full justify-between'>
              <div className='flex gap-2'>
                <AlbumIcon /> Albums
              </div>
              <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
            </div>
          </CollapsibleTrigger>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <CollapsibleContent>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href={`/albums`}

                >
                  <MinusIcon />
                  <span>All</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            {folders.map((folder) => {
              return (
                <SidebarMenuItem key={folder.path}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={`/albums/${folder.path}`}

                    >
                      <MinusIcon />
                      <span>{folder.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </CollapsibleContent>
    </Collapsible>
  )
}
