import { useMutation } from '@tanstack/react-query'
import { signup as signupApi } from '../services/apiAuth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function useSignup() {
  const navigate = useNavigate()
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user)
      navigate('/')
      toast.success(
        `Account successfully created! Please verify the account from user's email address.`
      )
    },
    onError: (error) => {
      console.log(error)
      toast.error('Something went wrong. Please try again!')
    },
  })

  return { signup, isLoading }
}
