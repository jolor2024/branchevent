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
                    <Link
                        href={route('login')}
                        className="bg-primary-blue inline-block rounded-lg border border-transparent px-5 py-1.5 text-sm leading-normal text-white hover:border-[#19140035]"
                    >
                        Logga in
                    </Link>
                </nav>
                <div className="bg-primary-blue py-10">
                    <h1 className="text-[96px] text-white">
                        LIA <br /> EVENT 2025
                        <br /> YRGO
                    </h1>
                </div>
          
             
            </header>
            <main>
            <Link
                href={route('register')}
                className="bg-primary-blue inline-block rounded-lg border border-transparent px-5 py-1.5 text-sm leading-normal text-white hover:border-[#19140035]"
            >
                Registrera dig
            </Link>
            </main>
        </>
    );
}
