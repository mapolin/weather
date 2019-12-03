import { Forecast } from '../services';
import { FORECAST_RECEIVED, FORECAST_ERROR } from '../constants';
const ForecastService = new Forecast();

function action () {
  return async (dispatch, getState) => {
    ForecastService.request()
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: FORECAST_RECEIVED,
          payload: json
        });
      })
      .catch(error => {
        dispatch({
          type: FORECAST_ERROR,
          payload: error
        })
      });
  }
}

export default action;