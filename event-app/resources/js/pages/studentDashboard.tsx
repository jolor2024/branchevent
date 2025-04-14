import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import AppFooterLayout from '@/layouts/app/app-footer-layout';
import { CircleUserRound } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Student dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({companies}) {
    return (
        <div className='bg-white'>
            <Head title="LIA connect" />
            <header className='py-4'>
            <nav className="flex items-center justify-between gap-4 px-6">
            <a href="">
                    <img src="/assets/logored.svg" alt="Logo" className="w-[160px] max-h-[48px]" />
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
            </header>
            <main className="px-5 lg:px-0 pt-6 lg:pt-0">
            <div className='hidden lg:block py-30 relative'>
                <img 
                    src="/assets/herostudent.png" 
                    alt="Background" 
                    className='absolute top-0 left-0 w-full h-full object-cover object-[50%_10%] filter grayscale brightness-75' 
                />
                <div className='max-w-[1200px] mx-auto relative z-10 px-5'>
                    <h1 className='text-white text-5xl font-light w-[40%]'>HITTA DIN FRAMTIDA PRAKTIKPLATS</h1>
                </div>
            </div>

                <div className='lg:hidden px-5'>
                    <h1 className='text-primary-red text-5xl font-light'>HITTA DIN FRAMTIDA PRAKTIKPLATS</h1>
                    <img src="/assets/herostudent.png" alt="" className=' w-full mt-6  filter grayscale brightness-75' />
                </div>
                



                <div className='grid md:grid-col-2 lg:grid-cols-3 gap-4 py-4 max-w-[1200px] mx-auto px-5'>
                {companies.map(company => {
                    const rolesArray = company.working_roles ? JSON.parse(company.working_roles) : [];
                    return (
                        <div className='flex flex-col gap-3 bg-[#EEE] rounded-xl py-3 px-3'>
                            <h2 className='text-black font-bold text-base'>{company.company_name}</h2>
                            <p className=''>{company.company_type}</p>
                            <div className='flex gap-4 flex-wrap'>
                                {rolesArray.length > 0 && (
                                    rolesArray.map((role, index) => {
                                        const colors = ['bg-amber-300', 'bg-green-300', 'bg-blue-300'];
                                        const colorClass = colors[index % 3];
                                        return (
                                            <span key={index} className={`${colorClass} px-6 rounded-xl py-1.5`}>
                                                {role}
                                            </span>
                                        );
                                    })
                            )}
                            </div>
      
                        </div>
                    ) 
                })}


                </div>
            </main>
            <AppFooterLayout isCompany={false}/>
        </div>
    );
}
