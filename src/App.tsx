import React from 'react';
import './App.css';
import { Page } from './components/common/Page/Page';
import { useDefaultTheme } from './hooks/useDefaultTheme';

function App() {
  useDefaultTheme();
  return (
    <Page />
  );
}

export default App;
