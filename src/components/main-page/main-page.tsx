'use client'
import { useForm } from "../../hooks/form";
import { ContactUs } from "../contact-us";
import { Footer } from "../footer";
import { Header } from "../header";
import { ModalLayout } from "../modal-layout";
import { NavMenu } from "../nav-menu";
import { About } from '../about';
import { WhatWeDo } from '../what-we-do';
import { CasesSlider } from "../cases-slider";


export const MainPage = () => {
    const { addFormData, clearAndCloseForm, setModalHandler, isShowModal } = useForm();

    return (
        <>
            <Header modalHandler={setModalHandler} />
            <NavMenu />
            <About />
            <WhatWeDo />
            <CasesSlider />
            <ContactUs modalHandler={setModalHandler} />
            <Footer />
            <ModalLayout
                isShow={isShowModal}
                onAddDataHandler={addFormData}
                onCloseHandler={clearAndCloseForm}
            />
        </>
    );
};
