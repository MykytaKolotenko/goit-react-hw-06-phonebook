import { createReducer } from '@reduxjs/toolkit';
import { addNote, changeFilter, deleteNote } from '../Action/actions';

const noteReducer = createReducer(0, {
  [addNote]: (state, action) => ({
    ...state,
    contacts: {
      ...state.contacts,
      items: [...state.contacts.items, action.payload],
    },
  }),
  [deleteNote]: (state, action) => ({
    ...state,
    contacts: {
      ...state.contacts,
      items: state.contacts.items.filter(item => item.id !== action.payload),
    },
  }),
  [changeFilter]: (state, action) => ({
    ...state,
    contacts: {
      ...state.contacts,
      filter: action.payload,
    },
  }),
});

export default noteReducer;
