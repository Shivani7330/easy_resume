import React from "react";
import "./footer.scss";
import { GitHub, Star } from "@mui/icons-material";

const Footer = () => {
  const teamMembers = [
    { name: "Shivani", url: "https://github.com/Shivani7330" },
  
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">Resume_Creator</h2>
        <p className="github-link">
          <a
            href="https://github.com/your-repo-url"
            target="_blank"
            rel="noopener noreferrer"
          >
            Drop a star <Star className="star-icon" /> on GitHub{" "}
            <GitHub className="github-icon" />
          </a>
        </p>
        <p className="team-info">
          Made with Passion By{" "}
          {teamMembers.map((member, index) => (
            <React.Fragment key={member.name}>
              <a href={member.url} target="_blank" rel="noopener noreferrer">
                {member.name === "Darth Vader" ? "Hari" : member.name}
              </a>
              {index < teamMembers.length - 1 && ", "}
              {index === teamMembers.length - 2 && "& "}
            </React.Fragment>
          ))}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
