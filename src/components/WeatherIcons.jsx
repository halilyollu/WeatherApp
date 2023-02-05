import React from 'react'
import { WiDayRain, WiDayCloudy, WiDaySnow, WiDayFog } from 'weather-icons-react'

export default function WeatherIcons(main) {

  return (
    <div className='description'>
        {main.props === 'Rain' ? <WiDayRain size={200} color='#fff' /> : null}
        {main.props === 'Clouds' ? <WiDayCloudy size={200} color='#fff' /> : null}
        {main.props === 'Snow' ? <WiDaySnow size={200} color='#fff' /> : null}
        {main.props === 'Mist' ? <WiDayFog size={200} color='#fff' /> : null}
        {main.props === 'Fog' ? <WiDayFog size={200} color='#fff' /> : null}
    </div>
  )
}
