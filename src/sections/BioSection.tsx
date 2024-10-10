/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import styles from '../../styles/sections/BioSection.module.scss'
import Wrapper from '../components/Wrapper'
import Link from 'next/link';

interface Props {
    isExpanded?: boolean;
}

const BioSection = (props: Props) => {
    return (
        <>
            <section>
                <div className="py-2"></div>
                <Wrapper>




                    {props.isExpanded ? (
                        <>

                            <p className={styles.p}>
                                22-year-old singer/songwriter GUNNAR was just a kid when he discovered his life's purpose: delivering the kind of electrifying live show that leaves audiences enraptured.
                            </p>

                            <p className={styles.p}>
                                At the age of 7, he began playing in a garage band with friends in Orange County. Now, the 22-year-old singer/songwriter has performed in front of sold-out crowds, opening for Maroon 5 and Gwen Stefani, and has amassed over 20 million global streams. His demos previously caught the attention of Grammy Award-winning producer Brendan O'Brien (AC/DC, Pearl Jam, The Killers), and together they created GUNNAR's full-length debut, Best Mistake (February 2023). After coming off his first European tour in 2023 opening for Maroon 5, GUNNAR released “Again & Again."  The record meant to bring the feeling and connection he made with fans during his 2023 live shows, to his recorded music. The song showcases pop influences in his voice against his alternative, mid-aughts garage rock edge.
                            </p>

                            <p className={styles.p}>Determined to unearth his true artistic voice, GUNNAR spent over a year collaborating with several of his friends from the L.A. music scene, eventually writing nearly 100 songs rooted in his explosive guitar work. When those demos caught the attention of Grammy Award-winning producer Brendan O'Brien (AC/DC, Pearl Jam, The Killers), GUNNAR headed into the studio to create his full-length debut, Best Mistake: an intimate yet wildly euphoric selection of songs, fully channeling the free-flowing energy and raw vitality of his live set for the first time ever.</p>

                            <p className={styles.p}>
                                Produced by O'Brien at the legendary Henson Recording Studios, Best Mistake encompasses a guitar-heavy sound echoing the eclectic mix of influences that form GUNNAR's musical DNA ('90s alt-rock, mid-aughts garage rock, heartland singer/songwriters and classic country). “I wrote all these songs thinking about the live show and how to bring in those big musical moments and energy that make every night unforgettable,” he notes. The album is loaded with combustible guitar solos, sing-along-ready choruses, and infinitely unpredictable rhythms—an element shaped with the help of co-producer Adam Friedman (Mike Posner, Tai Verdes, Capital Cities). “I'm very much inspired by the way that artists like Kendrick Lamar and Nine Inch Nails come up with drum sounds and beats that feel like nothing you've ever heard before,” says GUNNAR. “Through working with Adam we were able to take what we'd done live and build another layer onto that, so it ends up sounding like a record from tomorrow.”
                            </p>


                            <p className={styles.p}>
                                With its ripped-from-real-life ruminations on love and lust and loss, Best Mistake matches its forward-thinking sonic palette with GUNNAR's newly unbridled vocal presence. “In the past I was mostly focused on getting a clean pop vocal, but now it's about being as expressive and authentically myself as possible,” he says. “Sometimes I'm yelling, sometimes it's quiet, sometimes my voice will crack. I'm singing with way more feeling than I ever did before, because the songs mean so much more to me.” On the album's hypnotic lead single “Cinnamon,” GUNNAR's vocals take on a soulful intensity made even more magnetic by his feverish guitar riffs. “It's a song about losing control over somebody who's just toying with you—but you can't stop, because you're addicted,” he says. On “They Didn't Tell Me,” gritty guitar tones form the backdrop to GUNNAR's witty storytelling. “I wrote that after getting back from tour last year,” he reveals. “It's about the experience of going to a city where a friend of mine lives and saying to them, ‘You told me all about this place, but you never told me about this one special person out in the crowd.' It's that moment of immediately connecting with someone and being gripped by their presence” Meanwhile, on “The Chase,” Best Mistake bursts into an impossibly energetic mood fueled by the track's dizzying rhythms and dexterous guitar work. “That song's about loving the uncertainty of a relationship where nothing is easy,” says GUNNAR. “I loved the idea of flipping that on its head and making it a feel-good song instead of something angsty and dark.”
                            </p>

                            <p className={styles.p}>
                                GUNNAR feels most at home when he's onstage or out on the road. “I love the exchange of energy you feel with an audience when you're deeply engaged in the music. You're playing and the crowd is right there with you - you could be anywhere,” he says. And as he gears up for the release of Best Mistake, GUNNAR's greatest thrill lies in sharing a body of work that truly reflects his lifelong passion. “Starting from when I was a kid playing at bars at one in the afternoon, making music for people is the only thing that's ever felt right,” he says. “Now that I've figured out how to create the music that really represents me, the live show is the best it's ever been. I just want to keep playing as much as I can and leave 100 percent of myself out there every night, so that people feel like they've witnessed something they won't ever see again.”
                            </p>


                            <Link href={"/"} className="default-link">Back</Link>


                        </>
                    ) : (
                        <>
                            <p className={styles.intro}>

                                23-year-old singer/songwriter GUNNAR was just a kid when he discovered his life's purpose: delivering the kind of electrifying live show that leaves audiences enraptured.  At the age of 7, he began playing in a garage band with friends in Orange County. Now, the singer/songwriter has performed in front of sold-out crowds - opening for Maroon 5, Gwen Stefani & Jaden Hossler - and has amassed over 20 million global streams. His work previously caught the attention of Grammy Award-winning producer Brendan O'Brien (AC/DC, Pearl Jam, The Killers), and together they created GUNNAR's full-length debut, Best Mistake (February 2023). Currently, Gunnar is anticipating an explosive 2025 with his first headline tour this upcoming March, coupled with the release of his EP created with KThrash (Machine Gun Kelly, Jelly Roll) in Spring 2025.
                            </p>

                            <Link href={"/bio"} className="default-link">Read More</Link>
                        </>
                    )}
                </Wrapper>
            </section>
        </>
    )
}

export default BioSection
