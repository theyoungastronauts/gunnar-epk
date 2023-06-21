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

                    <MediaItem image={'/images/media/best-mistake.jpg'} title='Best Mistake' isVideo={false} url='https://gunnar.komi.io/music/best-mistake' />
                    <MediaItem image={'/images/media/cinnamon.jpg'} title='Cinnamon' isVideo={true} url='https://www.youtube.com/watch?v=AyoImuvM3Ns&ab_channel=GUNNARVEVO' />
                    <MediaItem image={'/images/media/bad-idea.jpg'} title='Bad Idea' isVideo={true} url='https://www.youtube.com/watch?v=8tBjbSAwBxo&ab_channel=GUNNARVEVO' />
                    <MediaItem image={'/images/media/fuck-a-broken-heart.jpg'} title='Fuck a Broken Heart' isVideo={true} url='https://www.youtube.com/watch?v=qVGIvGx7Ojc&ab_channel=GUNNARVEVO' />
                    <MediaItem image={'/images/media/they-didnt-tell-me.jpg'} title="They Didn't Tell Me" isVideo={true} url='https://www.youtube.com/watch?v=oh-UEVpqT-k&ab_channel=GUNNARVEVO' />
                </Wrapper>



            </section>
        </>
    )
}

export default MusicAndVideosSection
