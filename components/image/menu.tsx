"use client";

import manageTags from "@/server-actions/manage-tags";
import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Folder, Heart, MoreVertical, Pencil } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";
import { ImageMenuProps } from "@/types";

export default function Menu(
	{ public_id, filename, isFavorite, path }: ImageMenuProps
) {

	const [_, startTransition] = useTransition();

	return (
		<div className="absolute top-2 right-2">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" size="icon">
						<MoreVertical />
					</Button>
				</DropdownMenuTrigger>

				<DropdownMenuContent>
					<Link href={`${path}/?active_id=${public_id}&active_filename=${filename}`}>
						<DropdownMenuItem>
							<Folder className="mr-2 h-4 w-4" /> <span>Manage Location</span>
						</DropdownMenuItem>
					</Link>
					<Link
						href={`/edit?public_id=${public_id}`}
					>
						<DropdownMenuItem>
							<Pencil className="mr-2 h-4 w-4" /> <span>Edit</span>
						</DropdownMenuItem>
					</Link>
					<DropdownMenuItem
						onClick={() => {
							void startTransition(() => {
								manageTags("favorite", public_id, isFavorite ? "remove" : "add", path)
							})
						}}>
						<Heart className="mr-2 h-4 w-4" /> <span>{isFavorite ? 'Remove from' : 'Add to'} favorites</span>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

		</div>
	)
}