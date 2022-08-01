import React from 'react';
import {
  ContactItem,
  BtnOnDelet,
  ContactInfo,
  ListOfContacts,
} from './ContactsList.styled';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ListOfContacts>
      {contacts.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <ContactInfo>
            <b>&#183;</b> {name} : {number}
          </ContactInfo>
          <BtnOnDelet
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </BtnOnDelet>
        </ContactItem>
      ))}
    </ListOfContacts>
  );
};

ContactsList.prototype = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
