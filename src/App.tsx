import React, { useEffect, useState, FC, ReactElement, useCallback } from 'react';
import './App.css';
import { Page } from './pages/Page/Page';
import { RestaurantDetails } from './types/RestaurantDetails';
import { useDispatch } from 'react-redux';
import { fetchRestaurantDetails } from './api/apiRestaurant';
import { ActionType } from './types/Reducers';
import { CircularProgress, Box } from '@mui/material';

const App: FC = (): ReactElement => {
  // eslint-disable-next-line
  const [restaurantDetails, setRestaurantDetails] = useState<RestaurantDetails>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  const fetchData = useCallback(() => {
    fetchRestaurantDetails()
      .then((details) => {
        setRestaurantDetails(details);
        dispatch({
          type: ActionType.SET_WEB_SETTINGS,
          payload: details.webSettings
        })
        setIsLoading(false)
      });

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
