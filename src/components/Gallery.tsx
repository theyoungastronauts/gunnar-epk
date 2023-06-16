import Image from "next/image";
import styles from '../../styles/Gallery.module.scss'
import { ReactNode } from "react";




interface Props {
    children: ReactNode[];
    height: number;
}


const Gallery = (props: Props) => {

    return (
        <div className={styles.slider}>

            {props.children.map((child, i) => {

                return <div key={i} className={styles.slide} style={{ height: props.height }}>{child}</div>
            })}

        </div>
    )

}




export default Gallery;