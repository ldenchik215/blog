import { Link } from 'react-router-dom'

import { cn } from '@/shared/lib/css'

function MainButtonForm({ route }) {
  return <Link to={route} className={cn('text-(--primary-color) bg-(--) px-[18px] py-2 rounded-[5px]')} />
}
