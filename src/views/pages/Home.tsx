import React from 'react';

import styled from 'styled-components';

import Ship from 'views/pages/components/Ship';

const Div = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
`;

const ShipContainer = styled.div`
	max-width: 200px
`;

export default () => {

	return (
		<Div>
			<ShipContainer>
				<Ship 
					shipNumber={1}
				/>
			</ShipContainer>
			<ShipContainer>
				<Ship 
					shipNumber={2}
				/>
			</ShipContainer>
			<ShipContainer>
				<Ship 
					shipNumber={3}
				/>
			</ShipContainer>
		</Div>
	);
};