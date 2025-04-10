import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import OuterLayout from '@/layouts/app/app-outer-layout';
import FooterLayout from '../../layouts/app/app-footer-layout';
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import AuthEventLayout from '@/layouts/auth/auth-event-layout';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <OuterLayout>
            <AuthEventLayout>
                <Head title="Log in" />
                <div className='pt-5 pl-5 bg-white'>
                     <a href={"/"} >
                    <ArrowLeft />
                    </a>

                <div className='flex flex-row  items-center justify-around'>
                    <section className="max-w-xl">
                    <h1 className='text-4xl font-thin my-4 p-0 mb-8'>LOGGA IN</h1>
                    <form className="flex flex-col gap-6" onSubmit={submit}>
                    <div className="flex flex-col gap-8">
                    <div className="grid gap-4">
                        <Label htmlFor="email" className='text-sm'>EMAIL</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="email@example.com"
                            className='border-1 border-black rounded-4xl'
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid gap-4">
                        <div className="flex items-center">
                            <Label htmlFor="password" className='text-sm'>LÖSENORD</Label>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={2}
                            autoComplete="current-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Password"
                            className='border-1 border-black rounded-4xl'
                        />
                        <InputError message={errors.password} />
                    </div>

                    <Button type="submit" className="bg-primary-red self-end" tabIndex={4} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Logga in
                        <ArrowRight/>
                    </Button>
                    </div>
                    </form>

                    </section>
                    <div className='hidden lg:block'>
                        <img src="/assets/herostudent.png" alt="Logo" className="w-[400px]" />
                    </div>
                </div>


                    
                </div>
            </AuthEventLayout>
            <FooterLayout isCompany={true}></FooterLayout>
        </OuterLayout>
    );
}
