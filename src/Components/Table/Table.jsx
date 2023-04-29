import { useMemo} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

const Table = ({todos, currentPage}) => {

    const visibles = useMemo(() => {
        return todos.slice(currentPage, currentPage + 10);
      }, [currentPage, todos]);



  return (
    <div>
              <TableContainer>
        <StyledTable>
          <thead>
            <TableRow>
              <TableHeader>#</TableHeader>
              <TableHeader>User</TableHeader>
              <TableHeader>Description</TableHeader>
              <TableHeader>Completed</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {visibles &&
              visibles.map(({ userId, id, title, completed }) => (
                <TableRow key={id} completed={completed}>
                  <TableData>{id}</TableData>
                  <TableData>{userId}</TableData>
                  <TableData>{title}</TableData>
                  <TableData>
                    {completed ? <AiOutlineCheck /> : <AiOutlineClose />}
                  </TableData>
                </TableRow>
              ))}
          </tbody>
        </StyledTable>
      </TableContainer>
    </div>
  )
}

Table.propTypes = {
    currentPage: PropTypes.number.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })).isRequired,
  };

export {Table}


const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-width: 300px;
  max-width: 1000px;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  font-weight: bold;
  text-align: center;
  padding: 0.8rem;
  border-bottom: 1px solid #ddd;
`;

const TableRow = styled.tr`
background: ${({ completed }) =>
completed ? "#aaaaaa" : "transparent"};
color: ${({ completed, theme }) => (completed ? "#343a40" : theme.text)};
`;

const TableData = styled.td`
  text-align: center;
  padding: 0.8rem;
  border-bottom: 1px solid #ddd;

`;