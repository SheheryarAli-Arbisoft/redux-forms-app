import styled from 'styled-components';

const Form = styled.form`
  width: 475px;
  height: fit-content;
  background-color: ${({ theme }) => theme.color.background};
  padding: ${({ theme }) => theme.spacing.normal} 0;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.color.border};
  box-shadow: 0 0 10px 1px ${({ theme }) => theme.color.border};
`;

const FormGroup = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xsmall}
    ${({ theme }) => theme.spacing.normal};
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing.normal};
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.size.text.normal};
`;

export { Form, FormGroup, Input };
