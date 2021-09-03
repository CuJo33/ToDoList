import {
  VisibilityFilters,
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  CLEAR_ITEM,
  TOGGLE_ITEM,
  SET_VISIBILITY_FILTER,
} from "./actions.js";
import { combineReducers } from "redux";

function visibilityFilterReducer(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function itemReducer(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          id: action.id,
          description: action.text,
          completed: false,
        },
      ];
    case REMOVE_ITEM:
      return state.filter((value) => {
        return action.id !== value.id;
      });
    case CLEAR_ITEM:
      return state.filter((value) => {
        return action.id !== value.id;
      });
    case TOGGLE_ITEM:
      return state.map((item) => {
        if (item.id === action.id) {
          return Object.assign({}, item, {
            completed: !item.completed,
          });
        }
        return item;
      });
    case EDIT_ITEM:
      return state.map((item) => {
        if (item.id === action.id) {
          return Object.assign({}, item, {
            description: action.text,
          });
        }
        return item;
      });
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  visibilityFilter: visibilityFilterReducer,
  items: itemReducer,
});
