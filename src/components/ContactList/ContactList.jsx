const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="contact_list">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="contact_list_item">
          <p className="contact_name">
            {name}: {number}
          </p>
          <button className="contact_btn" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
