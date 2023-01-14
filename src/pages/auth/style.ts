import style from "styled-components";

export const VeritcalSpacing = style.div`
	margin: 10em 0;
`;

export const Card = style.div`
	padding: 8em 5em;
	background-color: #ebe9e9;
	border-radius: 20px;
	box-shadow: 0px 11px 12px 5px rgba(0, 0, 0, 0.25);
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

export const Input = style.input`
	background-color: var(--green-clean);
	border: none;
	padding: 1em;
	margin: 2em 0;
	border-radius: 10px;
	color: var(--green-dark);
	font-size: 1em;
	font-weight: 900;
`;
