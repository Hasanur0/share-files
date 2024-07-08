import { SiFigshare } from 'react-icons/si'

export default function Logo() {
  return (
    <div className="flex gap-1.5 text-blue-500 items-center">
      <SiFigshare className="text-2xl" />
      <h2 className="text-xl font-medium">ShareFiles</h2>
    </div>
  )
}
