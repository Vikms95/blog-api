/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { useFadeIn } from '../hooks/useFadeIn';

const StyledModalWrapper = styled.div`
	backdrop-filter: brightness(70%);
	top: 50%;
	left: 50%;
	height: 100vh;
	width: 120vw;
	position: fixed;
	transform: translate(-50%, -50%);
	z-index: 2;
`;

/**
 * Handles the logic on whether the modal should be rendered
 * and when rendered, wraps it on an invisible, full screen div
 * to make any element behind unclickable. If that div ever gets
 * clicked, change isModalActive prop to false.
 */
export function ModalWrapper(props) {
	const { children, isModalActive, handleCancel } = props;
	const { isActive } = useFadeIn();

	return (
		isModalActive && (
			<StyledModalWrapper onClick={handleCancel} isActive={isActive}>
				{children}
			</StyledModalWrapper>
		)
	);
}
