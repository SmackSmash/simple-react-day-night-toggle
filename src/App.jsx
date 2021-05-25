import React, { useState } from 'react';
import Toggle from 'react-toggle';
import './Toggle.css';
import './App.scss';

const App = () => {
  const [theme, setTheme] = useState(localStorage.theme || 'light');

  const handleSwitchMode = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={`app app--${theme}`}>
      <h1>App works now!</h1>
      <Toggle defaultChecked={theme === 'dark' ? true : false} onChange={handleSwitchMode} />
    </div>
  );
};

export default App;
