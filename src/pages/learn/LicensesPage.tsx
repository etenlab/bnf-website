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
                            <a href='https://opensource.org/license/mit/'>MIT license</a>
                        </td>
                        <td>Our current license</td>
                        <td id='2.0'></td>
                    </tr>
                </tbody>
            </table>
            <h2 id='contributor-license-agreements'>Contributor License Agreements</h2>
            {/* <p>
                For information regarding our CLAs, please consult the BNF Contributor License
                Agreements page.
            </p> */}
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
                        <td>CLAs</td>
                        <td>BNF CLAs</td>
                        <td id='clas'></td>
                    </tr>
                    <tr>
                        <td>Software Grant</td>
                        <td>One-off software license to the BNF</td>
                        <td id='grants'></td>
                    </tr>
                    <tr>
                        <td>How To</td>
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
                        <td>BNF Trademark Use Policy</td>
                        <td>Policy on using BNF Trademarks</td>
                        <td id='trademarks'></td>
                    </tr>
                </tbody>
            </table>
            <h2 id='questions'>Questions?</h2>
            <p>
                For answers to frequently asked licensing questions, please consult our{' '}
                <a href='/faq'>Frequently Asked Questions</a> page.
            </p>
        </>
    );
}

export default LicensesPage;
