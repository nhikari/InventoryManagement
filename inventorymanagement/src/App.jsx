import { useState } from "react";
import "./App.css";

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setNotice(
      "Sign-in is not connected yet. Connect your authentication provider to continue.",
    );
  }

  return (
    <main className="login-page">
      <section className="brand-panel" aria-label="About Stockroom">
        <div className="brand-panel-content">
          <a className="brand" href="/" aria-label="Stockroom home">
            <BrandMark />
            <span>stockroom</span>
          </a>

          <div className="brand-message">
            <p className="eyebrow">INVENTORY, IN GOOD ORDER</p>
            <h1>Our Lady of the Pillar College</h1>
            <h2>San Manuel Incorporation </h2>
            <p className="brand-description">
              A clearer view of your stock, your team, and everything that keeps
              your business moving.
            </p>
          </div>

          <div className="inventory-preview" aria-hidden="true">
            <div className="preview-header">
              <div>
                <span className="preview-label">TOTAL INVENTORY</span>
                <strong>All in good shape</strong>
              </div>
              <span className="preview-status">
                <span />
                LIVE
              </span>
            </div>
            <div className="preview-chart">
              <div className="chart-grid">
                <span />
                <span />
                <span />
              </div>
              <svg viewBox="0 0 420 96" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#a8d5bd" stopOpacity=".28" />
                    <stop offset="100%" stopColor="#a8d5bd" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 76 C34 76 35 57 70 59 S111 72 142 51 S190 56 220 37 S272 54 300 32 S349 42 375 19 S401 28 420 8 V96 H0Z"
                  fill="url(#chart-fill)"
                />
                <path
                  d="M0 76 C34 76 35 57 70 59 S111 72 142 51 S190 56 220 37 S272 54 300 32 S349 42 375 19 S401 28 420 8"
                  fill="none"
                  stroke="#b9e1cb"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
                <circle cx="375" cy="19" r="4" fill="#d9f0e3" />
              </svg>
            </div>
            <div className="preview-footer">
              <span>Stock levels</span>
              <span>Updated just now</span>
            </div>
          </div>
        </div>
        <p className="panel-footer">A little more clarity, every day.</p>
      </section>

      <section className="form-panel" aria-labelledby="welcome-heading">
        <div className="login-form-wrap">
          <div className="mobile-brand">
            <BrandMark />
            <span>stockroom</span>
          </div>

          <div className="form-heading">
            <p className="eyebrow">YOUR WORKSPACE AWAITS</p>
            <h2 id="welcome-heading">
              Compute Laboratory Asset and Maintenance Management System
            </h2>
            <p>Sign in to pick up where you left off.</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <div className="input-wrap">
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <rect x="2.5" y="4" width="15" height="12" rx="2" />
                <path d="m3.5 5.5 6.5 5 6.5-5" />
              </svg>
              <input
                autoComplete="username"
                id="username"
                name="username"
                placeholder="Enter your username"
                required
                type="text"
              />
            </div>

            <div className="password-label-row">
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-wrap">
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <rect x="3.5" y="8.5" width="13" height="9" rx="2" />
                <path d="M6.5 8.5V6a3.5 3.5 0 0 1 7 0v2.5M10 12v2" />
              </svg>
              <input
                autoComplete="current-password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                type={showPassword ? "text" : "password"}
              />
              <button
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                className="visibility-button"
                onClick={() => setShowPassword((visible) => !visible)}
                type="button"
              >
                {showPassword ? (
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2.5 10s2.7-5 7.5-5 7.5 5 7.5 5-2.7 5-7.5 5-7.5-5-7.5-5Z" />
                    <circle cx="10" cy="10" r="2" />
                    <path d="m4 4 12 12" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2.5 10s2.7-5 7.5-5 7.5 5 7.5 5-2.7 5-7.5 5-7.5-5-7.5-5Z" />
                    <circle cx="10" cy="10" r="2" />
                  </svg>
                )}
              </button>
            </div>

            <div className="form-actions">
              <button className="submit-button" type="submit">
                Sign in
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h12m-5-5 5 5-5 5" />
                </svg>
              </button>
            </div>

            <fieldset className="role-picker">
              <legend className="visually-hidden">Choose your role</legend>
              <button
                className="text-button role-password-link"
                type="button"
                onClick={() =>
                  setNotice(
                    "Password reset is not available yet. Please contact your workspace administrator.",
                  )
                }
              >
                Forgot password?
              </button>
              <div className="role-options">
                <label className="role-option">
                  <input name="role" type="radio" value="admin" required />
                  <span>Admin</span>
                </label>
                <label className="role-option">
                  <input
                    name="role"
                    type="radio"
                    value="laboratory-custodian"
                  />
                  <span>Laboratory Custodian</span>
                </label>
                <label className="role-option">
                  <input name="role" type="radio" value="teacher" />
                  <span>Teacher</span>
                </label>
              </div>
            </fieldset>
            <p className="form-notice" aria-live="polite" role="status">
              {notice}
            </p>
          </form>

          <p className="form-footnote">
            Need a hand? <span>Reach out to your workspace administrator.</span>
          </p>
        </div>

        <footer className="legal-footer">
          <span>© {new Date().getFullYear()} Stockroom</span>
          <span className="footer-divider" aria-hidden="true" />
          <span>Thoughtful inventory management</span>
        </footer>
      </section>
    </main>
  );
}

export default App;
