import ImagesPage from "@/components/cloudinary/images-page";
import { ImageUtilProps } from "@/types";

export const metadata = {
	title: "Home",
};

export default async function HomePage({
	searchParams: {
		search,
		active_filename,
		active_id
	},
}: ImageUtilProps) {
	return <ImagesPage
		active={{ id: active_id, filename: active_filename }}
		heading="Gallery"
		search={search}
		path="/"
	/>
}
