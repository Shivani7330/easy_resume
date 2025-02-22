import "./About.scss";
import {
  Facebook,
  GitHub,
  LinkedIn,
  Instagram,
  WhatsApp,
} from "@mui/icons-material";
const About = () => {
  return (
    <div className="about">
      <div className="top">
        <h1 className="title">About Resume Creator</h1>
        <p className="description">
        Resume Creator is a collaborative project developed by me with a mission to
          revolutionize the job-seeking process. I recognized the need for an
          innovative solution to connect job seekers with recruiters efficiently
          and effectively. My goal is to help you find your ideal job faster,
          without the hassle of traditional resume building methods. I have
          carefully designed our resume templates to meet industry standards and
          gain acceptance from top HR departments, ensuring that your resume
          stands out in a competitive job market. With ezyResume, you can easily
          create an impressive resume that makes a memorable first impression,
          tailored to showcase your unique skills and experiences. My user
          friendly platform allows for quick edits and updates, keeping your
          resume current and relevant. Join me and take the first step towards
          landing your dream job with Resume Creator.
        </p>
      </div>
      <div className="middle">
        <h1 className="title">Benefits Of Using my Product</h1>
        <h3>Why Choose us?</h3>
        <div className="features">
          <div className="feature">
            <img src="/images/using_laptop.png" alt="Easy to use icon" />
            <div className="desc">
              <h2>Easy to use</h2>
              <p>
                The process of writing a resume is substantially sped up and
                simplified by using our resume builder.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src="/images/template_design.png" alt="Cool templates icon" />
            <div className="desc">
              <h2>Cool Templates</h2>
              <p>
                My template designs help your resume stand out in a pool of
                others.
              </p>
            </div>
          </div>
          <div className="feature">
            <img
              src="/images/Design_Process.png"
              alt="Intelligent design icon"
            />
            <div className="desc">
              <h2>Intelligent Design</h2>
              <p>
                With me, you will not have to bother about the minute details of
                resume development, such as font choice, layout, etc.
              </p>
            </div>
          </div>
          <div className="feature">
            <img
              src="/images/No_hidden_charges.png"
              alt="No hidden charges icon"
            />
            <div className="desc">
              <h2>No Hidden Charges</h2>
              <p>
                I have got a free version and our premium pricing is clear. We
                notify you about any new charges in good time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <h1>Share with your friends</h1>
        <div className="social">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer "
          >
            <Facebook style={{ color: "#1877F2" }} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer "
          >
            <GitHub style={{ color: "#333333" }} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn style={{ color: "#0077B5" }} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer "
          >
            <Instagram
              style={{
                color: "#f56040",
              }}
            />
          </a>
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer "
          >
            <WhatsApp style={{ color: "#25D366" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
