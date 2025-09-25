import React from "react"
import { Box, Typography } from "@mui/material"
import { HeaderInfo } from "./HeaderInfo"
import { AlternateEmail, GitHub, LinkedIn, Phone, Place } from "@mui/icons-material"

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (_) => {
    return (
        <Box sx={{ flexDirection: "column", gap: "1vw" }}>
            <Box sx={{ flexDirection: "column" }}>
                <Typography variant="h1">Fernando Burgos</Typography>
                <Box sx={{ justifyContent: "space-between" }}>
                    <Typography variant="h2">Fullstack Developer</Typography>
                    <Typography variant="h2">React.js, React Native, Node.js. Typescript</Typography>
                </Box>
            </Box>

            <Box sx={{ gap: "2vw" }}>
                <HeaderInfo Icon={Phone} label="+5541984556795" url="tel:+5541984556795" />
                <HeaderInfo Icon={AlternateEmail} label="nandobfer@gmail.com" url="mailto:nandobfer@gmail.com" />
                <HeaderInfo
                    Icon={LinkedIn}
                    label="linkedin.com/in/fernando-burgos-fernandes"
                    url="https://linkedin.com/in/fernando-burgos-fernandes"
                />
                <HeaderInfo Icon={GitHub} label="github.com/nandobfer" url="https://github.com/nandobfer" />
                <HeaderInfo
                    Icon={Place}
                    label="Curitiba, Brazil"
                    url="https://www.google.com.br/maps/place/Curitiba,+PR/@-25.4947146,-49.4546099,11z/data=!3m1!4b1!4m6!3m5!1s0x94dce35351cdb3dd:0x6d2f6ba5bacbe809!8m2!3d-25.4268985!4d-49.2651984!16zL20vMDI4bXBy?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
                />
            </Box>
        </Box>
    )
}
