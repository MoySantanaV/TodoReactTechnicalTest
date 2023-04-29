import PropTypes from "prop-types";
import styled from "styled-components";

const Pagination = ({setCurrent, currentPage, todos}) => {


  return (
    <PaginationContainer>
    {[...Array(Math.ceil(todos.length / 10))].map((e, i) => (
      <PaginationButton
        key={i}
        onClick={setCurrent}
        isActive={currentPage / 10 === i}
      >
        {i}
      </PaginationButton>
    ))}
  </PaginationContainer>
  )
}

Pagination.propTypes = {
    setCurrent: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    length: PropTypes.number.isRequired
  };

export {Pagination}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px 0 20px 0;
  height: auto;
`;
const PaginationButton = styled.button`
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  color: ${({theme}) => theme.text};
  background: none;
  border: none;
  width: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  &:focus {
    outline: none;
    font-size: 16.7px;
  }
`;