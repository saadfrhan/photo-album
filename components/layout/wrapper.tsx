import Header from './header';
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import { AppSidebar } from '../app-sidebar';
import { Folder } from '@/types';
import cloudinary from 'cloudinary';

export default async function LayoutWrapper(
	{ children }: { children: React.ReactNode }
) {

	const { folders } = (await cloudinary.v2.api.root_folders()) as {
		folders: Folder[];
	}

	return (
		<SidebarProvider>
			<AppSidebar folders={folders} />
			<main className='w-full'>
				<Header />
				<div
					className='m-5'
				>
					{children}
				</div>
			</main>
		</SidebarProvider>
	)
}
