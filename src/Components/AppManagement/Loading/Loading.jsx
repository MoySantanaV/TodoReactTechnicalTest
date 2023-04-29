import styled from "styled-components";

const Loading = () => {
  return (
    <StyledLoading>
        Loading...
    </StyledLoading>
  )
}

export {Loading}

const StyledLoading = styled.h2`
color: ${({theme}) => theme.text};
`