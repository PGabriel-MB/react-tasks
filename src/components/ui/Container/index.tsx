import React from "react";

import * as  S from './styles'

export const Container: React.FC = ({ children }: any) => {
	return (
		<S.Flex>
			<S.Box>
			{children}
			</S.Box>
		</S.Flex>
	)
}
