function ContactPage() {
    return (
        <>
            <h1 id='contact-us'>Contact Us</h1>

            <h2 id='mailing-address'>Mailing Address</h2>
            <p>
                BiblioNexus
                <br />
                8644 Ellard Drive
                <br />
                Alpharetta, GA 30022
                <br />
                U.S.A.
                <br />
            </p>

            <p style={{ margin: '20px 0xp !important;' }}></p>

            {/* <h2 id='foundation-directory'>
                Foundation Directory
                <a className='headerlink' href='#foundation-directory' title='Permalink'>
                    ¶
                </a>
            </h2> */}
            <table className='table'>
                <tbody>
                    <tr>
                        <td>Sponsorships and Donations</td>
                        <td>donorrelations@biblionexus.org</td>
                    </tr>
                    <tr>
                        <td>Careers</td>
                        <td>careers@biblionexus.org </td>
                    </tr>
                    <tr>
                        <td>General Info</td>
                        <td>info@biblionexus.org</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default ContactPage;
