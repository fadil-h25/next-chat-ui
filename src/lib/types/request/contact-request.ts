export type AddNewContact = {
  name: string;
  phone: string;
};

export type UpdateContact = {
  contactId: number;
  name: string;
};
export type DeleteContact = {
  contactId: number;
};
