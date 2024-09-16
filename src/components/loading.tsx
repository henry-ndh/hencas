import styled, { keyframes } from 'styled-components';
import Logo from '@assets/logo.jpg'; // add loading img here

interface LoadingProps {
  isOpen: boolean;
}

const Loading = ({ isOpen }: LoadingProps) => {
  return (
    <LoadingContainer style={{ display: isOpen ? 'flex' : 'none' }}>
      <SpinnerContainer>
        <SpinWrapper>
          <Spinner />
          <img src={Logo} alt="logo" />
        </SpinWrapper>
      </SpinnerContainer>
    </LoadingContainer>
  );
};

export default Loading;

const spin = keyframes`
    to {
    transform: rotate(360deg);
  }`;
const LoadingContainer = styled.div`
  position: fixed;
  height: 120%;
  z-index: 999;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const SpinWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  img {
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    object-fit: contain;
    transform: translate(-50%, -50%);
  }
`;

const Spinner = styled.div`
  position: absolute;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #0093d9;

  border-radius: 50%;
  width: 100%;
  height: 100%;
  animation: ${spin} 1s linear infinite;
`;