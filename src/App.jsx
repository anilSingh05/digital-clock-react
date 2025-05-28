import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = time.toLocaleTimeString('en-US', 
    { hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
     }
  )

  return (
    <div className="digital-clock">
      <div className="clock">
        {formatTime}
      </div>
    </div>
  )
}

export default App
