import Wrapper from '../components/Wrapper'
import styles from '../../styles/sections/MusicAndVideosSection.module.scss'
import MediaItem from '../components/MediaItem'




const MusicAndVideosSection = () => {
    return (
        <>
            <section>

                <Wrapper>
                    <h2>Music &amp; Videos</h2>
                    <div className="py-2"></div>

                    <MediaItem image={'/images/media/best-mistake.jpg'} title='Best Mistake' isVideo={false} url='#' />
                    <MediaItem image={'/images/media/cinnamon.jpg'} title='Cinnamon' isVideo={true} url='#' />
                    <MediaItem image={'/images/media/bad-idea.jpg'} title='Bad Idea' isVideo={true} url='#' />
                    <MediaItem image={'/images/media/fuck-a-broken-heart.jpg'} title='Fuck a Broken Heart' isVideo={true} url='#' />
                    <MediaItem image={'/images/media/they-didnt-tell-me.jpg'} title="They Didn't Tell Me" isVideo={true} url='#' />
                </Wrapper>



            </section>
        </>
    )
}

export default MusicAndVideosSection
