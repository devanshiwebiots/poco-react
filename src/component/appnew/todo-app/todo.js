/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import { Container, Row, Col, Card, CardBody, CardHeader, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { ADD_NEW_ITEM, GET_LIST, MARK_ALL_ITEMS, REMOVE_ITEM, SELECTED_ITEM } from "../../../redux/todo/TodoSlice";
const Todo = () => {
  const todoList = useSelector((state) => state.todoSlice.allTodoItems.filter((item) => item.isStatus !== "deleted"));
  const dispatch = useDispatch();
  const [addTask, setAddTask] = useState("");
  const [border_danger, setBorder_danger] = useState("");
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("pending");
  const [markAll, setMarkAll] = useState(false);

  useEffect(() => {
    dispatch(GET_LIST());
  }, [dispatch]);

  const addNewTask = () => {
    if (task === "") {
      document.querySelector(".ng-valid").classList.remove("border-danger");
      document.querySelector(".ng-valid").classList.add("border-danger");
    } else {
      dispatch(ADD_NEW_ITEM(task));
      setAddTask("");
      setTask("");
      document.getElementById("newtask").value = "";
      document.querySelector(".ng-valid").classList.add("taskmag-hide");
      document.querySelector(".ng-valid").classList.remove("taskmag-show");
      document.querySelector(".add-task-btn").classList.remove("hide");
    }
  };
  const handleRemoveTodo = (todoId) => {
    dispatch(REMOVE_ITEM(todoId));
    toast.success("Deleted Task !");
  };
  const handleMarkedTodo = (itemId, itemStatus) => {
    if (itemStatus === "completed") {
      setStatus("pending");
      dispatch(SELECTED_ITEM({ itemId, status }));
      toast.success("Task Completed !");
    }
    if (itemStatus === "pending") {
      setStatus("completed");
      dispatch(SELECTED_ITEM({ itemId, status }));
      toast.error(" Task In-completed !");
    }
  };
  const markAllStatus = () => {
    setMarkAll(!markAll);
    if (markAll === true) {
      toast.error("All Task In-Completed !");
    } else {
      toast.success("All Task Completed !");
    }
    dispatch(MARK_ALL_ITEMS(markAll));
  };

  const openTaskWrapper = () => {
    setAddTask(" visible");
    document.querySelector(".add-task-btn").classList.add("hide");
  };

  const closeTaskWrapper = () => {
    setAddTask("");
    document.querySelector(".add-task-btn").classList.remove("hide");
  };

  const onTaskChanged = (e) => {
    setTask({
      task: e.currentTarget.value,
    });
  };

  return (
    <Fragment>
      <Breadcrumb parent="Apps / User" title="To-Do" />
      <Container fluid={true}>
        <Row>
          <Col xl="12">
            <Card>
              <CardHeader>
                <h5>To-Do</h5>
              </CardHeader>
              <CardBody>
                <div className="todo">
                  <div className="todo-list-wrapper">
                    <div className="todo-list-container">
                      <div className="mark-all-tasks">
                        <div className="mark-all-tasks-container">
                          <span className="mark-all-btn" id="mark-all-finished" role="button">
                            <span className="btn-label">Mark all as finished</span>
                            <span className="action-box completed" onClick={markAllStatus}>
                              {markAll && (
                                <i className="icon">
                                  <i className="icon-check"></i>
                                </i>
                              )}
                            </span>
                          </span>
                          <span className="mark-all-btn move-down" id="mark-all-incomplete" role="button">
                            <span className="btn-label">Mark all as Incomplete</span>
                            <span className="action-box">
                              <i className="icon">
                                <i className="icon-check"></i>
                              </i>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="todo-list-body">
                        <ul id="todo-list">
                          {todoList.length > 0
                            ? todoList.map((todo, index) => (
                                <li className={"task " + todo.status} key={index}>
                                  <div className='task-container'>
                                    <h4 className='task-label'>{todo.title}</h4>
                                    <span className='task-action-btn'>
                                      <span className='action-box large delete-btn' title='Delete Task' onClick={() => handleRemoveTodo(todo.id)}>
                                        <i className='icon'>
                                          <i className='icon-trash'></i>
                                        </i>
                                      </span>
                                      <span className='action-box large complete-btn' title='Mark Complete' onClick={() => handleMarkedTodo(todo.id, status)}>
                                        <i className='icon'>
                                          <i className='icon-check'></i>
                                        </i>
                                      </span>
                                    </span>
                                  </div>
                                </li>
                              ))
                            : ""}
                        </ul>
                      </div>
                      <div className="todo-list-footer">
                        <div className="add-task-btn-wrapper">
                          <span className="add-task-btn">
                            <Button color="primary" onClick={openTaskWrapper}>
                              <i className="icon-plus"></i> Add new task
                            </Button>
                          </span>
                        </div>
                        <div className={"new-task-wrapper" + addTask}>
                          <textarea className={"ng-untouched ng-pristine ng-valid" + border_danger} id="newtask" placeholder="Enter new task here. . ." defaultValue={task} onChange={onTaskChanged}></textarea>
                          <Button color="danger" className="cancel-btn" id="close-task-panel" onClick={closeTaskWrapper}>
                            Close
                          </Button>
                          <Button color="success" className="ms-3 add-new-task-btn" id="add-task" onClick={addNewTask}>
                            Add Task
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="notification-popup hide">
                    <p>
                      <span className="task"></span>
                      <span className="notification-text"></span>
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Todo;
