/* eslint-disable @next/next/no-img-element */

import Wrapper from '../components/Wrapper'
import styles from '../../styles/sections/SocialsSection.module.scss'



const ContactSection = () => {
    return (
        <>
            <section>

                <Wrapper>
                    <h2>Contact</h2>
                    <div className="py-2"></div>

                    <h3>Management:</h3>
                    <h3><a href="mailto:dw@scooterbraun.com" className='text-white'>dw@scooterbraun.com</a></h3>
                    <div className="py-2"></div>

                    <h3>Agent:</h3>
                    <h3><a href="mailto:NGuthman@wmeagency.com" className='text-white'>NGuthman@wmeagency.com</a></h3>
                    <div className="py-2"></div>

                    <h3>Press:</h3>
                    <h3><a href="mailto:meghanh@grandstandhq.com" className='text-white'>meghanh@grandstandhq.com</a></h3>


                </Wrapper>


            </section>
        </>
    )
}

export default ContactSection
