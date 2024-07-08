import { CiSearch } from 'react-icons/ci'

export default function Search() {
  return (
    <div className="flex relative">
      <CiSearch className="text-2xl left-2 pointer-events-none absolute top-1/2 text-gray-500 -translate-y-1/2" />
      <input
        type="text"
        placeholder="Search"
        className="bg-neutral-100 outline-none focus:outline-blue-500 py-2 px-2 indent-8 rounded-md w-full max-w-[400px]"
      />
    </div>
  )
}
