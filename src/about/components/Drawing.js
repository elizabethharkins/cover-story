

import React from "react";
import drawing from '../img/mebygv.png';
import styled from "styled-components";
const DrawingStyles = styled.div`
	background-image: url(${drawing});
	background-position: bottom;
	background-repeat: no-repeat;
	background-size: 125%;
	grid-row: 2 / 4;
	grid-column: 1;
	margin: 0;
	padding: 0;
	z-index: 2;

	@media (max-width: 73em) {	
		background-position: auto;
		background-repeat: no-repeat;
		background-size: contain;
		grid-row: 5;
		grid-column: 1;
		margin: 0;
		padding: 0;
		margin-top: -10em;
		z-index: 2;
	}
	@media (max-width: 480px) {
		background-size: 125%;
	}
`;


export const Drawing = () => {

	return (
		<DrawingStyles></DrawingStyles>
	);
	
}



