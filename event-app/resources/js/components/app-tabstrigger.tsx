import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

export default function tabstrigger()  {
    return (
            <Tabs 
            defaultValue="company" 
            value={activeTab} 
            onValueChange={setActiveTab} 
            id= "tabsTrigger" className="relative w-[344px] mt-[22px]"
        >
            <TabsList className="flex h-[62px] w-[344px] rounded-[54px] bg-[#001A52] p-[7px_6px] justify-between lg:hidden">    
                <TabsTrigger 
                    value="company"     
                    className="rounded-full text-lg font-medium bg-amber-500 text-black lg:hidden">
                    FÖRETAG
                </TabsTrigger>
                <TabsTrigger 
                    value="student" 
                    className="rounded-full text-lg font-medium  bg-green-400 text-black  lg:hidden">
                    ELEV
                </TabsTrigger>
            </TabsList>
            <TabsContent value="company">
                <h2 className="text-2xl font-semibold mt-6 mb-2 ">FÖRETAG</h2>
                <p className="text-black text-lg font-normal leading-6 tracking-wide mb-4">Här kan ni som företag registrera er och skapa en profil med snabb information, för att elever enklare ska kunna ta kontakt med er.</p>
            </TabsContent>
            <TabsContent value="student">
                <h2 className="text-2xl font-semibold mt-6 mb-2">STUDENT</h2>
                <p className="text-black text-lg font-normal leading-6 tracking-wide mb-4">Här kan du som elev registrera dig och skapa en profil för att enkelt oxh smidigt kunna hitta och ta kontakt med företag.</p>
            </TabsContent>
        </Tabs>      
    );
    }