// © 2026 DJ_Gorilla
// Developed by Akash Kumar and Vijay Kumar


import './Event.css'

const events = [
    {
        id: 'wedding',
        icon: 'ri-heart-3-fill',
        tag: 'Wedding Party',
        title: 'Make your shaadi ',
        twotitle:'unforgettable',
        text: 'From the baraat to the reception, our high-energy gorilla mascot brings smiles to every guest, young and old. Dance, photos and pure masti, all in one entry.',
        points: [
            'Grand entry for baraat and reception',
            'Photo moments with family and guests',
            'Dance with the bride, groom and kids',
        ],
        alt: 'DJ performing for a dancing crowd under party lights at an event in Agra',
        img: 'imageTwo.webp',
        reverse: false,
    },
    {
        id: 'birthday',
        icon: 'ri-cake-3-fill',
        tag: 'Birthday Party',
        title: 'Birthday fun kids will ',
        twotitle: 'remember',
        text: 'Turn your child\'s birthday into a mini carnival. Games, dance, cake-cutting and high-fives with a mascot every kid wants to meet.',
        points: [
            'Fun games and dance for all ages',
            'Special cake-cutting moment',
            'Safe, friendly and kid approved',
        ],
        alt: 'DJ performing for a dancing crowd under party lights at an event in Agra',
        img: 'image21.webp',
        reverse: true,
    },
    {
        id: 'other',
        icon: 'ri-sparkling-2-fill',
        tag: 'Other Events',
        title: 'Every celebration needs ',
        twotitle: 'some vibe',
        text: 'Anniversary, school function, shop opening, society event or corporate fun day. Our DJ, lighting and party mascots, including a party gorilla, adapt the performance to your crowd and your theme. Planning an event in Agra? We bring the energy.',
        points: [
            'Anniversary and house parties',
            'Shop openings and brand events',
            'School and society functions',
        ],
        alt: 'DJ performing for a dancing crowd under party lights at an event in Agra',
        img:'image22.webp',
        reverse: false,
    },
]

const Events = () => {
    return (
        <section className="ev-section">
            <div className="ev-head">
                <h2>Parties we make special</h2>
                <p>Pick your occasion and we bring the vibe.</p>
            </div>

            <div className="ev-list">
                {events.map((e) => (
                    <div key={e.id} className={`ev-row ${e.reverse ? 'ev-reverse' : ''}`}>
                        {/* Content */}
                        <div className="ev-content">
                            <span className="ev-tag">
                                <i className={e.icon}></i>
                                {e.tag}
                            </span>
                            <h3>{e.title}<span className='twotitle'>{e.twotitle}</span></h3>
                            <p className="ev-text">{e.text}</p>

                            <ul className="ev-points">
                                {e.points.map((p) => (
                                    <li key={p}>
                                        <i className="ri-check-line"></i>
                                        {p}
                                    </li>
                                ))}
                            </ul>

                            <a href="/" className="ev-btn">
                                Book now <i className="ri-calendar-check-fill"></i>
                            </a>
                        </div>

                        {/* Video */}
                        <div className="ev-video">
                            <div className="ev-frame">
                                <img src={e.img} alt={e.alt} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Events