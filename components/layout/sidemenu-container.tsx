"use client";

import { ChevronRightCircle, HeartIcon, ImageIcon, X } from "lucide-react";
import { useState } from "react";
import { H3 } from "../ui/h3";
import { Button } from "../ui/button";
import Link from "next/link";
import AlbumAccordion from "./album-accordion";
import { Folder } from "@/types";
import { Card } from "../ui/card";

export default function SidemenuContainer(
  { folders }: { folders: Folder[] }
) {
  const [isSidemenuOpen, setIsSidemenuOpen] = useState(false)

  return (
    <Card className={`pb-12 z-10 pr-4 rounded-none border-t-0 ${isSidemenuOpen ? "w-1/5 max-[1140px]:h-screen max-[1140px]:w-full max-[1140px]:absolute" : "max-[1140px]:hidden"}`}>
      <div className="flex justify-end w-full mr-4 mt-4">
        <Button size="icon" variant="ghost" onClick={() => setIsSidemenuOpen(!isSidemenuOpen)}>
          {isSidemenuOpen ? <X /> : <ChevronRightCircle />}
        </Button>
      </div>
      <div className={`space-y-4 py-4 ${!isSidemenuOpen ? 'hidden' : ''}`}>
				<div className='px-3 py-2 flex flex-col gap-2'>
					<H3 className='pl-4'>Explore</H3>
					<div className='space-y-1'>
						<Button
							asChild
							variant="ghost"
							className='w-full justify-start flex gap-2'
						>
							<Link href="/">
								<ImageIcon />
								Gallery
							</Link>
						</Button>
						<AlbumAccordion folders={folders} />
						<Button
							asChild
							variant="ghost"
							className='w-full justify-start flex gap-2'
						>
							<Link href="/favorites">
								<HeartIcon />
								Favorites
							</Link>
						</Button>
					</div>
				</div>
			</div>
    </Card>
  )
}
