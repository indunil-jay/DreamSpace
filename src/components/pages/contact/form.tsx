"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email({ message: "your email is required." }),
  description: z
    .string()
    .min(6, { message: "message must be at least 6 characters." })
    .max(2000, { message: "message must be less than 2000 characters." }),
});

interface FormFieldProps {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  description: string;
  renderInput: (field: any) => JSX.Element;
}

const CustomeFormField = ({
  control,
  name,
  label,
  description,
  renderInput,
}: FormFieldProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        {renderInput(field)}
        {/* <FormDescription>{description}</FormDescription> */}
        <FormMessage />
      </FormItem>
    )}
  />
);

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomeFormField
          control={form.control}
          name="name"
          label="Your Name"
          placeholder="devon fernando"
          description="Enter your name here"
          renderInput={(field) => (
            <Input placeholder="devon fernando" {...field} />
          )}
        />

        <CustomeFormField
          control={form.control}
          name="email"
          label="Your Email"
          placeholder="devon@example.com"
          description="Enter your email here"
          renderInput={(field) => (
            <Input placeholder="devon@example.com" {...field} />
          )}
        />

        <CustomeFormField
          control={form.control}
          name="description"
          label="Your Message"
          placeholder="Tell us your requirement"
          description="Enter your requirement here"
          renderInput={(field) => (
            <Textarea
              placeholder="Tell us your requirement"
              className="resize-none"
              rows={5}
              {...field}
            />
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
