import React from "react"
import { SectionWrapper } from "./SectionWrapper"
import { Expertise } from "../Expertise"

interface IndustryExpertiseProps {}

export const IndustryExpertise: React.FC<IndustryExpertiseProps> = (_) => {
    return (
        <SectionWrapper title="Industry Expertise" style={{ marginTop: "0vw" }}>
            <Expertise label="Frontend Development" value={1} />
            <Expertise label="Backend Development" value={0.9} />
            <Expertise label="Leadership" value={0.6} />
        </SectionWrapper>
    )
}
