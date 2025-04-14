import { type PropsWithChildren } from 'react';
import FooterLayout from '../../layouts/app/app-footer-layout';
import { ArrowLeft } from 'lucide-react';

interface AuthLayoutProps {
    name?: string;
}

export default function AuthEventLayout({ children }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <>
        <div className='flex flex-row lg:px-20 gap-16 items-center justify-around p-4 lg:p-0'>
                <section className="max-w-xl">{children}</section>
                <div className='hidden lg:block'>
                    <img src="/assets/dashboard.png" alt="Logo" className="w-[400px]" />
                </div>
        </div>
        </>
    );
}