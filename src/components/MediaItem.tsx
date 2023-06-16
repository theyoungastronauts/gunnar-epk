/* eslint-disable @next/next/no-img-element */

import styles from '../../styles/MediaItem.module.scss'

interface Props {
    image: string;
    title: string;
    url: string;
    isVideo: boolean;
}


const MediaItem = (props: Props) => {
    const { image, title, url, isVideo } = props;
    return (
        <div className={styles.mediaItem}>
            <a href={url} target='_blank'>
                <img src={image} alt={title} />
            </a>

            <div className="py-2"></div>

            <div className="d-flex justify-content-between align-items-center">
                <h3>{title}</h3>
                <a href={url} target='_blank' className='default-link'>{isVideo ? 'Watch' : 'Listen'}</a>
            </div>

            <div className="py-4"></div>



        </div>
    )
}

export default MediaItem;