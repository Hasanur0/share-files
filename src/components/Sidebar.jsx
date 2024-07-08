import { FaFolderMinus } from 'react-icons/fa'
import Logo from './Logo'
import { MdOutlineFileUpload } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="border py-5 px-10 border-r-gray-200 col-span-2 col-start-1 row-start-1 -row-end-1">
      <Logo />
      <div className="w-full h-[1px] bg-gray-200 mt-6"></div>
      <div className="mt-3 flex flex-col gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex cursor-pointer items-center gap-2  ${
              isActive ? 'text-blue-500' : ''
            }`
          }
        >
          <FaFolderMinus className="text-2xl" />
          <p className="font-medium mt-0.5">My Files</p>
        </NavLink>
        <NavLink
          to="/upload"
          className={({ isActive }) =>
            `flex cursor-pointer items-center gap-2  ${
              isActive ? 'text-blue-500' : ''
            }`
          }
        >
          <MdOutlineFileUpload className="text-2xl" />
          <p className="font-medium mt-0.5">Upload</p>
        </NavLink>
      </div>
    </aside>
  )
}
