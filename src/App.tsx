import React, { useEffect, useState, FC, ReactElement } from 'react';
import './App.css';
import { Page } from './pages/Page/Page';
import { RestaurantDetails } from './types/RestaurantDetails';
import { useDispatch } from 'react-redux';
import { fetchRestaurantDetails } from './api/apiRestaurant';
import { ActionType } from './types/ActionsType';

const App: FC = (): ReactElement => {
  const [restaurantDetails, setRestaurantDetails] = useState<RestaurantDetails>({});
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRestaurantDetails()
      .then((details) => {
        setRestaurantDetails(details);
        dispatch({
          type: ActionType.SET_MENU_DETAILS,
          payload: details
        })
      })
      .catch(err => console.log(err));
  }, [dispatch])


  return (
    <Page />
  );
}

export default App;
