import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { mutate } from 'swr';
import { z } from "zod";
const formSchema = z.object({
    twitter: z.string().optional(),
    email: z.string().email({ message: "Invalid email address." }),
});
const WaitlistForm = () => {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            twitter: "",
            email: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
            if (data.error) {
                throw new Error(data.error);
            }
            if (data.message !== "Success") {
                throw new Error(data.message);
            }
            mutate('/api/waitlist'); // Invalidate the cache
            toast({
                description: "You have been added to the waitlist!",
                variant: "success",
            })
        } catch (error) {
            console.error('Error:', error);
            toast({
                description: "There was an error adding you to the waitlist. Please try again.",
                variant: "destructive",
            })
        }
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-md">
                <div className="flex flex-col justify-between items-center w-full gap-8">
                    <FormField
                        control={form.control}
                        name="twitter"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <Label htmlFor="twitter" className="text-sm">Enter your X/Twitter</Label>
                                <FormControl>
                                    <Input placeholder="Your X account" {...field} className="border-primary focus-visible:ring-0" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <Label htmlFor="email" className="text-sm">Enter your email<span className="text-red-500">*</span></Label>
                                <FormControl>
                                    <Input placeholder="Your email address" {...field} className="border-primary focus-visible:ring-0" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" variant={"foreground"} className="w-full rounded-lg">
                        Get notified
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default WaitlistForm;
