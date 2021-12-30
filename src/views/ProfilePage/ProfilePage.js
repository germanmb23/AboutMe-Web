/* eslint-disable */
import React, { useState } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import CardContent from '@material-ui/core/CardContent';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import Info from '@material-ui/icons/Info';
import Code from '@material-ui/icons/Code';
import Palette from '@material-ui/icons/Palette';
import GitHub from '@material-ui/icons/GitHub';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
// core components
import Footer from 'components/Footer/Footer.js';
import Button from 'components/CustomButtons/Button.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import NavPills from 'components/NavPills/NavPills.js';
import Parallax from 'components/Parallax/Parallax.js';
import ToggleButtons from 'components/Parallax/ToggleButtons.js';
import * as constants from './../../constants';
/*
I'm a software developer, focused in frontend with some experience in backend. I am also studying computer engineering in "Facultad de Ingenieria, UDELAR".

I'm mainly interested in the frontend and the user experience and design in general but I enjoy also working on backend. I'm a natural challenge lover, I don't give up that easy.

Below, you can see some of my skills, and some of my last progects I have worked, also you can contact me sending me a message.
 */

// images
import profile from 'assets/img/faces/me.png';
import coding from 'assets/img/coding.png';

import MessageForm from 'components/Forms/MessageForm';

import styles from 'assets/jss/material-kit-react/views/profilePage.js';

