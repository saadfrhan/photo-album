import ImagesPage from "@/components/cloudinary/images-page";
import { Folder } from "@/types";
import cloudinary from "cloudinary";

type Params = Promise<{ id: string }>;

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;

  return {
    title: params.id,
  };
}

export async function generateStaticParams() {
  const { folders }: { folders: Folder[] } =
    await cloudinary.v2.api.root_folders();
  return folders.map((folder) => ({
    id: folder.name,
  }));
}

export default async function AlbumsPage(props: { params: Params }) {
  const { id } = await props.params;
  return <ImagesPage heading={id} folder={id} path={`/albums/${id}`} />;
}
