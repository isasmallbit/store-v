import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function NotFound() {
    return (
        <div className='flex flex-col justify-center items-center h-96 gap-4'>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">
                <Button variant={"foreground"}>Return Home</Button>
            </Link>
        </div>
    )
}