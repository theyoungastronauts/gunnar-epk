/* eslint-disable @next/next/no-img-element */

import Wrapper from '../components/Wrapper'
import styles from '../../styles/sections/SocialsSection.module.scss'
import MediaItem from '../components/MediaItem'


const items = [
    {
        platform: "Instagram",
        icon: "/images/socials/instagram.svg",
        count: "117k",
        label: "followers",
        url: "https://www.instagram.com/gunnar/"
    },
    {
        platform: "Twitter",
        icon: "/images/socials/twitter.svg",
        count: "10k",
        label: "followers",
        url: "https://twitter.com/gunnargehl"
    },
    {
        platform: "TikTok",
        icon: "/images/socials/tiktok.svg",
        count: "240k",
        label: "followers",
        url: "https://www.tiktok.com/@gunnargehl"
    },
    {
        platform: "YouTube",
        icon: "/images/socials/youtube.svg",
        count: "5.6M",
        label: "Views",
        url: "https://www.youtube.com/channel/UCvisVWHgj1C46QO_JKH7cjA"
    },
    {
        platform: "Spotify",
        icon: "/images/socials/spotify.svg",
        count: "153K",
        label: "Listeners",
        url: "https://open.spotify.com/artist/3o4OtMGLmvvLSx19ZjtuSn?si=V8E_mwKbTZiltuJFbtauzw&nd=1"
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
                                <a key={i} className={styles.socialItem} href={item.url} target='_blank'>
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
