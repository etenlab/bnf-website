import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

function HomePage() {
    return (
        <>
            <header id='main-header' className='container'>
                <div className='main'>
                    <img
                        className='img-fluid center-block visible-home'
                        src={
                            process.env.PUBLIC_URL +
                            '/images/BiblioNexus_ID_FIN_BN_Embossed_PRIMARY_Transparent.png'
                        }
                        alt='BNF Logo'
                    />
                </div>
            </header>
            <main id='maincontent'>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='row'>
                                <div className='col-sm-12 text-center'>
                                    <div className='container public-good'>
                                        <h1 className='h3' id='software-for-the-public-good'>
                                            SOFTWARE FOR BIBLE TRANSLATION
                                        </h1>
                                        <p>
                                            BNF’s open source software is crafted to accelerate
                                            Bible translation, whether it is done by the local
                                            church or traditional Bible translation organizations.
                                        </p>
                                        <p>
                                            <a
                                                className='btn btn-default mx-10'
                                                href='/projects'
                                                role='button'
                                            >
                                                See All Projects
                                            </a>
                                            <a
                                                className='btn btn-default mx-10'
                                                href='getting-started'
                                                role='button'
                                            >
                                                Contribute
                                            </a>
                                        </p>
                                        {/* <img
                                            alt='Apache Everywhere'
                                            className='img-fluid'
                                            src={
                                                process.env.PUBLIC_URL +
                                                '/images/Fo3uP-ZX0AMe1od.jpg'
                                            }
                                        /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='bg-primary' id='apacheQuotes'>
                    <div className='container'>
                        <div className='slideshow-container'>
                            {/* <Carousel showStatus={false} autoPlay={false} showThumbs={false}>
                                <div className='mySlides'>
                                    <blockquote className='text-center'>
                                        <p>
                                            &quot;This is a really interesting quote about the role
                                            software/product plays in Bible translation&quot;
                                        </p>
                                        <footer>Duncan McCloud,</footer>
                                    </blockquote>
                                </div>
                                <div className='mySlides'>
                                    <blockquote className='text-center'>
                                        <p>
                                            &quot;The most popular open source software
                                            is&nbsp;Apache…&quot;
                                        </p>
                                        <footer>
                                            DZone,
                                            <cite title='What Open Source Software Do You Use?'>
                                                “What Open Source Software Do You&nbsp;Use?”
                                            </cite>
                                        </footer>
                                    </blockquote>
                                </div>
                                <div className='mySlides'>
                                    <blockquote className='text-center'>
                                        <p>
                                            &quot;The most popular open source software
                                            is&nbsp;Apache…&quot;
                                        </p>
                                        <footer>
                                            DZone,
                                            <cite title='What Open Source Software Do You Use?'>
                                                “What Open Source Software Do You&nbsp;Use?”
                                            </cite>
                                        </footer>
                                    </blockquote>
                                </div>
                            </Carousel> */}
                        </div>
                    </div>
                </section>
                {/* <section id='news'>
                    <div className='container'>
                        <h2 className='no-btm-margin' id='latest-news'>
                            Latest News
                        </h2>
                        <p>
                            Keep up with the BNF’s news and announcements by subscribing to the
                            <a href='/foundation/mailinglists.html#foundation-announce'>
                                BNF Announcements List
                            </a>
                            , as well as following the
                            <a href='https://news.apache.org/'>Foundation Blog</a>,
                            <a href='https://news.apache.org/foundation/entry/category/newsletter'>
                                Apache Weekly News Round-Ups
                            </a>
                            ,<a href='https://twitter.com/TheASF'>@TheASF on Twitter</a>,
                            <a href='https://www.linkedin.com/company/the-apache-software-foundation/'>
                                The Apache Software Foundation on LinkedIn
                            </a>
                            , on the ASF&quot;s
                            <a href='https://www.youtube.com/c/TheApacheFoundation/'>
                                YouTube channel
                            </a>
                            , and on <a href='https://feathercast.apache.org/'>Feathercast</a>, the
                            voice of the ASF.
                        </p>
                        <div className='updates blog-feed'>
                            <article className='card'>
                                <div className='content'>
                                    <span className='label label-danger'>Foundation Blog</span>
                                    <h5>
                                        <a
                                            className='entryTitle'
                                            href='https://news.apache.org/?p=5730'
                                        >
                                            Apache Software Foundation Announces Keynote Speakers
                                            for Community Over Code North America
                                        </a>
                                    </h5>
                                </div>
                                <a className='continue' href='https://news.apache.org/?p=5730'>
                                    Continue Reading&nbsp;→
                                </a>
                            </article>
                            <article className='card'>
                                <div className='content'>
                                    <span className='label label-danger'>Foundation Blog</span>
                                    <h5>
                                        <a
                                            className='entryTitle'
                                            href='https://news.apache.org/?p=5721'
                                        >
                                            Apache Software Foundation Releases Annual Report for
                                            2023 Fiscal Year
                                        </a>
                                    </h5>
                                </div>
                                <a className='continue' href='https://news.apache.org/?p=5721'>
                                    Continue Reading&nbsp;→
                                </a>
                            </article>
                        </div>
                    </div>
                </section> */}
                <section className='about-foundation bg-gray'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h2 id='about-the-foundation'>About the Foundation</h2>
                                <p>
                                    BiblioNexus, Inc. is a 501(c)(3) charitable organization founded
                                    to support the role of open source software within the Bible
                                    translation movement.
                                </p>
                                <div className='container'>
                                    <div className='row'>
                                        <p>
                                            <a
                                                className='btn btn-default btn-sm'
                                                href='/how-the-bnf-works'
                                                role='button'
                                            >
                                                Governance
                                            </a>
                                        </p>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='projects-list'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <h2 id='apache-project-list'>BNF Project List</h2>
                            </div>
                            <div className='col-sm-2' id='by_category'>
                                <ul className='list-unstyled'>
                                    <li>Aquifer</li>
                                    <li>crowdrocks</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default HomePage;
