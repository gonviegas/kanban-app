import { useState } from 'react'

type Props = {
  className: string
  lightIcon?: any
  darkIcon?: any
}

export const DarkMode: React.FC<Props> = ({
  className,
  lightIcon,
  darkIcon
}) => {
  const [darkMode, setDarkMode] = useState(
    window?.localStorage.getItem('theme') === 'light' ? false : true
  )

  const handleClick = () => {
    if (darkMode) {
      window?.localStorage.setItem('theme', 'light')
      document?.documentElement.classList.remove('dark')
    } else {
      window?.localStorage.setItem('theme', 'dark')
      document?.documentElement.classList.add('dark')
    }

    setDarkMode(!darkMode)
  }

  return (
    <button onClick={handleClick} className={className}>
      {darkMode ? darkIcon : lightIcon}
    </button>
  )
}
