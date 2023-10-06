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
                    {/* <tr>
                        <td>
                            <a href='/foundation/records/'>
                                Records of Incorporation and Tax Status
                            </a>
                        </td>
                        <td>Our official records</td>
                    </tr> */}
                    {/* <tr>
                        <td>
                            <a href='/licenses/exports/'>
                                Information on encryption within BiblioNexus products
                            </a>
                        </td>
                        <td>Export Control information</td>
                    </tr> */}
                    {/* <tr>
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
                    </tr> */}
                </tbody>
            </table>
            <p>
                We appreciate feedback on our licenses, agreements and processes. Sadly, we are
                unable to offer legal opinions or advice to the public.
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
                        <td>BNF Release Policy</td>
                        <td>BNF Release Policy for BNF Products</td>
                    </tr>
                    <tr>
                        <td>BNF Software Foundation 3rd Party License Policy</td>
                        <td>Information related to third-party license use in BNF Products</td>
                    </tr>
                    <tr>
                        <td>Source Header and Copyright Notice Policy</td>
                        <td>
                            Instructions on the application of source headers to BNF source files
                        </td>
                    </tr>
                    <tr>
                        <td>CLA FAQ</td>
                        <td>Questions related to signing our Contributor License Agreements</td>
                    </tr>

                    <tr>
                        <td>Generative Tooling Guidance</td>
                        <td>Guidance relating to the use of Generative Tooling</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default LegalTrademarkPage;
