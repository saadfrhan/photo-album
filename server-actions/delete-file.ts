"use server";

import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';

export default async function deleteFile(public_id: string, path: string) {
	try {
		await cloudinary.v2.uploader.destroy(public_id);
		revalidatePath(path);
	} catch (error) {
		console.error(JSON.stringify(error, null, 2));
	}
}