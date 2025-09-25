import React from "react"
import { Box, Typography } from "@mui/material"
import type { MaterialIcon } from "../types/MaterialIcon"

interface HeaderInfoProps {
    Icon: MaterialIcon
    label: string
    url?: string
}

export const HeaderInfo: React.FC<HeaderInfoProps> = ({ label, Icon, url }) => {
    return (
        <Box sx={{ gap: "0.3vw", alignItems: "center" }} className={url && "link"} onClick={() => url && window.open(url, "")}>
            <Icon sx={{ color: "#b9b9b9", width: "1.4vw", height: "auto" }} />
            <Typography variant="body1">{label}</Typography>
        </Box>
    )
}
