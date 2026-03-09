import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.js';
import { FiMoon, FiSun } from 'react-icons/fi';
import '../styles/style.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
    </button>
  );
}
