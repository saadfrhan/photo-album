"use server";

import { Folder } from "@/types";
import cloudinary from 'cloudinary';

export async function getFolderNames() {
	const { folders } = (await cloudinary.v2.api.root_folders()) as {
		folders: Folder[];
	};
	return folders
}