function GettingStartedPage() {
    return (
        <>
            <section id='content' className='row'>
                <div className='col-md-9'>
                    <h3 className='text-muted'>BNF COMMUNITY DEVELOPMENT</h3>
                </div>
                <div className='col-md-12'>
                    <h4 className='text-muted'>Community &gt; Code</h4>
                </div>
            </section>
            <nav aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                        <a href='/'>Home</a>
                    </li>
                </ol>
            </nav>
            <hr></hr>
            <div id='search'>
                <div className='pagefind-ui svelte-1bkqzc5 pagefind-ui--reset'>
                    <form
                        className='pagefind-ui__form svelte-1bkqzc5'
                        role='search'
                        aria-label='Search this site'
                        action='javascript:void(0);'
                    >
                        <input
                            className='pagefind-ui__search-input svelte-1bkqzc5'
                            type='text'
                            placeholder='Search'
                        />
                        <button className='pagefind-ui__search-clear svelte-1bkqzc5 pagefind-ui__suppressed'>
                            Clear
                        </button>
                        <div className='pagefind-ui__drawer svelte-1bkqzc5 pagefind-ui__hidden'>
                            {' '}
                        </div>
                    </form>
                </div>
            </div>

            <div className='homepage-hero'>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.apache.org/events/current-event.html'
                >
                    <img
                        className='events-logo'
                        src='https://www.apache.org/events/current-event-125x125.png'
                    />
                </a>
                <h2 id='asf-community-development'>BNF COMMUNITY DEVELOPMENT</h2>
                <p>
                    The ASF Community Development project creates and provides tools, processes, and
                    advice to help open-source projects improve their own community health.
                </p>
            </div>

            <div className='row'>
                <div className='col-md-4'>
                    <h4 id='asf-newcomers'>THE FOUNDATION</h4>
                    <p>
                        BiblioNexus is a US 501(c)3 non-profit public charity. The BiblioNexus
                        Foundation (“BNF”) is governed by a Board of Directors.
                    </p>
                    <p>
                        Our mission is to create software for the Bible translation movement that we
                        give away for free. You can read how BiblioNexus and BNF projects are
                        governed. We welcome your support of BiblioNexus.
                    </p>
                </div>
                <div className='col-md-4'>
                    <h4 id='events'>HOW TO ASK QUESTIONS</h4>
                    <p>
                        Please email development@biblionexus.org with any questions you may have. If
                        you are a project member, the BNF has a Slack workplace you may also ask
                        questions in.
                    </p>
                </div>
            </div>
        </>
    );
}

export default GettingStartedPage;
