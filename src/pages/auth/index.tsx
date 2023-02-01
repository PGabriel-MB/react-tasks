import React from "react";
import { BsCheck2Circle } from "react-icons/bs"

import { Container } from "../../components/ui/Container";

import * as S from "./style";

export const Auth: React.FC = () => {
  return (
		<Container>
			<S.HeaderWrapper>
				<h1>ToDoer</h1>
				<BsCheck2Circle size={100} />
			</S.HeaderWrapper>
			<S.Card>
				<S.Input placeholder="Email"/>
				<S.Input placeholder="Password"/>
				<S.ButtonRow>
					<S.Button
						style={{
							color: "#ffffff",
							backgroundColor: "var(--green-dark)"
						}}
					>
						Login
					</S.Button>
					<S.Button style={{color: 'var(--green-dark)', backgroundColor: 'var(--white)'}}>
						Cadastro
					</S.Button>
				</S.ButtonRow>
			</S.Card>
		</Container>
	);
}
