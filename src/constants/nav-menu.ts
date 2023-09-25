export enum NavSections {
    about='about',
    whatWeDo='what-we-do',
    cases = 'cases',
    contactUs = 'contact-us'

}
export const NAV_MENU = {
    logoTitle: 'WislaCode Solutions',
    menu: [
        {
            text: 'About',
            link: `/#${NavSections.about}`
        },
        {
            text: 'What we do',
            link: `/#${NavSections.whatWeDo}`
        },
        {
            text: 'Cases',
            link: `/#${NavSections.cases}`
        },
        {
            text: 'Contact us',
            link: `/#${NavSections.contactUs}`
        }
    ]
}
