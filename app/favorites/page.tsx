import ImagesPage from "@/components/cloudinary/images-page";

export const metadata = {
  title: "Favorites",
};

export default async function FavoritesPage() {
  return <ImagesPage heading="Favorites" path="/favorites" />;
}
