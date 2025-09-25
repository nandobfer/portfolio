import React from "react"
import { Box, Typography } from "@mui/material"
import { SectionWrapper } from "./SectionWrapper"
import { HeaderInfo } from "../HeaderInfo"
import { Business, Place } from "@mui/icons-material"

interface EducationProps {}

export const Education: React.FC<EducationProps> = (_) => {
    return (
        <SectionWrapper title="Education" style={{ marginTop: "5vw" }}>
            <Box sx={{ flexDirection: "column" }}>
                <Typography sx={{ fontFamily: "Rubik", fontSize: "2vw", color: "secondary.main" }}>Bachelor's in Mechatronics Engineering</Typography>
                <Typography sx={{ fontFamily: "Rubik", fontSize: "1.6vw", color: "primary.main" }}>
                    Universidade Federal Tecnologica do Paraná
                </Typography>
                <Box sx={{ gap: "2vw" }}>
                    <HeaderInfo Icon={Business} label={`2017 - 2022`} />
                    <HeaderInfo Icon={Place} label={"Curitiba, Brazil"} />
                </Box>
            </Box>
        </SectionWrapper>
    )
}
