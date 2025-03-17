// Check for saved dark mode preference
const darkMode = localStorage.getItem('darkMode');

// Apply the saved preference on load
if (darkMode === 'enabled') {
  document.documentElement.setAttribute('data-theme', 'dark');
}

function toggleDarkMode() {
  const root = document.documentElement;
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('darkMode', newTheme === 'dark' ? 'enabled' : null);
} 