import { FORECAST_RECEIVED } from '../constants';
import { groupDays } from '../transformers';

function reducer (state, action ) {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case FORECAST_RECEIVED: {
      nextState.status = action.payload.cod;
      nextState.list = Array.from(groupDays(action.payload.list).entries());
      nextState.city = action.payload.city;
    }
  }

  return nextState;
}

export default reducer;