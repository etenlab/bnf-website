
function CommunityResourcesPage() {
    return (
        <>
            <h1 id="community-resources">Community Resources<a className="headerlink" href="#community-resources" title="Permalink">¶</a></h1>
            <p>Your Awesome List of community programs and resources.</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Resource</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="/foundation/policies/conduct">ASF Code of Conduct</a></td>
                        <td>We expect everyone who participates to honor our code of conduct.</td>
                    </tr>
                    <tr>
                        <td><a href="https://people.apache.org/">ASF Committer Directory</a></td>
                        <td>An index of projects and committers for every ASF project.</td>
                    </tr>
                    <tr>
                        <td><a href="/memorials/">ASF Memorials</a></td>
                        <td>Valued members we have lost.</td>
                    </tr>
                    <tr>
                        <td><a href="https://cwiki.apache.org/confluence/display/COMDEV/Apache+Local+Community+-+ALC">Apache Local Community (ALC)</a></td>
                        <td>ALCs are local groups of ASF / open source enthusiasts in towns/cities around the world.</td>
                    </tr>
                    <tr>
                        <td><a href="https://communityovercode.org/">Community Over Code</a></td>
                        <td>ASF’s flagship community event in North America, Europe, and Asia.</td>
                    </tr>
                    <tr>
                        <td><a href="https://events.apache.org/">Community Events</a></td>
                        <td>Calendar of upcoming community and ASF events.</td>
                    </tr>
                    <tr>
                        <td><a href="https://community.apache.org/">Contributor Getting Started</a></td>
                        <td>The best place to learn how to get started contributing to ASF projects.</td>
                    </tr>
                    <tr>
                        <td><a href="https://community.apache.org/contributors/">Committer Getting Started</a></td>
                        <td>Details on how to move from Contributor to Committer.</td>
                    </tr>
                    <tr>
                        <td><a href="https://community.apache.org/gsoc/">Google Summer of Code (GSoC)</a></td>
                        <td>A global, online mentoring program focused on introducing new contributors to open source software development. ASF is registered as a mentoring organization for GSoC.</td>
                    </tr>
                    <tr>
                        <td><a href="https://community.apache.org/mentoring/">Mentoring</a></td>
                        <td>Mentoring is the process of actively bringing someone along in a discipline - investing your time into influencing the future.</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.redbubble.com/people/comdev/shop">Store</a></td>
                        <td>Get swag and show your support for your favorite ASF projects!</td>
                    </tr>
                    <tr>
                        <td><a href="https://tac.apache.org/">Travel Assistance</a></td>
                        <td>ASF provides financial assistance to those who would otherwise be unable to attend various Community Over Code events.</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default CommunityResourcesPage;