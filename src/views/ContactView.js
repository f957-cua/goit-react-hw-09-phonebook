import React, { useEffect } from "react";
import Phonebook from "../components/Phonebook";
import Contacts from "../components/Contacts";
import Filter from "../components/Filter";
import { useDispatch, useSelector } from "react-redux";
import { appOperations, appSelectors } from "../redux/app";

export default function ContactView() {
  const dispatch = useDispatch();

  const isLoading = useSelector(appSelectors.getLoadingStatus);
  const filledContactsCount = useSelector(appSelectors.filledContactsCount);

  useEffect(() => {
    dispatch(appOperations.fetchContact());
  }, [dispatch]);

  return (
    <>
      <Phonebook />

      {isLoading && <h1>Loading ...</h1>}
      {filledContactsCount > 0 && (
        <>
          <Filter />
          <Contacts />
        </>
      )}
    </>
  );
}
