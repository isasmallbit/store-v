"use client";
import Image from 'next/image';
import WaitlistForm from "@/components/shared/WaitlistForm";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6";
export default function Home() {
    return (
        <main className="flex flex-col-reverse md:flex-row justify-center items-stretch gap-8 pt-16 w-full">
            <LeftPart />
            <RightPart />
        </main>
    );
}


const LeftPart = () => {
    return (
        <section className='flex flex-col items-center w-full md:w-1/2 justify-center gap-8'>
            <div className='flex flex-col justify-center items-center gap-8'>
                <h3 className="text-2xl text-center md:w-2/3">
                    <span className="font-extrabold">
                        Get into private storage &nbsp;
                    </span>
                    <span>
                        with our decentralized application empowered by a&nbsp;
                    </span>
                    <span className="bg-gradient-to-r from-primary to-[#5453F8] bg-clip-text text-transparent font-extrabold">
                        tailor-made protocol
                    </span>
                </h3>
                <p className="text-xs md:w-2/3 text-center">
                    The Blockchain technology enhances storage opportunities. With our own application, secure your account by registering your information.
                </p>
                <Link href="https://twitter.com">
                    <Button variant={"link2"} size={"link2"}>
                        Keep me updated
                    </Button>
                </Link>
                <Link href="https://twitter.com">
                    <FaXTwitter size={24} />
                </Link>
                <video
                    className="rounded-3xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback">
                    <source src="/assets/mp4/whitepaper.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    )
}

const RightPart = () => {
    return (
        <section className="flex flex-col w-full md:w-1/2 gap-4 bg-backgoundSecondary md:px-16 md:py-28 rounded-3xl justify-center items-center relative overflow-hidden">
            <Card className="w-full border-none rounded-3xl z-20">
                <CardHeader className="py-16">
                    <CardTitle className="text-center font-extrabold">Join the waitlist</CardTitle>
                </CardHeader>
                <CardContent>
                    <WaitlistForm />
                </CardContent>
            </Card>
            <div className='absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
                <Image src="/assets/image/logoHome3.png" alt="logo" width={400} height={400} className='h-40 w-40 ' />
            </div>

            <div className='absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10'>
                <Image src="/assets/image/logoHome3.png" alt="logo" width={400} height={400} className='h-40 w-40 ' />
            </div>

        </section>
    );
};