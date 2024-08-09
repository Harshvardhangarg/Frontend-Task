import SearchBar from "../components/search-bar";
import ContentRight from "../components/content-right";
//import FrameComponent from "../components/frame-component";
//import FrameComponent1 from "../components/frame-component1";
import CombinedFrameComponent from "../components/CombinedFrameComponent";
import LineExploreAll from "../components/line-explore-all";
import PoweredBy from "../components/powered-by";
import "./explore-section.css";

const ExploreSection = () => {
  return (
    <div className="explore-section">
      <img className="home-icon" alt="" src="/home.svg" />
      <a className="welcome-name">
        <span className="welcome-name-txt-container">
          <p className="welcome">{`Welcome, `}</p>
          <p className="welcome">Name</p>
        </span>
      </a>
      <div className="main-content">
        <div className="content-left">
          <img
            className="send-a-message-icon"
            loading="lazy"
            alt=""
            src="/send-a-message.svg"
          />
          <SearchBar />
        </div>
      </div>
      <ContentRight />
      <section className="content-artwork">
        <div className="artwork-list">
         <CombinedFrameComponent />
        </div>
      </section>
      <div className="footer">
        <div className="footer-content">
          <LineExploreAll />
          <div className="powered-by-wrapper">
            <div className="powered-by-content">
              <PoweredBy />
              <div className="powered-by">{`sarvan `}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
