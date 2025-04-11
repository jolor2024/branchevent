import { Head, Link, usePage } from '@inertiajs/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from 'react';
import { CircleUserRound } from 'lucide-react';
import FooterLayout from '@/layouts/app/app-footer-layout';

export default function Welcome() {
    const [activeTab, setActiveTab] = useState("company");

    const eventTexts = {
      company: "Här kan ni som företag registrera er och skapa en profil med snabb information, för att elever enklare ska kunna ta kontakt med er.",
      student: "Här kan du som elev registrera dig och skapa en profil för att enkelt och smidigt kunna hitta och ta kontakt med företag.",
      about: "Välkommen Digital Designers och Webbutvecklare på mingelevent för att hitta framtida LIA-platser och skapa kontakter med företag. "
    };

    return (
    <>
        <Head title="Welcome">
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        </Head>

        <header id="header" className={`text-sm not-has-[nav]:hidden lg:bg-transparent ${
    activeTab === "company" ? "bg-primary-blue" : "bg-primary-red"
  }`} >
            <nav className="flex items-center justify-between px-6 lg:bg-white lg:px-16 py-4 lg:py-6">
                <a href="" className="w-44">
                    <img src="/assets/logo-white.svg"    className="block lg:hidden" alt="Logo white"/>
                      {/* Logo for Desktop*/}
                    <img src="/assets/yrgologo.svg" className="hidden lg:block h-10" alt="Logo red" />
                </a>
                  
                  <div className='flex flex-row gap-10'>
                  <div className="hidden lg:flex lg:flex-grow lg:justify-center">
                    <Tabs 
                        
                        value={activeTab} 
                        onValueChange={setActiveTab} 
                    >
                        <TabsList className={`flex py-6 px-1 rounded-[54px]  justify-between  ${activeTab === "company" ? "bg-primary-blue" : "bg-primary-red"}`}>
                            <TabsTrigger 
                                value="company" 
                                className={`rounded-full py-5 px-8 text-sm font-medium  ${activeTab === "company" ? "text-primary-blue" : "text-white"}`}>
                                FÖRETAG
                            </TabsTrigger>
                            <TabsTrigger 
                                value="student" 
                                className={`rounded-full py-5 px-8 text-sm font-medium   ${activeTab === "company" ? "text-white" : "text-primary-red"}`}>
                                ELEV
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                  {/* Register Desktop*/}
                  <Link
                    href={activeTab === 'company' 
                        ? route('register') 
                        : route('register.student')}
                    id="register-desktop"
                    className={`hidden lg:inline-block ${
                      activeTab === "company" ? "bg-primary-blue" : "bg-primary-red"
                    } rounded-[30px] border border-transparent px-8 py-4 text-sm leading-[16px] text-white hover:border-[#19140035] font-medium uppercase tracking-normal`}
                  >
                    Registrera dig
                  </Link>

                  {/* Login desktop */}
                  <Link
                      href={route('login')}
                      className="inline-flex items-center space-x-2 py-1.5 text-base leading-normal text-white hover:border-[#19140035] font-normal lg:text-black"
                  >
                      <span>Logga in</span>
                      <CircleUserRound className="text-white lg:text-primary-blue" />
                  </Link>
                  </div>
                  {/* Tabs Desktop */}
                
            </nav>
        </header>

        <div id="hero" className={`py-10 pl-4 lg:pl-16 flex flex-col justify-center items-left min-h-[70vh] 
          ${ activeTab === "company" ? "bg-primary-blue" : "bg-primary-red"}`}>
          <h1 className="text-white text-5xl sm:text-6xl lg:text-8xl font-thin leading-[64px] tracking-tighter lg:leading-24">

            LIA <br />
            <span className="font-bold">CONNECT</span>
            <br />
            2025
          </h1>

          <p className="lg:hidden text-white text-lg font-normal mt-4 tracking-wide">
            23 april | kl 13-15 | Lindholmspiren 3
          </p>
        </div>

      <main className='py-5 px-6 lg:py-0 lg:px-0'>
        <section className="flex justify-center">

        <Tabs 
          className='lg:hidden'
          value={activeTab} 
          onValueChange={setActiveTab} 
        >
            <TabsList className={`flex py-6 px-1 rounded-[54px]  justify-between  ${activeTab === "company" ? "bg-primary-blue" : "bg-primary-red"}`}>
                <TabsTrigger 
                    value="company" 
                    className={`rounded-full py-5 px-8 text-sm font-medium  ${activeTab === "company" ? "text-primary-blue" : "text-white"}`}>
                    FÖRETAG
                </TabsTrigger>
                <TabsTrigger 
                    value="student" 
                    className={`rounded-full py-5 px-8 text-sm font-medium   ${activeTab === "company" ? "text-white" : "text-primary-red"}`}>
                    ELEV
                </TabsTrigger>
            </TabsList>
        </Tabs>

          </section>

     
          {/* Mobile Company / Student info */}
          <section className="lg:hidden flex flex-col mx-auto">  
            <h4 className=" text-2xl text-left font-semibold mt-6 mb-2">
            {activeTab === "company" ? "FÖRETAG" : "ELEV"}
            </h4>
            <p id="event" className= "flex justify-center text-black text-lg font-normal leading-6 tracking-wide mb-4  ">
            {activeTab === "company" ? eventTexts.company : eventTexts.student}
            </p>
          </section>

          <div className="flex justify-center w-full" >
              <Link
                href={route('register')}
                id="register-button"
                className={`${
                  activeTab === "company" ? "bg-primary-blue" : "bg-primary-red"
                } inline-block rounded-[30px] border border-transparent px-[32px] py-[16px] text-sm leading-[16px] text-white hover:border-[#19140035] mb-4 w-[195px] h-[48px] font-medium uppercase tracking-normal mt-4 relative left-[10px] lg:hidden`}
              >
                Registrera dig
              </Link>
          </div>

          <img src='/assets/Smilley-colleagues.png' alt="welcome-group" className="mx-auto mt-4 lg:hidden" />


        <section className="flex flex-col mx-auto lg:hidden">  
          <h4 className=" text-2xl text-left font-semibold mt-6 mb-2">
          OM EVENTET
          </h4>
          <p id="event" className= "flex justify-center text-black text-lg font-normal leading-6 tracking-wide mb-4  ">
          {eventTexts.about}
          </p>
        </section>


      <div className="hidden lg:flex lg:justify-center  lg:w-full lg:px-8 lg:mt-8 lg:gap-8">
      
      {/* Desktop Company / Student info */}
      <section className="w-[25%]">
        <div className='flex flex-col'>
        <h4 className="text-2xl font-semibold mb-2 whitespace-nowrap">{activeTab === "company" ? "FÖRETAG" : "ELEV"}</h4>
          <div className="flex justify-start w-full">
            <p id="event-comp" className="text-black text-lg font-normal leading-6 tracking-wide mb-6">
            {activeTab === "company" ? eventTexts.company : eventTexts.student}
            </p>
          </div>
        </div>
      </section>

      {/* About event */}
      <section className="flex flex-col w-[25%]">
        <h4 className="text-2xl font-semibold mb-2 whitespace-nowrap">OM EVENTET</h4>
        <div className="flex justify-start w-full">
          <p id="event-comp" className="text-black text-lg font-normal leading-6 tracking-wide mb-6">
          {eventTexts.about}
          </p>
        </div>
      </section>

      <div className="flex justify-center items-center w-[25%]">
        <div className="w-full h-[2px] bg-black"></div>
      </div>
          
      <div className="flex justify-center items-center w-[25%]">
        <p className="font-['Inter'] font-normal text-[25px] leading-[25px] tracking-normal">
          23 april<br />
          kl 13-15<br />
          Lindholmspiren 3
        </p>
      </div>

      </div>

      </main> 
  <FooterLayout isCompany={activeTab === "company"}/> 
  </>
  );
}


