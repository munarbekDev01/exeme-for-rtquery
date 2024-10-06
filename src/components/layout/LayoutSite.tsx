import React, { FC, ReactNode } from 'react';
import scss from "./LayoutSite.module.scss";
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface LayoutProps {
    children: ReactNode;
}
const LayoutSite: FC<LayoutProps> = ({children}) => {
    return (
        <div className={scss.LayoutSite}>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
};

export default LayoutSite;