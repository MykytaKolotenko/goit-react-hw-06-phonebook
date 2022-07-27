import { createAction } from '@reduxjs/toolkit';
import {
  ADD_NOTE,
  DELETE_NOTE,
  CHANGE_FILTER,
} from '../ActionCreators/actionCreators';

export const addNote = createAction(ADD_NOTE);
export const deleteNote = createAction(DELETE_NOTE);
export const changeFilter = createAction(CHANGE_FILTER);
