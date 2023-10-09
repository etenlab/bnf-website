function GlossaryPage() {
    return (
        <>
            <h1 id='bnf-glossary'>BNF Glossary</h1>
            <p>
                This glossary provides a brief description of some of the organizational terms used
                at the BNF and in BNF projects. For more information about anything regarding the
                BNF, see the /dev documentation.{' '}
            </p>
            <hr />
            <dl>
                <dt id='Artifact'>Artifact</dt>
                <dd>
                    <p>
                        A file which is created as the outcome of a process, typically the release
                        preparation process.
                    </p>
                </dd>
                <dt id='Attic'>Attic</dt>
                <dd>
                    <p>
                        A location for discontinued, abandoned, and retired codebases and projects.
                        The BNF Attic project preserves the information for posterity, reference,
                        and potential future re-activation, while keeping it clearly distinct from
                        active work.
                    </p>
                </dd>
                <dt id='BNF'>BNF</dt>
                <dd>
                    <p>The BiblioNexus Foundation, a non-profit organization.</p>
                </dd>

                <dt id='Board'>Board</dt>
                <dd>
                    <p>
                        The three-person legal governing body of BiblioNexus, elected at the
                        founding of the company by ETEN. The board provides the oversight of the
                        BiblioNexus Studio and Foundation.
                    </p>
                </dd>

                <dt id='Governance'>Governance</dt>
                <dd>
                    <p>
                        The three-person administrative body of the BNF, elected by the members.
                        Governance provides the oversight of the BNF&apos;s activities and
                        operation, and applies and enforces the BNF&apos;s bylaws. Among other
                        things, Governance approves or rejects resolutions brought before it, such
                        as for the creation or dissolution of BNF projects, funding requests, legal
                        concerns, and disciplinary actions.
                    </p>
                </dd>

                <dt id='Bikeshed'>Bikeshed Argument</dt>
                <dd>
                    <p>
                        Arguing (pointlessly) about which color to paint the bikeshed. As explained
                        here it may happen when the argument is so trivial that it&apos;s easy for
                        anyone to have an opinion, and want to see theirs prevail.
                    </p>
                </dd>
                <dt id='Build'>Build</dt>
                <dd>
                    <p>
                        A Build is a package which is not suitable for distribution to the general
                        public. Builds are works-in-progress, and should only be available to people
                        working on product development at the Foundation.
                    </p>
                </dd>
                <dt id='Bylaws'>Bylaws</dt>
                <dd>
                    <p>
                        Bylaws are a codification of the rules that an organization follows. Some,
                        such as the BNF bylaws, are legally binding and have significance outside
                        the organization. Others are only meaningful within the community and are
                        only as binding as the community itself makes them. The bylaws of an
                        organization within the BNF may not contradict those of the BNF proper; any
                        such conflicting parts in the organization bylaws are necessarily null and
                        void.{' '}
                    </p>
                </dd>
                <dt id='Chair'>Chair</dt>
                <dd>
                    <p>
                        <strong>1.</strong> The Chair of the <a href='#Governance'>Governance</a>{' '}
                        Board of the <a href='#BNF'>BNF</a>, responsible for the orderly meeting and
                        functioning of Governance.
                        <strong>2.</strong> The official head of a committee, such as a Project
                        Management Committee <a href='#PMC'>PMC</a>. PMC Chairs are BNF
                        <a href='#Vice-President'>Vice Presidents</a> given charge of the proper
                        operation of their
                        <a href='#Project'>projects</a>.
                    </p>
                </dd>
                <dt id='Codebase'>Codebase</dt>
                <dd>
                    <p>
                        A meaningful group of source. Some <a href='#Project'>projects</a> use only
                        a single codebase, while others have several.
                    </p>
                </dd>
                <dt id='CommitAccess'>Commit access</dt>
                <dd>
                    <p>
                        BNF projects collaborate on code using version control software to
                        coordinate changes. The ability to make direct changes to that code is known
                        as commit access (from the [VCS] commit subcommand). This process patches
                        the actual official code. Also see Reputation Points .
                    </p>
                </dd>
                <dt id='Committer'>Committer</dt>
                <dd>
                    <p>
                        An individual who has the privilege to directly commit changes to a BNF
                        codebase ( commit access).
                    </p>
                </dd>
                <dt id='CommitThenReview'>Commit-Then-Review</dt>
                <dd>
                    <p>
                        (Often abbreviated &apos;CTR&apos; or &apos;C-T-R&apos;.) A policy governing
                        code changes which permits developers to make changes at will, with the
                        possibility of a change being retroactively vetoed. C-T-R is an application
                        of decision-making through lazy consensus. The C-T-R model is useful in
                        rapid-prototyping environments, but because of the lack of mandatory review
                        it may let more bugs through in daily practice than theR-T-C alternative.
                        CompareR-T-C, and see the description of the voting process.
                    </p>
                </dd>
                <dt id='Community'>Community</dt>
                <dd>
                    <p>
                        Group of individuals with a common cause. The community of a project
                        consists of all those with an interest in that project.
                    </p>
                </dd>
                <dt id='ConsensusApproval'>Consensus Approval</dt>
                <dd>
                    <p>
                        &apos;Consensus approval&apos; refers to a <a href='#Vote'>vote</a> (sense
                        1) which has completed with <strong>at least three binding +1 votes</strong>{' '}
                        and
                        <strong>no</strong>
                        <a href='#Veto'>vetos</a>. Compare
                        <a href='#MajorityApproval'>Majority Approval</a>.
                    </p>
                </dd>
                <dt id='Contributor'>Contributor</dt>
                <dd>
                    <p>
                        Someone who makes consistent improvements to the entities under an
                        <a href='#BNF'>BNF</a> <a href='#PMC'>PMC</a>, code or documentation or
                        otherwise. This does not, in and of itself, imply
                        <a href='#CommitAccess'>commit access</a>, though frequent and valued
                        contributors are readily <a href='#Vote'>voted</a>
                        on for such access.
                    </p>
                </dd>
                <dt id='CLA'>Contributor License Agreement</dt>
                <dd>
                    <p>
                        Contributor License Agreement (CLA) is sometimes referred to as Individual
                        Contributor License Agreement (ICLA). There is also a Corporate Contributor
                        License Agreement (CCLA). All are explained on the
                        <a href='/licenses/#clas'>Licenses</a> page.
                    </p>
                </dd>
                <dt id='CTR'>CTR , C-T-R</dt>
                <dd>
                    <p>
                        See <a href='#CommitThenReview'>CommitThenReview</a>
                    </p>
                </dd>
                <dt id='Darwinism'>Darwinism</dt>
                <dd>
                    <p>
                        See <a href='#SoftwareDarwinism'>Software Darwinism</a>.
                    </p>
                </dd>
                <dt id='Developer'>Developer</dt>
                <dd>
                    <p>
                        A user who contributes to a project in the form of code or documentation
                        becomes a developer. They take extra steps to participate in a project, are
                        active on the developer mailing list, participate in discussions, provide
                        patches, documentation, suggestions, and criticism. Developers are also
                        known as &quot;contributors&quot;.
                    </p>
                </dd>
                <dt id='BoardDirector'>Board Director</dt>
                <dd>
                    <p>
                        One of three individuals on the BiblioNexus board. Not to be confused with
                        BNF <a href='#Governance'>Governance board</a> <a href='#Member'>members</a>
                        .
                    </p>
                </dd>
                <dt id='Director'>Director</dt>
                <dd>
                    <p>
                        One of nine individuals elected annually by the
                        <a href='#Member'>members</a> to the BNF&apos;s
                        <a href='#Governance'>governance board</a>. Directors may or may not have
                        individual responsibilities, but all are generally expected to stay informed
                        about as much of the BNF&apos;s operations and activity as possible, since
                        the Board provides oversight for the Foundation as a whole.
                    </p>
                </dd>
                <dt id='Emeritus'>Emeritus</dt>
                <dd>
                    <p>
                        A term used to formally designate someone as no longer active, but still
                        entitled to many of the rights and privileges of the position. For example,
                        an BNF member who hasn&apos;t attended any membership meetings for a long
                        time is declared emeritus; someone who no longer has time to work on a
                        particular
                        <a href='#Project'>project</a> may declare themself emeritus. Emeritus
                        status indicates interest but not activity, as opposed to having resigned.
                    </p>
                </dd>
                <dt id='Evolution'>Evolution</dt>
                <dd>
                    <p>
                        Progress by gradual accumulation of small changes. Typical mode for Apache
                        projects. Compare <a href='#Revolution'>Revolution</a>.
                    </p>
                </dd>
                <dt id='ExecutiveSession'>Executive Session</dt>
                <dd>
                    <p>
                        A portion of a <a href='#Board'>board</a> meeting which concerns
                        confidential matters and which therefore cannot be publicly minuted.
                        Examples include salary discussions, areas covered by non-disclosure
                        agreements, disciplinary actions, and some types of funding decisions.
                    </p>
                </dd>
                <dt id='git'>Git</dt>
                <dd>
                    <p>
                        A <a href='#version-control'>version control system</a> used by the majority
                        of BNF projects.
                    </p>
                </dd>
                <dt id='Hackathon'>Hackathon</dt>
                <dd>
                    <p>
                        Informal event at which BNF participants can get together, network, and
                        discuss/argue/hack/prototype according to their interests. Hackathons are
                        open to all <a href='#Committer'>committers</a> and invited contributors.
                    </p>
                </dd>
                <dt id='Hibernation'>Hibernation</dt>
                <dd>
                    <p>
                        Sleeplike state with a depressed metabolic rate. Sometimes used to describe
                        a <a href='#Project'>project</a> with low levels of activity.
                    </p>
                </dd>
                <dt id='LazyConsensus'>Lazy consensus</dt>
                <dd>
                    <p>
                        (Also called &apos;lazy approval&apos;.) A decision-making policy which
                        assumes general consent if no responses are posted within a defined period.
                        For example, &quot;I&apos;m going to commit this by lazy consensus if no-one
                        objects within the next three days.&quot; Also see Consensus Approval
                        ,Majority Approval , and the description of the voting process.
                    </p>
                </dd>
                <dt id='LicenseHeader'>License Header</dt>
                <dd>
                    <p>
                        Text, at the top of a code file, referring to the license for the file (as
                        opposed to including the complete license text).
                    </p>
                </dd>
                <dt id='MajorityApproval'>Majority Approval</dt>
                <dd>
                    <p>
                        Refers to a vote (sense 1) which has completed with at least three binding
                        +1 votes and more +1 votes than -1 votes. (I.e. , a simple majority with a
                        minimum quorum of three positive votes.) Note that in votes requiring
                        majority approval a -1 vote is simply a vote against, not a veto. Compare
                        Consensus Approval. See also the description of the voting process.
                    </p>
                </dd>
                <dt id='Member'>Member</dt>
                <dd>
                    <p>
                        An individual who has been elected to membership in the BNF by the existing
                        members. Membership benefits include having a voice in the functioning of
                        the Foundation, and the ability to nominate and vote on new Member
                        candidates and on directors.
                    </p>
                </dd>
                <dt id='Merit'>Merit</dt>
                <dd>
                    <p>
                        The concept of &apos;merit&apos; is central to the BNF philosophy and
                        <a href='#Community'>community</a> methodology. Merit is a qualitative and
                        subjective term, referring to a combination of the worth of one&apos;s
                        accomplishments and the respect of one&apos;s peers.
                    </p>
                    <ul>
                        <li>technical competence</li>
                        <li>ability to get along with others</li>
                        <li>positive contributions to discussions and code</li>
                    </ul>
                    <p>
                        The acquisition of merit is a cumulative process; once acquired, it
                        doesn&apos;t decay. It is possible to lose merit, though, by violating
                        community ethics, guidelines, or sensibilities.
                    </p>
                </dd>
                <dt id='Meritocracy'>Meritocracy</dt>
                <dd>
                    <p>
                        Meritocracy is one of the principles underlying the BNF and its philosophy.
                        As it has been put, &apos;the more you do the more you are allowed to
                        do.&apos; As a person acquires merit, their stature in the
                        <a href='#Community'>community</a> and (to a certain extent) the weight
                        given to their opinions grow.
                    </p>
                </dd>
                <dt id='Netiquette'>Netiquette</dt>
                <dd>
                    <p>
                        Netiquette is the common rules of good online behaviour. For the general
                        case, it is defined in
                        <a href='http://www.faqs.org/rfcs/rfc1855.html'>IETF RFC 1855</a> ; for the
                        more specific BNF environment, it boils down to things like:
                    </p>
                    <ul>
                        <li>don&apos;t flame</li>
                        <li>
                            lurk for a while after joining a list before posting; this allows you to
                            get a feel for the personalities, attitudes, and issues, as well as
                            existing rules for acceptable behaviour
                        </li>
                        <li>
                            be aware of the <a href='#Project'>project</a> &apos;s/list&apos;s
                            guidelines (such as on voting), and don&apos;t violate them
                        </li>
                        <li>
                            if you have a question, search the list archives and the bug database
                            before asking what may have already been answered&gt;
                        </li>
                    </ul>
                    <p>
                        These are just the rough outline of things that may be more (or less) the
                        rule on a per-list basis. They boil down to &apos;be polite&apos; and
                        &apos;don&apos;t make unnecessary work for others&apos;.
                    </p>
                </dd>
                <dt id='NOTICE'>NOTICE file</dt>
                <dd>
                    <p>
                        The NOTICE file in a software release package is reserved for a certain
                        subset of legally-required notifications which are not satisfied by either
                        the text of LICENSE or the presence of licensing information embedded within
                        the bundled dependency.{' '}
                    </p>
                </dd>
                <dt id='Officer'>Officer</dt>
                <dd>
                    <p>
                        An individual appointed by the BNF Board of Directors and given specific
                        authority over and responsibility for some portion of the BNF&apos;s
                        activities. An officer may or may not be a director of the BNF.
                    </p>
                </dd>
                <dt id='Package'>
                    Package (sometimes referred to informally as Tarball or Distribution)
                </dt>
                <dd>
                    <p>
                        A Package is a compressed archive file created from a project&apos;s source
                        code with the intent to distribute. Packages are typically either source
                        packages or binary packages built from source; sometimes separate
                        documentation packages are released alongside the source package. Often
                        packages have external dependencies which may require additional software be
                        installed as a prerequisite.
                    </p>
                </dd>
                <dt id='PEO'>PEO</dt>
                <dd>
                    <p>
                        <a href='https://en.wikipedia.org/wiki/Professional_employer_organization'>
                            Professional_employer_organization
                        </a>
                    </p>
                </dd>
                <dt id='PMC'>PMC</dt>
                <dd>
                    <p>
                        Project Management Committee, the group of people with formal oversight of a
                        <a href='#Project'>project</a>. The chair of a PMC is always an
                        <a href='#Officer'>officer</a> of the BNF. As the PMC has official oversight
                        responsibilities assigned by <a href='#Governance'>Governance</a> , its
                        actions are considered to be on behalf of the BNF, with all the legal
                        protections and responsibilities implied.
                    </p>
                </dd>
                <dt id='Podling'>Podling</dt>
                <dd>
                    <p>
                        A <a href='#Codebase'>codebase</a> and its
                        <a href='#Community'>community</a> while in the process of being incubated.
                        See the description of the
                        <a href='#'>Incubation process</a>.
                    </p>
                </dd>
                <dt id='President'>President</dt>
                <dd>
                    <p>
                        Primary executive officer of the <a href='#BNF'>BNF</a> , serving at the
                        direction of <a href='#Governance'>Governance</a>.
                    </p>
                </dd>
                <dt id='Project'>Project</dt>
                <dd>
                    <p>
                        In the BNF, the term &apos; <em>project</em> &apos; typically refers to a{' '}
                        <a href='#Community'>community</a> focussed on one or more
                        <a href='#Codebase'>codebases</a> , overseen by a <a href='#PMC'>PMC</a>.
                    </p>
                </dd>
                <dt id='ReleaseCandidate'>Release Candidate</dt>
                <dd>
                    <p>
                        A source <a href='#Package'>package</a> and other accompanying
                        <a href='#Artifacts'>artifacts</a> to be inspected to see whether they are
                        ready for release. The PMC then votes whether to release the candidate.
                    </p>
                </dd>
                <dt id='ReleaseManager'>Release Manager</dt>
                <dd>
                    <p>
                        The individual who takes responsibility for shepherding a release through
                        the release process to final distribution. Any project
                        <a href='#Committer'>committer</a> can serve as Release Manager. Often
                        abbreviated as &quot;RM&quot;.
                    </p>
                </dd>
                <dt id='ReviewThenCommit'>Review-Then-Commit</dt>
                <dd>
                    <p>
                        (Often referenced as &apos;RTC&apos; or &apos;R-T-C&apos;.) Commit policy
                        which requires that all changes receive{' '}
                        <a href='#ConsensusApproval'>consensus approval</a>
                        before being committed to the code base. Compare
                        <a href='#CommitThenReview'>C-T-R</a> , and see the description of the
                        <a href='voting.html'>voting process</a>.
                    </p>
                </dd>
                <dt id='Revolution'>Revolution</dt>
                <dd>
                    <p>
                        In the BNF environment, some communities may decide to permit (or encourage)
                        revolutions as ways of reconciling differences, particularly code changes
                        which have been blocked on a particular branch by a veto. Originally
                        described by James Duncan Davison in his &apos;Rules for
                        Revolutionaries,&apos; the concept has been adopted, formally or informally,
                        by at least one Apache project. Essentially, a revolution occurs when a
                        group of committers decides to fork the current main branch in order to work
                        on problematic code or concepts. This permits them to pursue it without
                        disturbing the evolutionary work on the main branch. A revolutionary branch
                        may eventually be merged back into the main branch, die out, split
                        completely and become a new main branch, or may absorb the current main
                        branch into itself (essentially no different than the first option). See the
                        &apos;Rules for Revolutionaries&apos; and compare Evolution.
                    </p>
                </dd>
                <dt id='Release'>Release</dt>
                <dd>
                    <p>A Release is a package offered to the general public by the BNF.</p>
                </dd>
                <dt id='RTC'>RTC , R-T-C</dt>
                <dd>
                    <p>
                        See <a href='#ReviewThenCommit'>ReviewThenCommit</a>
                    </p>
                </dd>
                <dt id='SoftwareDarwinism'>Software Darwinism</dt>
                <dd>
                    <p>
                        A deceptively simple concept, often expressed as &apos;the best code
                        survives&apos;. The <a href='#Evolution'>evolutionary</a> processes inherent
                        in the BNF peer-review environment support this idea.
                    </p>
                </dd>
                <dt id='SGA'>Software Grant Agreement</dt>
                <dd>
                    <p>
                        See <a href='/licenses/#grants'>details of SGAs</a>.
                    </p>
                </dd>
                <dt id='STATUSfiles'>STATUS files</dt>
                <dd>
                    <p>
                        Due to the noninteractive style of communication practiced by most of the
                        Apache development projects, maintaining a record of decisions made -- and
                        in progress -- can be a useful thing. A number of the Apache projects
                        accomplish this through the use of a file, typically named STATUS , stored
                        in the project&apos;s own code repository. In addition to keeping existing
                        developers informed of current issues, such files also provide useful
                        information to new would-be developers investigating the project.{' '}
                    </p>
                </dd>
                <dt id='STV'>STV</dt>
                <dd>
                    <p>
                        Single Transferable Vote, used in Governance board elections for example.
                        See
                        <a href='http://en.wikipedia.org/wiki/Single_Transferable_Vote'>
                            http://en.wikipedia.org/wiki/Single_Transferable_Vote
                        </a>
                    </p>
                </dd>
                <dt id='TLP'>TLP</dt>
                <dd>
                    <p>
                        Top Level Project, see also <a href='#PMC'>PMC</a>
                    </p>
                </dd>
                <dt id='Treasurer'>Treasurer</dt>
                <dd>
                    <p>
                        The treasurer of the <a href='#BNF'>BNF</a> is an
                        <a href='#Officer'>officer</a> of the corporation, and is responsible for
                        managing the funds and assets of the Foundation, reporting tax information,
                        and so on. The treasurer need not be a <a href='#Member'>member</a> of the
                        Foundation, nor a<a href='#Director'>director</a>, though the role is often
                        filled by someone who is.
                    </p>
                </dd>
                <dt id='Troll'>Troll</dt>
                <dd>
                    <p>Some definitions:</p>
                    <ul>
                        <li>
                            <a href='http://www.askdavetaylor.com/whats_a_troll_and_a_zombie.html'>
                                Gentle
                            </a>
                        </li>
                        <li>
                            <a href='http://www.urban75.com/Mag/troll.html'>Naughty</a>
                        </li>
                        <li>
                            <a href='http://en.wikipedia.org/wiki/Internet_trolls'>Definitive</a>
                        </li>
                    </ul>
                    <p>
                        For how to deal with trolls, see
                        <a href='http://markmail.org/message/3wlpx2hafyeqdt4t'>this thread</a> but
                        (for those who are impatient) here&apos;s
                        <a href='http://markmail.org/message/sppexq2vcfewcm5a'>
                            Ted&apos;s opinion
                        </a>
                        (which acts as a good summary).
                    </p>
                </dd>
                <dt id='User'>User</dt>
                <dd>
                    <p>
                        Someone who uses our software. Users contribute to BNF projects by providing
                        feedback to developers in the form of bug reports and feature suggestions.
                        Users participate in the BNF community by helping other users on mailing
                        lists and user support forums.
                    </p>
                </dd>
                <dt id='version-control'>Version Control System</dt>
                <dd>
                    <p>
                        Version control systems provide the ability to track (and potentially
                        revert) incremental changes to files, reporting them to a mailing list as
                        they are made, and can be used concurrently by many developers. All of the
                        BNF&apos;s code and documentation are managed in such systems thus providing
                        a complete history for each codebase. See Git.
                    </p>
                </dd>
                <dt id='Veto'>Veto</dt>
                <dd>
                    <p>
                        According to the BNF methodology, a change which has been made or proposed
                        may be blocked through the exercise of a veto by a committer to the codebase
                        in question. If the R-T-C commit policy is in effect, a veto prevents the
                        change from being made. In either the R-T-C or C-T-R environments, a veto
                        applied to a change that has already been made forces it to be reverted.
                        Vetoes may not be overridden nor voted down, and only cease to apply when
                        the committer who issued the veto withdraws it. All vetoes must be
                        accompanied by a valid technical justification; a veto without such a
                        justification is invalid. In case of doubt, deciding whether a technical
                        justification is valid is up to the PMC. Vetoes force discussion and, if
                        supported, version control rollback or appropriate code changes. Vetoed code
                        commits are best reverted by the original committer, unless an urgent
                        solution is needed (e.g., build breakers). Vetoes only apply to code or
                        documentation changes; they do not apply to procedural issues such as
                        software releases.
                    </p>
                </dd>
                <dt id='Vice-President'>Vice-President</dt>
                <dd>
                    <p>
                        BNF vice-presidents are officers of the corporation, with authority over and
                        responsibility for specific areas of the Foundation&apos;s work. PMC chairs
                        are vice-presidents given charge of the proper operation of their projects.
                    </p>
                </dd>
                <dt id='Vote'>Vote</dt>
                <dd>
                    <p>
                        <strong>1.</strong> The process of making a formal decision. (&apos;The vote
                        for foo will close in three days.&apos;)
                    </p>
                    <p>
                        <strong>2.</strong> The expression of a positive or negative opinion, or a
                        veto, as part of a formal decision. (&apos;My vote is -1 because foo smells
                        bad.&apos;)
                    </p>
                    <p>
                        <strong>Binding votes</strong> are those cast by the PMC committers for the
                        <a href='#Project'>project</a> to which the decision applies. Votes cast by
                        others are advisory or indicative only.
                        <br />
                        See also <a href='#ConsensusApproval'>ConsensusApproval</a> ,
                        <a href='#MajorityApproval'>MajorityApproval</a>,
                        <a href='#LazyConsensus'>LazyConsensus</a> , and the description of the
                        <a href='voting.html'>voting process</a>.
                    </p>
                </dd>
            </dl>
        </>
    );
}

export default GlossaryPage;
