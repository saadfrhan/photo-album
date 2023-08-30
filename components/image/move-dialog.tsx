"use client";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { useTransition } from "react";
import manageLocation from "@/server-actions/manage-location";
import { useRouter } from "next/navigation";

export default function MoveDialog(
	{ children, asset_folder, public_id, path, filename }: { children: React.ReactNode, asset_folder: string, public_id: string, path: '/favorites' | '/gallery', filename: string }
) {

	const [_, startTransition] = useTransition();
	const { push } = useRouter();

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				{children}
			</AlertDialogTrigger>
			<AlertDialogContent className="sm:max-w-[425px]">
				<AlertDialogHeader>
					<AlertDialogTitle>Move file?</AlertDialogTitle>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction type="submit" onClick={(e) => {
						e.preventDefault();
						console.log(asset_folder, public_id, path)
						startTransition(() => {
							void manageLocation(asset_folder, public_id, path);
						});
						push(`${path}/?active_id=${asset_folder}/${public_id}&active_filename=${filename}`);
					}}>Yes</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
