import '../styles/table.css';
import TimesheetForm from '../components/TimesheetForm';
import React, {useState} from 'react';
import { Task } from '../types';

const TimesheetPage = () => {
  const [taskList, setTaskList] = useState(
    [
      {
        id: '1',
        date: '2022-11-03T13:04:48.869Z',
        key: 'BAKU-630',
        start_time: '10:20',
        end_time: '10:40',
        description: 'Something to write about',
      },
      {
        id: '2',
        date: '2022-11-03T13:04:48.869Z',
        key: 'BAKU-630',
        start_time: '10:20',
        end_time: '10:40',
        description: 'Something to write about',
      },
      {
        id: '3',
        date: '2022-11-03T13:04:48.869Z',
        key: 'BAKU-630',
        start_time: '10:20',
        end_time: '10:40',
        description: 'Something to write about',
      },
    ]
  )


   const addTask = (task: Task) => {
     setTaskList([...taskList, task]);
   };

  const convertDate = (date: string) => {
    const dateObject = new Date(date);
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getUTCFullYear();

    return `${day}/${month}/${year}`;
  }

  const timesheetTable = taskList.map(task => {
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
  });

  return (
    <div className="container">
      <div className="flex">
        <div className="page-title">Today's timesheet</div>
        <button type="button">Log my hour</button>
      </div>

      <div className="grid">
        <div className="cell heading">Date</div>
        <div className="cell heading">Task key</div>
        <div className="cell heading">Start time</div>
        <div className="cell heading">End time</div>
        <div className="cell heading">Description</div>
        { timesheetTable }
      </div>
      <TimesheetForm onFormSubmit={addTask}/>
    </div>
  );
}

export default TimesheetPage;
