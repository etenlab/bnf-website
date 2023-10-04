function CommunityResourcesPage() {
    return (
        <>
            <h1 id='community-resources'>
                Community Resources
                <a className='headerlink' href='#community-resources' title='Permalink'>
                    ¶
                </a>
            </h1>
            <p>Your Awesome List of community programs and resources.</p>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Resource</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href='#'>BNF Code of Conduct</a>
                        </td>
                        <td>We expect everyone who participates to honor our code of conduct.</td>
                    </tr>
                    <tr>
                        <td>
                            <a href='#'>BNF Committer Directory</a>
                        </td>
                        <td>An index of projects and committers for every ASF project.</td>
                    </tr>
                    <tr>
                        <td>
                            <a href='#'>Community Events</a>
                        </td>
                        <td>Calendar of upcoming community and ASF events.</td>
                    </tr>
                    <tr>
                        <td>
                            <a href='#'>Contributor Getting Started</a>
                        </td>
                        <td>
                            The best place to learn how to get started contributing to ASF projects.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href='#'>Committer Getting Started</a>
                        </td>
                        <td>Details on how to move from Contributor to Committer.</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default CommunityResourcesPage;
