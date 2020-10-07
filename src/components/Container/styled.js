import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-left: ${({ theme }) => theme.spacing.xlarge};
  padding-right: ${({ theme }) => theme.spacing.xlarge};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container };
