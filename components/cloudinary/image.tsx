"use client";

import { CldImage } from 'next-cloudinary';
import { AiFillHeart } from 'react-icons/ai';
import { ImageProps } from '@/types';

export default function Image(
	{ src, isFavorite, path, ...props }: ImageProps
) {

	return (
		<div className='relative'>
			<CldImage src={src} {...props} priority />
			{isFavorite && <AiFillHeart
				className='absolute left-2 bottom-2 text-red-400'
				size={24}
			/>}
		</div>
	)
}
