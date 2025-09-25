import { Box } from "@mui/material"
import "./App.css"
import { Providers } from "./Providers"
import { Header } from "./components/Header"
import { Summary } from "./components/sections/Summary"
import { Strengths } from "./components/sections/Strengths"
import { Skills } from "./components/sections/Skills"
import { Interests } from "./components/sections/Interests"
import { Languages } from "./components/sections/Languages"
import { IndustryExpertise } from "./components/sections/IndustryExpertise"
import { Experiences } from "./components/sections/Experiences"
import { Education } from "./components/sections/Education"
import { Projects } from "./components/sections/Projects"

function App() {
    return (
        <Providers>
            <Box sx={{ flexDirection: "column", padding: "5vw", gap: "2vw" }}>
                <Header />
                <Box sx={{ gap: "5vw" }}>
                    <Box sx={{ flexDirection: "column", flex: 0.65, gap: "5vw" }}>
                        <Summary />
                        <Experiences />
                        <Education />
                    </Box>
                    <Box sx={{ flexDirection: "column", flex: 0.35, gap: "5vw" }}>
                        <Strengths />
                        <Skills />
                        <Interests />
                        <Languages />
                        <IndustryExpertise />
                    </Box>
                </Box>
                <Projects />
            </Box>
        </Providers>
    )
}

export default App
