import { useState, ChangeEvent } from 'react';
import { v4 as generateId } from 'uuid';
import {Task} from '../types';

import '../styles/buttons.css'

const TimesheetForm = (props: {
  onFormSubmit: (value: Task) => void,
  onToggleForm: () => void,
  isOpen: boolean
}) => {
  const {
    onFormSubmit,
    onToggleForm,
    isOpen
  } = props;

  const today = new Date();

  const taskInitialState = {
    id: generateId(),
    date: today.toISOString(),
    key: '',
    start_time: '',
    end_time: '',
    description: '',
  }

  const [task, setTask] = useState(taskInitialState);

  const handleChange = (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [key]: event.target.value,
    })
  }

  const submitForm = () => {
    onFormSubmit(task);
    setTask(taskInitialState);
  }

  let formContent;

  if (isOpen) {
    formContent = (
      <>
        <div className="modal--wrapper">
          <div className="timesheet-form">
            <div className="modal--section modal--header heading">
              <h4>Add new task</h4>
              <button type="button" className="button transparent close-btn" onClick={onToggleForm}><span className="icon-close"></span></button>
            </div>
            <div className="modal--section modal--body">
              <div className="form--field inline">
                <label className="text-field">Key</label>
                <input type="text" onChange={handleChange('key')}/>
              </div>
              <div className="form--field inline">
                <label className="text-field">Start time</label>
                <input type="time" onChange={handleChange('start_time')}/>
              </div>
              <div className="form--field inline">
                <label className="text-field">End time</label>
                <input type="time" onChange={handleChange('end_time')}/>
              </div>
              <div className="form--field full">
                <label className="text-field">Description</label>
                <input type="text" onChange={handleChange('description')}/>
              </div>
            </div>
            <div className="modal--section modal--footer">
              <div className="action-buttons">
                <button type="button" className="button rounded" onClick={submitForm}>Add</button>
                <button type="button" className="button rounded" onClick={onToggleForm}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    formContent = (<></>)
  }

  return formContent;
};

export default TimesheetForm;
