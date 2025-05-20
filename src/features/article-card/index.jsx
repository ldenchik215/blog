import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import { Statistic } from 'antd'

import { cn } from '@/shared/lib/css'

export function Article() {
  return (
    <div className={cn('max-w-[968px] bg-(--bg-color) px-[15px] mx-auto my-[26px]')}>
      <Statistic
        value={1128}
        valueStyle={{ fontSize: '12px', lineHeight: '22px' }}
        prefix={
          a ? (
            <HeartOutlined style={{ color: '#404040', fontSize: '16px' }} />
          ) : (
            <HeartFilled style={{ color: '#404040', fontSize: '16px' }} />
          )
        }
      />
      <button onClick={() => console.log('click')} className="cursor-pointer" disabled>
        <HeartFilled />
      </button>
      Home
    </div>
  )
}

export const Component = Articles
