import { CldImageProps } from "next-cloudinary";

export interface Folder {
	name: string;
	path: string;
}

export interface UploadResult {
	info: {
		public_id: string;
	};
	event: 'success';
}

export interface SearchResult {
	resources: {
		public_id: string;
		filename: string;
		folder: string;
		tags: string[];
	}[]
}

export interface AlbumsPageProps {
	searchParams: {
		search: string;
		active_filename: string;
		active_id: string;
	};
	params: {
		id: string;
	}
}

type Path = "/" | "/favorites" | `/albums/${string}`;

export interface ImageGridProps {
	results: SearchResult;
	path: Path;
	active_id: string;
	active_filename: string;
}

export type ImageProps = CldImageProps & {
	isFavorite?: boolean;
	path: Path;
}

export interface ImagesPageProps {
	search: string;
	heading: 'Gallery' | 'Favorites' | string;
	folder?: string;
	active: {
		id: string;
		filename: string;
	}
	path: Path;
}

export interface ImageMenuProps {
	public_id: string;
	isFavorite: boolean;
	filename: string;
	path: Path;
}

export interface SearchProps {
	initialSearch: string;
	path: "/" | "/favorites" | `/albums/${string}`
}

export interface RenameDialogProps { 
	children: React.ReactNode;
	filename: string;
	id: string;
	path: Path;
}

export interface SidebarProps { 
	public_id: string;
	filename: string;
	path: Path; 
	folder: string;
}

export interface ImageUtilProps {
  searchParams: {
    search: string;
		active_filename: string;
		active_id: string;
	};
}