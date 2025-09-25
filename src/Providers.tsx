import React from "react"
import { ThemeProvider } from "@mui/material"
import { useMuiTheme } from "./hooks/useMuiTheme"

interface ProvidersProps {
    children?: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = (props) => {
    const theme = useMuiTheme()

    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}
