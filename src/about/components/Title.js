

import React from "react";
import Typewriter from "./Typewriter";
import styled from "styled-components";
import { device } from "../../device";
const TitleStyles = styled.div`
	align-items: end;
	background: var(--dark-accent-grey);
	border-right: 1px solid var(--light-grey);
	border-bottom: 1px solid var(--light-grey);
	color: var(--grey);
	display: grid;
	font-family: 'Barriecito', cursive;
	font-weight: normal;
	font-size: calc(10px + 1.5vw);
	grid-row: 1;
	grid-column: 1 / 4;
	justify-content: end;
	padding-bottom: 20px;
	padding-right: 40px;
	padding-top: 1%;
	padding-left: 1%;
	text-transform: uppercase;
	z-index: 3;

	@media ${device.laptopML} {
		border: 1px solid var(--light-grey);
		outline: 6px solid #121219;

		font-size: calc(10px + 2vw);
		grid-row: 1;

		align-items: center;
    	justify-content: center;
    	padding: 2%;
    	text-align: center;
	}
`;


export const Title = () => {

	return (
		<TitleStyles>
			<Typewriter inputStrings={["Welcome, You've Got M- ... An About Page"]} />
		</TitleStyles>
	);
	
}



