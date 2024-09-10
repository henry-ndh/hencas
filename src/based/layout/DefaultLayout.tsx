import { ReactNode } from 'react';
import Header from './Header';
import styled from 'styled-components';
import { Toaster } from '@/components/ui/toaster';

type DefaultLayoutProps = {
    children?: ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <DefaultLayoutWrapper>
            <DefaultLayoutInner>
                <Header />
                <Child className="child">
                    {children}
                    <Toaster />
                </Child>
            </DefaultLayoutInner>
        </DefaultLayoutWrapper>
    );
}

const DefaultLayoutWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100dvh;
    flex-direction: column;
    margin: 0 auto;
`;

const DefaultLayoutInner = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100dvh;
    margin: 0 auto;
`;

const Child = styled.div`
    height: 88%;
`;
