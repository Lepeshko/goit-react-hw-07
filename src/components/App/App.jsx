import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import ContactForm
  from "../ContactForm/ContactForm";
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import { selectError, selectIsLoading } from "../../redux/contactsSlice";
import css from './App.module.css'
import { Comment } from "react-loader-spinner";


function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
   const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
 

 return (
   <div className={css.appContainer}>
     <h1 className={css.header}>Contact Manager</h1>
     <ContactForm />
     {isLoading && !error && (
       <div className={css.loaderContainer}>
         <Comment />
       </div>
     )}
     <SearchBox />
     <ContactList />
   </div>
 );
}

export default App;
