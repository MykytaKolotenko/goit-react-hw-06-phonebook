import { createAction } from '@reduxjs/toolkit';
import * as types from './types';

export const addNote = createAction(types.ADD_NOTE);
export const deleteNote = createAction(types.DELETE_NOTE);
export const changeFilter = createAction(types.CHANGE_FILTER);