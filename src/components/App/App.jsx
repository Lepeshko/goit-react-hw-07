import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { selectError, selectIsLoading } from "../../redux/contactsSlice";
import css from "./App.module.css";
import { Oval } from "react-loader-spinner";

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
          <Oval
            height={80} // Розмір кружечка
            width={80}
            color="black" // Крутиться чорний кружечок
            secondaryColor="#808080" // Сірий фон
            ariaLabel="loading"
            wrapperStyle={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              height: "100vh",
            }}
          />
        </div>
      )}
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
