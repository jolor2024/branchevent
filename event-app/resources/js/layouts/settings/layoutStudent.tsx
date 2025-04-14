import { ArrowLeft } from 'lucide-react';
import { type PropsWithChildren } from 'react';
import FooterLayout from '../../layouts/app/app-footer-layout';



export default function StudentSettingsLayout({ children }: PropsWithChildren) {
    // When server-side rendering, we only render the layout on the client...
    if (typeof window === 'undefined') {
        return null;
    }

    const currentPath = window.location.pathname;

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
