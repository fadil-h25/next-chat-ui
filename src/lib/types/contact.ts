export type Contact = {
  id: number;
  ownerId: number;
  name: string;
  targetId: number;
  target: {
    phone: string;
  };
  totalUnreadMessage: number;
  relationId: number | null;
  relation: {
    lastMessage: {
      content: string;
    } | null;
  } | null;
};

export type AddNewContact = {
  name: string;
  phone: string;
};
