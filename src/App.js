import './App.css';
import Countdown from './component/Countdown';
import Facebook from './component/SocialIcon/Facebook';
import Instagram from './component/SocialIcon/Instagram';
import Pinterest from './component/SocialIcon/Pinterest';


function App() {
  return (
    <>
      <h1>We're launching soon</h1>

      <div className="countdown">
        <Countdown />
      </div>

      <div className="social">
        <Facebook />
        <Pinterest />
        <Instagram />
      </div>

      <div className="hills" />

      <small className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. Coded by <a title="Deniel Den" href="https://www.frontendmentor.io/profile/denielden">denie/den</a>.
      </small>
    </>
  );
}

export default App;