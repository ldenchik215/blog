import { Link } from 'react-router-dom'

import { ROUTES } from '@/shared/model/routes'
import { cn } from '@/shared/lib/css'
import avatar from '@/shared/assets/avatar.png'

export function AppHeader() {
  const isLogin = 0
  return (
    <header className={cn('flex justify-between px-[22px] py-[15px] items-center bg-white')}>
      <div className={cn('text-lg')}>
        <Link to={ROUTES.HOME}>Realworld Blog</Link>
      </div>

      {!isLogin ? (
        <div className={cn('flex gap-[27px] text-lg/[28px]')}>
          <Link to={ROUTES.AUTH} className={cn('text-(--heading-color) px-[18px] py-2 rounded-[5px]')}>
            Sign In
          </Link>
          <Link
            to={ROUTES.REGISTRATION}
            className={cn('text-(--success-color) border-[1px] border-(--success-color) px-[18px] py-2 rounded-[5px]')}
          >
            Sign Up
          </Link>
        </div>
      ) : (
        <div className={cn('flex items-center gap-[27px] text-lg/[28px]')}>
          <Link
            to={ROUTES.NEW_ARTICLE}
            className={cn(
              'text-(--success-color) border-[1px] border-(--success-color) px-[10px] py-[5px] rounded-[5px] text-[14px]/[22px]',
            )}
          >
            Create article
          </Link>

          <Link to={ROUTES.PROFILE} className={cn('flex justify-between gap-[13px] items-center')}>
            <div className={cn('')}>John Doe</div>
            <div className={cn('w-[46px] h-[46px]')}>
              <img src={avatar} className={cn('w-full object-contain')} alt="avatar" />
            </div>
          </Link>

          <Link
            to={ROUTES.HOME}
            className={cn('text-(--text-color) border-[1px] border-(--text-color) px-[18px] py-2 rounded-[5px]')}
          >
            Log Out
          </Link>
        </div>
      )}
    </header>
  )
}
