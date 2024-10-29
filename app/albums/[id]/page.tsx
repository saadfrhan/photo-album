import ImagesPage from "@/components/cloudinary/images-page";

type Params = Promise<{ id: string }>

export async function generateMetadata(
  props:
    { params: Promise<{ id: string }> }
) {
  const params = await props.params;

  const {
    id
  } = params;

  return {
    title: id,
  }
}

export default async function AlbumsPage(props: { params: Params }) {
  const { id } = await props.params
  return <ImagesPage
    heading={id}
    folder={id}
    path={`/albums/${id}`}
  />
}