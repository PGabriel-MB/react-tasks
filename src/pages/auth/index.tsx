import React from "react";

import { Container } from "../../components/ui/Container";

import * as S from "./style";

export const Auth: React.FC = () => {
  return (
		<Container>
			<S.VeritcalSpacing>
				<S.Card>
					<S.Input />
					<S.Input />
				</S.Card>
			</S.VeritcalSpacing>
		</Container>
	);
}
