import React, { useState } from "react";
import { FcTodoList } from "react-icons/fc";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import {
  Grid,
  Box,
  Typography,
  TextField,
  IconButton,
  Alert,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  addTaskThunk,
  deleteTaskThunk,
  toggleCompleteThunk,
} from "../redux/todoReducer";

const ToDoContainer = () => {
  const [input, setInput] = useState("");
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTaskThunk(input));
      setInput("");
    }
  };

  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // const taskDisplayColors = ["#303f9f", "#1565c0", "#0288d1"];
  const taskDisplayColors = ["#7e57c2", "#3f51b5", "#2196f3"];
  const inCompleteTasks = tasks.filter((task) => !task.completed);

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}>
      <Box
        md={8}
        lg={6}
        sx={{
          flexGrow: 1,
          backgroundColor: "black",
          boxShadow: "1px 1px 15px 0 #ffffff80",
          display: "flex",
          flexDirection: "column",
          height: isDesktop ? "90%" : isTablet ? "95%" : "100%",
          maxWidth: isDesktop ? "70%" : isTablet ? "95%" : "100%",
          margin: isDesktop ? "2rem 4rem" : isTablet ? "2rem 4rem" : "unset",
        }}>
        <Grid item xs={12}>
          <Box
            className="container"
            sx={{
              textAlign: "center",
              backgroundColor: "black",
              height: "100%",
            }}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ marginTop: "1rem" }}>
              <FcTodoList /> TODO App
            </Typography>
            <Box
              sx={{
                my: 2,
                display: "flex",
                flexDirection: "row",
                gap: 1,
                p: 2,
                justifyContent: "center",
              }}>
              <Typography>{days[date.getDay()]}</Typography>
              <Typography>{date.getDate()}</Typography>
              <Typography>{months[date.getMonth()]}</Typography>
              <Typography>{date.getFullYear()}</Typography>
            </Box>
            <Box sx={{ m: "1rem" }}>
              <form onSubmit={handleSubmit} sx={{ w: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    w: "100%",
                  }}>
                  <TextField
                    id="filled-basic"
                    label="Your task"
                    variant="filled"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    fullWidth
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      marginRight: "-25px",
                    }}
                  />
                  <IconButton
                    type="submit"
                    sx={{
                      color: "#4b00ff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: "25px",
                      left: "-25px",
                      marginRight: "-25px",
                    }}>
                    <AiOutlinePlus />
                  </IconButton>
                </Box>
              </form>
              {tasks.map((task, index) => (
                <Box
                  className={`${task.completed ? "completed" : ""}`}
                  key={task.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    my: 1,
                    p: 1,
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    backgroundColor:
                      taskDisplayColors[index % taskDisplayColors.length],
                  }}
                  onDoubleClick={() => {
                    dispatch(toggleCompleteThunk(task.id));
                  }}>
                  <Typography sx={{ textTransform: "capitalize" }}>
                    {task.text}
                  </Typography>
                  <IconButton
                    onClick={() => dispatch(deleteTaskThunk(task.id))}
                    sx={{ fontSize: "1.5rem", color: "white" }}>
                    <AiOutlineClose />
                  </IconButton>
                </Box>
              ))}

              <Typography sx={{ mt: "2rem", mb: "1rem" }}>
                {inCompleteTasks.length < 1 ? (
                  <Alert
                    variant="outlined"
                    severity="success"
                    sx={{
                      color: "#4caf50",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "1rem",
                    }}>
                    "You have no tasks"
                  </Alert>
                ) : (
                  <Alert
                    variant="outlined"
                    severity="warning"
                    sx={{
                      color: "#ff9800",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "1rem",
                    }}>
                    Tasks to be completed: {inCompleteTasks.length}
                  </Alert>
                )}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
};

export default ToDoContainer;
