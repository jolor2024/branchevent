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
            <header className="mb-6 w-full text-sm not-has-[nav]:hidden bg-white">
                <nav className="flex items-center justify-end gap-4 ">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] "
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035]"
                            >
                                Logga in
                            </Link>
                            <Link
                                href={route('register')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] "
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav>
            </header>
            <main className="flex w-full flex-col-reverse lg:flex-row">
                    <h1 className='bg-amber-300 text-4xl text-red-800'>Välkommen till yrgo branchevent</h1>
            </main>
        </>
    );
}
