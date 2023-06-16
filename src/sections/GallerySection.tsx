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

const downloadUrl = "https://firebasestorage.googleapis.com/v0/b/gunnar-gehl.appspot.com/o/GunnarHighResPhotos.zip?alt=media&token=4e477ceb-afd4-46e5-ba96-de22d24fed32"

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
                    <a href={downloadUrl} download={"GunnarHighResPhotos.zip"} target='_blank' className="default-link">Download Photos</a>
                </Wrapper>

            </section>
        </>
    )
}

export default GallerySection
