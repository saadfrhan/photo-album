import ImagesPage from "@/components/cloudinary/images-page";

export const metadata = {
	title: "Favorites",
	description: "Manage your favorites"
};

export default async function FavoritesPage({
  searchParams: { search, active_filename, active_id },
}: {
  searchParams: {
    search: string;
		active_filename: string;
		active_id: string;
	};
}) {

	return <ImagesPage
		active={{id: active_id, filename: active_filename}}
		heading="Favorites"
		search={search}
		path="/favorites"
	/>
}