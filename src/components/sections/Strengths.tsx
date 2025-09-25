import React from "react"
import { IconedItem } from "../IconedItem"
import { Bolt, Check, Groups } from "@mui/icons-material"
import { SectionWrapper } from "./SectionWrapper"

interface StrengthsProps {}

export const Strengths: React.FC<StrengthsProps> = (_) => {
    return (
        <SectionWrapper title="Strengths">
            <IconedItem Icon={Bolt} title="Problem-Solving" description="Resolved complex software issues in previous role." />
            <IconedItem
                Icon={Groups}
                title="Collaboration"
                description="Led a cross-functional team of four developers in the successful execution of a critical project on time and under budget."
            />
            <IconedItem
                Icon={Check}
                title="Adaptability"
                description="Quickly incorporated new software updates in all projects, ensuring minimal disruption to workflow and maintaining project schedules."
            />
        </SectionWrapper>
    )
}
