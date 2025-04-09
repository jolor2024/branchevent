import { Head, useForm } from '@inertiajs/react';
import { ArrowRight, LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { ArrowLeft } from "lucide-react";
import FooterLayout from '../../layouts/app/app-footer-layout';

import OuterLayout from '@/layouts/app/app-outer-layout';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register.student'), {
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
        <OuterLayout isCompany={false}>
            <AuthLayout title="Create a student account" description="Enter your details below to create your account">
                <Head title="Register" />
                <div className='pt-10 bg-white'>
                <a href={"/"} >
                    <ArrowLeft />
                </a>
                <h1 className='text-4xl font-thin my-4 p-0 mb-0'>SKAPA ETT STUDENTKONTO</h1>
                <div className='flex justify-between mt-16 mb-8'>
                    <div className='justify-center text-center'>
                        <div className={`mx-2 flex justify-center w-8 h-8 rounded-full text-center ${
                            currentStep >= 1 ? "bg-primary-red" : "bg-[#DBDBDB]"
                        }`}>
                            <span className={` self-center ${
                            currentStep >= 1 ? "text-white" : "text-"
                        }`}>1</span>
                        </div>

                        <span>Kontakt-<br/>detaljer</span>
                    </div>
                

                    <hr className={`border-0 h-[2px] w-full mt-4  ${ currentStep >= 2 ? "bg-primary-red" : "bg-[#DBDBDB]"} `}/>
                
                    <div className='justify-center text-center'>
                        <div className={`mx-2 flex justify-center w-8 h-8 rounded-full text-center ${
                            currentStep >= 2 ? "bg-primary-red" : "bg-[#DBDBDB]"
                        }`}>
                            <span className={` self-center ${
                            currentStep >= 2 ? "text-white" : "text-[#000]"
                            }`}>2</span>

                        </div>
                        <span>Klar!</span>
                    </div>
            
                </div>

                <form className="flex flex-col gap-6" onSubmit={submit}>
                    <div className="flex flex-col gap-8">

                        <div className="grid gap-4">
                            <Label htmlFor="name" className='text-sm'>NAMN</Label>
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
                            <Label htmlFor="email">EMAIL*</Label>
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
                            <Label htmlFor="password">SKAPA LÖSENORD*</Label>
                            <Input className='border-1 border-black rounded-4xl'
                                id="password"
                                type="password"
                                required
                                tabIndex={3}
                                autoComplete="new-password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                disabled={processing}
                                placeholder="Skriv in ditt lösenord"
                            />
                            <InputError message={errors.password} />
                        </div>

                        <div className="grid gap-4">
                            <Label htmlFor="password_confirmation">BEKRÄFTA LÖSENORD*</Label>
                            <Input className='border-1 border-black rounded-4xl'
                                id="password_confirmation"
                                type="password"
                                required
                                tabIndex={4}
                                autoComplete="new-password"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                disabled={processing}
                                placeholder="Skriv in ditt lösenord igen"
                            />
                            <InputError message={errors.password_confirmation} />
                        </div>

                        <Button type="submit" className="bg-primary-red self-end" tabIndex={5} disabled={processing}>
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            SKAPA KONTO
                            <ArrowRight/>
                        </Button>
                    </div>
                </form>
                </div>

            </AuthLayout>
            <FooterLayout isCompany={false}></FooterLayout>
        </OuterLayout>
    );
}
