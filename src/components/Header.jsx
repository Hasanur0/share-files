import Logout from '../authentication/Logout'
import Search from './Search'
import ThemeBtn from './ThemeBtn'
import User from './User'

export default function Header() {
  return (
    <header className=" py-4 px-6 col-span-10 border-r-gray-200 border border-l-0 flex items-center">
      <Search />
      <div className="flex items-center ml-auto gap-4">
        <ThemeBtn />
        <div className="w-0.5 h-6 bg-gray-200"></div>
        <User />
        <Logout />
      </div>
    </header>
  )
}
