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
        const registerDesktop = document.getElementById('register-desktop');
        //const tabsButton = document.getElementById('tabsTrigger');

        if (activeTab === "company") {
            header.classList.remove("bg-primary-red");
            header.classList.add("bg-primary-blue");
            hero.classList.remove("bg-primary-red");
            hero.classList.add("bg-primary-blue");
            footer.classList.remove("bg-primary-red");
            footer.classList.add("bg-primary-blue");
            registerButton.classList.remove("bg-primary-red");
            registerButton.classList.add("bg-primary-blue");
            registerDesktop.classList.remove("bg-primary-red");
            registerDesktop.classList.add("bg-primary-blue");
            //tabsButton.classList.remove("bg-primary-red")
           //tabsButton.classList.add("bg-primary-blue");
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
            registerDesktop.classList.remove("bg-primary-blue");
            registerDesktop.classList.add("bg-primary-red");
            //tabsButton.classList.remove("bg-primary-blue");
            //tabsButton.classList.add("bg-primary-red");
            event.innerHTML="Välkommen Digital Designers och Webbutvecklare på mingelevent för att hitta framtida LIA-platser och skapa kontakter med företag. ";
        }
    }, [activeTab]);

    return (
        
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <header id="header" className="bg-primary-blue text-sm not-has-[nav]:hidden lg:bg-transparent ">
                <nav className="flex items-center justify-between gap-4 px-6 py-4 lg:bg-white lg:px-16 lg:py-6">
                    <a href="" className="w-44">
                        <img src="/assets/loggo_white.svg"    className="block lg:hidden" alt="Logo blanco"/>
                          {/* Logo for Desktop*/}
                        <img src="/assets/yrgologo.svg" className="hidden lg:block h-10" alt="Logo rojo" />
                    </a>
                     
                      {/* Tabs trigger in the middle. for Desktop */}
                      <div className="hidden lg:flex lg:flex-grow lg:justify-center">
                        <Tabs 
                            defaultValue="company" 
                            value={activeTab} 
                            onValueChange={setActiveTab} 
                            className="w-96"
                        >
                            <TabsList className="flex h-[62px] w-[344px] rounded-[54px] bg-[#001A52] p-[7px_6px] justify-between">
                                <TabsTrigger 
                                    value="company" 
                                    className="rounded-full text-lg font-medium bg-white text-black w-[164px]]">
                                    FÖRETAG
                                </TabsTrigger>
                                <TabsTrigger 
                                    value="student" 
                                    className="rounded-full text-lg font-medium  bg-[#f2e9e7] text-white w-[164px]">
                                    ELEV
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>

                     {/* Registrera dig for Desktop. up in tghe nav*/}
                     <Link
                            href={route('register')}
                           id="register-desktop" className={`hidden lg:inline-block bg-primary-blue  rounded-[30px] border border-transparent px-5 py-2 text-sm leading-[16px] text-white hover:border-[#19140035] font-medium uppercase tracking-normal`}
                        >
                            Registrera dig
                        </Link>

                     {/* Login also for desktop. at the right side of the nav*/}
                     <div className="flex items-center gap-4">
                        <Link
                            href={route('login')}
                            className="inline-flex items-center space-x-2 rounded-lg border border-transparent px-5 py-1.5 text-sm leading-normal text-white hover:border-[#19140035] font-normal lg:text-black"
                        >
                            <span>Logga in</span>
                            <CircleUserRound className="text-white lg:text-primary-blue" />
                        </Link>

                   
                      </div>
                   </nav>
                   <div id="hero" className="bg-primary-blue py-10 pl-[20px]  lg:pl-16 lg:py-16">
                 <h1 className="text-white text-[68px] font-thin leading-[64px] tracking-tighter   pl-[20px] lg:pl-0 lg:text-[100px] lg:leading-[90px]">
                          LIA <br /> 
                        <span className="text-[60px] font-bold  pl-[2px]">CONNECT</span><br /> 
                        2025
                            </h1>
                            <p className= "flex justify-cente text-white text-lg font-normal mt-4 tracking-wide  pl-[20px] lg:pl-0  lg:hidden lg:text-2xl"> 23 april | kl 13-15 | Lindholmspiren 3</p>
                               </div>

            </header>
               <main>
               <section className="flex justify-center ">
    <Tabs 
        defaultValue="company" 
        value={activeTab} 
        onValueChange={setActiveTab} 
        id= "tabsTrigger" className="relative w-[344px] mt-[22px] ml-[25px]"
    >
        <TabsList className="flex h-[62px] w-[344px] rounded-[54px] bg-[#001A52] p-[7px_6px] justify-between lg:hidden">
            <TabsTrigger 
                value="company" 
                className="rounded-full text-lg font-medium bg-white text-black w-[164px] lg:hidden">
                FÖRETAG
            </TabsTrigger>
            <TabsTrigger 
                value="student" 
                className="rounded-full text-lg font-medium  bg-[#f2e9e7] text-white w-[164px] lg:hidden">
                ELEV
            </TabsTrigger>
        </TabsList>
        <TabsContent value="company">
            <h2 className="text-2xl font-semibold mt-6 mb-2 w-[159px] h-[24px]">FÖRETAG</h2>
            <p className="text-black text-lg font-normal leading-6 tracking-wide mb-4 w-[340px] h-[192px]">Här kan ni som företag registrera er och skapa en profil med snabb information, för att elever enklare ska kunna ta kontakt med er.</p>
        </TabsContent>
        <TabsContent value="student">
            <h2 className="text-2xl font-semibold mt-6 mb-2 w-[159px] h-[24px]">STUDENT</h2>
            <p className="text-black text-lg font-normal leading-6 tracking-wide mb-4 w-[340px] h-[192px]">Här kan du som elev registrera dig och skapa en profil för att enkelt oxh smidigt kunna hitta och ta kontakt med företag.</p>
        </TabsContent>
    </Tabs>       
</section>
            <section>
                <div className="flex justify-center w-full" >
            <Link
                href={route('register')}
                id="register-button"  className= "bg-primary-blue inline-block rounded-[30px] border border-transparent px-[32px] py-[16px] text-sm leading-[16px] text-white hover:border-[#19140035] mb-4 w-[195px] h-[48px] font-medium uppercase tracking-normal mt-4 relative left-[10px] lg:hidden">
                Registrera dig
            </Link>
            </div>
             {/* <h3 className="text-2xl font-semibold mt-6 mb-2">När och var. </h3>
                <p className="mb-4">
                23 april<br />
                    kl 13-15<br />
                    Lindholmspiren 3
                </p>*/}
                <img src='/assets/Smilley-colleagues.png' alt="welcome-group" className="mx-auto mt-4 lg:hidden" />
                </section>
                <section className="flex flex-col items-center mx-auto">
                <h4 className=" text-2xl font-semibold mt-6 mb-2 w-[159px] h-[24px] px-[25px] whitespace-nowrap">
    OM EVENTET
    </h4>
    <div className="flex justify-end w-[344px]">
        <p id="event" className= "flex justify-center text-black text-lg font-normal leading-6 tracking-wide mb-4 w-[340px] h-[192px] pl-[20px] ">
            Välkomna på mingelevent för att hitta <br />
            framtida medarbetare i ert företag <br /> 
            eller bara jobba tillsammans under<br /> 
            LIA. Ni kommer att träffa <br /> 
            Webbutvecklare och Digital Designers <br /> 
            från Yrgo som vill visa vad de har <br /> 
            jobbat med under året, och vi hoppas <br /> 
            att ni hittar en match.
        </p>
    </div>
</section>
{/* Text just for  desktop */}
<div className="hidden lg:block lg:absolute lg:w-[260px] lg:h-[96px] lg:top-[769px] lg:left-[1228px]">
  <p className="mb-4 font-['Inter'] font-normal text-[25px] leading-[25px] tracking-normal text-right">
    23 april<br />
    kl 13-15<br />
    Lindholmspiren 3
  </p>
</div>
                    </main> 
                    <div className="lg:hidden">
                    <FooterLayout/> 
                    </div>
           
        </>
    );
}


