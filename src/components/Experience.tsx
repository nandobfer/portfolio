import React from "react"
import { Box, Typography } from "@mui/material"
import { HeaderInfo } from "./HeaderInfo"
import { Business, Circle, Place } from "@mui/icons-material"

interface ExperienceProps {
    role: string
    company: string
    from: string
    until: string
    region: string
    job_description: string
    responsabilities: string[]
}

export const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <Box sx={{ flexDirection: "column" }}>
            <Typography sx={{ fontFamily: "Rubik", fontSize: "2vw", color: "secondary.main" }}>{props.role}</Typography>
            <Box sx={{ justifyContent: "space-between" }}>
                <Typography sx={{ color: "primary.main", fontFamily: "Rubik", fontSize: "1.6vw" }}>{props.company}</Typography>
                <Box sx={{ gap: "2vw" }}>
                    <HeaderInfo Icon={Business} label={`${props.from} - ${props.until}`} />
                    <HeaderInfo Icon={Place} label={props.region} />
                </Box>
            </Box>
            <Typography>{props.job_description}</Typography>
            <Box sx={{ flexDirection: "column", gap: "0.5vw", marginTop: "0.5vw" }}>
                {props.responsabilities.map((responsability) => (
                    <Box key={responsability} sx={{ gap: "1vw", marginLeft: "1vw", alignItems: "flex-start" }}>
                        <Circle color="primary" sx={{ width: "0.7vw", height: "auto", marginTop: "0.55vw" }} />
                        <Typography sx={{ fontSize: "1.2vw" }}>{responsability}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
