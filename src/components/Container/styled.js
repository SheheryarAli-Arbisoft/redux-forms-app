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

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.border};
  margin: ${({ theme }) => theme.spacing.normal} 0;
`;

export { Container, Divider };
