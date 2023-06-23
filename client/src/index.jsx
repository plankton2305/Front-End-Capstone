import React from 'react';
import { createRoot } from 'react-dom/client';

import QuestionsAndAnswers from './components/questions_answers/index.jsx';

const App = () => {
  return (
    <>
      <QuestionsAndAnswers />
    </>
  )
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);