import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

async function getExperiences() {
  // In a real application, this would be an API call or database query
  return [
    {
      title: "Full Stack Developer",
      company: "Elite Business",
      duration: "July 2022 - Present",
      responsibilities: [
        "Develop and maintain web applications using Angular, React, and Spring Boot",
        "Collaborate with cross-functional teams to design and implement new features",
        "Optimize application performance and ensure code quality",
        "Participate in code reviews and mentor junior developers"
      ],
      achievements: [
        "Successfully delivered ETL Dashboard project, improving data processing efficiency by 30%",
        "Implemented a new reporting dashboard for telecom operators, resulting in a 20% increase in client satisfaction",
        "Led the development of a notification management system, enhancing team communication"
      ],
      technologies: ["Angular", "React", "Spring Boot", "PostgreSQL", "Docker", "Kafka"]
    },
    {
      title: "Software Engineering Intern",
      company: "Elite Business",
      duration: "January 2022 - June 2022",
      responsibilities: [
        "Assisted in the development of web applications using Angular and Spring Boot",
        "Participated in daily stand-ups and sprint planning meetings",
        "Wrote unit tests to ensure code quality and reliability",
        "Helped with bug fixing and code refactoring"
      ],
      achievements: [
        "Developed a reusable component library, increasing development speed by 15%",
        "Contributed to the implementation of a new feature that improved user engagement by 10%"
      ],
      technologies: ["Angular", "Spring Boot", "JavaScript", "Java", "Git"]
    }
  ]
}

export default async function Experience() {
  const experiences = await getExperiences()

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>{exp.company} | {exp.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
              <ul className="list-disc pl-5 mb-4">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
              <h4 className="font-semibold mb-2">Achievements:</h4>
              <ul className="list-disc pl-5 mb-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              <h4 className="font-semibold mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

