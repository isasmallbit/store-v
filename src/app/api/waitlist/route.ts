import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, twitter } = body;
        console.log('Request body:', body);
        // Validation
        if (!email) {
            return NextResponse.json({ message: 'Email is required' }, { status: 400 });
        }

        // Verify if the user already exists in the waitlist
        const existingUser = await prisma.waitlist.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json({ message: 'This email is already registered' }, { status: 409 });
        }

        // Create a new entry in the waitlist
        const waitlistEntry = await prisma.waitlist.create({
            data: {
                email,
                twitter,
            },
        });

        return NextResponse.json({ message: 'Success', data: waitlistEntry });
    } catch (error: any) {
        console.error('Error processing request:', error);
        console.log('Error code:', error.code);
        if (error.code === 'P2002') {
            // Handle unique constraint violation
            const target = error.meta.target;
            if (target.includes('email')) {
                return NextResponse.json({ message: 'This email is already registered' }, { status: 409 });
            }
            if (target.includes('twitter')) {
                return NextResponse.json({ message: 'This Twitter account is already registered' }, { status: 409 });
            }
        }

        return NextResponse.json({ message: 'Error processing request', error }, { status: 500 });
    }
}
