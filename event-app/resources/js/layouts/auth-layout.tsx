import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';
import AuthEventLayout from '@/layouts/auth/auth-event-layout';

export default function AuthLayout({ children, title, description, ...props }: { children: React.ReactNode; title: string; description: string }) {
    return (
        <AuthEventLayout title={title} description={description} {...props}>
            {children}
        </AuthEventLayout>
    );
}
