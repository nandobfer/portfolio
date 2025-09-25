import React from "react"
import { Box, Slider, Typography } from "@mui/material"

interface ExpertiseProps {
    label: string
    value: number
}

export const Expertise: React.FC<ExpertiseProps> = (props) => {
    return (
        <Box sx={{ flexDirection: "column" }}>
            <Typography sx={{ fontFamily: "Rubik", fontSize: "1.6vw", color: "secondary.main", fontWeight: 400 }}>{props.label}</Typography>
            <Slider value={props.value} min={0} max={1} size='small' />
        </Box>
    )
}
