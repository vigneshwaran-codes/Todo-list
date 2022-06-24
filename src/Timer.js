import React, { useState, useEffect } from 'react'

function Timer () {
  const [timeState, setTimeState] = useState()

  useEffect(() => {
    setInterval(() => {
      const date = new Date()
      let minutes = date.getMinutes()
      let seconds = date.getSeconds()
      minutes = checkTime(minutes)
      seconds = checkTime(seconds)

      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']

      const time = ` ${days[date.getDay()]} - ${date.getHours()} : ${minutes} : ${seconds}`
      setTimeState(time)
    }, 1000)

    const checkTime = (i) => {
      if (i < 10) {
        i = '0' + i
      }
      return i
    }
  }, [])
  return (
    <div>{timeState}</div>
  )
}

export default Timer
