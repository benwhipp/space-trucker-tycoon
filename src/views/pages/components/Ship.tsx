import
    React,
    { useState }
 from 'react';

import styled from 'styled-components';

type Props = {
    shipNumber: number;
}

const Div = styled.div`
    background-color: blue;
    width: 100%;
    color: #fff;
`;

export default (props: Props) => {
    const [speed, setSpeed] = useState(Math.floor(Math.random() * 100));

	return (
		<Div>
            I am ship #{props.shipNumber}<br />
			My speed is {speed}
		</Div>
	);
};