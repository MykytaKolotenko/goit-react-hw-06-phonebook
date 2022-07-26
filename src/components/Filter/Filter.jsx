import PropTypes from 'prop-types';
import { Container, MyInput, MyP } from './styled';

function Filter({ onFilter, value }) {
  return (
    <Container>
      <MyP>Find contacts by name</MyP>
      <MyInput
        type="text"
        onChange={onFilter}
        placeholder="Search..."
        value={value}
      />
    </Container>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
