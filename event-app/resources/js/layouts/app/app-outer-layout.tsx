import { PropsWithChildren, ReactNode } from "react";

interface OuterLayoutProps {
  children: ReactNode;  
  isCompany?: boolean;      
}

export default function OuterLayout({children, isCompany}: OuterLayoutProps) {
    return (
        <div className={`${isCompany ? 'lg:bg-primary-blue' : 'lg:bg-primary-red'} lg:px-16 lg:py-16`}>
            <div className="bg-white lg:rounded-2xl px-0 lg:px-6 lg:py-6">
                {children}
            </div>
        </div>
    )
}