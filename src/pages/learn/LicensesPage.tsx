function LicensesPage() {
    return (
        <>
            <h1 id='licenses'>Licenses</h1>
            <p>
                he BiblioNexus Foundation uses the MIT license to distribute software and
                documentation, and to accept regular contributions from individuals and corporations
                and larger grants of existing software products.
            </p>
            <p>
                The MIT license helps us achieve our goal of providing reliable and long-lived
                software products through collaborative, open-source software development. In all
                cases, contributors retain full rights to use their original contributions for any
                other purpose outside of the BNF while providing the BNF and its projects the right
                to distribute and build upon their work within the BNF.
            </p>
            <h2 id='distributions'>Licensing of BNF Products</h2>
            <p>
                All software produced by The BNF or any of its projects or subjects is licensed
                according to the terms of the documents listed below.
            </p>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Page</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href='LICENSE-2.0'>MIT license</a>
                        </td>
                        <td>Our current license</td>
                        <td id='2.0'></td>
                    </tr>
                </tbody>
            </table>
            <h2 id='contributor-license-agreements'>Contributor License Agreements</h2>
            <p>
                For information regarding our CLAs, please consult the{' '}
                <a href='/licenses/contributor-agreements.html'>
                    BNF Contributor License Agreements
                </a>
                page.
            </p>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Page</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href='/licenses/contributor-agreements.html#clas'>CLAs</a>
                        </td>
                        <td>BNF CLAs</td>
                        <td id='clas'></td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/licenses/contributor-agreements.html#grants'>
                                Software Grant
                            </a>
                        </td>
                        <td>One-off software license to the BNF</td>
                        <td id='grants'></td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/licenses/contributor-agreements.html#submitting'>How To</a>
                        </td>
                        <td>How to submit CLAs/Software Grant</td>
                        <td id='submitting'></td>
                    </tr>
                </tbody>
            </table>
            <h2 id='other-legal-info'>Other Legal Info</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Page</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href='/licenses/exports/'>BNF Export Classifications</a>
                        </td>
                        <td>U.S. Export Classifications</td>
                        <td id='crypto'></td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/foundation/marks/'>BNF Trademark Use Policy</a>
                        </td>
                        <td>Policy on using BNF Trademarks</td>
                        <td id='trademarks'></td>
                    </tr>
                </tbody>
            </table>
            <h2 id='questions'>Questions?</h2>
            <p>
                For answers to frequently asked licensing questions, please consult our
                <a href='/foundation/license-faq.html'>Licensing Frequently Asked Questions</a>
                page.
            </p>
        </>
    );
}

export default LicensesPage;
