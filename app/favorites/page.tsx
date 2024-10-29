import ImagesPage from "@/components/cloudinary/images-page";

export const metadata = {
    title: "Favorites",
    description: "Manage your favorites"
};

export default async function FavoritesPage() {
    return <ImagesPage
		heading="Favorites"
		path="/favorites"
	/>
}