import pdf from '../../assets/files/my_resume.pdf';

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
	//true=spanish, false=english
	const [language, setLanguage] = useState('spanish');

	const githubLink = 'https://github.com/germanmb23/';

	const classes = useStyles();

	const [dense, setDense] = React.useState(false);

	const changeLanguage = () => {
		if (language == 'spanish') setLanguage('english');
		else setLanguage('spanish');
	};

	const { ...rest } = props;
	const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);

	const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

	function generatePorfolio(portfolioData) {
		return portfolioData.map((proyect) => (
			<GridItem xs={12} sm={12} md={12}>
				<CardContent>
					<div style={{ cursor: 'pointer' }} target="_blank" onClick={() => window.open(proyect.link)}>
						<div>
							<GitHub style={{ paddingRight: 8 }} />
							<Typography variant="h9" className={classes.title}>
								{proyect.name}
							</Typography>
						</div>
						<p as="a">{proyect.stack}</p>
					</div>

					{'e-Comerce' == proyect.name ? (
						<div>
							<p>
								<b>Nota:</b> Ingresar cualquier usuario y contraseña
							</p>
							<a href="https://germanmb23.github.io/ObligatorioJAP/">Web Site</a>
						</div>
					) : (
						''
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
										<h6>{language == 'spanish' ? 'DESARROLLADOR' : 'DEVELOPER'}</h6>
										<Button justIcon link className={classes.margin5} onClick={() => window.open(githubLink)}>
											<i className={'fab fa-github'} />
										</Button>
									</div>
								</div>
							</GridItem>
						</GridContainer>
						<div className={classes.description}>
							<ToggleButtons onSelect={changeLanguage} />
							{constants.aboutMe[language].map((element) => {
								return <p style={{ fontSize: '18px' }}>{element}</p>;
							})}
							<div style={{ marginTop: '30px' }}>
								<Button
									variant="contained"
									color="default"
									className={classes.button}
									startIcon={<CloudDownloadIcon />}
									onClick={() => window.open(pdf)}
								>
									{language == 'spanish' ? 'Descargar curriculum' : 'Download my resume'}
								</Button>
							</div>
							<MessageForm language={language} />
						</div>

						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
								<NavPills
									alignCenter
									color="primary"
									tabs={[
										{
											tabButton: 'My stack',
											tabIcon: Code,
											tabContent: (
												<GridContainer justify="center">
													<GridItem xs={24} sm={24} md={3}>
														<Typography variant="h9" className={classes.title}>
															BackEnd
														</Typography>
														<List dense={dense}>{generate(constants.backEndData)}</List>
													</GridItem>
													<GridItem xs={24} sm={24} md={3}>
														<Typography variant="h9" className={classes.title}>
															FrontEnd
														</Typography>
														<List dense={dense}>{generate(constants.frontEndData)}</List>
													</GridItem>
													<GridItem xs={24} sm={24} md={3}>
														<Typography variant="h9" className={classes.title}>
															{language == 'spanish' ? 'Base de Datos' : 'DataBase'}
														</Typography>
														<List dense={dense}>{generate(constants.dataBaseData)}</List>
													</GridItem>
													<GridItem xs={24} sm={24} md={3}>
														<Typography variant="h9" className={classes.title}>
															Frameworks
														</Typography>
														<List dense={dense}>{generate(constants.organizationData)}</List>
													</GridItem>
												</GridContainer>
											),
										},
										{
											tabButton: 'Work',
											tabIcon: Palette,
											tabContent: (
												<GridContainer justify="center">
													<GridItem xs={12} sm={12} md={4}>
														<div>
															{constants.workInfo[language].map((element) => {
																return (
																	<p style={{ fontSize: '19px' }} className={classes.description}>
																		{element}
																	</p>
																);
															})}
															<br />
														</div>
													</GridItem>
												</GridContainer>
											),
										},
										{
											tabButton: 'Portfolio',
											tabIcon: GitHub,
											tabContent: (
												<GridContainer justify="center">
													<GridItem xs={24} sm={24} md={24}>
														<p style={{ fontSize: '19px' }} className={classes.description}>
															This are just some little projects to show my style of coding.
														</p>
													</GridItem>

													<List dense={dense}>{generatePorfolio(constants.portfolioData)}</List>
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
															<div target="_blank" style={{ justifyContent: 'space-between' }}>
																<div
																	style={{
																		cursor: 'pointer',
																	}}
																>
																	<Typography variant="h9" className={classes.title}>
																		{'App for ordering taxis and remises in Flores'}
																	</Typography>
																</div>
																<p as="a">
																	{
																		'React Native + Node +  Navigation + Firebase Messaging, Authentication +  Maps SDK + Material UI... etc'
																	}
																</p>
																{
																	<div>
																		<p float="center">
																			<img
																				src="https://user-images.githubusercontent.com/32777967/147781806-ce5272b6-2cfe-4d39-ab14-0d0512459aae.png"
																				width="33%"
																			/>
																			<img
																				src="https://user-images.githubusercontent.com/32777967/147781817-72935003-9a28-4e8f-8cb9-85e3b7944d19.png"
																				width="33%"
																			/>
																			<img
																				src="https://user-images.githubusercontent.com/32777967/147781735-54ddcc20-a144-4c42-83a8-90d995674b4c.gif"
																				width="33%"
																			/>
																			<img
																				src="https://user-images.githubusercontent.com/32777967/147781812-8ac6a296-be6e-49ad-b61f-b942b0dbcf89.png"
																				width="33%"
																			/>
																			<img
																				src="https://user-images.githubusercontent.com/32777967/147782000-68c7fb42-ac02-4eab-be1b-74024cff4155.png"
																				width="33%"
																			/>
																			<img
																				src="https://user-images.githubusercontent.com/32777967/147782057-712beb5b-d394-4af0-b6e2-7cf69c4e1305.png"
																				width="33%"
																			/>
																			<img
																				src="https://user-images.githubusercontent.com/32777967/147787310-9414961e-7589-4c1f-a8cf-1362dbfc986d.gif"
																				width="33%"
																			/>
																			<img
																				src="https://user-images.githubusercontent.com/32777967/147787877-e9884cdc-64cf-410b-b226-46b4412947ca.gif"
																				width="33%"
																			/>
																		</p>
																	</div>
																}
															</div>
														</CardContent>
														<CardContent>
															<div
																target="_blank"
																onClick={() => window.open('https://github.com/germanmb23/ReactNative_DoneWithIt')}
															>
																<div
																	style={{
																		cursor: 'pointer',
																		alignContent: 'center',
																		alignItems: 'center',
																	}}
																>
																	<GitHub style={{ paddingRight: 8, alignSelf: 'center' }} />
																	<Typography variant="h9" className={classes.title}>
																		{'Done With It App'}
																	</Typography>
																</div>
																<p as="a">{'React Native + Formik + Material UI + Navigation... etc'}</p>
																{
																	<div>
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
																	</div>
																}
															</div>
														</CardContent>
														<CardContent>
															<div
																target="_blank"
																onClick={() => window.open('https://github.com/germanmb23/ReactNative_DoneWithIt')}
															>
																<div
																	style={{
																		cursor: 'pointer',
																	}}
																>
																	<GitHub
																		style={{
																			paddingRight: 8,
																		}}
																	/>
																	<Typography variant="h9" className={classes.title}>
																		{'Aplicacion para controlar el robot butiá'}
																	</Typography>
																	<div>
																		<a href="http://164.73.124.35/inco/proyectos/butia/mediawiki/index.php/Programando_el_Butia_desde_el_celular">
																			Link al proyecto
																		</a>
																	</div>
																</div>
																<p as="a">{'React Native + Formik + Material UI + Navigation... etc'}</p>
																{
																	<div>
																		<img
																			src="https://user-images.githubusercontent.com/32777967/128830238-8816ef81-138a-442b-981d-ba1dd43b605e.gif"
																			width="33%"
																		/>
																		<img
																			src="https://user-images.githubusercontent.com/32777967/128830221-05ccab86-7a7d-4f55-83b8-3d8aee05515b.gif"
																			width="33%"
																		/>
																		<img
																			src="https://user-images.githubusercontent.com/32777967/128830254-b12a2091-232f-4b6c-b551-0196bcf0c8f1.gif"
																			width="33%"
																		/>
																		<br />
																		<br />
																		<img
																			src="https://user-images.githubusercontent.com/32777967/128830231-6162d353-f1ac-47d9-9352-6974352dc192.gif"
																			width="33%"
																		/>
																		<img
																			src="https://user-images.githubusercontent.com/32777967/128830240-fa0729c0-5468-4aad-a44b-85bf134f662b.gif"
																			width="33%"
																		/>
																		<img
																			src="https://user-images.githubusercontent.com/32777967/128830247-ec3a44f0-c05f-491a-a814-f21a6cd62081.gif"
																			width="33%"
																		/>
																	</div>
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
