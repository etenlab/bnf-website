function MembersPage() {
    return (
        <>
            <h1 id='committed-to-open-source-and-the-asf'>
                Committed to Open Source and the ASF
                <a
                    className='headerlink'
                    href='#committed-to-open-source-and-the-asf'
                    title='Permalink'
                >
                    ¶
                </a>
            </h1>
            <p>
                ASF Members are those who have proven their commitment to the ASF by contributing to
                one or more of the Foundation’s projects. We thank them for their ongoing
                contributions to the Foundation.
            </p>
            <p>
                Our Members are similar to stockholders–they elect new Members and may vote for
                Directors. Membership in The Apache Software Foundation is a privilege and is by
                invitation only. The <a href='/foundation/governance/'>Governance</a> page provides
                details on Membership and the nomination process.
            </p>
            <p>
                <a
                    className='btn btn-default mx-10'
                    href='http://home.apache.org/committers-by-project.html#member'
                    role='button'
                >
                    Go to Member List
                </a>
            </p>
            <h2 id='asf-members'>
                ASF Members
                <a className='headerlink' href='#asf-members' title='Permalink'>
                    ¶
                </a>
            </h2>
            <p>
                This table shows current and emeritus members who have manually added themselves to
                it – it is NOT a complete listing. If you are a member and want to be included (this
                is optional), see below for how to update the source file yourself.
            </p>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Projects</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>aadamchik</td>
                        <td>Andrei Adamchik</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>aajisaka</td>
                        <td>Akira Ajisaka</td>
                        <td>
                            <a href='https://hadoop.apache.org'>Hadoop</a>,{' '}
                            <a href='https://yetus.apache.org'>Yetus</a>
                        </td>
                    </tr>
                    <tr>
                        <td>aaron</td>
                        <td>
                            <a href='http://www.clove.org/%7Eaaron/'>Aaron Bannert</a>
                        </td>
                        <td>
                            <a href='http://httpd.apache.org/'>httpd</a> ,{' '}
                            <a href='http://apr.apache.org/'>APR</a> ,{' '}
                            <a href='http://www.php.net/'>PHP</a> ,{' '}
                            <a href='http://commons.apache.org/'>commons</a> ,{' '}
                            <a href='http://incubator.apache.org/'>incubator</a> ,{' '}
                            <a href='http://httpd.apache.org/test/flood/'>flood</a> , infrastructure
                        </td>
                    </tr>
                    <tr>
                        <td>cziegeler</td>
                        <td>
                            <a href='mailto:cziegeler@apache.org'>Carsten Ziegeler</a>
                        </td>
                        <td>
                            <a href='http://sling.apache.org/'>Sling</a>,{' '}
                            <a href='http://Felix.apache.org/'>Felix</a>,{' '}
                            <a href='http://portals.apache.org/'>Portals</a>
                        </td>
                    </tr>

                    <tr>
                        <td>yoavs</td>
                        <td>
                            <a href='http://www.yoavshapira.com'>Yoav Shapira</a>
                        </td>
                    </tr>
                    <tr>
                        <td>yoshiki</td>
                        <td>Yoshiki Hayashi</td>
                    </tr>
                    <tr>
                        <td>zeev</td>
                        <td>Zeev Suraski</td>
                    </tr>
                    <tr>
                        <td>zoe</td>
                        <td>Zoe Slattery</td>
                    </tr>
                </tbody>
            </table>
            <h2 id='deceased-members'>
                Deceased Members
                <a className='headerlink' href='#deceased-members' title='Permalink'>
                    ¶
                </a>
            </h2>
            <ul>
                <li>
                    <p>
                        <strong>
                            <a href='/memorials/noirin.html'>Nóirín Plunkett</a>
                        </strong>
                    </p>
                </li>
                <li>
                    <p>
                        <strong>
                            <a href='/memorials/dion_gillard.html'>Dion Gillard</a>
                        </strong>
                    </p>
                </li>
                <li>
                    <p>
                        <strong>Randy Kobes</strong>
                    </p>
                </li>
                <li>
                    <p>
                        <strong>Gregory D. Reddin</strong>
                    </p>
                </li>
                <li>
                    <p>
                        <strong>
                            <a href='/memorials/martin_poeschl.html'>Martin Pöschl</a>
                        </strong>
                    </p>
                </li>
                <li>
                    <p>
                        <strong>
                            <a href='/memorials/henk_penning.html'>Henk P. Penning</a>
                        </strong>
                    </p>
                </li>
            </ul>
            <h2 id='adding-your-name'>
                Adding Your Name
                <a className='headerlink' href='#adding-your-name' title='Permalink'>
                    ¶
                </a>
            </h2>
            <p>
                If you have a GitHub account that is linked to your ASF account, you can edit this{' '}
                <a href='https://github.com/apache/www-site/blob/main/content/foundation/members.md'>
                    page
                </a>{' '}
                directly in the browser, by using the <code>Edit this file</code> pencil icon. You
                may <code>Commit directly to the main branch</code>, or, if you feel more
                comfortable with it, select{' '}
                <code>Create a new branch for this commit and start a pull request</code> and have
                someone else merge these changes for you.
            </p>
            <p>
                Or it can be updated in the{' '}
                <a href='https://gitbox.apache.org/repos/asf/www-site.git'>ASF GitBox repo</a>. This
                does not require a GitHub account.
            </p>
            <p></p>
        </>
    );
}

export default MembersPage;
