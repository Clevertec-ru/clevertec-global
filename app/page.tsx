import { CasesSection } from '../src/components/cases-section';
import { ContactUs } from '../src/components/contact-us';
import { Footer } from '../src/components/footer';
import { NavMenu } from '../src/components/nav-menu';
import { Header } from '../src/components/header';

const Page = () => (
    <>
        <NavMenu />
        <Header />
        <CasesSection />
        <ContactUs />
        <Footer />
    </>
);

export default Page;
