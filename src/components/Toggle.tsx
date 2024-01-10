import { useEffect, useState } from 'react'
import { IoMoonOutline, IoMoon } from 'react-icons/io5'
const Toggle = () => {
  const [checked, setChecked] = useState(false)

  const changeTheme = (checked : boolean) => {
    setChecked(checked)
    const root = document.querySelector('#root')
    if (checked) {
      document.body.classList.add('dark')
      root?.classList.add('dark:bg-[#050505]')
    } else {
      document.body.classList.remove('dark')
      root?.classList.remove('dark:bg-[#050505]')
    }
    localStorage.setItem('theme', checked ? 'dark' : 'light')
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      changeTheme(true)
    }
  } , [])
  
  return (
    <div className="flex items-center gap-3">
      <input
        className="mr-2 mt-[0.3rem] h-3.5 w-9 appearance-none rounded-full bg-neutral-500 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0725rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-[#a745ef] dark:after:bg-white dark:checked:bg-primary dark:checked:after:bg-primary"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault01"
        onChange={e => changeTheme(e.target.checked)}
        checked={checked}
      />
      {checked ? (
        <IoMoon size={24} className="text-[#a745ef]" />
      ) : (
        <IoMoonOutline size={24} className="text-neutral-500" />
      )}
    </div>
  )
}

export default Toggle
