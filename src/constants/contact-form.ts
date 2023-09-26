export enum FormErrorMessages {
    requiredField = 'Required field',
    validEmail = 'Please enter a valid address',
}

export const CONTACT_FORM_DATA = {
    title: 'Let’s get In Touch',
    inputs: [
        {
            placeholder: 'Name*',
            type: 'text',
            fieldName: 'name',
            errorMessage: FormErrorMessages.requiredField,
            isRequired: true,
            regex: /^[A-za-z\s]{2,256}$/,
        },
        {
            placeholder: 'E-mail*',
            type: 'text',
            fieldName: 'email',
            errorMessage: FormErrorMessages.validEmail,
            isRequired: true,
            regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        },
    ],
    textarea: {
        placeholder: 'What would you like to enquire about?',
        fieldName: 'content',
    },
    submitButton: 'Submit',
};

export type ContactDataProps = {
    name: string;
    email: string;
    content: string;
};

export const INITIAL_FORM_VALUE: ContactDataProps = {
    name: '',
    email: '',
    content: '',
};
