import { ImagesPageProps, SearchResult } from "@/types";
import cloudinary from "cloudinary";
import ImageGrid from "./image-grid";

export default async function ImagesPage({
  heading,
  path,
  folder = "",
}: ImagesPageProps) {
  const query = `resource_type:image ${
    heading === "Favorites" ? "AND tags=favorite" : ""
  } ${folder ? `AND folder:${folder}` : ""}`;

  const results = (await cloudinary.v2.search
    .expression(query)
    .sort_by("created_at", "desc")
    .max_results(30)
    .with_field("tags")
    .execute()) as SearchResult;

  return (
    <section>
      <div className="flex flex-col gap-8 pb-4">
        <div className="flex justify-between">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {heading}
          </h1>
        </div>
        <ImageGrid results={results} path={path} />
      </div>
    </section>
  );
}
