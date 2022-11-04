import '../styles/table.css';
import TimesheetForm from '../components/TimesheetForm';
import React, {Ref, useState} from 'react';
import { Task } from '../types';

const TimesheetPage = () => {
  const getTaskList = () => {
    let list = localStorage.getItem('tasks');
    if (Array.isArray(list)) return JSON.parse(list);

    return [];
  }
  const [taskList, setTaskList] = useState(getTaskList);
  const [isFormOpen, setFormState] = useState(false);

  const toggleForm = () => {
    setFormState(!isFormOpen);
  }

  const addTask = (task: Task) => {
    setTaskList([...taskList, task]);
    localStorage.setItem('tasks', JSON.stringify((taskList)));
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
      <div className="flex">
        <div className="page-title">Today's timesheet</div>
        <button type="button" onClick={toggleForm}>Log my hour</button>
      </div>
      { taskList.length > 0 ?
        (<div className="grid table">
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
