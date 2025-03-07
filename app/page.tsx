import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Calendar,
  Code2,
  Briefcase,
  ChevronRight,
} from "lucide-react";

export default function DeveloperPortfolio() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-5 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6" />
            <span className="text-lg font-bold">Neftali Aguilar</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-primary"
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-primary"
            >
              Experience
            </Link>
            <Link
              href="#partnerships"
              className="text-sm font-medium hover:text-primary"
            >
              Partnerships
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <Button size="sm">Download Resume</Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="about"
          className="container mx-auto px-5 py-12 md:py-24 lg:py-32"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="px-3 py-1 text-sm" variant="secondary">
                  8+ Years of Frontend Experience
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  John Developer
                </h1>
                <p className="text-xl text-muted-foreground">
                  Senior Frontend Developer specializing in building exceptional
                  digital experiences
                </p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I'm a passionate frontend developer with over 8 years of
                experience crafting responsive, user-friendly web applications.
                I specialize in React, TypeScript, and modern frontend
                frameworks.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button>
                  View My Work
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
                <Button variant="outline">Contact Me</Button>
              </div>
              <div className="flex gap-4 mt-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
            <div className="mx-auto aspect-square overflow-hidden rounded-full border-8 border-muted bg-muted">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="John Developer"
                width={250}
                height={250}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="container mx-auto px-5 py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Technical Skills
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              I've worked with a variety of technologies throughout my career.
              Here are some of my core skills:
            </p>
          </div>
          <div className="mx-auto grid grid-cols-2 justify-center gap-4 md:max-w-[64rem] md:grid-cols-3 lg:grid-cols-4 mt-12">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "HTML5",
              "CSS3/SCSS",
              "Tailwind CSS",
              "Redux",
              "GraphQL",
              "REST APIs",
              "Node.js",
              "Express",
              "Jest",
              "Testing Library",
              "Webpack",
              "Git",
              "CI/CD",
              "Performance Optimization",
              "Responsive Design",
              "Accessibility",
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-center rounded-lg border bg-card p-4 text-card-foreground shadow-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="container mx-auto px-5 py-12 md:py-24 lg:py-32"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Work Experience
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Over 8 years of professional experience building frontend
              applications
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-8 mt-12">
            {[
              {
                title: "Senior Frontend Developer",
                company: "Tech Innovations Inc.",
                period: "2020 - Present",
                description:
                  "Lead frontend developer for multiple high-traffic web applications. Implemented modern React architecture with TypeScript, resulting in a 40% improvement in performance metrics. Mentored junior developers and established frontend best practices.",
              },
              {
                title: "Frontend Developer",
                company: "Digital Solutions Ltd.",
                period: "2017 - 2020",
                description:
                  "Developed responsive web applications using React and Redux. Collaborated with UX designers to implement pixel-perfect interfaces. Reduced bundle size by 35% through code splitting and lazy loading techniques.",
              },
              {
                title: "Web Developer",
                company: "Creative Web Agency",
                period: "2015 - 2017",
                description:
                  "Built interactive websites for clients across various industries. Utilized HTML5, CSS3, and JavaScript to create engaging user experiences. Implemented responsive designs ensuring compatibility across all devices.",
              },
            ].map((job, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-xl">{job.title}</h3>
                      <p className="text-muted-foreground">{job.company}</p>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{job.period}</span>
                    </div>
                  </div>
                  <p className="mt-4">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Business Partnership Section */}
        <section
          id="partnerships"
          className="container mx-auto px-5 py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Looking to Grow Your Business with Technology?
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              I'm not just a developer for hire - I'm looking to partner with
              visionaries ready to transform their industry
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gradient-to-br from-background to-muted border-primary/20">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Developer-Investor</h3>
                <p className="text-muted-foreground flex-grow">
                  I'm looking to invest both my technical expertise and
                  resources in promising ventures. Not interested in one-off
                  freelance projects.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-background to-muted border-primary/20">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Technical Co-Founder</h3>
                <p className="text-muted-foreground flex-grow">
                  With 8+ years of frontend expertise, I bring the technical
                  foundation needed to build scalable, market-ready products.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-background to-muted border-primary/20">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <ChevronRight className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Long-Term Vision</h3>
                <p className="text-muted-foreground flex-grow">
                  I'm committed to building lasting partnerships that create
                  value through innovative technology solutions.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mx-auto max-w-3xl mt-12 bg-card border rounded-xl overflow-hidden">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-4">
                What I Bring to the Table
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 rounded-full bg-primary/10 p-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p>
                    <span className="font-semibold">Technical Leadership:</span>{" "}
                    Architecture design, technology selection, and development
                    roadmap planning
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 rounded-full bg-primary/10 p-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p>
                    <span className="font-semibold">Business Acumen:</span>{" "}
                    Understanding of market dynamics, user experience, and
                    product-market fit
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 rounded-full bg-primary/10 p-1">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <p>
                    <span className="font-semibold">Investment Potential:</span>{" "}
                    Willing to invest time and resources in ventures I believe
                    in
                  </p>
                </li>
              </ul>
              <div className="mt-8">
                <Button size="lg" className="w-full sm:w-auto">
                  Discuss Partnership Opportunities
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="container mx-auto px-5 py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="mx-auto grid gap-10 md:grid-cols-2 md:gap-16 lg:max-w-5xl">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Let's Work Together
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                I'm currently available for freelance work and full-time
                opportunities. If you're interested in working together or have
                any questions, feel free to reach out.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>john.developer@example.com</span>
                </div>
                <div className="flex gap-4 mt-6">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your email"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
              </div>
              <Button className="w-full">Send Message</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0 mx-auto">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} John Developer. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-primary"
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-primary"
            >
              Experience
            </Link>
            <Link
              href="#partnerships"
              className="text-sm font-medium hover:text-primary"
            >
              Partnerships
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
