function OurSponsersPage() {
    return (
        <>
            <h1 id='our-sponsors'>
                Our Sponsors
                <a className='headerlink' href='#our-sponsors' title='Permalink'>
                    ¶
                </a>
            </h1>
            <p>
                The Apache Software Foundation could not exist without the continued generous
                support from the community. We would like to take this opportunity to thank our
                sponsors. If you are interested in sponsoring the ASF, please read our{' '}
                <a href='/foundation/sponsorship.html'>sponsorship page</a>.
            </p>
            <h2 id='foundation-sponsors'>
                Foundation Sponsors
                <a className='headerlink' href='#foundation-sponsors' title='Permalink'>
                    ¶
                </a>
            </h2>
            <h3 className='h1' id='platinum-sponsors' style={{ textAlign: 'center' }}>
                Platinum Sponsors:
                <a className='headerlink' href='#platinum-sponsors' title='Permalink'>
                    ¶
                </a>
            </h3>

            <div className='sponsors'>
                <ul
                    id='platinum'
                    style={{ margin: '0 auto', maxWidth: '1000px', listStyle: 'none' }}
                >
                    <li style={{ display: 'inline-block', minWidth: '333px' }}>
                        <a
                            href='https://www.vmware.com/opensource.html'
                            rel='noreferrer'
                            target='_blank'
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL + '/images/sponsers/vmware-platinum2.png'
                                }
                            />
                        </a>
                        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>VMware</p>
                    </li>
                    <li style={{ display: 'inline-block', minWidth: '333px' }}>
                        <a href='http://pineapplefund.org/' rel='noreferrer' target='_blank'>
                            <img
                                src={process.env.PUBLIC_URL + '/images/sponsers/pineapple_fund.png'}
                            />
                        </a>
                        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Pineapple Fund</p>
                    </li>
                    <li style={{ display: 'inline-block', minWidth: '333px' }}>
                        <a href='https://yahooinc.com/' rel='noreferrer' target='_blank'>
                            <img
                                src={process.env.PUBLIC_URL + '/images/sponsers/yahoo-platinum.png'}
                            />
                        </a>
                        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Yahoo!</p>
                    </li>
                    <li style={{ display: 'inline-block', minWidth: '333px' }}>
                        <a href='http://google.com/' rel='noreferrer' target='_blank'>
                            <img src={process.env.PUBLIC_URL + '/images/sponsers/google.png'} />
                        </a>
                        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Google</p>
                    </li>
                    <li style={{ display: 'inline-block', minWidth: '333px' }}>
                        <a href='http://huawei.com/' rel='noreferrer' target='_blank'>
                            <img
                                src={
                                    process.env.PUBLIC_URL + '/images/sponsers/huawei-platinum.png'
                                }
                            />
                        </a>
                        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Huawei</p>
                    </li>
                    <li style={{ display: 'inline-block', minWidth: '333px' }}>
                        <a href='https://www.apple.com/' rel='noreferrer' target='_blank'>
                            <img
                                src={process.env.PUBLIC_URL + '/images/sponsers/apple-platinum.png'}
                            />
                        </a>
                        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Apple</p>
                    </li>
                    <li style={{ display: 'inline-block', minWidth: '333px' }}>
                        <a href='https://aws.amazon.com/' rel='noreferrer' target='_blank'>
                            <img
                                src={process.env.PUBLIC_URL + '/images/sponsers/aws-platinum.png'}
                            />
                        </a>
                        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            Amazon Web Services
                        </p>
                    </li>
                    <li style={{ display: 'inline-block', minWidth: '333px' }}>
                        <a href='https://microsoft.com/' rel='noreferrer' target='_blank'>
                            <img src={process.env.PUBLIC_URL + '/images/sponsers/microsoft.png'} />
                        </a>
                        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Microsoft</p>
                    </li>
                    <li style={{ display: 'inline-block', minWidth: '333px' }}>
                        <a href='http://facebook.com/' rel='noreferrer' target='_blank'>
                            <img src={process.env.PUBLIC_URL + '/images/sponsers/facebook.png'} />
                        </a>
                        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Facebook</p>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default OurSponsersPage;
