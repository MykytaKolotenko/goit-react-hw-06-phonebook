import React from 'react';
import { Container, List, ListItem, MyBtn } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from 'Redux/Action/actions';

function PhoneList() {
  const notes = useSelector(({ contacts: { items } }) => items);
  const filter = useSelector(({ contacts: { filter } }) => filter);
  const dispatch = useDispatch();

  const deleteUser = deletedId => {
    dispatch(deleteNote(deletedId));
  };

  const filterUsers = () =>
    notes.filter(item => item.name.toLowerCase().includes(filter));

  return (
    <Container>
      {filterUsers().length === 0 ? (
        <p>There is no user</p>
      ) : (
        <List>
          {filterUsers().map(item => (
            <ListItem key={item.id}>
              <p>
                {item.name}: {item.phone}
              </p>
              <MyBtn type="button" onClick={() => deleteUser(item.id)}>
                x
              </MyBtn>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}

export default PhoneList;
