"use client";

import { Trash2 } from 'lucide-react'
import { Button } from '../ui/button'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useTransition } from 'react';
import deleteFile from '@/server-actions/delete-file';
import { useRouter } from 'next/navigation';

export default function DeleteButton(
	{ public_id, path }: { public_id: string, path: '/favorites' | '/gallery' }
) {
	const [_, startTransition] = useTransition();
	const { push } = useRouter();
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="destructive" onClick={() => {
					startTransition(() => {
						void deleteFile(public_id, path);
						push(path)
					})
				}} className='w-full flex justify-start mt-4'>
					<Trash2 className="mr-2 h-4 w-4" /> Delete
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>
						Delete
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
