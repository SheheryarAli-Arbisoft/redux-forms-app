import styled from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  display: block;
  padding: ${({ theme }) => theme.spacing.small}
    ${({ theme }) => theme.spacing.normal};
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.inverted};
  font-size: ${({ theme }) => theme.size.text.large};
  font-weight: bold;
  border: none;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
`;

export { Button };
