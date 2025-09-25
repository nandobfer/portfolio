import React from "react"
import { Box, Typography } from "@mui/material"
import type { MaterialIcon } from "../types/MaterialIcon"
import { colors } from "../style/colors"

interface IconedItemProps {
    Icon: MaterialIcon
    title: string
    description: string
}

export const IconedItem: React.FC<IconedItemProps> = (props) => {
    return (
        <Box sx={{ gap: "1vw" }}>
            <Box
                sx={{
                    padding: "1vw",
                    bgcolor: "#f2f2f2",
                    borderRadius: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "5vw",
                    height: "5vw",
                }}
            >
                <props.Icon sx={{ width: "3vw", height: "auto" }} color="primary" />
            </Box>

            <Box sx={{ flexDirection: "column", flex: 1 }}>
                <Typography sx={{fontFamily: 'Rubik', color: colors.secondary, fontSize: '1.5vw', fontWeight: 400}}>{props.title}</Typography>
                <Typography>{props.description}</Typography>
            </Box>
        </Box>
    )
}
