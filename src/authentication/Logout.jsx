import { HiArrowRightOnRectangle } from 'react-icons/hi2'

import SpinnerSmall from '../components/SpinnerSmall'
import { useLogout } from './useLogout'

export default function Logout() {
  const { logout, isLoading } = useLogout()
  return (
    <button
      className="bg-gray-300 rounded-md py-1 px-2"
      disabled={isLoading}
      onClick={logout}
    >
      {!isLoading ? <p>Log out</p> : <SpinnerSmall />}
    </button>
  )
}
