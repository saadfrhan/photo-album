"use server";

import { Folder } from "@/types";
import cloudinary from 'cloudinary';

export async function getFolderNames() {
	try {
		const { folders } = (await cloudinary.v2.api.root_folders()) as {
			folders: Folder[];
		};
		return folders;
	} catch (error) {
		console.error(JSON.stringify(error, null, 2));
	}
}