"use server";

import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';

export default async function createFolder(data: FormData) {
	const name = data.get('name') as string;
	try {
		await cloudinary.v2.api.create_folder(name);
		revalidatePath('/');
	} catch (error) {
		console.error(JSON.stringify(error, null, 2));
	}
}