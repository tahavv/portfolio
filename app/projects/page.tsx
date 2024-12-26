import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

async function getProjects() {
  // In a real application, this would be an API call or database query
  return [
    {
      title: "ETL Dashboard",
      description: "An interactive dashboard for monitoring and managing ETL processes, improving data processing efficiency by 30%.",
      image: "/images/etl-dashboard.jpg",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Docker"],
      liveUrl: "https://etl-dashboard.example.com",
      githubUrl: "https://github.com/ayaritaha/etl-dashboard"
    },
    {
      title: "Telecom Reporting Dashboard",
      description: "A comprehensive reporting solution for telecom operators, resulting in a 20% increase in client satisfaction.",
      image: "/images/telecom-dashboard.jpg",
      technologies: ["React", "Spring Boot", "Kafka", "PostgreSQL"],
      liveUrl: "https://telecom-dashboard.example.com",
      githubUrl: "https://github.com/ayaritaha/telecom-dashboard"
    },
    {
      title: "Notification Management System",
      description: "A real-time notification system enhancing team communication and productivity.",
      image: "/images/notification-system.jpg",
      technologies: ["Angular", "Spring Boot", "WebSocket", "MongoDB"],
      liveUrl: "https://notification-system.example.com",
      githubUrl: "https://github.com/ayaritaha/notification-system"
    }
  ]
}

export default async function Projects() {
  const projects = await getProjects()

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between mt-auto">
              <Button asChild variant="outline">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </Link>
              </Button>
              <Button asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub Repo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

