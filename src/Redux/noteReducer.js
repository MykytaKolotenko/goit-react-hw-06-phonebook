import { createReducer } from '@reduxjs/toolkit';
import { addNote, changeFilter, deleteNote } from './actions';

const noteReducer = createReducer(0, {
  [addNote]: (state, action) => ({
    contacts: {
      ...state.contacts,
      items: [...state.contacts.items, action.payload],
    },
  }),
  [deleteNote]: (state, action) => ({
    contacts: {
      ...state.contacts,
      items: state.contacts.items.filter(item => item.id !== action.payload),
    },
  }),
  [changeFilter]: (state, action) => ({
    ...state.contacts,
    contacts: { ...state.contacts, filter: action.payload },
  }),
});

export default noteReducer;
