import { ImageGridProps, SearchResult } from '@/types';
import Image from './image';
import Sidebar from '../image/sidebar';

export default function ImageGrid(
	{ results, path, active_id = "", active_filename = "" }: ImageGridProps
) {

	const MAX_COLUMNS = 4;

	function getColumns(colIndex: number) {
		return results.resources.filter(
			(_, idx) => idx % MAX_COLUMNS === colIndex
		)
	}

	return (<div className={active_id ? `grid min-[1141px]:grid-cols-[2fr_1fr] gap-5` : ""}>
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
				(col, index) => (
					<div key={index} className="flex flex-col gap-4">
						{col.map(({ public_id, filename, tags }, index) => (
							<Image
								src={public_id}
								key={index}
								alt={filename}
								width="400"
								height="300"
								className='rounded-md w-full'
								isFavorite={tags.includes('favorite')}
								path={path}
							/>
						))}
					</div>
				)
			)}
		</div>
		{active_id && <Sidebar
			folder={
				results.resources.find(({ public_id }) => public_id === active_id)?.folder ?? "Undetectable"
			}
			public_id={active_id}
			path={path}
			filename={active_filename}
		/>}
	</div>)
}
