/* eslint-disable */

import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
	grid: {
		marginRight: '-15px',
		marginLeft: '-15px',
		width: 'auto',
	},
};

const useStyles = makeStyles(styles);

export default function GridContainer(props) {
	const classes = useStyles();
	const { children, className, ...rest } = props;
	return (
		<Grid
			container
			spacing={0}
			{...rest}
			className={classes.grid + ' ' + className}
			style={{
				margin: 0,
				width: '100%',
			}}
		>
			{children}
		</Grid>
	);
}

GridContainer.defaultProps = {
	className: '',
};

GridContainer.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};
