import { useLocation, useNavigate } from 'react-router-dom';
import './FinishSetup.css';

function FinishSetup() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email') || 'your@email.com';

  const handleSendLink = () => {
    alert(`Sign-up link sent to ${email}`);
    navigate('/profiles');
  };

  return (
    <div className="setup-container">
      <header className="setup-header">
        <img src="/logo.png" alt="Netflix" className="logo" />
        <a href="/login" className="signin-link">Sign In</a>
      </header>

      <main className="setup-main">
        <div className="device-icons">
          <img src="/tv-icon.png" alt="TV" />
          <img src="/computer-icon.png" alt="Computer" />
          <img src="/mobile-icon.png" alt="Mobile" />
        </div>
        <h2>STEP 2 OF 3</h2>
        <h1>Finish setting up your account</h1>
        <p>We'll send a sign-up link to <strong>{email}</strong> so you can use Netflix without a password on any device at any time.</p>

        <label className="checkbox">
          <input type="checkbox" />
          Please do not email me Netflix special offers.
        </label>

        <button className="send-link-btn" onClick={handleSendLink}>Send Link</button>
      </main>

      <footer className="setup-footer">
        <p>Questions? <a href="#">Contact us.</a></p>
      </footer>
    </div>
  );
}

export default FinishSetup;
