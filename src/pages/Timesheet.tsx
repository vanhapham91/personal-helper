import '../styles/table.css';
import TimesheetForm from '../components/TimesheetForm';
import React, { useState } from 'react';
import { Task } from '../types';

const TimesheetPage = () => {
  const getTaskList = (): Task[] => {
    let timeSheetData = localStorage.getItem('tasks')
    return timeSheetData ? JSON.parse(timeSheetData) : [];
  }
  const [taskList, setTaskList] = useState(getTaskList());
  const [isFormOpen, setFormState] = useState(false);
  const initialSelectedTasks: Task[] = [];
  const [selectedTasks, updateSelectedTasks] = useState(initialSelectedTasks);

  const toggleForm = () => {
    setFormState(!isFormOpen);
  }

  const toggleCheckbox = (e: any) => {
    const currentTask: Task = JSON.parse(e.target.dataset.taskData);
    const newSelectedTasks: Task[] = [...selectedTasks];
    if (e.target.checked) {
      if (!newSelectedTasks.find((task: Task) => task.id === currentTask.id)) {
        newSelectedTasks.push(currentTask);
      }
    } else {
      const index = newSelectedTasks.indexOf(currentTask);
      newSelectedTasks.splice(index, 1);
    }

    updateSelectedTasks(newSelectedTasks);
  }

  const deleteTasks = () => {
    const newTaskList = [...taskList];
    selectedTasks.forEach(task => {
     const index = newTaskList.indexOf(task);
      newTaskList.splice(index, 1);
    })
    console.log(newTaskList);
    setTaskList(newTaskList);
    localStorage.setItem('tasks', JSON.stringify(newTaskList));
  }

  const addTask = (task: Task) => {
    setTaskList([...taskList, task]);
    localStorage.setItem('tasks', JSON.stringify([...taskList, task]));
  };

  const convertDate = (date: string) => {
    const dateObject = new Date(date);
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getUTCFullYear();

    return `${day}/${month}/${year}`;
  }

  const timesheetTable = taskList.length > 0 ? taskList.map((task: Task) => {
    const date = convertDate(task.date);

    return (
      <React.Fragment key={task.id}>
        <div className="cell"><input type="checkbox" data-task-data={JSON.stringify(task)} onChange={toggleCheckbox}/></div>
        <div className="cell">{date}</div>
        <div className="cell">{task.key}</div>
        <div className="cell">{task.start_time}</div>
        <div className="cell">{task.end_time}</div>
        <div className="cell">{task.description}</div>
      </React.Fragment>
    )
  }) : <></>;

  return (
    <div className="container">
      <div className="timesheet-table--header flex">
        <div className="page-title">
          <span>Today's timesheet</span>
          <button type="button" onClick={toggleForm}>Log my hour</button>
        </div>
        { selectedTasks.length > 0 ? (
          <div className="timesheet-table--actions-btn">
            <button className="text-sm" onClick={deleteTasks}>Delete</button>
          </div>
          ) : '' }
      </div>
      { taskList.length > 0 ?
        (<div className="grid table">
          <div className="cell header"></div>
          <div className="cell header">Date</div>
          <div className="cell header">Task key</div>
          <div className="cell header">Start time</div>
          <div className="cell header">End time</div>
          <div className="cell header">Description</div>
          { timesheetTable }
        </div>) : (<p>You haven't log any task yet!</p>)}
      <TimesheetForm onFormSubmit={addTask} onToggleForm={toggleForm} isOpen={isFormOpen}/>
    </div>
  );
}

export default TimesheetPage;
