import { Folder, SidebarProps } from '@/types';
import cloudinary from 'cloudinary';
import { Button, buttonVariants } from '../ui/button';
import Link from 'next/link';
import { MinusIcon } from 'lucide-react';
import { H3 } from '../ui/h3';
import { P } from '../ui/p';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import CreateDialog from '../album/create-dialog';
import RenameDialog from './rename-dialog';
import MoveDialog from './move-dialog';
import DeleteButton from './delete-button';
import { getFolderNames } from '@/server-actions/get-folder-names';

export default async function Sidebar(
	{ public_id, filename, path, folder }: SidebarProps
) {

	const folders = await getFolderNames();

	return (
		<Card className={`h-auto p-5 max-[1140px]:absolute max-[1140px]:right-2 max-[1140px]:top-[17rem]`}>
			<Link href={`${path}`} className={buttonVariants({ variant: "link", className: "px-0 py-0" })}>
				Close
			</Link>
			<div className='flex w-full justify-between'>
				<H3>Display name</H3>
				<RenameDialog id={public_id} filename={filename} path={path}>
					<Button variant="link">Edit name</Button>
				</RenameDialog>
			</div>
			<Input disabled value={filename} />
			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="item-1">
					<AccordionTrigger>Manage Location</AccordionTrigger>
					<AccordionContent>
						<P>Created Albums:</P>
						{folders && folders.map(({ name }, index) => (
							<Button
								key={index}
								variant="ghost"
								className='w-full justify-between flex gap-2'
								disabled={name === folder}
							>
								<Link
									href={`/albums/${name}`}
									className='flex gap-2'
								>
									<MinusIcon />	<p>{name}</p>
								</Link>
								<P>
									{name === folder ? 'Current' : (
										<MoveDialog filename={filename} asset_folder={name} public_id={public_id} path={path} >
											<Button variant="link">
												Move
											</Button>
										</MoveDialog>
									)}
								</P>
							</Button>
						))}
						<CreateDialog>
							<Button variant="link">Create new album</Button>
						</CreateDialog>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<DeleteButton public_id={public_id} path={path} />
		</Card>
	)
}
