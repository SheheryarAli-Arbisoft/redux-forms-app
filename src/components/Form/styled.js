import styled from 'styled-components';

const Form = styled.form`
  width: 475px;
  min-height: 500px;
  background-color: ${({ theme }) => theme.color.background};
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.color.border};
  box-shadow: 0 0 10px 1px ${({ theme }) => theme.color.border};
`;

export { Form };
