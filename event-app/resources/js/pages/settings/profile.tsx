import { type BreadcrumbItem, type SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

import DeleteUser from '@/components/delete-user';
import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SettingsLayout from '@/layouts/settings/layoutStudent';
import OuterLayout from '@/layouts/app/app-outer-layout';


type ProfileForm = {
    name: string;
    email: string;
}

export default function Profile({ mustVerifyEmail, status, isStudent, isCompany }: { mustVerifyEmail: boolean; status?: string; isStudent: boolean; isCompany: boolean; }) {
    const { auth } = usePage<SharedData>().props;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<Required<ProfileForm>>({
        name: auth.user.name,
        email: auth.user.email,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'), {
            preserveScroll: true,
        });
    };

    return (
        <OuterLayout isCompany={isCompany}>
        <SettingsLayout>
        <Head title="User settings" />
            <div className="space-y-6">
            <h1 className='text-[48px] font-thin py-4 lg:py-0'>REDIGERA KONTO</h1>
                <form onSubmit={submit} className="space-y-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name" className='text-sm' >NAMN</Label>
                        <Input
                            id="name"
                            className="mt-1 block w-full border-1 border-black rounded-4xl"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            autoComplete="name"
                            placeholder="Full name"
                        />

                        <InputError className="mt-2" message={errors.name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email" className='text-sm'>EMAIL</Label>

                        <Input
                            id="email"
                            type="email"
                            className="mt-1 block w-full border-1 border-black rounded-4xl"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            autoComplete="username"
                            placeholder="Email address"
                        />

                        <InputError className="mt-2" message={errors.email} />
                    </div>

                    {mustVerifyEmail && auth.user.email_verified_at === null && (
                        <div>
                            <p className="text-muted-foreground -mt-4 text-sm">
                                Your email address is unverified.{' '}
                                <Link
                                    href={route('verification.send')}
                                    method="post"
                                    as="button"
                                    className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                                >
                                    Click here to resend the verification email.
                                </Link>
                            </p>

                            {status === 'verification-link-sent' && (
                                <div className="mt-2 text-sm font-medium text-green-600">
                                    A new verification link has been sent to your email address.
                                </div>
                            )}
                        </div>
                    )}

                    <div className="flex items-center gap-4 justify-between lg:justify-normal">
                    <Link
                        href={route('logout')}
                        method="post"
                        className="text-white bg-primary-red inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 px-4 py-2 has-[>svg]:px-3"
                    >
                        LOGGA UT
                    </Link>
                        <Button disabled={processing} className='bg-primary-red'>SPARA</Button>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-neutral-600">SPARA</p>
                        </Transition>
                    </div>
                </form>
            </div>

            <DeleteUser />
            <Link
            href={route('password.edit')}
            method="get"
            className="underline"
        >
            Ändra lösenord
        </Link>
        </SettingsLayout>
        </OuterLayout>

    );
}
