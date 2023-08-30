"use server";

import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';

export default async function manageTags(
	tag_name: 'favorite',
	public_id: string,
	action: 'add' | 'remove',
	path: '/favorites' | '/gallery'
) {
	if (action === 'add') {
		await cloudinary.v2.uploader.add_tag(tag_name, [public_id]);
		revalidatePath(path);
	}
	if (action === 'remove') {
		await cloudinary.v2.uploader.remove_tag(tag_name, [public_id]);
		revalidatePath(path);
	}
}
