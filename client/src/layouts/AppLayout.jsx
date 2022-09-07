import styled from 'styled-components';

export const AppLayout = styled.main`
	margin-top: 5em;
	margin-bottom: 5em;
	margin-left: 12em;
	display: flex;
	justify-content: center;
	width: 85%;
	transition: all 200ms;

	@media only screen and (max-width: 600px) {
		margin-left: 2em;
	}
`;
