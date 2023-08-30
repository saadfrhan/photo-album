import SideMenu from '@/components/layout/sidemenu';
import Header from './header';

export default function LayoutWrapper(
	{ children }: { children: React.ReactNode }
) {
	return (
		<div>
			<Header />
			<div className='flex gap-4'>
				<SideMenu />
				<div className='w-full px-4 pt-8'>{children}</div>
			</div>
		</div>
	)
}
