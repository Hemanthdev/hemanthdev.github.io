import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, ExternalLink, Code2, Cloud, Zap } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"experience" | "skills" | "projects">("experience");

  const experiences = [
    {
      title: "DevOps Engineer",
      company: "ELP Aviation LLC",
      period: "Dec 2021 – Feb 2026",
      highlights: [
        "Architected enterprise-scale cloud orchestration frameworks across AWS & Azure",
        "Led CI/CD transformation, migrating to GitHub Actions (70% reduction in manual effort)",
        "Managed GitHub Enterprise governance for 80+ users across 100+ repositories",
        "Executed 100+ repository migration from Bitbucket, Jenkins, and Azure DevOps"
      ]
    },
    {
      title: "DevOps Lead",
      company: "Lenient Cloud Private Limited",
      period: "Apr 2020 – Dec 2021",
      highlights: [
        "Led end-to-end DevOps transformations using Terraform, AWS, and Azure",
        "Improved deployment efficiency by 40% and resource utilization by 35%",
        "Built and managed Kubernetes platforms supporting 100+ containers",
        "Increased microservices deployment speed by 50%"
      ]
    },
    {
      title: "Senior System Administrator",
      company: "Pennant Technologies",
      period: "Jun 2019 – Apr 2020",
      highlights: [
        "Provided infrastructure support for banking and loan-processing platforms",
        "Delivered 30% improvement in system performance for client-facing applications",
        "Achieved ISO 27001 compliance and reduced security incidents",
        "Maintained 99.9% uptime for 50+ banking and internal applications"
      ]
    }
  ];

  const skillCategories = [
    {
      category: "Cloud Platforms",
      skills: ["AWS", "Azure", "GCP", "Oracle Cloud", "Multi-Cloud Architecture"]
    },
    {
      category: "DevOps & CI/CD",
      skills: ["Kubernetes (EKS/AKS)", "Docker", "GitHub Actions", "Jenkins", "GitLab CI", "Terraform", "Ansible"]
    },
    {
      category: "Monitoring & Observability",
      skills: ["Prometheus", "Grafana", "CloudWatch", "Azure Monitor", "New Relic", "Sumo Logic"]
    },
    {
      category: "Security & Compliance",
      skills: ["DevSecOps", "SOC 2", "GDPR", "ISO 27001", "HIPAA", "AWS IAM", "Azure AD"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Redis", "RabbitMQ"]
    },
    {
      category: "Programming",
      skills: ["Python", "Bash", "YAML", "JSON", "TypeScript"]
    }
  ];

  const projects = [
    {
      title: "GitHub Enterprise Migration",
      description: "Executed large-scale migration of 100+ repositories from Bitbucket, Jenkins, and Azure DevOps to GitHub Enterprise with runner configuration and workflow standardization.",
      tags: ["GitHub", "Enterprise", "Migration", "CI/CD"],
      impact: "70% reduction in manual effort"
    },
    {
      title: "Multi-Cloud Kubernetes Platform",
      description: "Designed and built scalable Kubernetes platforms across AWS (EKS) and Azure (AKS), supporting containerized Node.js, React, and .NET applications.",
      tags: ["Kubernetes", "AWS", "Azure", "Docker"],
      impact: "50% increase in deployment speed"
    },
    {
      title: "Cloud Architecture Optimization",
      description: "Optimized AWS and Azure cloud architectures resulting in 35% improvement in resource utilization and significant cost reduction.",
      tags: ["AWS", "Azure", "Terraform", "Cost Optimization"],
      impact: "$10,000/month savings"
    },
    {
      title: "DevSecOps Implementation",
      description: "Enabled GitHub Advanced Security (CodeQL, Secret Scanning, Dependabot) to strengthen DevSecOps posture and support SOC 2, GDPR, and ISO 27001 compliance.",
      tags: ["DevSecOps", "GitHub", "Compliance"],
      impact: "10+ teams secured"
    }
  ];

  const certifications = [
    "Certified Kubernetes Administrator (CKA)",
    "Terraform Associate",
    "Azure Solutions Architect Expert",
    "Azure Security Engineer Associate",
    "Certified Ethical Hacker",
    "MongoDB Associate Database Administrator"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="text-heading-sm gradient-text">HK</div>
          <div className="flex gap-8 items-center">
            <a href="#experience" className="text-body-sm hover:text-primary transition-smooth">Experience</a>
            <a href="#skills" className="text-body-sm hover:text-primary transition-smooth">Skills</a>
            <a href="#projects" className="text-body-sm hover:text-primary transition-smooth">Projects</a>
            <a href="#contact" className="text-body-sm hover:text-primary transition-smooth">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663390938250/f2jUCondSNjoGigG4jCUco/hero-circuit-pattern-QvgrSXNM5gjnzsudewLcyw.webp')"
          }}
        />
        <div className="relative container py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-display mb-6 leading-tight">
              DevOps Engineer & Cloud Architect
            </h1>
            <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl">
              9+ years of experience designing and operating scalable cloud infrastructure across AWS and Azure. 
              Specialized in CI/CD automation, Kubernetes platform engineering, and DevSecOps practices.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                View My Work
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Download Resume
              </Button>
            </div>
            <div className="mt-12 flex gap-6">
              <a href="mailto:hemanth32@hotmail.com" className="text-muted-foreground hover:text-primary transition-smooth">
                <Mail size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-card">
        <div className="container">
          <h2 className="text-heading-lg mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <Card key={idx} className="p-8 border border-border hover:shadow-lg transition-smooth">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-heading-md text-primary">{exp.title}</h3>
                    <p className="text-body text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-body-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                </div>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-body">
                      <span className="text-primary mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container">
          <h2 className="text-heading-lg mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((cat, idx) => (
              <Card key={idx} className="p-6 border border-border hover:border-primary transition-smooth">
                <h3 className="text-heading-sm text-primary mb-4 flex items-center gap-2">
                  <Code2 size={20} />
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-body-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card">
        <div className="container">
          <h2 className="text-heading-lg mb-12">Key Projects & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="p-8 border border-border hover:shadow-lg transition-smooth flex flex-col">
                <h3 className="text-heading-md text-primary mb-3 flex items-center gap-2">
                  <Cloud size={24} />
                  {project.title}
                </h3>
                <p className="text-body text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-body-sm rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Zap size={18} />
                  {project.impact}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-heading-lg mb-12">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <Card key={idx} className="p-4 border border-border">
                <p className="text-body text-primary font-semibold">{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-heading-lg mb-6">Let's Connect</h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing DevOps challenges, cloud architecture, and innovative infrastructure solutions.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a href="mailto:hemanth32@hotmail.com" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
              <Mail size={20} />
              hemanth32@hotmail.com
            </a>
            <a href="tel:+919982614999" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
              +91 9982614999
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container text-center text-body-sm text-muted-foreground">
          <p>© 2026 Hemanth Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
