import { SearchResult } from '@/types';
import Image from './image';
import Sidebar from '../image/sidebar';

export default function ImageGrid(
	{ results, path, active_id = "", active_filename = "" }: { results: SearchResult, path: "/gallery" | "/favorites", active_id: string, active_filename: string }
) {

	const MAX_COLUMNS = 4;

	function getColumns(colIndex: number) {
		return results.resources.filter(
			(resource, idx) => idx % MAX_COLUMNS === colIndex
		)
	}

	return (<div className={active_id ? `grid grid-cols-[2fr_1fr] gap-5` : ""}>
		<div className="grid grid-cols-4 gap-4">
			{[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map((col, index) => {
				return (
					<div key={index} className="flex flex-col gap-4">
						{col.map(({ public_id, filename, tags }, index) => (
							<Image
								src={public_id}
								key={index}
								alt={filename}
								width="400"
								height="300"
								isFavorite={tags.includes('favorite')}
								path={path}
							/>
						))}
					</div>
				)
			})}
		</div>
		{active_id && <Sidebar folder={
			results.resources.find(({ public_id }) => public_id === active_id)?.folder ?? "Undetectable"
		} public_id={active_id} path={path} filename={active_filename} />}
	</div>)
}
