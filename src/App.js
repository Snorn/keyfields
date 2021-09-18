import logo from './logo.svg';
import './KeyFields_App.scss';
import { ReactComponent as BMC } from './svg/Opt_BMC.svg';

export default function App() {
  return (
    <div className="KeyFields_App">

      <header className="KeyFields-header">

        <div className="title">Innovation Lab.</div>
        
          <nav>
            <ul>
              <li>Innovation</li>
              <li>Modeling</li>
              <li>Ideation</li>
              <li>Validation</li>
              <li>Management</li>
              <li>Team</li>
              <li>About</li>
            </ul>
          </nav>
        
      </header>

      <section className="KeyFields_Splash">

        <div className="Splash_Content">
          <h1>Innovate at speed and then <span>scale</span></h1>
          <p>Rise with the Business Technology Platform</p>
          <button className="Design-btn">Design</button>
          <button className="Deploy-btn">Deploy</button>
        </div>

        <div className="Main_Content">
          <BMC />    
        </div>

        <div className="Pop_Content">
          <h1>Customer Segments</h1>
          <p>Internal (Project Managers(WRICEF), Solution Centre)</p>
          <p>All Public and Private Sector (Facilitator, Advisor, Partner, Coach)</p>

        </div>

      </section>

    </div>
  );
}