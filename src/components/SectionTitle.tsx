import React from "react"
import { Box, Typography } from "@mui/material"

interface SectionTitleProps {
    title: string
}

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
    return (
        <Box sx={{ borderBottom: `1px solid #65696d` }}>
            <Typography sx={{ fontFamily: "Rubik", fontSize: "1.7vw", color: "#65696d", textTransform: "uppercase" }}>{props.title}</Typography>
        </Box>
    )
}
