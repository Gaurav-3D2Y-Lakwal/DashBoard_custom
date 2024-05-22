import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

const Header = ({category, title}) => {
  const {currentMode} = useStateContext();
  return (
    <div className={currentMode==='Dark'? 'dark': ''}>
    <div className='mb-10'>
      <p className='dark:text-white text-gray-400'>
        {category}
      </p>
      <p className='text-3xl font-extrabold tracking-tight dark:text-white text-slate-900'>
        {title}
      </p>
     </div>
     </div>
  )
}

export default Header;