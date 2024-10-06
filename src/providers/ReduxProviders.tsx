'use client'
import React, { FC, ReactNode } from 'react';
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from '@/redux/api';
interface IReduxProvidersProps {
    children: ReactNode;
}

const ReduxProviders: FC<IReduxProvidersProps> = ({children}) => {
    return (
        <>
            <ApiProvider api={api}>{children}</ApiProvider>
        </>
    );
};

export default ReduxProviders;