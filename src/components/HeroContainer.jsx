import { useEffect, useState } from 'react'
import '../styles/style.css'
import '../styles/TypeAnimation.css'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import Loader from './Loading'


export default function HeroContainer() {


    const [showScroll, setShowScroll] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScroll(false)
            } else {
                setShowScroll(true)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return (
        <section id="home" className='hero-section'>
            <div className="hero-container">
                <div className='flex-row'>
                    <h2 className="hero-texts">Hello</h2>
                    <div className="comma">,</div>
                    {/* <Loader/> */}
                </div>
                <div className='flex-row relative'>
                    <div className='hero-bar'></div>
                    <h3 className='hero-text-two'><a style={{textDecoration:'none'}} href='#about' >I'm <span className='my-name'>Sivasurya Murugaraj</span></a></h3>
                </div>
                <div className='heroTypeAnimation'>
                    <p className='sub-head' >Getting trained in</p>
                    <h2 className="hero-texts typing-animation"></h2>
                </div>
                <div className='actions'>
                    <PrimaryButton text={'View my works'} onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} />
                    <SecondaryButton text={"Happy to connect"} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
                </div>
            </div>
            <div className='profile-container'>
                <img src="/portfolio/assets/profile.png" alt="profile" className='profile-pic' />
            </div>
            {showScroll && (
                <div onClick={() => window.location = '#about'} className='scroll-indicator'>
                    <span className="scroll-text">Scroll</span>
                    <div className="arrow-down"></div>
                </div>
            )}
        </section>
    )
}
