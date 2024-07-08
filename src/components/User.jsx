import useUser from '../authentication/useUser'

export default function User() {
  const { user } = useUser()
  const name = user.user_metadata.fullName

  return <p className="font-medium text-gray-600">{name}</p>
}
