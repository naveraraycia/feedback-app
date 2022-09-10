// Main App component
// Import Header component
import Header from "./components/Header";
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm';

// Bring About page
import AboutPage from './pages/AboutPage';
// Import route
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// Import About link
import AboutIconLink from './components/AboutIconLink';
// Import Context
import {FeedbackProvider} from './context/FeedbackContext'


function App() {

  return(
    <FeedbackProvider>
      <Router>
        <Header />

        <div className="container">
        <Routes>
        {/* Home page route */}
          <Route exact path="/" element={
            <>
              <FeedbackForm />
              <FeedbackStats />
             <FeedbackList />
           </>
          }>

          </Route>
    
          {/* About page route */}
          <Route path='/about' element={<AboutPage />} />

        </Routes>

      <AboutIconLink />

       </div>
      </Router>
    </FeedbackProvider>

    // Cannot write anymore tags here
  )
}

// Export the function above
export default App