import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Instructions from './components/Instructions';
import Job from './components/Job/Job';
import Reviews from './components/Reviews/Reviews';
import Courses from './components/Courses';
import Terms from './components/Terms';
import HighlightOffers from './components/HighlightOffers';
import Test from './components/Test'
import Questions from './components/Questions/Questions';
import Intro from './components/Intro'
import { useState } from 'react';
import Popup from './components/Popup/Popup';
import PopupRole from './components/Popup-role';

function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupOpenRole, setPopupOpenRole] = useState(false);
  const [selectedRole, setSelectedRole] = useState('notSelected');

  const handleClick = () => {
    setPopupOpen(true)
  }

  const handleClickRoleMobile = () => {
    setPopupOpenRole(true)
  }

  function closeAllPopups() {
    setPopupOpen(false)
    setPopupOpenRole(false)
  }

  return (
    <div className="root">
      <div className="page">
        <Header handleClick={handleClick} setSelectedRole={setSelectedRole}/>
        <Intro />
        <Instructions handleClick={handleClick} setSelectedRole={setSelectedRole}/>
        <Test />
        <Courses />
        <Terms handleClick={handleClick} setSelectedRole={setSelectedRole}/>
        <HighlightOffers handleClickRoleMobile={handleClickRoleMobile}/>
        <Reviews />
        <Job />
        <Questions/>
        <Footer />
        <Popup isOpen={popupOpen} selectedRole={selectedRole} setSelectedRole={setSelectedRole} onClose={closeAllPopups}/>
        <PopupRole isOpen={popupOpenRole} onClose={closeAllPopups}/>
      </div>
    </div>
  );
}

export default App;
