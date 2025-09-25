import { Box } from "@mui/material"
import "./App.css"
import { Providers } from "./Providers"
import { Header } from "./components/Header"
import { Projects } from "./components/sections/Projects"

function App() {
    return (
        <Providers>
            <Box sx={{ flexDirection: "column", padding: "5vw", gap: "2vw" }}>
                <Header />
                <Projects />
            </Box>
        </Providers>
    )
}

export default App
