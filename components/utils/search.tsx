"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import {Input} from "../ui/input";
import{Label} from "../ui/label";
import { useRouter } from "next/navigation";

export default function Search(
	{initialSearch, path}: {initialSearch: string, path: "/gallery" | "/favorites" | `/albums/${string}`}
) {
	const { push } = useRouter();
	return (
		<div className="flex flex-col">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					const data = new FormData(e.target as HTMLFormElement);
					const search = data.get("search") as string;
					push(`${path}?search=${search}`);
				}}
			>
			<Label
				htmlFor="search"
			>Search</Label>
			<div className="flex gap-2">
			<Input
				type="text"
				name="search"
				id="search"
				className="w-fit"
				placeholder="Search"
			/>
			<Button size="icon" type='submit'>
				<SearchIcon />
			</Button>
			</div>
			</form>
		</div>
	);
}