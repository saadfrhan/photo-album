import Image from 'next/image'
import React from 'react'
import { P } from '../ui/p'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function Header() {
  return (
    <div className='border-b'>
				<div className='flex h-16 items-center justify-between px-4 container mx-auto'>
					<div className='flex gap-2 items-center'>
					<Image
						src="/album.png"
						width={50}
						height={50}
						alt="Album.io"
					/>
					<P className='m-0'>
					saadfrhan Photos
					</P>
					</div>
					<div>
						<Avatar>
							<AvatarImage
								src="https://github.com/saadfrhan.png"
								alt="@saadfrhan"
							/>
							<AvatarFallback>SF</AvatarFallback>
						</Avatar>
					</div>
				</div>
			</div>
  )
}
