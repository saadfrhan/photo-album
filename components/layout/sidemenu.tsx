import cloudinary from 'cloudinary';
import H2 from '@/components/ui/h2';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Album as AlbumIcon, Heart as HeartIcon, Image as ImageIcon, Minus as MinusIcon } from 'lucide-react';
import { Folder } from '@/types';
import { H3 } from '../ui/h3';

export default async function SideMenu() {

	const { folders } = (await cloudinary.v2.api.root_folders()) as {
		folders: Folder[];
	}

	return (
		<div className='pb-12 w-1/5'>
			<div className='space-y-4 py-4'>
				<div className='px-3 py-2 flex flex-col gap-2'>
					<H3 className='pl-4'>Manage</H3>
					<div className='space-y-1'>
						<Button
							asChild
							variant="ghost"
							className='w-full justify-start flex gap-2'
						>
							<Link href="/gallery">
								<ImageIcon />
								Gallery
							</Link>
						</Button>
						<Button
							asChild
							variant="ghost"
							className='w-full justify-start flex gap-2'
						>
							<Link href="/albums">
								<AlbumIcon />
								Albums
							</Link>
						</Button>
						{folders.map(({ path, name }, index) => (
							<Button
								key={index}
								variant="ghost"
								asChild
								className='w-full justify-start flex gap-2'
							>
								<Link
									href={`/albums/${path}`}
								>
									<MinusIcon />	{name}
								</Link>
							</Button>
						))}
						<Button
							asChild
							variant="ghost"
							className='w-full justify-start flex gap-2'
						>
							<Link href="/favorites">
								<HeartIcon />
								Favorites
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}