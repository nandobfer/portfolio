import React from "react"
import { SectionWrapper } from "./SectionWrapper"
import { IconedItem } from "../IconedItem"
import { Assistant, Star } from "@mui/icons-material"

interface InterestsProps {}

export const Interests: React.FC<InterestsProps> = (_) => {
    return (
        <SectionWrapper title="Interests">
            <IconedItem
                Icon={Star}
                title="Coding"
                description="Enjoy building and optimizing software applications, always on the lookout for new programming languages and techniques to learn."
            />
            <IconedItem
                Icon={Assistant}
                title="AI Integration"
                description="Implementing AI-powered features that solve real business problems - chatbots for customer support, intelligent assistants for product guidance, and automation tools that optimize workflows."
            />
        </SectionWrapper>
    )
}
