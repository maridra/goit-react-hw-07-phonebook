export const selectContacts = state => state.contactsData.contacts;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filterValue = selectFilterValue(state);

  const normalizedFilterValue = filterValue.toLowerCase();
  const visibleContacts = contacts
    ? contacts.filter(contact => {
        return contact.name.toLowerCase().includes(normalizedFilterValue);
      })
    : [];

  return visibleContacts;
};

export const selectIsLoading = state => state.contactsData.isLoading;

export const selectError = state => state.contactsData.error;

export const selectFilterValue = state => state.filterValue.value;
