import PropTypes from "prop-types";
import { CustomButton } from "../CustomButton/CustomButton"
import styled from "styled-components";


const Error = ({fetchData}) => {
  return (
    <>
    <StyledError>Error</StyledError>
    <CustomButton handleClick={fetchData} text={"Refresh"} />
    </>
  )
}

Error.propTypes = {
    fetchData: PropTypes.func.isRequired,
  };

export {Error}

const StyledError = styled.h2`
color: ${({theme}) => theme.text};
`