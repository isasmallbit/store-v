"use client";
import { Label } from "@/components/ui/label";
import { Community, QuickLinks } from "@/constants/Footer";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className={
            cn('flex py-8 w-full mt-4')
        }>
            <section className='w-[90%] max-w-7xl mx-auto flex justify-between max-sm:flex-col'>
                <div className='flex flex-col justify-center sm:justify-between  gap-2'>
                    <div className='flex flex-col justify-center gap-4 max-sm:items-center'>
                        <Link href="/">
                            <Image src="/assets/links/logoFooter.png" alt="logo" width={150} height={150} priority />
                        </Link>
                        <span className='text-xs md:text-base text-muted-foreground text-center'>Building the web3 for everyone.</span>
                    </div>
                    <span className='text-xs md:text-base text-muted-foreground max-sm:text-center'>@ 2024. All rights reserved.</span>
                </div>
                <section className='flex justify-center gap-8 max-sm:flex-col max-sm:items-center max-sm:mt-8'>
                    <div className='flex flex-col items-center sm:items-end gap-4'>
                        <Label className='text-base md:text-lg lg:text-xl font-extrabold'>Quick Links</Label>
                        <div className="flex flex-row sm:flex-col items-end gap-4 flex-wrap justify-center">
                            {QuickLinks.map((item, index) => (
                                <Link key={index} href={item.href} className='text-xs md:text-base text-muted-foreground'>
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <Label className='text-base md:text-lg lg:text-xl font-extrabold'>Community</Label>
                        <div className="flex flex-row sm:flex-col items-center gap-4">
                            {Community.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <Link href={item.href} key={index} target="_blank">
                                        <IconComponent className='' size={24} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </section>

        </footer>
    )
}

export default Footer