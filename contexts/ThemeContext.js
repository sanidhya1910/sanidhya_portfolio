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
      // Dark theme - fabrica-inspired dark mode
      root.style.setProperty('--primary-color', '#0A0A0A')
      root.style.setProperty('--secondary-color', '#ffffff')
      root.style.setProperty('--accent-color', '#6366F1')
      root.style.setProperty('--text-primary', '#ffffff')
      root.style.setProperty('--text-secondary', '#D1D5DB')
      root.style.setProperty('--bg-primary', '#0A0A0A')
      root.style.setProperty('--bg-secondary', '#111111')
      root.style.setProperty('--bg-tertiary', '#1F1F1F')
      root.style.setProperty('--border-color', '#374151')
      root.style.setProperty('--shadow', '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)')
      root.style.setProperty('--shadow-lg', '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)')
      root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #0A0A0A, #111111)')
      root.style.setProperty('--gradient-accent', 'linear-gradient(135deg, #6366F1, #8B5CF6)')
      // Skill level colors for dark theme
      root.style.setProperty('--skill-expert', '#6366F1')
      root.style.setProperty('--skill-advanced', '#8B5CF6')
      root.style.setProperty('--skill-intermediate', '#A855F7')
      root.style.setProperty('--skill-developing', '#C084FC')
      root.style.setProperty('--skill-beginner', '#DDD6FE')
      // Navbar scrolled background for dark theme
      root.style.setProperty('--navbar-scrolled-bg', 'rgba(10, 10, 10, 0.95)')
      localStorage.setItem('theme', 'dark')
    } else {
      // Light theme - fabrica-inspired clean design
      root.style.setProperty('--primary-color', '#0A0A0A')
      root.style.setProperty('--secondary-color', '#ffffff')
      root.style.setProperty('--accent-color', '#6366F1')
      root.style.setProperty('--text-primary', '#0A0A0A')
      root.style.setProperty('--text-secondary', '#6B7280')
      root.style.setProperty('--bg-primary', '#ffffff')
      root.style.setProperty('--bg-secondary', '#F9FAFB')
      root.style.setProperty('--bg-tertiary', '#ffffff')
      root.style.setProperty('--border-color', '#E5E7EB')
      root.style.setProperty('--shadow', '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)')
      root.style.setProperty('--shadow-lg', '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)')
      root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #ffffff, #F9FAFB)')
      root.style.setProperty('--gradient-accent', 'linear-gradient(135deg, #6366F1, #8B5CF6)')
      // Skill level colors for light theme
      root.style.setProperty('--skill-expert', '#6366F1')
      root.style.setProperty('--skill-advanced', '#8B5CF6')
      root.style.setProperty('--skill-intermediate', '#A855F7')
      root.style.setProperty('--skill-developing', '#C084FC')
      root.style.setProperty('--skill-beginner', '#E5E7EB')
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
