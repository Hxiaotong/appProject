import React, { useEffect, useState } from 'react'
import './index.scss'

function App() {
  const [currentLight, setCurrentLight] = useState('red')
  const [lightOn, setLightOn] = useState(2)
  const lights=[
    {
      color: 'red', 
      lightTimer: 5000,
      duration: 1000, 
      twinkleDuration: 5000
    },
    {
      color: 'green', 
      lightTimer: 4000,
      duration: 1000, 
      twinkleDuration: 5000
    },
    {
      color: 'yellow', 
      lightTimer: 3000,
      duration: 1000, 
      twinkleDuration: 0
    }
  ]

  const changeLightFn = () => {
    setLightOn((lightOn + 1) % 3)
  }

  const twinkleFn = ()=>{
    let twinkle_count = 0;
    let timer = setInterval(()=>{
      if (twinkle_count >= lights[lightOn].twinkleDuration/1000) {
        changeLightFn()
        setCurrentLight('')
        clearInterval(timer)
        return
      }
      if (twinkle_count % 2 === 0) {
        setCurrentLight(lights[lightOn].color)
      } else {
        setCurrentLight('')
      }
      console.log(twinkle_count)
      twinkle_count++
    }, lights[lightOn].duration)
  }

  useEffect(()=>{
    setCurrentLight(lights[lightOn].color)
    setTimeout(()=>{
      twinkleFn()
    }, lights[lightOn].lightTimer)
  }, [lightOn])
  return (
    <div>
      {
        lights.map((item, index) => {
          return (
            <p key={index}><span className={`light ${item.color === currentLight ? item.color : ''}`}></span></p>
          )
        })
      }
    </div>
  );
}

export default App