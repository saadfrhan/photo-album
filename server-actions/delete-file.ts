"use server";

import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';

export default async function deleteFile(public_id: string, path: string) {
	await cloudinary.v2.uploader.destroy(public_id);
	revalidatePath(`/${path}`);
}