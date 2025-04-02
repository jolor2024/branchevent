import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toggle } from '@/components/ui/toggle';

import FooterLayout from '../../layouts/app/app-footer-layout';


import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";


import { Checkbox } from "@/components/ui/checkbox"
import AuthLayout from '@/layouts/auth-layout';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";


type RegisterForm = {
    name: string;
    companyName: string;
    companyType: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        companyName: '',
        companyType: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    const [currentStep, setCurrentStep] = useState(1); 
    
    function goNext() {
        setCurrentStep(currentStep + 1);
    }

    function goPrev() {
        setCurrentStep(currentStep - 1);
    }

    return (
        <>
        <AuthLayout title="Skapa ett företagskonto" description="Enter your details below to create your account">
            <Head title="Register" />
            <div className='pt-10'>

            {currentStep === 1 && (
                <a href={"/"} >
                <ArrowLeft />
                </a>
            )}
           
            {currentStep === 2 && (
                <a href="#" onClick={goPrev} >
                <ArrowLeft />
                </a>
            )}
            </div>
            <h1 className='text-4xl font-thin my-4 p-0 mb-0'>SKAPA ETT FÖRETAGSKONTO</h1>

            <div className='flex justify-between mt-16 mb-8'>
                <div className='justify-center text-center'>
                    <div className={`mx-2 flex justify-center w-8 h-8 rounded-full text-center ${
                        currentStep >= 1 ? "bg-primary-blue" : "bg-[#DBDBDB]"
                    }`}>
                        <span className={` self-center ${
                        currentStep >= 1 ? "text-white" : "text-"
                    }`}>1</span>
                    </div>

                    <span>Info</span>
                </div>
             

                <hr className={`border-0 h-[2px] w-full mt-4  ${ currentStep >= 1 ? "bg-primary-blue" : "bg-[#DBDBDB]"} `}/>
              
                <div className='justify-center text-center'>
                    <div className={`mx-2 flex justify-center w-8 h-8 rounded-full text-center ${
                        currentStep >= 2 ? "bg-primary-blue" : "bg-[#DBDBDB]"
                    }`}>
                        <span className={` self-center ${
                        currentStep >= 2 ? "text-white" : "text-[#000]"
                        }`}>2</span>

                    </div>
                    <span>Detaljer</span>
                </div>
         

                <hr className={`border-0 h-[2px] w-full mt-4  ${ currentStep >= 3 ? "bg-primary-blue" : "bg-[#DBDBDB]"} `}/>

                <div className='justify-center text-center'>
                    <div className={`mx-2 flex justify-center w-8 h-8 rounded-full text-center ${
                        currentStep >= 3 ? "bg-primary-blue" : "bg-[#DBDBDB]"
                    }`}>
                        <span className={` self-center ${
                        currentStep >= 3 ? "text-white" : "text-[#000]"
                        }`}>3</span>

                    </div>
                    <span>Klar!</span>
                </div>
            </div>

            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="flex flex-col gap-8">
                
                    {currentStep === 1 && (
                    <>
                    
                    <div className="grid gap-4">
                        <Label htmlFor="name" className='text-sm'>DITT NAMN*</Label>
                        <Input className='border-1 border-black rounded-4xl'
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            disabled={processing}
                            placeholder="Full name"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="grid gap-4">
                        <Label htmlFor="email" className='text-sm'>EMAIL*</Label>
                        <Input className='border-1 border-black rounded-4xl'
                            id="email"
                            type="email"
                            required
                            tabIndex={2}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            disabled={processing}
                            placeholder="email@example.com"
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid gap-4">
                        <Label htmlFor="password" className='text-sm'>SKAPA LÖSENORD*</Label>
                        <Input
                            className='border-1 border-black rounded-4xl'
                            id="password"
                            type="password"
                            required
                            tabIndex={3}
                            autoComplete="new-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            disabled={processing}
                            placeholder="Password"
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="grid gap-4">
                        <Label htmlFor="password_confirmation" className='text-sm'>BEKRÄFTA LÖSENORD*</Label>
                        <Input
                            className='border-1 border-black rounded-4xl'
                            id="password_confirmation"
                            type="password"
                            required
                            tabIndex={4}
                            autoComplete="new-password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            disabled={processing}
                            placeholder="Confirm password"
                        />
                        <InputError message={errors.password_confirmation} />
                    </div>

                    <div className="grid gap-4">
                        <div className="items-top flex space-x-2">
                            <Checkbox id="terms1" />
                            <div className="grid gap-1.5 leading-none">
                                <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                Jag samtycker att mina uppgifter sparas i enlighet med GDPR
                                </label>

                            </div>
                        </div>
                    </div>

                    <Button type="button" onClick={goNext} className='bg-primary-blue w-[50%] self-end'>
                    GÅ VIDARE
                    <ArrowRight/>
                    </Button>
                    </>
                    )}

                    {currentStep === 2 && (
                    <>
                        <div className="grid gap-2">
                        <Label htmlFor="companyName" className='text-sm'>FÖRETAGETS NAMN*</Label>
                        <Input className='border-1 border-black rounded-4xl'
                            id="companyName"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="companyName"
                            value={data.companyName}
                            onChange={(e) => setData('companyName', e.target.value)}
                            disabled={processing}
                            placeholder="Företagets namn"
                        />
                        <InputError message={errors.companyName} className="mt-2" />
                        </div>

                        <div className="grid gap-2">
                        <Label htmlFor="companyType" className='text-sm'>VAD JOBBAR NI MED</Label>
                        <Input className='border-1 border-black rounded-4xl'
                            id="companyType"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="companyType"
                            value={data.companyType}
                            onChange={(e) => setData('companyType', e.target.value)}
                            disabled={processing}
                            placeholder="T.ex Designbyrå"
                        />
                        <InputError message={errors.companyType} className="mt-2" />
                        </div>

                        <div className="grid gap-2">
                        <Label htmlFor="studentRoles" className='text-sm'>VILKA YRKESROLLER SÖKER NI?</Label>
                        <ToggleGroup variant="default" size="sm" type="multiple" className="flex flex-wrap gap-4">
                            <ToggleGroupItem
                                variant="outline"
                                value="1"
                                className="px-4 py-2 bg-white border border-gray-300 rounded-4xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                UX
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                variant="outline"
                                value="2"
                                className="px-4 py-2 bg-white border border-gray-300 rounded-4xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Webbutveckling
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                variant="outline"
                                value="3"
                                className="px-4 py-2 bg-white border border-gray-300 rounded-4xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Marknadsföring
                            </ToggleGroupItem>
                        </ToggleGroup>

                        </div>

        
                        <Button type="submit" className="bg-primary-blue self-end" tabIndex={5} disabled={processing}>
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            SKAPA KONTO
                            <ArrowRight/>
                        </Button>
                    </>
                    )}
                </div>

            </form>
        </AuthLayout>
        <FooterLayout></FooterLayout>
        </>
    );
}
