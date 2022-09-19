import {MARK_COMPLETED, ADD_ITEM, DELETE_ITEM} from './actionType';

const initialState = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    completed: true,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    completed: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    completed: false,
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ITEM: {
      const newState = state.filter(td => td.id !== action.payload);
      return newState;
    }
    case MARK_COMPLETED: {
      const newState = state.map(td => {
        if (td.id === action.payload) td.completed = !td.completed;
        return td;
      });
      return newState;
    }
    case ADD_ITEM: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default reducer;
