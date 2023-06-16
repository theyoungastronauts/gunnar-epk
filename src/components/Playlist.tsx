/* eslint-disable @next/next/no-img-element */

import styles from '../../styles/Playlist.module.scss'

interface Props {
    image: string;
    platform: string;
    items: string[];
}


const Playlist = (props: Props) => {
    const { image, platform, items } = props;
    return (
        <div className={styles.playlistCard}>
            <img src={image} alt={platform} />
            <div className="py-1"></div>
            <h3>{platform}</h3>
            <div className="py-1"></div>

            <p>
                {items.map((item, i) => {
                    return <span key={i}>{item}</span>
                })}
            </p>
        </div>
    )
}

export default Playlist;