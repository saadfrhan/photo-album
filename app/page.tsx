import ImagesPage from "@/components/cloudinary/images-page";

export const metadata = {
  title: "Home",
};

export default async function HomePage() {
  return <ImagesPage heading="Gallery" path="/" />;
}
