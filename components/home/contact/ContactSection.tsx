import { Button, Grid, Section } from "@components/shared";
import Image from "next/image";
import bgImage from "@public/bg.jpg";
import * as Icon from "./icons";
import { bgGradient } from "@lib/gradient";

export function Contact() {
  return (
    <Section>
      <header className="space-y-2 text-center mb-16">
        <h2 className="text-red-500 font-bold ">Contact</h2>
        <h3 className="font-bold text-gray-100 text-3xl">Ready to get in touch?</h3>
      </header>
      <Grid width="w-11/12" gap="gap-4">
        <div className="bg-zinc-800 flex flex-col items-center justify-center gap-4 col-span-3 h-64 w-full">
          <div aria-hidden className={`flex justify-center items-center h-16 w-16 rounded-full ${bgGradient}`}>
            <Icon.Email />
          </div>
          <p className="font-semibold text-xl">Email</p>
          <address>
            <a href="mailto:email@gmail.com">email@gmail.com</a>
          </address>
        </div>
        <div className="bg-zinc-800 flex flex-col items-center gap-4 justify-center col-span-3 h-64 w-full">
          <div aria-hidden className={`flex justify-center items-center h-16 w-16 rounded-full ${bgGradient}`}>
            <Icon.Location />
          </div>
          <p className="font-semibold text-xl">Address</p>
          <address>Marigot, Saint-Martin</address>
        </div>
        <figure className="bg-zinc-800 col-span-6  w-full h-full row-span-2">
          <Image src={bgImage} alt={""} className="h-full" />
        </figure>
        <div className="bg-zinc-800 col-span-6 h-64 w-full gap-4 flex flex-col justify-center items-center">
          <p className="font-bold text-xl">Book a reservation</p>
          <Button>Request a session</Button>
        </div>
      </Grid>
    </Section>
  );
}
