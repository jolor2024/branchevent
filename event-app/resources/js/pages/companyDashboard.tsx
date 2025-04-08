import AppFooterLayout from '@/layouts/app/app-footer-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { CircleUserRound } from 'lucide-react';
import OuterLayout from '@/layouts/app/app-outer-layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Company Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <OuterLayout isCompany={true}>
            <div>
                <Head title="Company Dashboard" />

                <nav className="flex items-center justify-between gap-4 text-black">
                    <a href="/" className="w-44">
                        <img src="/assets/loggo_white.svg" />
                    </a>

                    <Link
                        method='get'
                        href={route('profile.edit')}    
                        className='flex gap-2'
                    >
                    <span>Konto</span>
                    <CircleUserRound />
                    </Link>
                </nav>

                <main className="mr-[24px] ml-[24px]">
                    <form>
                        <div className="">
                            <h2 className="leading-2xl text-center font-sans text-3xl font-normal tracking-[0px]">Polestar</h2>
                        </div>

                        <div className="">
                            <label htmlFor="description" className="text-1xl font-sans leading-[5.2px] font-normal tracking-[0px]">
                                Jobb-beskrivning:
                            </label>

                            <textarea
                                id="description"
                                name="description"
                                className="top-[35px] mt-[10px] mb-[24px] h-[141px] w-full rounded-[16px] border-[1px]"
                            ></textarea>
                        </div>

                        <hr className=""></hr>

                        <div>
                            <h3 className="text-1xl mt-[24px] mb-[24px] font-sans leading-[5.2px] font-normal tracking-[0px]">
                                VILKA YRKESROLLER SÖKER NI?
                            </h3>
                        </div>

                        <hr></hr>

                        <button>SPARA ÄNDRINGAR</button>
                    </form>
                </main>

                <AppFooterLayout isCompany={true}></AppFooterLayout>
            </div>
        </OuterLayout>
    );
}
