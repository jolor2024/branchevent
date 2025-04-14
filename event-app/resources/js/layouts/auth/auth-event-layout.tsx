import { type PropsWithChildren } from 'react';
import FooterLayout from '../../layouts/app/app-footer-layout';
import { ArrowLeft } from 'lucide-react';

interface AuthLayoutProps {
    name?: string;
}

export default function AuthEventLayout({ children }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <>
        <div className='pt-5 pl-5'>
            <a href={"/dashboard"} >
            <ArrowLeft />
            </a>
        </div>

        <div className='flex flex-row lg:px-20 gap-16 items-center justify-around'>
                <section className="max-w-xl">{children}</section>
                <div className='hidden lg:block'>
                    <img src="/assets/dashboard.png" alt="Logo" className="w-[400px]" />
                </div>
        </div>
        <FooterLayout isCompany={false}></FooterLayout>
        </>
    );
}