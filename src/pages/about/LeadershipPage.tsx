function LeadershipPage() {
    return (
        <>
            <h1 id='asf-leadership'>BNF Leadership</h1>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='img-leadership'>
                        <img
                            className='img-fluid'
                            src={process.env.PUBLIC_URL + '/images/leadership/john-hanger.jpg'}
                        />
                    </div>

                    <h2>John Hanger</h2>
                    <h5>CEO, Board of Directors</h5>

                    <p>
                        John is an authentic business leader and investor who has helped launch,
                        grow, and exit multiple software companies. 7x startups. 4x CEO. He felt led
                        to found BiblioNexus in 2023 after learning about, and having his heart
                        broken by, Bible poverty. John and his wife Jennifer are parents to 4 grown
                        children and enjoy serving their local church in greater Atlanta.
                    </p>
                </div>
                <div className='col-md-4'>
                    <div className='img-leadership'>
                        <img
                            className='img-fluid'
                            src={process.env.PUBLIC_URL + '/images/leadership/kent-elmer.png'}
                        />
                    </div>

                    <h2>Kent Elmer</h2>
                    <h5>Board of Directors (Secretary & Treasurer)</h5>

                    <p>
                        Kent is a CPA with over 30 years of broad-based experience ranging from Big
                        4 public accounting to CFO level positions at a variety of public and
                        private companies. In 2003, Kent founded TechCXO, an executive level
                        professional services firm focused on providing fractional “C-level”
                        services to high growth companies. Through TechCXO, Kent has assisted dozens
                        of companies in various stages of their life cycle. Kent has 3 adult
                        children and lives with his wife, Ann, in the greater Atlanta area. He is a
                        ruling elder at his local church.
                    </p>
                </div>
                <div className='col-md-4'>
                    <div className='img-leadership'>
                        <img
                            className='img-fluid'
                            src={process.env.PUBLIC_URL + '/images/leadership/stephen-cave.jpg'}
                        />
                    </div>

                    <h2>Stephen Cave</h2>
                    <h5>Board of Directors</h5>

                    <p>
                        Stephen is the Chief Strategist for the ETEN Innovation Lab. Stephen is
                        married to Nik and they have three (allegedly) grown-up children. He lives
                        just outside Belfast in Northern Ireland and, prior to serving with the Lab,
                        was Senior V-P at Biblica, overseeing Bible translation and publishing,
                        amongst other things. He tries to be as heavily involved in his local church
                        as possible, especially in Sunday preaching and home group, albeit with a
                        challenging travel schedule. He&apos;s a keen, but frustrated golfer, and an
                        Ireland rugby fan!
                    </p>
                </div>

                <div className='col-md-4'>
                    {/* <img className="img-leadership" src={process.env.PUBLIC_URL + '/images/leadership/john-hanger.jpg'} /> */}

                    <h2>Frank Flood</h2>
                    <h5>VP Engineering, BiblioNexus Studio</h5>

                    <p>
                        Frank is an experienced software technologist and leader focused on
                        efficiently designing and building enterprise-level applications that solve
                        real world problems. He leads development teams with a collaborative
                        approach based on Agile methodologies to provide seamless and intuitive
                        software to clients and users Frank and his wife Angie are parents to two
                        daughters and live in Atlanta.
                    </p>
                </div>

                <div className='col-md-4'>
                    {/* <img className="img-leadership" src='' /> */}

                    <h2>Michael Marshall</h2>
                    <h5>VP, BiblioNexus Foundation</h5>

                    <p>
                        Michael Marshall is the crowdsourcing strategy leader for the ETEN
                        Innovation Lab as well as a director within the BiblioNexus Foundation. He
                        lives in Arlington, Texas with his wife Jocelyn and two children.
                    </p>
                </div>
            </div>
        </>
    );
}

export default LeadershipPage;
