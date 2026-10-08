import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="badge">
          🚀 Your Career Journey Starts Here
        </div>

        <h1>
          Track Your
          <span> Career.</span>
          <br />
          Build Your
          <span className="pink-text"> Future.</span>
        </h1>

        <p>
          Manage your job and internship applications in one
          beautiful, simple and powerful dashboard.
        </p>

        <div className="hero-buttons">
          <Link to="/dashboard" className="primary-btn">
            Start Tracking →
          </Link>

          <Link to="/features" className="secondary-btn">
            Explore Features
          </Link>
        </div>
      </div>

      <div className="hero-card">
        <div className="floating-card card-one">
          <span>💼</span>
          <div>
            <strong>Software Engineer</strong>
            <small>Google • Applied</small>
          </div>
        </div>

        <div className="floating-card card-two">
          <span>🎓</span>
          <div>
            <strong>Frontend Intern</strong>
            <small>Microsoft • Interview</small>
          </div>
        </div>

        <div className="floating-card card-three">
          <span>✨</span>
          <div>
            <strong>Product Designer</strong>
            <small>Adobe • Shortlisted</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;