import { Dispatch } from 'react';
import { contactUsRequest, contactUsSuccess, contactUsError, contactUsClear } from './actions';
import { mailDataJSON } from './helper';
import { ContactDataProps } from '../../constants/contact-form';

type ContactUsRequestProps = {
    type: string,
}

type ContactUsProps = {
    dispatch: Dispatch<ContactUsRequestProps>,
    values: ContactDataProps,
}

export const onContactUs = async ({ dispatch, values }: ContactUsProps) => {
    dispatch(contactUsRequest());
    try {
        await fetch('https://forms.clevertec.ru/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: mailDataJSON(values),
        });
        dispatch(contactUsSuccess());
        setTimeout(() => {
            dispatch(contactUsClear());
        }, 1600);
    } catch {
        dispatch(contactUsError());
        setTimeout(() => {
            dispatch(contactUsClear());
        }, 2400);
    }
};