import React, { useState } from 'react';
import { Task } from '../types';

import Modal from '../components/base/Modal';
import TimesheetForm from '../components/TimesheetForm';
import TimesheetTable from '../components/TimesheetTable';

import '../styles/base/table.css';

const TimesheetPage = () => {
  const getTaskList = (): Task[] => {
    let timeSheetData = localStorage.getItem('tasks')
    return timeSheetData ? JSON.parse(timeSheetData) : [];
  }

  const [taskList, setTaskList] = useState(getTaskList());
  const [isFormOpen, setFormState] = useState(false);
  const initialSelectedTasks: Task[] = [];
  const [selectedTasks, updateSelectedTasks] = useState(initialSelectedTasks);

  const openModal = () => {
    setFormState(true);
  }

  const closeModal = () => {
    setFormState(false);
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

  const addTask = (task: Task) => {
    console.log(task);
    setTaskList([...taskList, task]);
    localStorage.setItem('tasks', JSON.stringify([...taskList, task]));
  };

  const deleteTasks = () => {
    const newTaskList = [...taskList];
    selectedTasks.forEach(task => {
      const index = newTaskList.indexOf(task);
      newTaskList.splice(index, 1);
    })
    setTaskList(newTaskList);
    localStorage.setItem('tasks', JSON.stringify(newTaskList));
  }

  const modalHeader = (<h4 className="header">Add new task</h4>);
  const modalContent = (<TimesheetForm onFormSubmit={addTask} onCloseForm={closeModal}/>);

  return (
    <div className="container">
      <div className="timesheet-table--header flex">
        <div className="page-title">
          <span>Today's timesheet</span>
          <button type="button" className="button" onClick={openModal}>Log my hour</button>
        </div>

      </div>
      <TimesheetTable
        taskList={taskList}
        selectedTasks={selectedTasks}
        onDeleteTasks={deleteTasks}
        onSelectTask={toggleCheckbox}
      />
      <Modal
        isOpen={isFormOpen}
        onClose={closeModal}
        header={modalHeader}
        body={modalContent}
      />
    </div>
  );
}

export default TimesheetPage;
