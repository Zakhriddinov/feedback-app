import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/feedbackContext';
function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>

            <Route path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            } />


            <Route path={'/about'} element={<AboutPage />} />
          </Routes>



        </div>
        <AboutIconLink />
      </BrowserRouter>
    </FeedbackProvider>
  );
}


export default App;
