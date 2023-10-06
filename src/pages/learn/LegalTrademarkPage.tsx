function LegalTrademarkPage() {
    return (
        <>
            <h1 id='bnf-legal-trademark'>BNF Legal &amp; Trademark</h1>
            <h3 id='user-links'>Legal Information for Users of BiblioNexus Products</h3>
            <p>
                The following pages provide information for users of BiblioNexus Products (i.e.
                software products from the BNF).
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
                            <a href='/licenses/'>BNF Licenses</a>
                        </td>
                        <td>The only permitted license in BNF projects is the MIT license</td>
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
                                Information on encryption within BiblioNexus products
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
            <h3 id='committer-links'>Legal Policies for BNF Committers</h3>
            <p>
                The following pages provide information for BNF committers to assist in their work
                on BNF Products.
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
                            <a href='/legal/release-policy.html'>BNF Release Policy</a>
                        </td>
                        <td>BNF Release Policy for BNF Products</td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/legal/resolved.html'>
                                BNF Software Foundation 3rd Party License Policy
                            </a>
                        </td>
                        <td>Information related to third-party license use in BNF Products</td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/legal/src-headers.html'>
                                Source Header and Copyright Notice Policy
                            </a>
                        </td>
                        <td>
                            Instructions on the application of source headers to BNF source files
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
                                Handling Cryptography within an BNF Release
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
            <h3 id='communications'>The Legal Affairs Committee</h3>

            <h3 id='background-links'>Historical and background documents</h3>
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
                            <a href='https://svn.apache.org/repos/bnf/infrastructure/site/trunk/archive/legal/3party.mdtext'>
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
                                Ramblings of an BNF VP of Legal Affairs
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
