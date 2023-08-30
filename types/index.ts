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