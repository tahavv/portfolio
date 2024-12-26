import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center">
      <Image
        src="/images/profile.jpg"
        alt="AYARI TAHA"
        width={200}
        height={200}
        className="rounded-full mb-8"
      />
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        AYARI TAHA
      </h1>
      <p className="mt-4 text-xl text-muted-foreground">
        Full Stack Developer
      </p>
      <p className="mt-4 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Passionate about creating robust and scalable web applications using Angular, React, and Spring Boot.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <div>
        <Button asChild>
          <Link href="/images/Ayari-Taha-CV-en.pdf">
            Download CV
          </Link>
        </Button>
        <a href="/images/TahaAyariCV.pdf" download>
        Download French Version.
      </a>
        </div>
        <Button asChild variant="outline">
          <Link href="/contact">
            Contact Me
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/projects">
            View Projects
          </Link>
        </Button>
      </div>
    </section>
  )
}

