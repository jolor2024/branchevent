import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import OuterLayout from '@/layouts/app/app-outer-layout';
import FooterLayout from '../../layouts/app/app-footer-layout';
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";

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
            <AuthLayout title="Log in to your account " description="Enter your email and password below to log in">
                <Head title="Log in" />
                <div className='pt-10 bg-white'>
                     <a href={"/"} >
                    <ArrowLeft />
                    </a>
                    <h1 className='text-4xl font-thin my-4 p-0 mb-16'>Logga in</h1>
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

                            <div className="flex items-center space-x-3">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    checked={data.remember}
                                    onClick={() => setData('remember', !data.remember)}
                                    tabIndex={3}
                                />
                                <Label htmlFor="remember" className='text-sm'>Remember me</Label>
                            </div>

                      

                            <Button type="submit" className="bg-primary-red self-end" tabIndex={4} disabled={processing}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Logga in
                                <ArrowRight/>
                            </Button>
                        </div>
                    </form>

                    {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
                </div>
            </AuthLayout>
            <FooterLayout isCompany={true}></FooterLayout>
        </OuterLayout>
    );
}
