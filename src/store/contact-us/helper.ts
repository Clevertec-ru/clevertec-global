type ContactDataProps = {
  name: string;
  email: string;
  content: string;
};

type FormDataProps = {
  html?: string;
  text?: string;
  host?: string;
  subject?: string;
  type?: string;
  name: string;
  email: string;
  content: string;
};

const setContent = ({ name, email, content }: ContactDataProps) => {
  let htmlData = '';
  if (content) {
    htmlData += `Что хотите обсудить:  ${content}, <br>`;
  }
  if (name) {
    htmlData += `Имя: ${name}, <br>`;
  }
  if (email) {
    htmlData += `Email: ${email}, <br>`;
  }

  return { html: htmlData, text: htmlData.replaceAll('<br>', '') };
};

const FORM_DATA = (values: FormDataProps) => ({
  host: 'WislaCode',
  subject: 'WislaCode partnership',
  type: 'clevertec_start',
  ...setContent(values),
});

export const mailDataJSON = (values: FormDataProps) => JSON.stringify(FORM_DATA(values));
