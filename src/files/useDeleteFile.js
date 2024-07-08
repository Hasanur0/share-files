import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { deleteFile as deleteFileApi } from './../services/apiFiles'

export default function useDeleteFile() {
  const queryClient = useQueryClient()
  const { mutate: deleteFile, isPending: isDeleting } = useMutation({
    mutationFn: deleteFileApi,
    onSuccess: () => {
      toast.success('File deleted successfully')

      queryClient.invalidateQueries({
        queryKey: ['files'],
      })
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })
  // console.log(isCreating)
  return { deleteFile, isDeleting }
}
