export type ContactResponse = {
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
