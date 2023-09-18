import { CasesSection } from '../src/components/cases-section';
import { ContactUs } from '../src/components/contact-us';
import { Footer } from '../src/components/footer';
import { NavMenu } from '../src/components/nav-menu';
import { Header } from '../src/components/header';
import { About } from '../src/components/about';

const Page = () => (
    <>
        <NavMenu />
        <Header />
        <About />
        <CasesSection />
        <ContactUs />
        <Footer />
    </>
);

export default Page;
