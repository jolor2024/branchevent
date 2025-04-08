import AppLayout from '@/layouts/app-layout';
import AppFooterLayout from '@/layouts/app/app-footer-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { CircleUserRound } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Company Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Company Dashboard" />

            <nav className="flex items-center justify-between gap-4">
                <a href="" className="w-44">
                    <img src="/assets/loggo_white.svg" />
                </a>

                <Link
                    href={route('login')}
                    className="line-height 16px inline-flex items-center space-x-2 rounded-lg border border-transparent px-5 py-1.5 text-sm leading-normal font-normal text-white hover:border-[#19140035]"
                >
                    <span>Logga in</span>
                    <CircleUserRound />
                </Link>
            </nav>

            <main>
                <div className="">
                    <h2 className="text-center font-sans text-[8px] leading-[8px] font-normal tracking-[0px]">Polestar</h2>
                </div>

                <p className="font-sans text-[4px] leading-[5.2px] font-normal tracking-[0px]">Jobb-beskrivning:</p>
                <textarea className="top-[35px] h-[141px] w-[345px] rounded-[16px] border-[1px]"></textarea>

                <hr></hr>

                <h3 className="font-sans text-[4px] leading-[5.2px] font-normal tracking-[0px]">Vilka yrkesroller söker ni?</h3>
                <hr></hr>
            </main>

            <AppFooterLayout></AppFooterLayout>
        </AppLayout>
    );
}
