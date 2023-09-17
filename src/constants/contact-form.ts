export const CONTACT_FORM_DATA = {
    title: 'Let’s get In Touch',
    inputs: [
        {
            placeholder: 'Name',
            type: 'text',
            fieldName: 'name',
            errorMessage: 'Поле Имя должно быть от 2 до 256 русских букв',
            regex: /^[А-Яа-я\s]{2,256}$/
        }, 
        {
            placeholder: 'E-mail',
            type: 'email',
            fieldName: 'email',
            errorMessage: 'Введите корректный адрес',
            regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        }
    ],
    textarea: {
        placeholder: 'Что хотите обсудить?',
        fieldName: 'content'
    },
    submitButton: 'Отправить'
}

export type ContactDataProps = {
    name: string,
    email: string,
    content: string,
}

export const INITIAL_FORM_VALUE: ContactDataProps = {
    name: '',
    email: '',
    content: ''
}

