import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ProjectCardProps } from "@/types";

export function ProjectCard({ img, title, desc }: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={true} placeholder="">
      <CardHeader
        floated={false}
        className="mx-0 mt-0 mb-6 h-48"
        placeholder=""
      >
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-3" placeholder="">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2" placeholder="">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500" placeholder="">
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;