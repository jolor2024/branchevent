import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
}

export default function AuthEventLayout({ children }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className='px-6 pb-6'>
            {children}
        </div>
    );
}