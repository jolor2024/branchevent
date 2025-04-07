import InputError from '@/components/input-error';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layoutStudent';
import { type BreadcrumbItem } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';

import HeadingSmall from '@/components/heading-small';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppFooterLayout from '../../layouts/app/app-footer-layout';


export default function Password() {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <>
        <SettingsLayout>
        <Head title="Profile settings" />
            <h1 className='text-[48px] font-thin py-4'>ÄNDRA LÖSENORD</h1>
            <div className="space-y-6">
                <form onSubmit={updatePassword} className="space-y-6">
                    <div className="grid gap-2">
                        <Label htmlFor="current_password"  className='text-sm'>NUVARANDE LÖSENORD</Label>

                        <Input
                            id="current_password"
                            ref={currentPasswordInput}
                            value={data.current_password}
                            onChange={(e) => setData('current_password', e.target.value)}
                            type="password"
                            className="mt-1 block w-full border-1 border-black rounded-4xl"
                            autoComplete="current-password"
                            placeholder="Nuvarande lösenord"
                        />

                        <InputError message={errors.current_password} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password"  className='text-sm'>NYTT LÖSENORD</Label>

                        <Input
                            id="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            type="password"
                            className="mt-1 block w-full border-1 border-black rounded-4xl"
                            autoComplete="new-password"
                            placeholder="Nytt lösenord"
                        />

                        <InputError message={errors.password} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password_confirmation"  className='text-sm'>BEKFRÄFTA LÖSENORD</Label>

                        <Input
                            id="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            type="password"
                            className="mt-1 block w-full border-1 border-black rounded-4xl"
                            autoComplete="new-password"
                            placeholder="Bekräfta lösenord"
                        />

                        <InputError message={errors.password_confirmation} />
                    </div>

                    <div className="flex items-center gap-4 justify-end pb-4">
                        <Button disabled={processing} className='bg-primary-red'>SPARA</Button>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-neutral-600">Saved</p>
                        </Transition>
                    </div>
                </form>
            </div>
        </SettingsLayout>
        <AppFooterLayout></AppFooterLayout>
        </>
    );
}
