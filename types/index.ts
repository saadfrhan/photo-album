import { CldImageProps } from "next-cloudinary";

export interface Folder {
  name: string;
  path: string;
}

export interface UploadResult {
  info: {
    public_id: string;
  };
  event: "success";
}

export interface SearchResult {
  resources: {
    public_id: string;
    filename: string;
    folder: string;
    tags: string[];
  }[];
}

export interface AlbumsPageProps {
  searchParams: {
    active_filename: string;
    active_id: string;
  };
  params: {
    id: string;
  };
}

type Path = "/" | "/favorites" | `/albums/${string}`;

export interface ImageGridProps {
  results: SearchResult;
  path: Path;
}

export type ImageProps = CldImageProps & {
  isFavorite?: boolean;
  path: Path;
};

export interface ImagesPageProps {
  heading: "Gallery" | "Favorites" | string;
  folder?: string;
  path: Path;
}
