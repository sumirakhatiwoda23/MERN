import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { TrashIcon } from "lucide-react"
import { useRemoveProductMutation } from "./productApi"
import { useSelector } from "react-redux"
import { toast } from "sonner"
import { Spinner } from "@/components/ui/spinner"

export default function RemoveProduct({ id }) {
  const { user } = useSelector((state) => state.userSlice);
  const [removeProduct, { isLoading }] = useRemoveProductMutation();

  const handleRemove = async () => {
    try {
      await removeProduct({ id: id, token: user.token }).unwrap();
      toast.success('Product removed successfully');
    } catch (err) {
      toast.error(err.data?.message);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          disabled={isLoading}
          variant="outline"
        >
          {isLoading ? <Spinner /> : <TrashIcon />}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            product from the server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleRemove}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}