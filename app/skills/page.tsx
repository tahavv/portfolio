import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

async function getSkills() {
  // In a real application, this would be an API call or database query
  return [
    {
      category: "Frontend",
      items: [
        { name: "Angular", proficiency: 90 },
        { name: "React", proficiency: 85 },
        { name: "TypeScript", proficiency: 85 },
        { name: "JavaScript", proficiency: 90 }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Java", proficiency: 85 },
        { name: "Spring Boot", proficiency: 80 },
        { name: "Python", proficiency: 75 }
      ]
    },
    {
      category: "Database",
      items: [
        { name: "SQL", proficiency: 85 },
        { name: "PostgreSQL", proficiency: 80 }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", proficiency: 90 },
        { name: "Docker", proficiency: 75 },
        { name: "Kafka", proficiency: 70 }
      ]
    }
  ]
}

export default async function Skills() {
  const skills = await getSkills()

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              {category.items.map((skill, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm font-medium">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="w-full" />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

