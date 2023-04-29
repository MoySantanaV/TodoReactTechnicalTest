import { FaSun, FaMoon } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styled from "styled-components";

const DarkMode = ({toggleDarkMode, isDarkMode}) => {
  return (
    <IconWrapper onClick={toggleDarkMode} >
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </IconWrapper>
  )
}

DarkMode.propTypes = {
    toggleDarkMode: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
  };

export {DarkMode}

const IconWrapper = styled.div`
font-size: 2em;
display: flex;
align-items: center;
`;

const SunIcon = styled(FaSun)`
color: ${({theme}) => theme.text};

`
;

const MoonIcon = styled(FaMoon)`
color: ${({theme}) => theme.text};

`
;