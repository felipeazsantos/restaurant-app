import React, { FC, ReactElement } from 'react';
import './App.css';
import { Page } from './pages/Page/Page';
import { Box } from '@mui/material';


const App: FC = (): ReactElement => {
  return (
    <Box>
      <Page />
    </Box>
  );
}

export default App;
