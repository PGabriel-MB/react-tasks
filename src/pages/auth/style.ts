import style from "styled-components";

export const VeritcalSpacing = style.div`
	margin: 10em 0;
`;

export const Card = style.div`
	padding: 4em 5em;
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
	margin: 1em 0;
	border-radius: 10px;
	border: 1px solid var(--green-dark);
	color: var(--green-dark);
	font-size: 1.5em;
	font-weight: 900;
	::placeholder {
		color: #ffffff
	};
`;

export const ButtonRow = style.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const Button = style.button`
	padding: 1em;
	border-radius: 10px;
	font-size: 1em;
	width: 40%;
	border: none;
	font-weight: 900;
`;	
