import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthEventLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className='px-6'>
            {children}
        </div>
    );
}