import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import { Statistic } from 'antd'
import { Outlet } from 'react-router-dom'

function App() {
  const a = false
  return (
    <>
      <div>
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
      <Outlet />
    </>
  )
}

export default App
