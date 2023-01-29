import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts().map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.func.isRequired,
  //   deleteContact: PropTypes.func.isRequired,
};
