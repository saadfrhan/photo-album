import ImageEditor from "../../components/utils/image-editor";

export const metadata = {
  title: "Edit"
}

export default function EditPage(
  { searchParams: { public_id } }: { searchParams: { public_id: string } }
) {
  return <ImageEditor public_id={public_id} />
}