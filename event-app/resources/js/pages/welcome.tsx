import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from 'react';
import { CircleUserRound } from 'lucide-react';

import FooterLayout from '@/layouts/app/app-footer-layout';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const [activeTab, setActiveTab] = useState("company");

  

    // Change Color and info about the event if the user is a student or a company
    useEffect(() => {
        const header = document.getElementById('header');
        const hero = document.getElementById('hero');
        const event = document.getElementById('event');
        const footer = document.getElementById('footer');
        const registerButton = document.getElementById('register-button');

        if (activeTab === "company") {
            header.classList.remove("bg-primary-red");
            header.classList.add("bg-primary-blue");
            hero.classList.remove("bg-primary-red");
            hero.classList.add("bg-primary-blue");
            footer.classList.remove("bg-primary-red");
            footer.classList.add("bg-primary-blue");
            registerButton.classList.remove("bg-primary-red");
            registerButton.classList.add("bg-primary-blue");
            event.innerHTML = "Här kan ni som företag registrera er och skapa en profil med snabb information, för att elever enklare ska kunna ta kontakt med er.";
        } else if (activeTab === "student") {
            header.classList.remove("bg-primary-blue");
            header.classList.add("bg-primary-red");
            hero.classList.remove("bg-primary-blue");///
            hero.classList.add("bg-primary-red");////
            footer.classList.remove("bg-primary-blue");
            footer.classList.add("bg-primary-red");
            registerButton.classList.remove("bg-primary-blue");
            registerButton.classList.add("bg-primary-red");
            event.innerHTML="Välkommen Digital Designers och Webbutvecklare på mingelevent för att hitta framtida LIA-platser och skapa kontakter med företag. ";
        }
    }, [activeTab]);

    return (
        
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <header id="header" className="bg-primary-blue text-sm not-has-[nav]:hidden">
                <nav className="flex items-center justify-between gap-4 px-6 py-4">
                    <a href="" className="w-44">
                        <img src="/assets/loggo_white.svg" />
                    </a>
                    
                    <Link
                    href={route('login')}
                    className="inline-flex items-center space-x-2 rounded-lg border border-transparent px-5 py-1.5 text-sm leading-normal text-white hover:border-[#19140035] font-normal line-height 16px "
                    >
                   <span>Logga in</span>
                  <CircleUserRound />
                    </Link>

                   </nav>
                   <div id="hero" className="bg-primary-blue py-10">
                 <h1 className="text-white text-[68px] font-thin leading-[64px] tracking-tighter">
                          LIA <br /> 
                        <span className="text-[60px] font-bold">CONNECT</span><br /> 
                        2025
                            </h1>
                               </div>
            </header>
               <main>
               <section>
    <Tabs 
        defaultValue="company" 
        value={activeTab} 
        onValueChange={setActiveTab} 
        className="relative w-[344px] mt-[22px] ml-[25px]"
    >
        <TabsList className="flex h-[62px] rounded-[54px] bg-[#001A52] p-[7px_6px] justify-between">
            <TabsTrigger 
                value="company" 
                className="rounded-full text-lg font-medium bg-white text-black"
            >
                FÖRETAG
            </TabsTrigger>
            <TabsTrigger 
                value="student" 
                className="rounded-full text-lg font-medium text-white"
            >
                ELEV
            </TabsTrigger>
        </TabsList>
        <TabsContent value="company">
            <h2 className="text-2xl font-semibold mt-6 mb-2 text-right">FÖRETAG</h2>
            <p className="mb-4 font-thin text-right">Här kan ni som företag registrera er och skapa en profil med snabb information, för att elever enklare ska kunna ta kontakt med er.</p>
        </TabsContent>
        <TabsContent value="student">
            <h2 className="text-2xl font-semibold mt-6 mb-2 text-right">STUDENT</h2>
            <p className="mb-4 font-thin text-right">Här kan du som elev registrera dig och skapa en profil för att enkelt oxh smidigt kunna hitta och ta kontakt med företag.</p>
        </TabsContent>
    </Tabs>       
</section>
            <section>
            <Link
                href={route('register')}
                id="register-button"  className="bg-primary-blue inline-block rounded-[30px] border border-transparent px-[32px] py-[16px] text-sm leading-[16px] text-white hover:border-[#19140035] mb-4 w-[195px] h-[48px] font-medium uppercase tracking-normal"
                >
                Registrera dig
            </Link>
             {/* <h3 className="text-2xl font-semibold mt-6 mb-2">När och var. </h3>
                <p className="mb-4">
                23 april<br />
                    kl 13-15<br />
                    Lindholmspiren 3
                </p>*/}
                <img src='/assets/Smilley-colleagues.png' alt="welcome-group" className='mx-auto mt-4' />
                </section>
                <section>
                <h4 className="text-2xl font-semibold mt-6 mb-2 ">OM EVENTET</h4>
                <p id="event" className="text-black text-lg font-normal leading-6 tracking-wide mb-4">
                Välkomna på mingelevent för att hitta <br />
                 framtida medarbetare i ert företag <br /> 
                eller bara jobba tillsammans under<br /> 
                 LIA. Ni kommer att träffa <br /> 
                 Webbutvecklare och Digital Designers <br /> 
                 från Yrgo som vill visa vad de har <br /> 
                 jobbat med under året, och vi hoppas <br /> 
                 att ni hittar en match. </p>     
                      </section>
                    </main> 
            <FooterLayout/> 
        </>
    );
}


