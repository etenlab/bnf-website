function Footer() {
    return (
        <>
            <footer className='bg-primary'>
                <div className='container'>
                    <div className='row'>
                        <br />
                        <div className='col-sm-3'>
                            <h5 className='white'>Community</h5>
                            <ul className='list-unstyled white' role='menu'>
                                <li>
                                    <a href='/getting-started' target='_blank'>
                                        Contributor Getting Started
                                    </a>
                                </li>
                                <li>
                                    <a href='/becoming-committer' target='_blank'>
                                        Becoming a Committer
                                    </a>
                                </li>
                                <li>
                                    <a href='/code-of-conduct'>Code of Conduct</a>
                                </li>
                                <li>
                                    <a href='/community-resources'>Community Resources</a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-sm-3'>
                            <h5 className='white'>Projects</h5>
                            <ul className='list-unstyled white' role='menu'>
                                <li>
                                    <a href='/projects'>Projects</a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-sm-3'>
                            <h5 className='white'>Learn</h5>
                            <ul className='list-unstyled white' role='menu'>
                                <li>
                                    <a href='/blog'>Blog</a>
                                </li>
                                <li>
                                    <a href='/how-the-asf-works'>How the ASF Works</a>
                                </li>
                                <li>
                                    <a href='/leagal-trademark'>Legal &amp; Trademark</a>
                                </li>
                                <li>
                                    <a href='/licenses'>Licenses</a>
                                </li>
                                <li>
                                    <a href='/gloassary'>Glossary</a>
                                </li>
                                <li>
                                    <a href='/faq'>FAQ</a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-sm-3'>
                            <h5 className='white'>About</h5>
                            <ul className='list-unstyled white' role='menu'>
                                <li>
                                    <a href='/about'>About</a>
                                </li>
                                <li>
                                    <a href='/our-sponsers'>Our Sponsors</a>
                                </li>
                                <li>
                                    <a href='/leadership'>Leadership</a>
                                </li>
                                <li>
                                    <a href='/members'>Members</a>
                                </li>
                                <li>
                                    <a href='/contact'>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className='col-lg-12 hr-white' />
                    <div className='row'>
                        <div className='col-lg-12'>
                            <p className='text-center'>
                                Copyright © 2023 BiblioNexus, Licensed under the{' '}
                                <a className='white' href='#'>
                                    MIT license
                                </a>
                                .
                            </p>
                            <p className='text-center'>
                                BiblioNexus, BiblioNexus Foundation, and BiblioNexus Studio are
                                trademarks of BiblioNexus.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
