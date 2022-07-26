import InputForm from './InputForm/InputForm';
import PhoneList from './PhoneList/PhoneList';
import Filter from './Filter/Filter';
import { Container, MyHeader } from './styled';
import { useState, useEffect } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('contacts'));

    if (items !== null || items.length !== 0) {
      setContacts(items);
    }
  }, []);

  useEffect(
    prevState => {
      localStorage.setItem('contacts', JSON.stringify(contacts));

      if (prevState === contacts && contacts.length !== 0) {
        setContacts(JSON.parse(localStorage.getItem('contacts')));
      }
    },
    [contacts]
  );

  const handleSubmitForm = (e, data) => {
    e.preventDefault();

    if (checkUsers(data)) {
      alert(`${data.name} is already in contacts`);
      return false;
    }

    setContacts(state => [...state, data]);

    return true;
  };

  const handleFilter = e => setFilter(e.currentTarget.value.toLowerCase());
  const checkUsers = data =>
    contacts.find(({ name }) => name.toLowerCase() === data.name.toLowerCase());
  const deleteUser = deletedId => {
    setContacts(contacts.filter(({ id }) => id !== deletedId));
  };
  const filterUsers = () =>
    contacts.filter(item => item.name.toLowerCase().includes(filter));

  return (
    <Container>
      <MyHeader>Phonebook</MyHeader>
      <InputForm handleSubmit={handleSubmitForm} />

      <MyHeader>Contacts</MyHeader>
      <Filter value={filter} onFilter={handleFilter} />
      <PhoneList contacts={filterUsers()} onDelete={deleteUser} />
    </Container>
  );
};

export default App;
