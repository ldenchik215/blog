import { cn } from '@/shared/lib/css'
import avatar from '@/shared/assets/avatar.png'

function AppHeader() {
  return (
    <div className={cn('bg-amber-500')}>
      <img src={avatar} alt="" />
    </div>
  )
}

export const Component = AppHeader
