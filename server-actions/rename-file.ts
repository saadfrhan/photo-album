"use server";

import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export default async function renameFile(public_id: string, new_name: string, path: string) {
  try {
    let parts = public_id.split("/");
		if (parts.length > 1) {
			parts = parts.slice(1);
		}
		const publicId = parts.join("/");
    await cloudinary.v2.uploader.rename(publicId, new_name);
    revalidatePath(path);
  } catch (error) {
    console.error(JSON.stringify(error, null, 2));
  }
}
