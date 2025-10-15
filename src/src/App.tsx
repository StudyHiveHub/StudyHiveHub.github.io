import React from 'react';
import GamifiedRewards from './components/GamifiedRewards';
import PersonalizedStudyPlan from './components/PersonalizedStudyPlan';
import MicroLearningSnacks from './components/MicroLearningSnacks';
import CommunityQA from './components/CommunityQA';
import VisualNotes from './components/VisualNotes';
import StudyChallenges from './components/StudyChallenges';
import MiniCourses from './components/MiniCourses';

function App() {
  return (
    <div>
      <h1>StudyHiveHub</h1>
      <GamifiedRewards />
      <PersonalizedStudyPlan />
      <MicroLearningSnacks />
      <CommunityQA />
      <VisualNotes />
      <StudyChallenges />
      <MiniCourses />
    </div>
  );
}

export default App;
