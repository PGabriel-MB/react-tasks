import React from "react";

import { Container } from "../../components/ui/Container";

import * as S from "./style";

export const Auth: React.FC = () => {
  return (
		<Container>
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
					<S.Button style={{color: "var(--green-dark)"}}>
						Cadastro
					</S.Button>
				</S.ButtonRow>
			</S.Card>
		</Container>
	);
}
