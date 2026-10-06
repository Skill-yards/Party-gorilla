import './Event.css'


const events = [
    {
        id: 'wedding',
        icon: 'ri-heart-3-fill',
        tag: 'Wedding Party',
        title: 'Make your shaadi unforgettable',
        text: 'From the baraat to the reception, our high-energy gorilla mascot brings smiles to every guest, young and old. Dance, photos and pure masti, all in one entry.',
        points: [
            'Grand entry for baraat and reception',
            'Photo moments with family and guests',
            'Dance with the bride, groom and kids',
        ],
        video: 'YOUR_WEDDING_VIDEO_ID',
        reverse: false,
    },
    {
        id: 'birthday',
        icon: 'ri-cake-3-fill',
        tag: 'Birthday Party',
        title: 'Birthday fun kids will remember',
        text: 'Turn your child\'s birthday into a mini carnival. Games, dance, cake-cutting and high-fives with a mascot every kid wants to meet.',
        points: [
            'Fun games and dance for all ages',
            'Special cake-cutting moment',
            'Safe, friendly and kid approved',
        ],
        video: 'YOUR_BIRTHDAY_VIDEO_ID',
        reverse: true,
    },
    {
        id: 'other',
        icon: 'ri-sparkling-2-fill',
        tag: 'Other Events',
        title: 'Every celebration needs some vibe',
        text: 'Anniversary, school function, shop opening, society event or corporate fun day. We adapt the performance to your crowd and your theme.',
        points: [
            'Anniversary and house parties',
            'Shop openings and brand events',
            'School and society functions',
        ],
        video: 'YOUR_OTHER_VIDEO_ID',
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
                            <h3>{e.title}</h3>
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
                                <iframe
                                    src={`https://www.youtube.com/embed/${e.video}`}
                                    title={e.tag}
                                    loading="lazy"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Events