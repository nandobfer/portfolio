import React from "react"
import { Box, Typography } from "@mui/material"
import { colors } from "../style/colors"

interface SkillItemProps {
    label: string
}

export const SkillItem: React.FC<SkillItemProps> = (props) => {
    return (
        <Box sx={{ borderBottom: "solid 1px", padding: "0 1vw", paddingBottom: "0.5vw", marginTop: "0.5vw" }}>
            <Typography sx={{ color: colors.secondary, fontSize: "1.5vw" }}>{props.label}</Typography>
        </Box>
    )
}
