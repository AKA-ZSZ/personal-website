import React from "react";

import "./techStack.scss";

export default function TechStack() {
  return (
    <div id="techStack">
      <div className="container techStack-container">
        <h2>
          <span className="highlight">TECH STACK</span>
        </h2>
        <div className="container techStack-icons">
          <div className="techStack-icon">
            <a
              href="https://www.w3.org/TR/html5/"
              title="HTML5"
              target="_blank"
            >
              <img
                src="https://github.com/get-icon/geticon/raw/master/icons/html-5.svg"
                alt="HTML5"
              />
            </a>
            HTML5
          </div>
          <div className="techStack-icon">
            <a
              href="https://www.typescriptlang.org/"
              title="Typescript"
              target="_blank"
            >
              <img
                src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg"
                alt="Typescript"
              />
            </a>
            Typescript
          </div>
          <div className="techStack-icon">
            <a href="https://reactjs.org/" title="React" target="_blank">
              <img
                src="https://github.com/get-icon/geticon/raw/master/icons/react.svg"
                alt="React"
              />
            </a>
            React
          </div>
          <div className="techStack-icon">
            <a href="https://redux.js.org/" title="Redux" target="_blank">
              <img
                src="https://github.com/get-icon/geticon/raw/master/icons/redux.svg"
                alt="Redux"
              />
            </a>
            Redux
          </div>
          <div className="techStack-icon">
            <a href="https://jquery.com/" title="jQuery" target="_blank">
              <img
                src="https://github.com/get-icon/geticon/raw/master/icons/jquery-icon.svg"
                alt="jQuery"
              />
            </a>
            JQuery
          </div>
          <div className="techStack-icon">
            <a href="https://sass-lang.com/" title="Sass" target="_blank">
              <img
                src="https://github.com/get-icon/geticon/raw/master/icons/sass.svg"
                alt="Sass"
              />
            </a>
            Sass
          </div>
          <div className="techStack-icon">
            <a href="https://getbootstrap.com/" title="Bootstrap">
              <img
                src="https://github.com/get-icon/geticon/raw/master/icons/bootstrap.svg"
                alt="Bootstrap"
              />
            </a>
            Bootstrap
          </div>

          <div className="techStack-icon">
            <a href="https://nodejs.org/" title="Node.js" target="_blank">
              <img
                src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg"
                alt="Node.js"
              />
            </a>
            NodeJS
          </div>

          <div className="techStack-icon">
            <a href="https://dev.mysql.com/" title="MySQL" target="_blank">
              <img
                src="https://github.com/get-icon/geticon/raw/master/icons/mysql.svg"
                alt="MySQL"
              />
            </a>
            MySQL
          </div>
          <div className="techStack-icon">
            <a href="https://expressjs.com/" title="Express" target="_blank">
              <img
                src="https://github.com/get-icon/geticon/raw/master/icons/express.svg"
                alt="Express"
              />
            </a>
            Express
          </div>
          <div className="techStack-icon">
            <a href="https://jestjs.io/" title="Jest" target="_blank">
              <img
                src="https://github.com/get-icon/geticon/raw/master/icons/jest.svg"
                alt="Jest"
              />
            </a>
            Jest
          </div>
          <div className="techStack-icon">
            <a href="https://www.python.org/" title="Python" target="_blank">
              <img src="https://img.icons8.com/fluency/96/000000/python.png" />
            </a>
            Python
            {/* <a href="https://icons8.com/icon/l75OEUJkPAk4/python">
          Python icon by Icons8
        </a> */}
          </div>
          <div className="techStack-icon">
            <a
              href="https://flask.palletsprojects.com/en/2.0.x/"
              title="Flask"
              target="_blank"
            >
              <img src="https://img.icons8.com/ios/100/000000/flask.png" />
            </a>
            Flask
            {/* <a href="https://icons8.com/icon/TtXEs5SeYLG8/flask">Flask icon by Icons8</a> */}
          </div>
          <div className="techStack-icon">
            <a href="https://webpack.js.org/" title="Webpack" target="_blank">
              <img src="https://img.icons8.com/color/96/000000/webpack.png" />
            </a>
            Webpack
            {/* <a href="https://icons8.com/icon/sOWbK4N3cxGh/webpack">Webpack icon by Icons8</a>*/}
          </div>
          <div className="techStack-icon">
            <a href="https://www.jenkins.io/" title="Jenkins" target="_blank">
              <img src="https://img.icons8.com/color/96/000000/jenkins.png" />
            </a>
            Jenkins
            {/* <a href="https://icons8.com/icon/39292/jenkins">Jenkins icon by Icons8</a>*/}
          </div>

          <div className="techStack-icon">
            <a href="https://www.docker.com/" title="Docker" target="_blank">
              <img src="https://img.icons8.com/fluency/96/000000/docker.png" />
            </a>
            Docker
            {/* <a href="https://icons8.com/icon/cdYUlRaag9G9/docker">Docker icon by Icons8</a>*/}
          </div>
          <div className="techStack-icon">
            <a href="https://www.mongodb.com/" title="MongoDB" target="_blank">
              <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" />
            </a>
            MongoDB
            {/* <a href="https://icons8.com/icon/tBBf3P8HL0vR/mongodb-a-cross-platform-document-oriented-database-program">MongoDB a cross-platform document-oriented database program icon by Icons8</a>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
