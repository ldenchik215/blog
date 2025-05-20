import { Outlet } from 'react-router-dom'
import { cn } from '@/shared/lib/css'

import { AppHeader } from '@/features/header/index'

function App() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  )
}

export default App
