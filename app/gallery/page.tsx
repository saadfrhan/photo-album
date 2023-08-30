import ImagesPage from "@/components/cloudinary/images-page";

export const metadata = {
	title: "Gallery",
	description: "Manage your gallery"
};

export default async function GalleryPage({
  searchParams: { 
		search, 
		active_filename,
		active_id },
}: {
  searchParams: {
    search: string;
		active_filename: string; 
		active_id: string;
	};
}) {
	return <ImagesPage
		active={{id: active_id, filename: active_filename}}
		heading="Gallery"
		search={search}
		path="/gallery"
	/>
}
