import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text"  className={css.NameStyle} value={value} onChange={onChangeFilter} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired, 
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;