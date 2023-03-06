
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
    return (
      <label className={css.label}>
        Find contacts by name
        <input
            onChange={ onChange }
            className={css.value}
            type="text"
            value={value}
            name="name"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            />
      </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}; 

export default Filter;