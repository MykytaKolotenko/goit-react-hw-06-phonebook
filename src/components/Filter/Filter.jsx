import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'Redux/Action/actions';
import { Container, MyInput, MyP } from './styled';

function Filter() {
  const filter = useSelector(({ contacts: { filter } }) => filter);
  const dispatch = useDispatch();
  const handleFilter = e =>
    dispatch(changeFilter(e.currentTarget.value.toLowerCase()));

  return (
    <Container>
      <MyP>Find contacts by name</MyP>
      <MyInput
        type="text"
        onChange={handleFilter}
        placeholder="Search..."
        value={filter}
      />
    </Container>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
