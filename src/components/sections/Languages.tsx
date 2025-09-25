import React from "react"
import { SectionWrapper } from "./SectionWrapper"
import { Language } from "../Language"

interface LanguagesProps {}

export const Languages: React.FC<LanguagesProps> = (_) => {
    return (
        <SectionWrapper title="Languages">
            <Language language="Portuguese" proficiency_label="Native" proficiency_value={5} />
            <Language language="English" proficiency_label="Proficient" proficiency_value={4} />
            <Language language="Spanish" proficiency_label="Beginner" proficiency_value={1} />
        </SectionWrapper>
    )
}
