import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import createFolder from "@/server-actions/create-folder";

export default function CreateDialog(
	{ children }: { children: React.ReactNode }
) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				{children}
			</AlertDialogTrigger>
			<AlertDialogContent className="sm:max-w-[425px]">
				<AlertDialogHeader>
					<AlertDialogTitle>Create album</AlertDialogTitle>
				</AlertDialogHeader>
				<form action={createFolder}>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="name" className="text-right">
								Name
							</Label>
							<Input id="name" name="name" className="col-span-3" />
						</div>
					</div>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction type="submit">Create</AlertDialogAction>
					</AlertDialogFooter>
				</form>
			</AlertDialogContent>
		</AlertDialog>
	)
}
