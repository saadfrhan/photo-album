"use server";

import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export default async function renameFile(public_id: string, new_name: string, path: string) {
  await cloudinary.v2.uploader.rename(public_id, new_name);
	revalidatePath(`/${path}`)
}
