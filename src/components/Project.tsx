import React from "react"
import { Box, capitalize, Typography } from "@mui/material"
import { Circle } from "@mui/icons-material"

export interface ProjectProps {
    name: string
    descriptionLines: string[]
    type: "personal" | "professional"
    technologies: string[]
    link?: string
    highlights: string[]
    platforms: string[]
}

export const Project: React.FC<ProjectProps> = (props) => {
    return (
        <Box sx={{ flexDirection: "column", gap: "1vw" }}>
            <Box sx={{ flexDirection: "column", flex: 0.65 }}>
                <Typography sx={{ fontFamily: "Rubik", fontSize: "2vw", color: "secondary.main" }}>{props.name}</Typography>
                <Typography sx={{ color: "primary.main", fontFamily: "Rubik", fontSize: "1.6vw" }}>{capitalize(props.type)}</Typography>
            </Box>

            <Box sx={{ flexDirection: "column" }}>
                <Typography variant="body2">Platforms: {props.platforms.join(", ")}</Typography>
                <Typography variant="body2">Technologies: {props.technologies.join(", ")}</Typography>
            </Box>

            <Box sx={{ flexDirection: "column", gap: "0.5vw" }}>
                {props.descriptionLines.map((line) => (
                    <Typography key={line}>{line}</Typography>
                ))}
            </Box>

            <Box sx={{ flexDirection: "column", gap: "0.5vw" }}>
                <Typography variant="body2">Highlights:</Typography>
                {props.highlights.map((highlight) => (
                    <Box key={highlight} sx={{ marginLeft: "1vw", alignItems: "flex-start", gap: "0.5vw" }}>
                        <Circle color="primary" sx={{ width: "0.7vw", height: "auto", marginTop: "0.55vw" }} />
                        <Typography sx={{ fontSize: "1.2vw" }}>{highlight}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
