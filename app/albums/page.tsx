import cloudinary from "cloudinary";
import { AlbumCard } from "./album-card";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import createFolder from "@/server-actions/create-folder";
import { Folder } from "@/types";
import CreateDialog from "@/components/album/create-dialog";

export const metadata = {
	title: "Albums",
	description: "Manage your albums"
};

export default async function AlbumsPage() {
	const { folders } = (await cloudinary.v2.api.root_folders()) as {
		folders: Folder[];
	};

	return (
		<section>
			<div className="flex flex-col gap-8">
				<div className="flex justify-between">
					<h1 className="text-4xl font-bold">Albums</h1>
					<CreateDialog>
						<Button size="icon" className="mr-4">
							<PlusIcon />
						</Button>
					</CreateDialog>
				</div>

				<div className="grid grid-cols-3 gap-4">
					{folders.map((folder) => (
						<AlbumCard key={folder.path} folder={folder} />
					))}
				</div>
			</div>
		</section>
	);
}