import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { uploadFile as uploadFileApi } from './../services/apiFiles'
import { useNavigate } from 'react-router-dom'

export default function useUploadFile() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { mutate: uploadFile, isPending: isUploading } = useMutation({
    mutationFn: uploadFileApi,
    onSuccess: () => {
      toast.success('File uploaded successfully')
      navigate('/')
      queryClient.invalidateQueries({
        queryKey: ['files'],
      })
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })
  // console.log(isCreating)
  return { uploadFile, isUploading }
}
