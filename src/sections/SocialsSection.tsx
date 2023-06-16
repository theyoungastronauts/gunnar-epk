/* eslint-disable @next/next/no-img-element */

import Wrapper from '../components/Wrapper'
import styles from '../../styles/sections/SocialsSection.module.scss'
import MediaItem from '../components/MediaItem'


const items = [
    {
        platform: "Instagram",
        icon: "/images/socials/instagram.svg",
        count: "132k",
        label: "followers",
        url: "#"
    },
    {
        platform: "Twitter",
        icon: "/images/socials/twitter.svg",
        count: "10k",
        label: "followers",
        url: "#"
    },
    {
        platform: "TikTok",
        icon: "/images/socials/tiktok.svg",
        count: "250k",
        label: "followers",
        url: "#"
    },
    {
        platform: "YouTube",
        icon: "/images/socials/youtube.svg",
        count: "5.6M",
        label: "Views",
        url: "#"
    },
    {
        platform: "Spotify",
        icon: "/images/socials/spotify.svg",
        count: "153K",
        label: "Listeners",
        url: "#"
    }
]

const SocialsSection = () => {
    return (
        <>
            <section>

                <Wrapper>
                    <h2>Socials</h2>
                    <div className="py-2"></div>

                    <div className='d-flex justify-content-between'>

                        {items.map((item, i) => {
                            return (
                                <a key={i} className={styles.socialItem} href={item.url}>
                                    <div className={styles.icon}><img src={item.icon} alt={item.platform} /></div>
                                    <div className={styles.count}>{item.count}</div>
                                    <div className={styles.label}>{item.label}</div>
                                </a>
                            )
                        })}
                    </div>

                </Wrapper>


            </section>
        </>
    )
}

export default SocialsSection
