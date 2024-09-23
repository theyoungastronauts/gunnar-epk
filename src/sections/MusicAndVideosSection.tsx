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

                    <MediaItem image={'/images/media/dirtyblond.jpg'} title="Dirty Blonde" isVideo={false} url='https://open.spotify.com/album/7FI55AkxrAoh663kcB9VxD' />
                    <MediaItem image={'/images/media/again.jpg'} title='Again & Again' isVideo={false} url='https://streaklinks.com/BxXdp-CMTG0pfGhHOAYKxB4z/https%3A%2F%2Fgunnar.komi.io%2Fmusic%2Fagain--again' />
                    <MediaItem image={'/images/media/best-mistake.jpg'} title='Best Mistake' isVideo={false} url='https://gunnar.komi.io/music/best-mistake' />
                    <MediaItem image={'/images/media/dirtyblond-video.jpg'} title="Dirty Blonde" isVideo={true} url='https://www.youtube.com/watch?v=111_oyTK8ng' />
                    <MediaItem image={'/images/media/again-live.jpg'} title="Again & Again (Live in Europe)" isVideo={true} url='https://streaklinks.com/BxXdp91rK_EpA131AgEWE0ZU/https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHHmjuJJoxsk' />
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
