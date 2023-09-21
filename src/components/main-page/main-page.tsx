'use client'
import { useRef } from 'react';

import { useForm } from "../../hooks/form";
import { CasesSection } from "../cases-section";
import { ContactUs } from "../contact-us";
import { Footer } from "../footer";
import { Header } from "../header";
import { ModalLayout } from "../modal-layout";
import { NavMenu } from "../nav-menu";
import { About } from '../about';
import { WhatWeDo } from '../what-we-do';
import { menuText } from '../../constants/nav-menu';

export const MainPage = () => {
    const { addFormData, clearAndCloseForm, setModalHandler, isShowModal } = useForm();

    const aboutRef = useRef<HTMLDivElement>(null);
    const whatWeDoRef = useRef<HTMLDivElement>(null);
    const casesRef = useRef<HTMLDivElement>(null);
    const contactUsRef = useRef<HTMLElement>(null);

    const scrollToComponent = (componentName: string) => {
        switch (componentName) {
            case menuText.about: {
                aboutRef.current && aboutRef.current.scrollIntoView({
                    behavior: 'smooth',
                });
                break;
            }
            case menuText.whatWeDo:
                whatWeDoRef.current && whatWeDoRef.current.scrollIntoView({
                    behavior: 'smooth',
                });
                break;
            case menuText.cases:
                casesRef.current && casesRef.current.scrollIntoView({ behavior: "smooth" });
                break;
            case menuText.contactUs:
                contactUsRef.current && contactUsRef.current.scrollIntoView({
                    behavior: 'smooth',
                });
                break;

            default:
                break;
        }
    };

    return (
        <>
            <Header modalHandler={setModalHandler} />
            <NavMenu
                scrollToComponent={scrollToComponent}
            />
            <About ref={aboutRef} />
            <WhatWeDo ref={whatWeDoRef} />
            <CasesSection ref={casesRef} />
            <ContactUs modalHandler={setModalHandler} ref={contactUsRef} />
            <Footer scrollToComponent={scrollToComponent}/>
            <ModalLayout isShow={isShowModal} onAddDataHandler={addFormData} onCloseHandler={clearAndCloseForm} />
        </>
    )
};
