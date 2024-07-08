import { useQuery } from '@tanstack/react-query'
import { getFiles } from '../services/apiFiles'
import useUser from '../authentication/useUser'

export default function useFiles() {
  const { user } = useUser()
  const {
    data: files,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ['files'],
    queryFn: () => getFiles(user.id),
  })

  return { isLoading, files, error }
}
