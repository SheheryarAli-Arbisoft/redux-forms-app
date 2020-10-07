import styled from 'styled-components';

const Heading = styled.div`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xsmall}
    ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.size.text.heading};
  font-weight: bold;
  color: ${({ theme }) => theme.color.text.primary};
`;

const SubHeading = styled.div`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xsmall}
    ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.size.text.large};
  color: ${({ theme }) => theme.color.text.primary};
`;

const Primary = styled.div`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.medium};
  padding-top: ${({ theme }) => theme.spacing.xsmall};
  font-size: ${({ theme }) => theme.size.text.medium};
  color: ${({ theme }) => theme.color.text.primary};
`;

const Secondary = styled.div`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xsmall}
    ${({ theme }) => theme.spacing.medium};
  padding-bottom: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.size.text.xsmall};
  color: ${({ theme }) => theme.color.text.secondary};
  text-align: justify;
`;

export { Heading, SubHeading, Primary, Secondary };
