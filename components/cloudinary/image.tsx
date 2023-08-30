"use client";

import { CldImage } from 'next-cloudinary';
import Menu from '../image/menu';
import { AiFillStar } from 'react-icons/ai';
import { ImageProps } from '@/types';

export default function Image(
	{ src, isFavorite, path, ...props }: ImageProps
) {

	return (
		<div className='relative'>
			<CldImage src={src} {...props} />
			{isFavorite && <AiFillStar
				className='absolute left-2 bottom-2 text-yellow-400'
				size={24}
			/>}
			<Menu filename={props.alt} public_id={src} isFavorite={isFavorite ?? false} path={path} />
		</div>
	)
}
