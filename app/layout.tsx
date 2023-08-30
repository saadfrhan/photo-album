import LayoutWrapper from '@/components/layout/wrapper'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Photo Albums Manager',
	description: 'Experience the ultimate photo organization and sharing platform.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} dark`}>
				<LayoutWrapper>
					{children}
				</LayoutWrapper>
			</body>
		</html>
	)
}
