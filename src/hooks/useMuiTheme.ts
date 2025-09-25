import { createTheme } from "@mui/material"
import { useMemo } from "react"
import { colors } from "../style/colors"

export const useMuiTheme = () => {
    const THEME = useMemo(
        () =>
            createTheme({
                typography: {
                    fontFamily: ["Rubik", "PT Sans"].join(","),
                    h1: { fontWeight: 500, fontSize: "4vw" },
                    h2: { color: colors.primary, fontWeight: 400, fontSize: "2vw" },
                    body1: { color: colors.text, fontSize: "1.4vw", fontFamily: "PT Sans" },
                    body2: { fontSize: "1.3vw", fontWeight: 400 },
                },
                palette: {
                    primary: {
                        main: colors.primary,
                    },
                    secondary: {
                        main: colors.secondary,
                    },

                    text: {
                        primary: colors.text,
                    },
                },
                components: { MuiChip: { styleOverrides: { label: { fontFamily: "Rubik", color: "#fff" } } } },
            }),
        [colors]
    )

    return THEME
}
