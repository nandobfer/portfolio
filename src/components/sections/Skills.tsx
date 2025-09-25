import React from "react"
import { Box } from "@mui/material"
import { SectionWrapper } from "./SectionWrapper"
import { SkillItem } from "../SkillItem"

interface SkillsProps {}

const skills = [
    "Typescript",
    "React.JS",
    "Python",
    "C++",
    "React Native",
    "Express.JS",
    "Javascript",
    "Docker",
    "Docker Compose",
    "REST",
    "MySQL",
    "Linux",
    "Nginx",
    "Prisma",
    "Material Design",
    "Figma",
    "Socket.io",
    "Object Oriented Programming",
    "Google Cloud",
]

export const Skills: React.FC<SkillsProps> = (_) => {
    return (
        <SectionWrapper title="Skills">
            <Box sx={{ gap: "1vw", flexWrap: "wrap" }}>
                {skills.map((skill) => (
                    <SkillItem key={skill} label={skill} />
                ))}
            </Box>
        </SectionWrapper>
    )
}
