"use client";
import useMenuActive from '@/hooks/useMenuActive';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useState } from 'react';
import { IoCloseSharp, IoMenu } from "react-icons/io5";

interface headerInfos { label: string; href: string; style: boolean; }
const headerInfos = [
    { label: "Join Waitlist", href: "/", style: true },
] as headerInfos[];
interface navLinksProps { label: string; href: string; style: boolean; mobile: boolean; }
const NavLink = ({ label, href, style, mobile }: navLinksProps) => {
    const isActive = useMenuActive(href);
    return (
        <Link href={href} className={cn('text-xs md:text-lg', isActive && 'font-bold', mobile ? 'text-background' : 'text-muted-foreground', style && "bg-gradient-to-r from-primary to-[#5453F8] bg-clip-text text-transparent")}>
            {label}
        </Link>
    );
};

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [animation, setAnimation] = useState(false)
    const toggleMenu = async () => {
        setAnimation(true)
        await new Promise(r => setTimeout(r, 150));
        setShowMenu(!showMenu)
        setAnimation(false)
    }
    return (
        <nav className={cn(
            'flex pt-4 w-full h-20 justify-center items-center z-50 sticky top-0 transition-all duration-300 ease-in-out backdrop-filter backdrop-blur-lg',
        )}>
            <section className='h-full bg-background w-[90%] max-w-7xl mx-auto flex justify-between items-center rounded-2xl headerShadow py-3 px-6 relative'>
                <Link href="/" className='z-20'>
                    <span className='sm:text-xl md:text-2xl font-extrabold'>neova</span>
                </Link>
                <div className='flex justify-center items-center gap-2 md:gap-4 max-sm:hidden z-20'>
                    {headerInfos.map((info) => (
                        <NavLink key={info.href} label={info.label} href={info.href} style={info.style} mobile={false} />
                    ))}
                </div>
                <div className='cursor-pointer sm:hidden z-20'>
                    <div className='cursor-pointer sm:hidden' onClick={toggleMenu}>
                        {showMenu ?
                            <div className={`transition-transform duration-300 ${animation ? 'rotate-[0deg]' : 'rotate-[180deg]'}`}>
                                <IoCloseSharp size={25} />
                            </div> :
                            <div className={`transition-transform duration-300 ${animation ? 'rotate-[180deg]' : 'rotate-[0deg]'}`}>
                                <IoMenu size={25} />
                            </div>
                        }
                    </div>
                </div>
                <div className={cn(
                    'absolute bg-foreground top-1 pt-20 pb-4 -z-10 right-0 left-0 mx-auto rounded-2xl w-full flex flex-col gap-4 items-center justify-center transition-all duration-300 ease-in-out',
                    showMenu ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                )}>
                    {headerInfos.map((info) => (
                        <NavLink key={info.href} label={info.label} href={info.href} style={info.style} mobile />
                    ))}
                </div>
            </section>
        </nav>
    );
};

export default Header;
