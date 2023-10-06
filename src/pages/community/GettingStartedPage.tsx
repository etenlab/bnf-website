function GettingStartedPage() {
    return (
        <>
            <section id='content' className='row'>
                <div className='col-md-9'>
                    <h3 className='text-muted'>Getting Started</h3>
                </div>
            </section>
            <nav aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='breadcrumb-item'>
                        <a href='/getting-started'>Getting Started</a>
                    </li>
                </ol>
            </nav>
            <hr></hr>

            <p>
                If you are interested in contributing to a BNF project, you should first make
                contact with a current contributor on the project you are interested in. Since each
                BNF project stands by itself with its own PMC, repositories, and channels, project
                onboarding may be different from one project to the next.
            </p>

            <div className='row'>
                <div className='col-md-4'>
                    <h4 id='asf-newcomers'>THE FOUNDATION</h4>
                    <p>
                        BiblioNexus is a US 501(c)3 non-profit public charity. The BiblioNexus
                        Foundation (“BNF”) is governed by a Board of Directors and a Governance
                        Board.
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
                        you are a project member, BNF has a Slack workplace where you may also ask
                        questions.
                    </p>
                </div>
            </div>
        </>
    );
}

export default GettingStartedPage;
