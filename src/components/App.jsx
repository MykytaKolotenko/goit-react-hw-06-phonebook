import InputForm from './InputForm/InputForm';
import PhoneList from './PhoneList/PhoneList';
import Filter from './Filter/Filter';
import { Container, MyHeader } from './styled';

const App = () => {
  return (
    <Container>
      <MyHeader>Phonebook</MyHeader>
      <InputForm />

      <MyHeader>Contacts</MyHeader>
      <Filter />
      <PhoneList />
    </Container>
  );
};

export default App;
