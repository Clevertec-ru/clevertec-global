export const TYPES = {
  CONTACT_US_REQUEST: 'CONTACT_US_REQUEST',
  CONTACT_US_SUCCESS: 'CONTACT_US_SUCCESS',
  CONTACT_US_ERROR: 'CONTACT_US_ERROR',
  CONTACT_US_CLEAR: 'CONTACT_US_CLEAR',
  SET_MODAL: 'SET_MODAL',
};

export type ModalRequestProps = {
  type: string;
};
