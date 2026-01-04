import AboutMe from "../components/about"
import { Reveal } from "../components/reveal"

export default function About() {
    return(
        <main>
            <Reveal width="100%" delay={0.1}>
                <AboutMe />
            </Reveal>
        </main>
    )
}