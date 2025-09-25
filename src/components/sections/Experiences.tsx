import React from "react"
import { SectionWrapper } from "./SectionWrapper"
import { Experience } from "../Experience"

interface ExperiencesProps {}

export const Experiences: React.FC<ExperiencesProps> = (_) => {
    return (
        <SectionWrapper title="Experience">
            <Experience
                company="Agência BOZ"
                from="04/2022"
                until="Present"
                job_description="I spearhead a dynamic team of talented programmers, driving the design and development of sophisticated web applications. My role encompasses a broad range of responsibilities:"
                region="Curitiba, Brazil"
                role="Lead Developer"
                responsabilities={[
                    "Project Leadership: Guide and mentor a team of developers, fostering a  collaborative environment that encourages innovation and high standards in code quality.",
                    "Full Stack Development: Expertly handle both frontend and backend development. I specialize in creating intuitive, user-centric interfaces using React.js and building robust backend systems with Node.js, all rigorously implemented in TypeScript for enhanced scalability and maintainability.",
                    "Database Management: Manage complex database systems with a focus on efficiency and security, primarily using MySQL. I integrate Prisma as an ORM to streamline and optimize database operations.",
                    "DevOps and Deployment: Oversee the complete deployment lifecycle, from initial development to deployment, including setting up and maintaining server environments, configuring reverse proxies with Nginx, and ensuring continuous integration/continuous deployment (CI/CD) pipelines are robust and efficient.",
                    "Strategic Planning: Participate in strategic project planning and execution, ensuring that all software solutions align with organizational goals and deliver maximum value to stakeholders.",
                ]}
            />
            <Experience
                company="Quaestum Consultoria"
                from="04/2022"
                until="06/2023"
                job_description="Assisted in the design and development of software applications:"
                region="São Paulo, Brazil"
                role="Fullstack Developer"
                responsabilities={[
                    "System Architecture: Designed and implemented robust backend systems for government compliance and HR automation, ensuring high availability and data integrity while adhering to regulatory requirements.",
                    "Full Stack Development: Engineered end-to-end solutions using React.js for frontend and Python for backend services, developing data processing pipelines and API integrations with external systems including government portals and HR databases.",
                    "Process Automation: Created automated workflows that transformed manual verification processes into efficient digital systems, significantly reducing processing time while maintaining compliance standards.",
                    "Database Management: Managed and optimized SQL Server and MySQL databases, designing schemas for critical operations and implementing secure data synchronization between systems.",
                ]}
            />
        </SectionWrapper>
    )
}
