"use client";

import { CldImage, CldImageProps } from 'next-cloudinary';
import Menu from '../image/menu';
import { AiFillStar } from 'react-icons/ai';

export default function Image(
	{ src, isFavorite, path, ...props }: CldImageProps & { isFavorite?: boolean, path: '/favorites' | '/gallery' }
) {

	return (
		<div className='relative'>
			<CldImage src={src} {...props} />
			{isFavorite && <AiFillStar
				className='absolute left-2 bottom-2'
				size={24}
			/>}
			<Menu filename={props.alt} public_id={src} isFavorite={isFavorite ?? false} path={path} />
		</div>
	)
}
