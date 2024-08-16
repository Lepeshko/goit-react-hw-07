import { useDispatch } from "react-redux";
import { ImPhone } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <li className={css.container}>
      <div className={css.list}>
        <div className={css.listItem}>
          <BsPeopleFill />
          <p>{contact.name}</p>
        </div>
        <div className={css.listItem}>
          <ImPhone />
          <p>{contact.number}</p>
        </div>
      </div>
      <button className={css.delButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
