import Wrapper from '../components/Wrapper'
import Gallery from '../components/Gallery'
import styles from '../../styles/sections/PressSection.module.scss'


const pressItems = [
    {
        body: "The rebellious spirit is really the lifeblood of rock n’ roll music, always has been, and always will be. Young musician GUNNAR is carving out quite a path for himself, with his middle finger firmly pointed in the air",
        from: "V13"
    },
    {
        body: "GUNNAR is fully in the throes of segueing from “teenage heartthrob” to Heartland rocker…his new turn to roots music better reflects what he heard growing up — country, classic rock and ’90s alternative.",
        from: "Buzzbands"
    },
    {
        body: "GUNNAR's debut album 'Best Mistake' is a riot and we love it",
        from: "Variance Magazine"
    },
    {
        body: "The rising start to have on your radar right now",
        from: "Wonderland Magazine"
    },
    {
        body: "Capturing the free-flowing energy and raw vitality of his live set, it’s an album filled with feverish guitar solos, sing-along-ready choruses, and soulful vocals, marking a vibrant new chapter for the California native.",
        from: "Ticketmaster",
    },
    {
        body: "The new King of Rock and Roll…this kid can sing, he can dance, and - holy s**t* - he can play. Hitting his notes with perfection like a euphoric guitar hero. Watching GUNNAR was like watching Elvis Presley reincarnated.",
        from: "Daily Express",
    },

];


const PressSection = () => {
    return (
        <>
            <section>

                <Wrapper>
                    <h2>Press</h2>
                    <p>
                        Press coverage includes: Billboard, Wonderland, Paste Magazine, Uproxx, Ones to Watch, Ticketmaster and Earmilk
                    </p>
                </Wrapper>

                <div className="py-1"></div>

                <Gallery height={243}>

                    {pressItems.map((item, i) => {
                        return <div key={i} className={styles.pressItem}>
                            <p>&ldquo;{item.body}&rdquo;</p>
                            <cite>-{item.from}</cite>
                        </div>
                    })}


                </Gallery>

            </section>
        </>
    )
}

export default PressSection
