import Wrapper from '../components/Wrapper'
import Gallery from '../components/Gallery'
import Link from 'next/link';

const imageUrls = [
    '/images/gallery/gallery-1.jpg',
    '/images/gallery/gallery-2.jpg',
    '/images/gallery/gallery-3.jpg',
    '/images/gallery/gallery-4.jpg',
    '/images/gallery/gallery-5.jpg',
    '/images/gallery/gallery-6.jpg',
];


const GallerySection = () => {
    return (
        <>
            <section>
                <Gallery height={270} >
                    {imageUrls.map((url, i) => {
                        return <img key={i} src={url} alt={"Image"} />
                    })}
                </Gallery>

                <div className="py-2"></div>

                <Wrapper>
                    <Link href={"#"} download={"gunnar.zip"} className="default-link">Download Photos</Link>
                </Wrapper>

            </section>
        </>
    )
}

export default GallerySection
