import React, { useEffect, useState, FC, ReactElement, useCallback } from 'react';
import './App.css';
import { Page } from './pages/Page/Page';
import { useDispatch } from 'react-redux';
import { fetchRestaurantDetails } from './api/apiRestaurant';
import { ActionType } from './types/Reducers';
import { CircularProgress, Box } from '@mui/material';
import { fetchMenuDetails } from './api/apiMenu';

const App: FC = (): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  const fetchData = useCallback(() => {
    fetchRestaurantDetails()
      .then((details) => {
        dispatch({
          type: ActionType.SET_WEB_SETTINGS,
          payload: details.webSettings
        })
      })
      .catch(err => console.log(err))

    fetchMenuDetails()
      .then((details) => {
        dispatch({
          type: ActionType.SET_MENU_DETAILS,
          payload: details
        });
        setIsLoading(false)
      })
  }, [dispatch])

  useEffect(() => {
    fetchData();
  }, [dispatch, fetchData])


  return (
    <Box>
      {isLoading ? <CircularProgress /> : < Page />}
    </Box>
  );
}

export default App;
