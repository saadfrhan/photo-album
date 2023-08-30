import ImagesPage from "@/components/cloudinary/images-page";
import { AlbumsPageProps } from "@/types";

export async function generateMetadata(
  { params: { id } }:
    { params: { id: string } }
) {
  return {
    title: id,
  }
}

export default async function AlbumsPage({
  searchParams: { search, active_filename, active_id },
  params: { id }
}: AlbumsPageProps) {

  return <ImagesPage
    active={{ id: active_id, filename: active_filename }}
    heading={id}
    folder={id}
    search={search}
    path={`/albums/${id}`}
  />
}