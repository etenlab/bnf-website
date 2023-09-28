
function BecomingCommitterPage() {

    return (
        <>

            <section id="content" className="row">
                <div className="col-md-9">
                    <h3 className="mt-3 text-muted">The Apache Software Foundation</h3>
                </div>
                <div className="col-md-12"><h4 className="text-muted">Community &gt; Code</h4></div>
            </section>
        
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/contributors">Contributors</a></li>   
                </ol>
            </nav>
            <hr />
        
            <ul className="tags-list">
                <li>
                    <a href="https://community.apache.org/tags/faq.html">faq</a>
                </li>
                <li>
                    <a href="https://community.apache.org/tags/navigation.html">navigation</a>
                </li>
                <li>
                    <a href="https://community.apache.org/tags/contributing.html">contributing</a>
                </li>
            </ul>

            <p>This page is for people who are reasonably comfortable with open source development models but need a helping hand finding their way around the Apache Software Foundation and our way of developing software (commonly called “The Apache Way”). For those wishing to start from the very beginning, we have a <a href="/newcomers/index.html">newcomers page</a>.</p>
            <h2 id="project-independence-and-policies">Project Independence And Policies <a className="headerlink" title="Permalink" href="#project-independence-and-policies">¶</a></h2>
            <p>While not all ASF projects practice all aspects of the Apache Way in the same way, there are a number of rules that Apache projects must follow – things like complying with PMC
            <a href="https://www.apache.org/legal/release-policy.html">release voting</a>, <a href="https://www.apache.org/legal/">legal policy</a>, <a href="https://www.apache.org/foundation/marks/">brand policy</a>,
            using <a href="https://www.apache.org/dev/#mail">mailing lists</a>, etc., which are <a href="https://blogs.apache.org/comdev/entry/what_makes_apache_projects_different">documented in various places</a>.</p>
            <p>One of these invariant rules is that projects are managed independently of any commercial interests. The goal is to create an environment in which all participants are equal and thus have an equal opportunity to contribute to and benefit from our software, regardless of motivation or financial objectives. This is discussed in more detail in our document <a href="/projectIndependence.html">Project Independence</a>.</p>
            <h2 id="communication-on-mailing-lists">Communication on mailing lists <a className="headerlink" title="Permalink" href="#communication-on-mailing-lists">¶</a></h2>
            <p>Development at the ASF has traditionally been done on mailing lists. This is not merely because we’ve always done it this way, but is an intentional decision, in order to include a wider community than who happens to be on your Slack channel at a particular moment.</p>
            <p>This is why we say, at the ASF, <a href="/contributors/mailing-lists"><strong>If it didn’t happen on the mailing list, it didn’t happen</strong></a>.</p>
            <h2 id="moving-from-contributor-to-committer">Moving From Contributor to Committer <a className="headerlink" title="Permalink" href="#moving-from-contributor-to-committer">¶</a></h2>
            <p>Anyone can be a contributor to an Apache project. Being a contributor simply means that you take an interest in the project and contribute in some way, ranging from asking sensible questions (which document the project and provide feedback to developers) through to providing new features as code patches.</p>
            <p>If you become a valuable contributor to the project, the Project Management Committee (PMC) may invite you to become a <em>committer</em>. At the ASF, a committer is someone who is committed to a particular project. It brings with it the privilege of write access to the project repository and resources. In many projects, committers may also be invited to be part of the core group within the project that ensures the project’s vitality, the PMC. In a few projects only a subset of committers who have earned even more merit are invited to be a part of the PMC.</p>
            <p>One thing that is sometimes hard to understand, when you are new to the open development process used at the ASF, is that we value the community more than the code. A strong and healthy community will be respectful and be a fun and rewarding place. More importantly, a diverse and healthy community can continue to support the code over the longer term, even as individual contributors come and go from the field.</p>
            <p>In particular, we have some <a href="/contributors/etiquette">etiquette and behavior expectations</a> when you work with Apache communities.</p>
            <p>See also this <a href="/contributors/becomingacommitter.html">detailed advice for how to become a committer</a></p>
            <h2 id="anyone-can-become-a-committer">Anyone Can Become A Committer <a className="headerlink" title="Permalink" href="#anyone-can-become-a-committer">¶</a></h2>
            <p>There is nothing at the Apache Software Foundation that says you must write code in order to be a committer. Anyone who is supportive of the community and works in any of the CoPDoC areas is a likely candidate for committership.</p>
            <p>Apache strives to be meritocratic. That is, once someone has contributed sufficiently to any area of CoPDoC they can be voted in as a committer. Being a committer does not necessarily mean you commit code; it means you are committed to the project and are productively contributing to its success.</p>
            <p>One of the key contributions people can make to the community is through the support of a wide user base by assisting users on the user list, writing user-oriented docs and ensuring the developers understand the user viewpoint. A main idea behind being a committer is the ability to be a mentor and to work cooperatively with your peers.</p>
            <p>Some users of a project’s software become committers in their own right. Some will test code, some will write documentation, some will do bug triage and some will write code.</p>
            <p>For more details see “<a href="https://www.apache.org/foundation/how-it-works.html">How it works</a>”.  You can also make <a href="/newbiefaq.html#websitecms">suggestions for how to update this website</a> you’re reading right now!</p>
            <h2 id="questions-and-feedback">Questions and Feedback </h2>
            <p>You can provide feedback and ask questions by subscribing to our mailing list: send an email to <a href="mailto:dev-subscribe@community.apache.org">dev-subscribe@community.apache.org</a>. Once subscribed, you can send your mail to <a href="mailto:dev@community.apache.org">dev@community.apache.org</a>.</p>
      
          
        </>
    );
}

export default BecomingCommitterPage;