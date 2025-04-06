import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import AppFooterLayout from '@/layouts/app/app-footer-layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Student dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({companies}) {
    return (
        <div>
            <Head title="Student Dashboard" />
            <header className='flex justify-between px-2 py-2'>
            <Link
                method='post'
                href={route('logout')}    
            >
            Logga ut
            </Link>

            <Link
                method="get"
                href={"/settings"}
            >
                Konto
            </Link>
            </header>
            <main className="px-5">
                <h1 className='text-primary-red text-5xl font-light'>HITTA DIN FRAMTIDA PRAKTIKPLATS</h1>
                <img src="" alt="" className='h-[210px] w-full bg-amber-300 mt-6' />
                <div className='py-4'>Filtrera</div>
                <div className='grid md:grid-cols-2 gap-4 py-4'>

                {companies.map(company => {
                    const rolesArray = company.working_roles ? JSON.parse(company.working_roles) : [];
                    return (
                        <div className='flex flex-col gap-3 bg-[#EEE] rounded-xl py-3 px-3'>
                            <h2 className='text-black font-bold text-base'>{company.company_name}</h2>
                            <p className=''>{company.company_type}</p>
                            <div className='flex gap-4 flex-wrap'>
                                {rolesArray.length > 0 && (
                                    rolesArray.map((role, index) => (
                                        <span className='bg-amber-300 px-6 rounded-xl py-1.5'>{role}</span>
                                    ))
                                )}
                            </div>
      
                        </div>
                    ) 
                })}


                </div>
            </main>
            <AppFooterLayout/>
        </div>
    );
}
