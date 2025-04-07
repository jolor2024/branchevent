
export default function AppFooterLayout({isCompany}) {
    return (
    <footer id="footer" className={` text-white ${isCompany ? 'bg-primary-blue' : 'bg-red-500'}`}>
        <div className="px-6 py-8">
            <div className="flex justify-between items-center">
                <a href="">
                    <img src="/assets/loggo_white.svg" alt="Logo" className="w-[120px] lg:w-[200px]" />
                </a>
                <div className="text-right flex flex-col text-lg">
                    <span> 23 april</span>
                    <span>kl 13-15</span>
                    <span>Lindholmspiren 3</span>
                </div>
            </div>
        </div>
    </footer>
)}
