import { useReducer, SyntheticEvent } from 'react';
import { ContactDataProps } from '../constants/contact-form';
import { reducer, initialState } from '../store/contact-us';
import { setModal, contactUsClear } from '../store/contact-us/actions';
import { onContactUs } from '../store/contact-us/send-form';

export const useForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addFormData = (values: ContactDataProps) => {
    onContactUs({ dispatch, values });
  };

  const setModalHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(setModal());
  };

  const clearAndCloseForm = () => {
    dispatch(setModal());
    dispatch(contactUsClear());
  };

  return { isShowModal: state.isShowModal, addFormData, setModalHandler, clearAndCloseForm };
};
