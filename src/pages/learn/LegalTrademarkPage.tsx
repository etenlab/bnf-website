function LegalTrademarkPage() {
    return (
        <>
            <h1 id='asf-legal-trademark'>
                ASF Legal &amp; Trademark
                <a className='headerlink' href='#asf-legal-trademark' title='Permalink'>
                    ¶
                </a>
            </h1>
            <h3 id='user-links'>
                Legal Information for Users of Apache Products
                <a className='headerlink' href='#user-links' title='Permalink'>
                    ¶
                </a>
            </h3>
            <p>
                The following pages provide information for users of Apache Products (i.e. software
                products from the ASF).
            </p>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Page</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href='/licenses/'>Apache Licenses</a>
                        </td>
                        <td>Details the Apache License 2.0 and other licences from the ASF</td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/foundation/records/'>
                                Records of Incorporation and Tax Status
                            </a>
                        </td>
                        <td>Our official records</td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/licenses/exports/'>
                                Information on encryption within Apache products
                            </a>
                        </td>
                        <td>Export Control information</td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/foundation/marks/'>Trademark and Logo Usage Guidelines</a>
                        </td>
                        <td>Our Trademark policy</td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/legal/dmca'>DMCA Designated Agent page</a>
                        </td>
                        <td>For DMCA-related issues</td>
                    </tr>
                </tbody>
            </table>
            <p>
                We appreciate feedback on our licenses, agreements and processes (see{' '}
                <a href='#communications'>communications</a>). Sadly, we are unable to offer legal
                opinions or advice to the public.
            </p>
            <h3 id='committer-links'>
                Legal Policies for Apache Committers
                <a className='headerlink' href='#committer-links' title='Permalink'>
                    ¶
                </a>
            </h3>
            <p>
                The following pages provide information for Apache Software Foundation committers to
                assist in their work on Apache Products.
            </p>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Page</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href='/legal/release-policy.html'>ASF Release Policy</a>
                        </td>
                        <td>Apache Release Policy for Apache Products</td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/legal/resolved.html'>
                                Apache Software Foundation 3rd Party License Policy
                            </a>
                        </td>
                        <td>Information related to third-party license use in Apache Products</td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/legal/src-headers.html'>
                                Source Header and Copyright Notice Policy
                            </a>
                        </td>
                        <td>
                            Instructions on the application of source headers to ASF source files
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/foundation/license-faq.html'>CLA FAQ</a>
                        </td>
                        <td>
                            Questions related to signing our{' '}
                            <a href='/licenses/#clas'>Contributor License Agreements</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/dev/crypto.html'>
                                Handling Cryptography within an ASF Release
                            </a>
                        </td>
                        <td>Cryptography Policy</td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/legal/generative-tooling.html'>Generative Tooling Guidance</a>
                        </td>
                        <td>Guidance relating to the use of Generative Tooling</td>
                    </tr>
                </tbody>
            </table>
            <h3 id='communications'>
                The Legal Affairs Committee
                <a className='headerlink' href='#communications' title='Permalink'>
                    ¶
                </a>
            </h3>
            <p>
                The Legal Affairs Committee was established in March 2007 and is responsible for
                establishing, and managing, legal policies based on the advice of legal counsel and
                the interests of the Foundation. It reports to the board each month.
            </p>
            <p>
                Questions for the Legal Affairs Committee should be raised on
                <a href='https://issues.apache.org/jira/browse/LEGAL'>LEGAL JIRA space</a>.
            </p>
            <p>
                Most discussions are held on the public
                <a href='/foundation/mailinglists.html#foundation-legal'>legal-discuss@</a>
                mailing list. See the{' '}
                <a href='http://mail-archives.apache.org/mod_mbox/www-legal-discuss/'>
                    legal-discuss@ archives
                </a>
                for previous discussions.
            </p>
            <p>
                The Legal Affairs Committee (including VP of Legal Affairs) is staffed exclusively
                by volunteers and is leveraging a pro-bono legal counsel. This means that while most
                requests are typically resolved in a matter of few days, sometimes non-urgent
                requests can take longer. We will try to acknowledge your request within a couple of
                days, but the actual resolution may take much longer. For truly urgent matters
                always make sure to contact{' '}
                <a href='mailto:vp-legal@apache.org'>vp-legal@apache.org</a> directly.
            </p>
            <h3 id='background-links'>
                Historical and background documents
                <a className='headerlink' href='#background-links' title='Permalink'>
                    ¶
                </a>
            </h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Page</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href='https://whimsy.apache.org/board/minutes/Legal_Affairs.html'>
                                Legal Affairs reports
                            </a>
                        </td>
                        <td>The board reports to date</td>
                    </tr>
                    <tr>
                        <td>
                            <a href='https://svn.apache.org/repos/asf/infrastructure/site/trunk/archive/legal/3party.mdtext'>
                                Draft Third-Party Licensing Policy
                            </a>
                        </td>
                        <td>
                            Cliff Schmidt&apos;s original drafting. While never enacted, this draft
                            provided the foundation from which the current policy evolved
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/legal/ramblings.html'>
                                Ramblings of an ASF VP of Legal Affairs
                            </a>
                        </td>
                        <td>Sam Ruby&apos;s subsequent thoughts</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default LegalTrademarkPage;
