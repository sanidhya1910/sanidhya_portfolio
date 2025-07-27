import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    // Update CSS variables and localStorage when theme changes
    const root = document.documentElement
    
    if (isDarkMode) {
      // Dark theme (current black & white)
      root.style.setProperty('--primary-color', '#ffffff')
      root.style.setProperty('--secondary-color', '#000000')
      root.style.setProperty('--accent-color', '#666666')
      root.style.setProperty('--text-primary', '#ffffff')
      root.style.setProperty('--text-secondary', '#cccccc')
      root.style.setProperty('--bg-primary', '#000000')
      root.style.setProperty('--bg-secondary', '#111111')
      root.style.setProperty('--bg-tertiary', '#222222')
      root.style.setProperty('--border-color', '#333333')
      root.style.setProperty('--shadow', '0 4px 6px -1px rgba(0, 0, 0, 0.5)')
      root.style.setProperty('--shadow-lg', '0 20px 25px -5px rgba(0, 0, 0, 0.6)')
      root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #000000, #333333)')
      root.style.setProperty('--gradient-accent', 'linear-gradient(135deg, #ffffff, #cccccc)')
      // Skill level colors for dark theme
      root.style.setProperty('--skill-expert', '#ffffff')
      root.style.setProperty('--skill-advanced', '#e5e5e5')
      root.style.setProperty('--skill-intermediate', '#cccccc')
      root.style.setProperty('--skill-developing', '#b3b3b3')
      root.style.setProperty('--skill-beginner', '#999999')
      // Navbar scrolled background for dark theme
      root.style.setProperty('--navbar-scrolled-bg', 'rgba(0, 0, 0, 0.95)')
      localStorage.setItem('theme', 'dark')
    } else {
      // Light theme (inverted colors)
      root.style.setProperty('--primary-color', '#000000')
      root.style.setProperty('--secondary-color', '#ffffff')
      root.style.setProperty('--accent-color', '#666666')
      root.style.setProperty('--text-primary', '#000000')
      root.style.setProperty('--text-secondary', '#333333')
      root.style.setProperty('--bg-primary', '#ffffff')
      root.style.setProperty('--bg-secondary', '#f8f9fa')
      root.style.setProperty('--bg-tertiary', '#e9ecef')
      root.style.setProperty('--border-color', '#dee2e6')
      root.style.setProperty('--shadow', '0 4px 6px -1px rgba(0, 0, 0, 0.1)')
      root.style.setProperty('--shadow-lg', '0 20px 25px -5px rgba(0, 0, 0, 0.15)')
      root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #ffffff, #f8f9fa)')
      root.style.setProperty('--gradient-accent', 'linear-gradient(135deg, #000000, #333333)')
      // Skill level colors for light theme
      root.style.setProperty('--skill-expert', '#0e0e0eff')
      root.style.setProperty('--skill-advanced', '#161616ff')
      root.style.setProperty('--skill-intermediate', '#242424ff')
      root.style.setProperty('--skill-developing', '#1f1f1fff')
      root.style.setProperty('--skill-beginner', '#303030ff')
      // Navbar scrolled background for light theme
      root.style.setProperty('--navbar-scrolled-bg', 'rgba(255, 255, 255, 0.95)')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
