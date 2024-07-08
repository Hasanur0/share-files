import { Outlet } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'

export default function AppLayout() {
  return (
    <div className="grid grid-cols-12 min-h-dvh  grid-rows-[auto,1fr] content-start bg-gray-200/30">
      <Sidebar />
      <Header />
      <Outlet />
    </div>
  )
}
