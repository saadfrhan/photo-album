import ImagesPage from "@/components/cloudinary/images-page";
import { ImageUtilProps } from "@/types";

export const metadata = {
	title: "Favorites",
	description: "Manage your favorites"
};

export default async function FavoritesPage({
  searchParams: { search, active_filename, active_id },
}: ImageUtilProps) {

	return <ImagesPage
		active={{id: active_id, filename: active_filename}}
		heading="Favorites"
		search={search}
		path="/favorites"
	/>
}