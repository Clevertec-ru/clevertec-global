const casesImagesURL = '/images/cases/';

export enum CasesType {
    sense = 'sense',
    digitalLeasing = 'digitalLeasing',
    INSNC = 'INSNC',
}

export type CaseContent = {
    title: string;
    content: string;
    image: string;
    key: number;
};

export const CASES_CONTENT: CaseContent[] = [
  {
    title: 'Sense. A super app beyond mobile banking',
    content: 'One-stop access to daily services — payments, transfers, tax payments, and mobileoperator services.',
    image: `${casesImagesURL}sense.jpg`,
    key: 1,
},
{
    title: 'Digital leasing. Advanced Customer Portal',
    content: 'Digitized traditional leasing — online vehicle search, booking, application and contract processing, document management.',
    image: `${casesImagesURL}leasing.jpg`,
    key: 2,
},
{
    title: 'INSNC. Next-Gen Mobile Banking',
    content: 'We drove the bank`s transition from basic banking functionalities to the comprehensive digital banking platform with revolutionary UX/UI and a wide range of operations supported online.',
    image: `${casesImagesURL}insnc.jpg`,    
    key: 3,
},
];
