import cloudinary from "cloudinary"

import type { Folder } from "@/types"

import { AlbumCard } from "./album-card"

export const metadata = {
  title: "Albums",
}

export default async function AlbumsPage() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[]
  }

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Albums</h1>
        </div>

        <div className="grid grid-cols-4 gap-4 max-[1000px]:grid-cols-2 max-[768px]:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {folders.map((folder) => (
            <AlbumCard key={folder.path} folder={folder} />
          ))}
        </div>
      </div>
    </section>
  )
}
