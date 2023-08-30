"use client";

import { CldUploadButton } from "next-cloudinary"
import { Button } from "../ui/button";
import { Upload as UploadIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Upload() {
	const { refresh } = useRouter();
	return (
		<Button asChild>
			<div className="flex gap-2">
				<UploadIcon className="w-4 h-4" />
				<CldUploadButton
					uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET}
					onUpload={() => {
						setTimeout(() => {
							refresh();
						}, 1);
					}}
				/>
			</div>
		</Button>
	)
}
