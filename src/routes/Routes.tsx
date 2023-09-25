import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
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
import HowTheASFWorksPage from '../pages/learn/HowTheASFWorksPage';
import LegalTrademarkPage from '../pages/learn/LegalTrademarkPage';
import LicensesPage from '../pages/learn/LicensesPage';
import ProjectsPage from '../pages/projects/ProjectsPage'


const Router = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' element={<HomePage />}></Route>
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
      <Route path='/how-the-asf-works' element={<HowTheASFWorksPage />}></Route>
      <Route path='/leagal-trademark' element={<LegalTrademarkPage />}></Route>
      <Route path='/licenses' element={<LicensesPage />}></Route>
      <Route path='/projects' element={<ProjectsPage />}></Route>
    </Routes>
  );
}

export default Router;