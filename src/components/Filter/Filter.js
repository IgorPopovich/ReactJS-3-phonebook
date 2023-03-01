import './Filter.css';

const Filter = ({ value, onChange }) => {
    return (
      <label>
        Find contacts by name
        <input
            onChange={ onChange }
            className='value'
            type="text"
            value={value}
            name="name"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            />
      </label>
  );
};

export default Filter;