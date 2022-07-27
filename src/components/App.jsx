import InputForm from './InputForm/InputForm';
import PhoneList from './PhoneList/PhoneList';
import Filter from './Filter/Filter';
import { Container, MyHeader } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, changeFilter, deleteNote } from 'Redux/actions';

const App = () => {
  const notes = useSelector(({ contacts: { items } }) => items);
  const filter = useSelector(({ contacts: { filter } }) => filter);
  const dispatch = useDispatch();

  const handleSubmitForm = (e, data) => {
    e.preventDefault();

    if (checkUsers(data)) {
      alert(`${data.name} is already in contacts`);
      return false;
    }

    dispatch(addNote(data));

    return true;
  };

  const handleFilter = e =>
    dispatch(changeFilter(e.currentTarget.value.toLowerCase()));

  const checkUsers = data =>
    notes.find(({ name }) => name.toLowerCase() === data.name.toLowerCase());

  const deleteUser = deletedId => {
    dispatch(deleteNote(deletedId));
  };

  const filterUsers = () =>
    notes.filter(item => item.name.toLowerCase().includes(filter));

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
