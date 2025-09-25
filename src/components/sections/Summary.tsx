import React from "react"
import { Typography } from "@mui/material"
import { SectionWrapper } from "./SectionWrapper"

interface SummaryProps {}

export const Summary: React.FC<SummaryProps> = (_) => {
    return (
        <SectionWrapper title="summary">
            <Typography variant="body1">
                I have extensive experience in building comprehensive web and mobile solutions. I'm fluent in Portuguese and English and currently
                play a pivotal role in a small tech team where I handle a wide range of development and deployment tasks.
            </Typography>
            <Typography variant="body1">
                I lead the development efforts for both front-end and back-end technologies, with a focus on creating responsive websites and
                applications using React, React Native, and Node.js, all using TypeScript. My experience also includes working with Flask, allowing me
                to build scalable and efficient systems.
            </Typography>
            <Typography variant="body1">
                I manage MySQL and Postgre databases, employing Prisma as an ORM to enhance data interactions. Additionally, I'm responsible for
                maintaining our server environments, utilizing Docker and Nginx to ensure security and stability.
            </Typography>
            <Typography variant="body1">
                Proficient in system administration, I handle server operations through Linux (Ubuntu and CentOS) and Windows, entirely via terminal.
                My duties include configuring reverse proxies and managing domains to support seamless app deployments.
            </Typography>
            <Typography variant="body1">
                In my current role, I guide the technological direction and make key development decisions, working closely with a web designer and
                mentoring a few junior programmers. This small-team setting has honed my ability to manage projects effectively from conception to
                launch, ensuring quality and innovation at every step
            </Typography>
        </SectionWrapper>
    )
}
