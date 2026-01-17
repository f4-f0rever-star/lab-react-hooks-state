import React from 'react'

const DarkModeToggle = ({darkMode, setTheme}) => {
  // TODO: Implement dark mode toggle logic

  const handleClick = () => {setTheme(!darkMode)}

  return (

      <button onClick={handleClick}>{darkMode? "Light": "Dark"} Theme {/* TODO: Update this text from Dark to Light dynamically */}</button>
      
  )
}

export default DarkModeToggle
