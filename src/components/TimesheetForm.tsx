import React, { useState, ChangeEvent } from 'react';
import { v4 as generateId } from 'uuid';
import {Task} from '../types';

import '../styles/base/buttons.css'

const TimesheetForm = (props: {
  onFormSubmit: (value: Task) => void,
  onCloseForm: () => void,
}) => {
  const {
    onFormSubmit,
    onCloseForm
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


  return (
    <>
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

      <div className="action-buttons">
        <button type="button" className="button rounded" onClick={submitForm}>Add</button>
        <button type="button" className="button rounded" onClick={onCloseForm}>Cancel</button>
      </div>
    </>
  );
};

export default TimesheetForm;
