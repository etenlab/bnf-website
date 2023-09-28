function GettingStartedPage() {
    return (
        <>
            <section id='content' className='row'>
                <div className='col-md-9'>
                    <h3 className='text-muted'>The Apache Software Foundation</h3>
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
                <h2 id='asf-community-development'>
                    ASF Community Development{' '}
                    <a className='headerlink' title='Permalink' href='#asf-community-development'>
                        ¶
                    </a>
                </h2>
                <p>
                    The ASF Community Development project creates and provides tools, processes, and
                    advice to help open-source projects improve their own community health.
                </p>
                <p>
                    We are primarily focused on ASF projects, but we believe that our{' '}
                    <a href='/tags/governance.html'>governance principles</a> and best practices
                    apply to other projects as well.
                </p>
                <p>
                    ASF <a href='/tags/newcomers.html'>newcomers</a> should also find relevant
                    information here.
                </p>
            </div>

            <div className='row'>
                <div className='col-md-4'>
                    <h4 id='asf-newcomers'>
                        ASF Newcomers{' '}
                        <a className='headerlink' title='Permalink' href='#asf-newcomers'>
                            ¶
                        </a>
                    </h4>
                    <p>
                        If you are new to open source, our{' '}
                        <a href='newcomers/index.html'>
                            <b>newcomers section</b>
                        </a>{' '}
                        and <a href='/tags/newcomers.html'>related pages</a> explain basic concepts,
                        first steps to get started, and where to ask for help.
                    </p>
                    <p>
                        To get our software, see our{' '}
                        <a
                            href='https://projects.apache.org/projects.html?category'
                            target='_blank'
                            rel='noreferrer'
                        >
                            categorized listing of all Apache projects
                        </a>
                        , which are{' '}
                        <a href='https://www.apache.org/free/'>
                            <b>always free</b> to download and use
                        </a>
                        .
                    </p>
                    <p>
                        The ASF is a large organization made up of many separate projects. Each
                        project community may have its own ways of working, while still following
                        the basic Apache Way process.
                    </p>
                </div>
                <div className='col-md-4'>
                    <h4 id='events'>
                        Events{' '}
                        <a className='headerlink' title='Permalink' href='#events'>
                            ¶
                        </a>
                    </h4>
                    <p>
                        Producers should read our{' '}
                        <a href='https://www.apache.org/foundation/marks/events'>
                            Event Branding Policy
                        </a>{' '}
                        for ticketed events, and we have some{' '}
                        <a href='events/small-events.html'>
                            tips for organizing small community events
                        </a>{' '}
                        about Apache projects.
                    </p>
                    <p>
                        The{' '}
                        <a href='https://events.apache.org/event/calendar.html'>event calendar</a>{' '}
                        lists approved Apache-related events, including Community Over Code
                        (formerly ApacheCon) and project summits.
                    </p>
                    <p>
                        The <a href='https://tac.apache.org/'>ASF Travel Assistance Committee</a>{' '}
                        provides financial assistance for selected ASF events, to those who would
                        otherwise be unable to attend them.
                    </p>
                </div>
                <div className='col-md-4'>
                    <h4 id='the-foundation'>
                        The Foundation{' '}
                        <a className='headerlink' title='Permalink' href='#the-foundation'>
                            ¶
                        </a>
                    </h4>
                    <p>
                        The Apache Software Foundation (ASF) is a{' '}
                        <a href='https://www.apache.org/foundation/'>
                            US 501(c)3 non-profit public charity
                        </a>
                        . The Foundation is{' '}
                        <a href='https://www.apache.org/foundation/governance/'>
                            governed by a Board of Directors
                        </a>
                        , elected by our Membership, and we publish our{' '}
                        <a href='https://www.apache.org/foundation/board/calendar.html'>
                            monthly board meeting minutes
                        </a>
                        .
                    </p>
                    <p>
                        Our mission is to create software for the public good that we{' '}
                        <a href='https://www.apache.org/free/'>give away for free</a>. You can read
                        how{' '}
                        <a
                            href='https://www.apache.org/foundation/governance/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            ASF and Apache projects are governed
                        </a>
                        . We{' '}
                        <a
                            href='https://www.apache.org/foundation/contributing.html'
                            target='_blank'
                            rel='noreferrer'
                        >
                            welcome your support of Apache
                        </a>
                        .
                    </p>
                </div>
            </div>

            <div>
                <h4 id='how-to-ask-questions'>How to ask questions</h4>
                <p>
                    All Apache projects use{' '}
                    <a href='https://lists.apache.org/'>publicly-archived mailing lists</a> that
                    anyone may subscribe to. There you can ask questions related to that specific
                    project and gain a sense of its current activities and focus. Most projects have
                    a{' '}
                    <code>
                        <a href='mailto:dev@project.apache.org'>dev@project.apache.org</a>
                    </code>{' '}
                    mailing list for technical discussions about the code, and a <code>user@</code>{' '}
                    or <code>users@</code> mailing list for questions about the product or features.
                </p>
                <p>
                    We have a{' '}
                    <a href='/contributors/etiquette'>Code of Conduct and Etiquette guidelines</a>{' '}
                    to help you write good emails.
                </p>
                <p>
                    The ComDev project has our own mailing list where you can ask general questions
                    about Apache at{' '}
                    <a href='https://lists.apache.org/list.html?dev@community.apache.org:lte=3M:'></a>
                    <a href='mailto:dev@community.apache.org'>dev@community.apache.org</a>.
                </p>
            </div>
        </>
    );
}

export default GettingStartedPage;
