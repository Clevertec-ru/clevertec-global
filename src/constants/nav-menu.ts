export enum menuText {
    about = 'About us',
    whatWeDo = 'What we do',
    cases = 'Cases',
    contactUs = 'Contact us',
}

export const NAV_MENU = {
    logoTitle: 'WislaCode Solutions',
    menu: [
        {
            text: menuText.about,
            link: '/#about'
        },
        {
            text: menuText.whatWeDo,
            link: '/#what-we-do'
        },
        {
            text: menuText.cases,
            link: '/#cases'
        },
        {
            text: menuText.contactUs,
            link: '/#contact-us'
        }
    ]
}
