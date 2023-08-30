"use server";

import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';

export default async function manageLocation(
	asset_folder: string,
	public_id: string,
	path: "/" | "/favorites" | `/albums/${string}`
) {
	try {
		let parts = public_id.split("/");
		if (parts.length > 1) {
			parts = parts.slice(1);
		}
		const publicId = parts.join("/");
		await cloudinary.v2.uploader.rename(publicId, `${asset_folder}/${publicId}`);
		revalidatePath(path);
	} catch (error) {
		console.error(JSON.stringify(error, null, 2));
	}
}
