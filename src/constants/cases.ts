const casesImagesURL = '/images/cases/';

export enum CasesType {
  sense = 'sense',
  digitalLeasing = 'digitalLeasing',
  ISNC = 'ISNC',
}

export type CaseContent = {
  title: string;
  content: string;
  image: string;
  key: string;
};

export const CASES_CONTENT: CaseContent[] = [
  {
    title: 'Sense. Суперапп вместо мобильного банка',
    content:
      'Мы сделали его общей точкой доступа к сервисам, которые нужны каждый день. Все виды платежей и переводов для частных лиц и предпринимателей, оплата налогов и управление услугами мобильного оператора в одном приложении.',
    image: `${casesImagesURL}cases-sense.png`,
    key: '1',
  },
  {
    title: 'Digital leasing. Платформа с продвинутым личным кабинетом клиента',
    content:
      'Провели цифровизацию классического лизинга: перевели в онлайн поиск и бронирование автомобилей, оформление заявок и договоров, работу со счетами и документами.',
    image: `${casesImagesURL}cases-leasing.png`,
    key: '2',
  },
  {
    title: 'ISNC. Мобильный банк нового поколения',
    content:
      'Помогли банку совершить переход к новому способу взаимодействия с клиентами через мобильное приложение. От стандартного банкинга с набором базовых функций к цифровому банку, в котором всё можно сделать онлайн.',
    image: `${casesImagesURL}cases-isnc.png`,
    key: '3',
  },
];
