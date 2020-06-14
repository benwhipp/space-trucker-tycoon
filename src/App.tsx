import React from 'react';

import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Home from './views/pages/Home'

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexGrow: 1,
		//This fixes a bug with Material-UI's Grid/Spacing system that causes a >100% width in elements
		overflowX: 'hidden'
	}
}));

export default () => {
	const classes = useStyles();
	return (
		<div
			className={classes.root}>
			<CssBaseline />
			<Home />
		</div>
	);
};