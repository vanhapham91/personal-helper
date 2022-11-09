import { Task } from '../types';
import Table from './base/Table';
import React, { useState } from "react";
import { convertDate } from '../utils/helpers';

type TimesheetTableProps = {
  taskList: Task[],
  selectedTasks: Task[],
  onDeleteTasks: () => void,
  onSelectTask: (e: any) => void,
}

const TimesheetTable = (props: TimesheetTableProps) => {
  const {
    taskList,
    selectedTasks,
    onDeleteTasks,
    onSelectTask,
  } = props;

  const timesheetTable = taskList.length > 0 ? taskList.map((task: Task) => {
    const date = convertDate(task.date);

    return (
      <React.Fragment key={task.id}>
        <div className="cell"><input type="checkbox" data-task-data={JSON.stringify(task)} onChange={onSelectTask}/></div>
        <div className="cell">{date}</div>
        <div className="cell">{task.key}</div>
        <div className="cell">{task.start_time}</div>
        <div className="cell">{task.end_time}</div>
        <div className="cell">{task.description}</div>
      </React.Fragment>
    )
  }) : <></>;

  const tableHeaders = (
    <>
      <div className="cell header"></div>
      <div className="cell header">Date</div>
      <div className="cell header">Task key</div>
      <div className="cell header">Start time</div>
      <div className="cell header">End time</div>
      <div className="cell header">Description</div>
    </>
  )
  const tableContent = (
    <>
      { selectedTasks.length > 0 ? (
        <div className="timesheet-table--actions-btn">
          <button className="text-sm" onClick={onDeleteTasks}>Delete</button>
        </div>
      ) : '' }
      { taskList.length > 0 ? (<>{ timesheetTable }</>)
        : (<p>You haven't log any task yet!</p>)
      }
    </>
  )

  return (
    <>
      <Table
        tableHeaders={tableHeaders}
        tableCells={tableContent}
      />
    </>
  )
}

export default TimesheetTable;
