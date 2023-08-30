import { ImagesPageProps, SearchResult } from '@/types';
import cloudinary from 'cloudinary';
import H1 from '../ui/h1';
import Upload from './upload';
import Search from '../utils/search';
import ImageGrid from './image-grid'

export default async function ImagesPage(
	{ search, active, heading, path, folder = "" }: ImagesPageProps
) {

	const query = `resource_type:image ${search ? `AND filename:${search}*` : ""} ${heading === 'Favorites' ? 'AND tags=favorite' : ''} ${folder ? `AND folder:${folder}` : ''}`;
	
	const results = await cloudinary.v2.search.expression(query)
		.sort_by('created_at', 'desc')
		.max_results(30)
		.with_field('tags')
		.execute() as SearchResult;

	return (
		<section>
			<div className="flex flex-col gap-8 pb-4">
				<div className="flex justify-between">
					<H1>{heading}</H1>
					<Upload />
				</div>
				<Search initialSearch={search} path={path} />
				<ImageGrid results={results} path={path} active_filename={active.filename} active_id={active.id} />
			</div>
		</section>
	)
}
