import styled from "styled-components";
import PropTypes from "prop-types";


const Input = ({ newTodoRef, onKeyEnterNewTodo}) => {

  return (

 <StyledInput
          placeholder="Description"
          onKeyDown={onKeyEnterNewTodo}
          ref={newTodoRef}
    />
  )
}

Input.propTypes = {
    newTodoRef: PropTypes.object.isRequired,
    onKeyEnterNewTodo: PropTypes.func.isRequired,
  };

export {Input}

const StyledInput = styled.input`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color:  ${({theme}) => theme.buttonBackground};
  color: ${({theme}) => theme.text};

  width: 60%;
  transition: border-color 0.25s;

  &:focus {
    border-color: ${({theme}) => theme.borders};
    outline: none;
  }
`;