import Image from "next/image";
import pixel from "@public/pixel.jpg";
import { Badge, Anchor, Card, Title } from "@components/shared";

export function Project() {
  return (
    <Card className="flex flex-col col-span-full lg:col-span-3 gap-4 overflow-hidden ">
      <figure className="basis-1/3 -m-4">
        <Image src={pixel} alt={""} className="h-full w-full" />
      </figure>
      <div className="p-2 space-y-4">
        <div className="flex flex-wrap grow justify-between basis-2/3">
          <Title order={"h3"} className="text-2xl">
            Pixel art
          </Title>
          <Badge color={"violet"}>Wedding</Badge>
        </div>
        <p>
          Quis nostrud velit aliquip sint aliquip consectetur. Consequat aliqua irure elit do culpa non commodo id non
          voluptate qui velit reprehenderit. Ea laborum do Lorem ut consequat aute.
        </p>
        <Anchor href={"/projects/random-project"} className="block">
          View project
        </Anchor>
      </div>
    </Card>
  );
}
