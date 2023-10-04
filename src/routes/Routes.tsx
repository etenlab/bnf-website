import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import InnerLayout from '../layouts/InnerLayout';
import HomeLayout from '../layouts/HomeLayout';

import AboutPage from '../pages/about/AboutPage';
import ContactPage from '../pages/about/ContactPage';
import LeadershipPage from '../pages/about/LeadershipPage';
import MembersPage from '../pages/about/MembersPage';
import OurSponsersPage from '../pages/about/OurSponsersPage';
import BecomingCommitterPage from '../pages/community/BecomingCommitterPage';
import CodeOfConductPage from '../pages/community/CodeOfConductPage';
import CommunityResourcesPage from '../pages/community/CommunityResourcesPage';
import GettingStartedPage from '../pages/community/GettingStartedPage';
import BlogPage from '../pages/learn/BlogPage';
import FAQPage from '../pages/learn/FAQPage';
import GlossaryPage from '../pages/learn/GlossaryPage';
import HowTheBNFWorksPage from '../pages/learn/HowTheBNFWorksPage';
import LegalTrademarkPage from '../pages/learn/LegalTrademarkPage';
import LicensesPage from '../pages/learn/LicensesPage';
import ProjectsPage from '../pages/projects/ProjectsPage';

import DistributionsPage from '../pages/downloads/DistributionsPage';
import InfrastructureStatisticsPage from '../pages/downloads/InfrastructureStatisticsPage';
import InfrastructureStatusPage from '../pages/downloads/InfrastructureStatusPage';
import ReleasesPage from '../pages/downloads/ReleasesPage';

import DeveloperInformationPage from '../pages/resources/DeveloperInformationPage';
import InfrastructurePage from '../pages/resources/InfrastructurePage';
import IssuesPage from '../pages/resources/IssuesPage';
import SelfServePortalPage from '../pages/resources/SelfServePortalPage';
import SlackPage from '../pages/resources/SlackPage';
import WhimsyPage from '../pages/resources/WhimsyPage';
import WikiPage from '../pages/resources/WikiPage';

import ReportVulnerabilityPage from '../pages/projects/ReportVulnerabilityPage';
import TheBiblioNexusWayPage from '../pages/learn/TheBiblioNexusWayPage';
import BiblioNexusStudioPage from '../pages/about/BiblioNexusStudioPage';

const Router = () => {
    return (
        <Routes>
            {' '}
            {/* The Switch decides which component to show based on the current URL.*/}
            <Route element={<HomeLayout />}>
                <Route path='/' element={<HomePage />}></Route>
            </Route>
            <Route element={<InnerLayout />}>
                <Route path='/about' element={<AboutPage />}></Route>
                <Route path='/contact' element={<ContactPage />}></Route>
                <Route path='/leadership' element={<LeadershipPage />}></Route>
                <Route path='/members' element={<MembersPage />}></Route>
                <Route path='/our-sponsers' element={<OurSponsersPage />}></Route>
                <Route path='/becoming-committer' element={<BecomingCommitterPage />}></Route>
                <Route path='/code-of-conduct' element={<CodeOfConductPage />}></Route>
                <Route path='/community-resources' element={<CommunityResourcesPage />}></Route>
                <Route path='/getting-started' element={<GettingStartedPage />}></Route>
                <Route path='/blog' element={<BlogPage />}></Route>
                <Route path='/faq' element={<FAQPage />}></Route>
                <Route path='/gloassary' element={<GlossaryPage />}></Route>
                <Route path='/how-the-bnf-works' element={<HowTheBNFWorksPage />}></Route>
                <Route path='/leagal-trademark' element={<LegalTrademarkPage />}></Route>
                <Route path='/licenses' element={<LicensesPage />}></Route>
                <Route path='/projects' element={<ProjectsPage />}></Route>

                <Route path='/distributions' element={<DistributionsPage />}></Route>
                <Route
                    path='/infrastructure-statistics'
                    element={<InfrastructureStatisticsPage />}
                ></Route>
                <Route path='/infrastructure-status' element={<InfrastructureStatusPage />}></Route>
                <Route path='/releases' element={<ReleasesPage />}></Route>

                <Route path='/developer-information' element={<DeveloperInformationPage />}></Route>
                <Route path='/infrastructure' element={<InfrastructurePage />}></Route>
                <Route path='/issues' element={<IssuesPage />}></Route>
                <Route path='/self-serve-portal' element={<SelfServePortalPage />}></Route>
                <Route path='/slack' element={<SlackPage />}></Route>
                <Route path='/whimsy' element={<WhimsyPage />}></Route>
                <Route path='/wiki' element={<WikiPage />}></Route>

                <Route path='/report-a-vulnerability' element={<ReportVulnerabilityPage />}></Route>
                <Route path='/the-biblionexus-way' element={<TheBiblioNexusWayPage />}></Route>
                <Route path='/biblionexus-studio' element={<BiblioNexusStudioPage />}></Route>
            </Route>
        </Routes>
    );
};

export default Router;
