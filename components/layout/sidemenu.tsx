import cloudinary from 'cloudinary';
import { Folder } from '@/types';
import SidemenuContainer from './sidemenu-container';

export default async function SideMenu() {

	const { folders } = (await cloudinary.v2.api.root_folders()) as {
		folders: Folder[];
	}

	return <SidemenuContainer folders={folders} />;
}
