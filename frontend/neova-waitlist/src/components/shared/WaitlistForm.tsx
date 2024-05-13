import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "@/components/ui/label";
const formSchema = z.object({
    twitter: z.string().optional(),
    email: z.string().email({ message: "Invalid email address." }),
});
const WaitlistForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            twitter: "",
            email: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
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
