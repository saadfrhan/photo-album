"use client";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import renameFile from "@/server-actions/rename-file";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export default function RenameDialog(
	{ children, filename: _filename, id, path }: { children: React.ReactNode, filename: string, id: string, path: string }
) {

	const [filename, setFilename] = useState(_filename);
	const [_, startTransition] = useTransition();
	const {push} = useRouter();

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				{children}
			</AlertDialogTrigger>
			<AlertDialogContent className="sm:max-w-[425px]">
				<AlertDialogHeader>
					<AlertDialogTitle>Rename file</AlertDialogTitle>
				</AlertDialogHeader>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						startTransition(() => {
							void renameFile(`${id.split('/').slice(0, -1)}/${_filename}`, filename, path);
							push(`${path}/?active_filename=${filename}&active_id=${id}`)
						});
					}}
				>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="name" className="text-right">
								Name
							</Label>
							<Input id="name" value={filename} required onChange={(e) => setFilename(e.target.value)} name="name" className="col-span-3" />
						</div>
					</div>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction type="submit">Rename</AlertDialogAction>
					</AlertDialogFooter>
				</form>
			</AlertDialogContent>
		</AlertDialog>
	)
}
