import { Card } from '../ui/card'
import ThemeToggler from '../utils/theme-toggler'

export default function Header() {
	return (
		<Card
			className='border-b flex h-16 items-center rounded-none justify-between px-4 w-full'
		>
			<ThemeToggler />
		</Card>
	)
}
