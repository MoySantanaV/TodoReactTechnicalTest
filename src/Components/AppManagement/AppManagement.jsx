import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Error } from "../Error/Error";
import { Input } from "../Input/Input";
import { Pagination } from "../Pagination/Pagination";
import { Table } from "../Table/Table";
import { CustomButton } from "../CustomButton/CustomButton";
import { DarkMode } from "../DarkMode/DarkMode";
import { Loading } from "../Loading/Loading";
import "../../App.css";

const AppManagement = ({toggleDarkMode, isDarkMode}) => {
    const [todos, setTodos] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const newTodoRef = useRef(null);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/todos");
        const parsed = await data.json();
        console.log(parsed);
        setTodos(parsed);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    const setCurrent = (e) => {
      const curr = parseInt(e.target.textContent);
      setCurrentPage(curr * 10);
    };

    const addNewTodo = () => {
      const newTodo = {
        userId: Math.round(Math.random() * 100),
        id: todos.length + 1,
        title: newTodoRef.current.value,
        completed: false,
      };
      setTodos([newTodo, ...todos]);
      newTodoRef.current.focus();
      newTodoRef.current.value = "";
    };

    const onKeyEnterNewTodo = (e) => {
      if (e.key === "Enter") {
        addNewTodo();
      }
    };

    return isLoading ? (
      <Loading />
    ) : isError ? (
      <Error fetchData={fetchData} />
    ) : (
      <div className="App">
        <Wrap>
          <Input newTodoRef={newTodoRef} onKeyEnterNewTodo={onKeyEnterNewTodo} />
          <CustomButton handleClick={addNewTodo} text={"Create"} />
          <CustomButton handleClick={fetchData} text={"Refresh"} />
          <DarkMode toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        </Wrap>
        <Pagination
          setCurrent={setCurrent}
          currentPage={currentPage}
          todos={todos}
        />
        <Table todos={todos} currentPage={currentPage} />
      </div>
    );
}

AppManagement.propTypes = {
    toggleDarkMode: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired
  };

export {AppManagement}

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
`;
