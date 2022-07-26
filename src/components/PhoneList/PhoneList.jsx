import React from 'react';
import PropTypes from 'prop-types';
import { Container, List, ListItem, MyBtn } from './styled';

function PhoneList({ contacts, onDelete }) {
  return (
    <Container>
      {contacts.length === 0 ? (
        <p>There is no user</p>
      ) : (
        <List>
          {contacts.map(item => (
            <ListItem key={item.id}>
              <p>
                {item.name}: {item.phone}
              </p>
              <MyBtn type="button" onClick={() => onDelete(item.id)}>
                x
              </MyBtn>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}

PhoneList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default PhoneList;
