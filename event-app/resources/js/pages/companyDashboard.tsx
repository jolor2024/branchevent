
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { CircleUserRound } from 'lucide-react';
import { X } from 'lucide-react';
import OuterLayout from '@/layouts/app/app-outer-layout';
import { FormEventHandler, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Auth, SharedData, User } from '@/types';
import InputError from '@/components/input-error';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';


type DashboardProps = {
    mustVerifyEmail: boolean;
    status?: string;
    isStudent: boolean;
    isCompany: boolean;
    companyName: string;
    companyType: string;
    working_roles: string[];
}

type ProfileForm = {
    name: string;
    email: string;
    companyName: string;
    companyType: string;
    working_roles: string[];
}



export default function Dashboard({mustVerifyEmail, status, isStudent, isCompany, companyName, companyType, working_roles}: DashboardProps) {
    const { auth } = usePage<SharedData>().props;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<Required<ProfileForm>>({
        name: auth.user.name,
        email: auth.user.email,
        companyName: companyName,
        companyType: companyType,
        working_roles: working_roles
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'), {
            preserveScroll: true,
        });
    };

    const handleToggleChange = (selectedRoles: string[]) => {
        setData('working_roles', selectedRoles);
    };
    {console.log(data)}
    
    return (
        <OuterLayout isCompany={true}>
            <div>
                <Head title="LIA connect" />

                <nav className="flex items-center justify-between gap-4 text-black">
                    <a href="/" className="w-44">
                        <img src="/assets/loggo_white.svg" />
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

                <main className="mr-[24px] ml-[24px]">
                <form onSubmit={submit} className="space-y-6">

                <div className="grid gap-2">
                        <Label htmlFor="companyName" className='text-sm' >Företagsnamn</Label>
                        <Input
                            id="companyName"
                            className="mt-1 block w-full border-1 border-black rounded-4xl"
                            value={data.companyName}
                            onChange={(e) => setData('companyName', e.target.value)}
                            required
                            autoComplete="companyName"
                            placeholder="Nytt Företagsnamn"
                        />

                        <InputError className="mt-2" message={errors.name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="companyType" className='text-sm' >Vad jobbar ni med?</Label>
                        <Input
                            id="companyType"
                            className="mt-1 block w-full border-1 border-black rounded-4xl"
                            value={data.companyType}
                            onChange={(e) => setData('companyType', e.target.value)}
                            required
                            autoComplete="companyType"
                            placeholder="T.ex Webbyrå, Bilförsäljning"
                        />

                        <InputError className="mt-2" message={errors.name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="studentRoles" className='text-sm'>VILKA YRKESROLLER SÖKER NI?</Label>
                        
                       
                        
                        <ToggleGroup 
                            value={data.working_roles}
                            onValueChange={handleToggleChange}
                            variant="default" size="sm" type="multiple" className="flex flex-wrap gap-4">
                            {data.working_roles.map((role, index) => (
                               <ToggleGroupItem
                               key={index}
                               variant="outline"
                               value={role}
                               className="px-4 py-2 bg-red-500 border border-gray-300 rounded-4xl hover:bg-gray-600"
                           >
                               {role}
                               <X />
                           </ToggleGroupItem>
                            ))}
                        </ToggleGroup>
                    </div>


                    <div className="flex items-center gap-4 justify-between lg:justify-normal">
                        <Button disabled={processing} className='bg-primary-red'>SPARA</Button>
                    </div>
                </form>
                </main>

            </div>
        </OuterLayout>
    );
}
