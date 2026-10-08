// © 2026 DJ_Gorilla
// Developed by Akash Kumar and Vijay Kumar



import './Packages.css'

const services = [
    {
        icon: 'ri-emotion-happy-line',
        title: 'Gorilla mascot',
        text: 'A fun, high-energy mascot performance that keeps every guest smiling.',
    },
    {
        icon: 'ri-magic-line',
        title: 'Event decoration',
        text: 'Theme-based decoration that turns your venue into a real celebration.',
    },
    {
        icon: 'ri-headphone-line',
        title: 'DJ sound',
        text: 'Powerful DJ and sound setup to keep the dance floor alive.',
    },
    {
        icon: 'ri-cup-line',
        title: 'Coffee machine',
        text: 'Fresh hot coffee served to your guests right at the event.',
    },
]

const gallery = [
    'imageOne.webp',
    'imageTwo.webp',
    'imageThree.webp',
    'imagefour.webp',
    'imagefive.webp',
    'imagesix.webp',
    
]


const Service = () => {
    return (
        <>
            <section className="pk-section" id="package">
                <div className="pk-head">
                    <h2>Services we provide</h2>
                    <p>Everything you need for a perfect celebration.</p>
                </div>

                <div className="pk-grid">
                    {services.map((s, i) => (
                        <div className="pk-card" key={s.title}>
                            <span className="pk-num">0{i + 1}</span>
                            <div className="pk-icon">
                                <i className={s.icon}></i>
                            </div>
                            <h3>{s.title}</h3>
                            <p>{s.text}</p>
                        </div>
                    ))}
                </div>

                <a href="/packages" className="pk-btn">
                    Explore our packages <i className="ri-arrow-right-line"></i>
                </a>
            </section>

            <section className="gl-section">
                <div className="gl-head">
                    <h2>See the vibe in action</h2>
                    <p>Moments from our recent events.</p>
                </div>

                <div className="gl-wrapper">
                    <div className="gl-track">
                        {/* 4 baar repeat: wide screen par bhi strip khali nahi hogi */}
                        {[0, 1, 2, 3].map((set) => (
                            <div className="gl-group" key={set} aria-hidden={set > 0}>
                                {gallery.map((src, i) => (
                                    <div className="gl-card" key={`${set}-${i}`}>
                                        <img
                                            src={src}
                                            alt={set === 0 ? `Event photo ${i + 1}` : ''}
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           
        </>
    )
}

export default Service