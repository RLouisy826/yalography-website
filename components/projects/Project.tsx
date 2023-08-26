import { Anchor } from "@/components/shared";
import type { Projects } from "@prisma/client";
import { Card, Title, Badge } from "@aomdev/ui";

type PropTypes = {
  project: Projects;
};

export function Project({ project }: PropTypes) {
  return (
    <Card className="flex flex-col col-span-full h-96 lg:col-span-3 gap-4 overflow-hidden ">
      <Anchor href={`/projects/${project.id}`} className="basis-2/3 -m-4 ">
        <figure className="w-full h-full relative overflow-hidden">
          <img
            src={project.thumbnail!}
            loading="lazy"
            decoding="async"
            alt={""}
            className="h-full w-full absolute top-0 left-0 object-cover blur-sm"
          />
          <img
            src={project.thumbnail!}
            loading="lazy"
            decoding="async"
            alt={""}
            className="h-full w-full absolute z-10 object-contain"
          />
        </figure>
      </Anchor>
      <div className="p-2 space-y-4 basis-1/3">
        <div className="flex  grow justify-between  items-center">
          <Title order={3}>{project.title}</Title>
          <Badge className="w-fit h-fit truncate">{project.type}</Badge>
        </div>
        <p className={"line-clamp-3"}>{project.description}</p>
        <Anchor href={`projects/${project.id}`} className="block w-fit">
          View project
        </Anchor>
      </div>
    </Card>
  );
}
