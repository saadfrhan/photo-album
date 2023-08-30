"use server";

import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';

export default async function createFolder(data: FormData) {
	const name = data.get('name') as string;
	console.log(name);
	await cloudinary.v2.api.create_folder(name);
	revalidatePath('/albums');
}