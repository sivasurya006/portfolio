import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/style.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
      <span className="sr-only">Switch to {theme === 'light' ? 'dark' : 'light'} theme</span>
    </button>
  );
}
