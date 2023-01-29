import PropTypes from 'prop-types';

export const ContactListItem = ({ id, name, number }) => {
  return (
    <li>
      {name}: {number}
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  //   deleteContact: PropTypes.func.isRequired,
};
