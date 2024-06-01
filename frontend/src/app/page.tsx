"use client";
import WaitlistForm from "@/components/shared/WaitlistForm";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
    return (
        <main className="flex flex-col md:flex-row justify-center items-stretch gap-8 pt-16 w-full">
            <LeftPart />
            <RightPart />
        </main>
    );
}


const LeftPart = () => {
    return (
        <section className='flex flex-col items-center w-full md:w-1/2 justify-center gap-8'>
            <div className='flex flex-col justify-between items-center gap-8 h-full'>
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
                <p className="text-sm md:w-2/3 text-center">
                    The Blockchain technology enhances storage opportunities. With our own application, secure your account by registering your information.
                </p>
                <Link href="https://twitter.com/Neova_Protocol" target="_blank">
                    <Button variant={"link2"} size={"link2"} className="uppercase">
                        Learn more
                    </Button>
                </Link>
                {/* <Link href="https://twitter.com">
                    <FaXTwitter size={24} />
                </Link> */}
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
        <section className="flex flex-col w-full md:w-1/2 gap-4 bg-[#E1E1FE] md:px-16 md:py-28 rounded-3xl justify-center items-center relative overflow-hidden">
            <Card className="w-full md:border-none rounded-3xl z-20 max-md:bg-muted max-md:border">
                <CardHeader className="py-16 space-y-4">
                    <CardTitle className="text-2xl text-center font-extrabold">Join the Neova waitlist</CardTitle>
                    <CardDescription className="text-center space-y-4">
                        <p className="text-lg font-extrabold text-foreground">To be eligible:</p>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold">1. Follow <Link href="https://twitter.com/Neova_Protocol" target="_blank" className="text-primary">@Neova_Protocol</Link> on X</p>
                            <p className="font-bold">2. RT & Like <Link href="https://x.com/Neova_Protocol/status/1796542404960616492" target="_blank" className="text-primary">this Tweet</Link></p>
                        </div>


                    </CardDescription>


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