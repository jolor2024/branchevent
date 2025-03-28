import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <header className="w-full bg-white text-sm not-has-[nav]:hidden">
                <nav className="flex items-center justify-between gap-4 px-6 py-4">
                    <a href="" className="w-44">
                        <img src="/yrgologo.svg" />
                    </a>
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A]"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('loginStudent')}
                                className="bg-primary-red inline-block rounded-lg border border-transparent px-5 py-1.5 text-sm leading-normal text-white hover:border-[#19140035]"
                            >
                                Logga in
                            </Link>
                            {/*
                                <Link
                                href={route('register')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] "
                            >
                                Register
                            </Link>
                            */}
                        </>
                    )}
                </nav>
                <div className="bg-primary-red py-10">
                    <h1 className="text-[96px] text-white">
                        LIA <br /> EVENT 2025
                        <br /> YRGO
                    </h1>
                </div>

                <div className='py-10 mx-auto text-center flex gap-10 justify-center bg-white'>
                    <div className='bg-primary-red py-2 px-2 rounded-xl'>
                    <Link
                        href={route('home')}
                        className=" inline-block rounded-lg border border-transparent px-5 py-1.5 text-sm leading-normal text-white hover:border-[#19140035]"
                    >
                        Företag
                        </Link>

                    <Link
                        href={route('homeStudent')}
                        className="bg-white inline-block rounded-lg border border-transparent px-5 py-1.5 text-sm leading-normal text-primary-red hover:border-[#19140035]"
                    >
                    Elev
                    </Link>
                    </div>
                </div>
            </header>
        </>
    );
}
