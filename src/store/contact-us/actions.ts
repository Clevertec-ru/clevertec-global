import { TYPES } from '../action-types';

export const contactUsRequest = () => ({
  type: TYPES.CONTACT_US_REQUEST,
});

export const contactUsSuccess = () => ({
  type: TYPES.CONTACT_US_SUCCESS,
});

export const contactUsError = () => ({
  type: TYPES.CONTACT_US_ERROR,
});

export const contactUsClear = () => ({
  type: TYPES.CONTACT_US_CLEAR,
});

export const setModal = () => ({
  type: TYPES.SET_MODAL,
});
