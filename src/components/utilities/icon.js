import styled from "styled-components"

const paths = {
  logo: 'logo.svg',
}

export const Icon = styled.img`
  content: url(${(props) => paths[props.name]});
`;