import { CasesSection } from '../src/components/cases-section';
import { ContactUs } from '../src/components/contact-us';
import { Footer } from '../src/components/footer';
import { NavMenu } from '../src/components/nav-menu';
import { Header } from '../src/components/header';
import { About } from '../src/components/about';
import { WhatWeDo } from '../src/components/what-we-do';

const Page = () => (
    <>
        <NavMenu />
        <Header />
        <About />
        <WhatWeDo />
        <CasesSection />
        <ContactUs />
        <Footer />
    </>
);

export default Page;
