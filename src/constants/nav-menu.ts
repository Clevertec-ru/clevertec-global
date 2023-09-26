export enum menuText {
    about = 'About us',
    whatWeDo = 'What we do',
    cases = 'Cases',
    contactUs = 'Contact us',
}

export enum SectionVariants {
    about='about',
    whatWeDo='what-we-do',
    cases = 'cases',
    contactUs = 'contact-us'

}

export const NAV_MENU = {
    logoTitle: 'WislaCode Solutions',
    menu: [
        {
            text: menuText.about,
            link: `/#${SectionVariants.about}`
        },
        {
            text: menuText.whatWeDo,
            link: `/#${SectionVariants.whatWeDo}`
        },
        {
            text: menuText.cases,
            link: `/#${SectionVariants.cases}`
        },
        {
            text: menuText.contactUs,
            link: `/#${SectionVariants.contactUs}`
        }
    ]
}
