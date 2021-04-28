/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import CardContent from "@material-ui/core/CardContent";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Info from "@material-ui/icons/Info";
import Code from "@material-ui/icons/Code";
import Palette from "@material-ui/icons/Palette";
import GitHub from "@material-ui/icons/GitHub";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
// core components
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
// images
import profile from "assets/img/faces/me.png";
import coding from "assets/img/coding.png";

import NameForm from "components/Forms/MessageForm";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

import pdf from "../../assets/files/my_resume.pdf";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const githubLink = "https://github.com/germanmb23/";

  const portfolioData = [
    {
      name: "This Webpage",
      link: "https://github.com/germanmb23/AboutMe-Web",
      stack: "ReactJs + Material UI + Firebase Hosting",
    },
    {
      name: "e-Comerce",
      link: "https://github.com/germanmb23/ObligatorioJAP",
      stack: "Javascript + Bootsrap",
    },
    {
      name: "Pesonal Mobile App",
      link: "https://github.com/germanmb23/AboutMe",
      stack:
        "React Native + UseState + Formik + Material UI + Navigation... etc",
    },
  ];

  const frontEndData = [
    "React",
    "Typescript",
    "Javascript",
    "Npm/Yarn",
    "Redux",
    "HTML",
    "CSS",
    "Bootstrap",
    "Semantic UI/Material UI/Antdesign",
  ];
  const backEndData = [
    "NodeJs",
    "ExpressJs",
    "Rest Web Services",
    "C/C++",
    "Java",
  ];
  const dataBaseData = ["PostgreSql"];
  const organizationData = ["Agile", "Scrum", "Git Flow"];

  const classes = useStyles();

  const [dense, setDense] = React.useState(false);

  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  function generatePorfolio(portfolioData) {
    return portfolioData.map((proyect) => (
      <GridItem xs={12} sm={12} md={12}>
        <CardContent>
          <div target="_blank" onClick={() => window.open(proyect.link)}>
            <div>
              <GitHub style={{ paddingRight: 8 }} />
              <Typography variant="h9" className={classes.title}>
                {proyect.name}
              </Typography>
            </div>
            <p as="a">{proyect.stack}</p>
          </div>

          {"e-Comerce" == proyect.name ? (
            <a href="https://germanmb23.github.io/ObligatorioJAP/">Web Site</a>
          ) : (
            ""
          )}
        </CardContent>
      </GridItem>
    ));
  }

  function generate(list) {
    return list.map((value) => (
      <ListItem>
        <ListItemIcon>
          <FiberManualRecordIcon />
        </ListItemIcon>
        <ListItemText primary={value} />
      </ListItem>
    ));
  }

  return (
    <div>
      <Parallax small image={coding} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>German Moreira</h3>
                    <h6>DEVELOPER</h6>
                    <Button
                      justIcon
                      link
                      className={classes.margin5}
                      onClick={() => window.open(githubLink)}
                    >
                      <i className={"fab fa-github"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p style={{ fontSize: "17px" }}>
                I'm a software developer, focused in frontend with some
                experience in back end. I am also sutying computer engineering
                in "Facultad de Ingenieria, UDELAR".
              </p>

              <p style={{ fontSize: "17px" }}>
                I'm highly interested in the frontend and the user experience
                and design in general. I'm a natural challenge lover, I don't
                give up that easy.
              </p>
              <div style={{ marginTop: "30px" }}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.button}
                  startIcon={<CloudDownloadIcon />}
                  onClick={() => window.open(pdf)}
                >
                  Download my resume
                </Button>
              </div>
              <NameForm></NameForm>
            </div>

            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "My stack",
                      tabIcon: Code,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={24} sm={24} md={3}>
                            <Typography variant="h9" className={classes.title}>
                              BackEnd
                            </Typography>
                            <List dense={dense}>{generate(backEndData)}</List>
                          </GridItem>
                          <GridItem xs={24} sm={24} md={3}>
                            <Typography variant="h9" className={classes.title}>
                              FrontEnd
                            </Typography>
                            <List dense={dense}>{generate(frontEndData)}</List>
                          </GridItem>
                          <GridItem xs={24} sm={24} md={3}>
                            <Typography variant="h9" className={classes.title}>
                              DataBase
                            </Typography>
                            <List dense={dense}>{generate(dataBaseData)}</List>
                          </GridItem>
                          <GridItem xs={24} sm={24} md={3}>
                            <Typography variant="h9" className={classes.title}>
                              Organization
                            </Typography>
                            <List dense={dense}>
                              {generate(organizationData)}
                            </List>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <div>
                              <p
                                style={{ fontSize: "17px" }}
                                className={classes.description}
                              >
                                I'm a self motivated learner, passionate for
                                code. I believe in the art of code, developing
                                scalable and maintainable code following best
                                practices.
                              </p>
                              <p
                                style={{ fontSize: "17px" }}
                                className={classes.description}
                              >
                                Currently getting my hands dirty with AWS,
                                studing and getting the certificates of
                                attendance from AWS free webinars 2020.
                              </p>

                              <br />
                            </div>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Portfolio",
                      tabIcon: GitHub,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={24} sm={24} md={24}>
                            <p
                              style={{ fontSize: "17px" }}
                              className={classes.description}
                            >
                              This are just some little projects to show my
                              style of coding, I'm also building a personal
                              project with Antdesign Pro + NodeJs + Firebase,
                              for intellectual reasons is not in public
                              repository, available to show in case needed.
                            </p>
                          </GridItem>
                          <List dense={dense}>
                            {generatePorfolio(portfolioData)}
                          </List>
                          {
                            <p float="center">
                              <img
                                src="https://user-images.githubusercontent.com/32777967/116196231-9cac1680-a709-11eb-8792-537a5471ad9b.gif"
                                width="23%"
                              />
                              <img
                                src="https://user-images.githubusercontent.com/32777967/116196226-9ae25300-a709-11eb-975b-8dce59fe3305.jpeg"
                                width="23%"
                              />

                              <img
                                src="https://user-images.githubusercontent.com/32777967/116196219-99188f80-a709-11eb-9065-3d0fe09c26dc.gif"
                                width="23%"
                              />

                              <img
                                src="https://user-images.githubusercontent.com/32777967/116196229-9c138000-a709-11eb-9b77-82495d64d07c.gif"
                                width="23%"
                              />
                            </p>
                          }
                          <GridItem xs={12} sm={12} md={12}>
                            <CardContent>
                              <div
                                target="_blank"
                                onClick={() =>
                                  window.open(
                                    "https://github.com/germanmb23/ReactNative_DoneWithIt"
                                  )
                                }
                              >
                                <div>
                                  <GitHub style={{ paddingRight: 8 }} />
                                  <Typography
                                    variant="h9"
                                    className={classes.title}
                                  >
                                    {"Done With It App"}
                                  </Typography>
                                </div>
                                <p as="a">
                                  {
                                    "React Native + UseState + Formik + Material UI + Navigation... etc"
                                  }
                                </p>
                                {
                                  <p float="center">
                                    <img
                                      src="https://user-images.githubusercontent.com/32777967/116443406-fc014800-a829-11eb-9461-1a87c46d5e84.jpeg"
                                      width="23%"
                                    />
                                    <img
                                      src="https://user-images.githubusercontent.com/32777967/116444068-babd6800-a82a-11eb-97b3-8b3cbb5586f3.gif"
                                      width="23%"
                                    />
                                    <img
                                      src="https://user-images.githubusercontent.com/32777967/116444074-bb55fe80-a82a-11eb-8b84-c5536b7e936b.gif"
                                      width="23%"
                                    />
                                    <img
                                      src="https://user-images.githubusercontent.com/32777967/116443402-fb68b180-a829-11eb-8a2c-f38570bd4933.jpeg"
                                      width="23%"
                                    />
                                  </p>
                                }
                              </div>
                            </CardContent>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}