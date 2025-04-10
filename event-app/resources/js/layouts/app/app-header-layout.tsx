export default function HeaderLayout({activeTab, setActiveTab}) {
    return (
        <header id="header" className={`text-sm not-has-[nav]:hidden lg:bg-transparent ${
            activeTab === "company" ? "bg-primary-blue" : "bg-primary-red"
          }`}
        >
                    <nav className="flex items-center justify-between gap-4 px-6 py-4 lg:bg-white lg:px-16 lg:py-6">
                        <a href="" className="w-44">
                            <img src="/assets/loggo_white.svg"    className="block lg:hidden" alt="Logo white"/>
                              {/* Logo for Desktop*/}
                            <img src="/assets/yrgologo.svg" className="hidden lg:block h-10" alt="Logo red" />
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
                            id="register-desktop"
                            className={`hidden lg:inline-block ${
                              activeTab === "company" ? "bg-primary-blue" : "bg-primary-red"
                            } rounded-[30px] border border-transparent px-5 py-2 text-sm leading-[16px] text-white hover:border-[#19140035] font-medium uppercase tracking-normal`}
                          >
                            Registrera dig
                          </Link>
    
    
                         {/* Login also for desktop. at the right side of the nav*/}
                         <div className="flex items-center gap-4">
                            <Link
                                href={route('login')}
                                className="inline-flex items-center space-x-2 rounded-lg border border-transparent px-5 py-1.5 text-base leading-normal text-white hover:border-[#19140035] font-normal lg:text-black"
                            >
                                <span>Logga in</span>
                                <CircleUserRound className="text-white lg:text-primary-blue" />
                            </Link>
    
                       
                          </div>
                       </nav>
    
                </header>
    )
}