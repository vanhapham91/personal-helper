const timesheetForm = () => {
  return (
    <>
      <div className="modal--wrapper">
        <div className="timesheet-form">
          <div className="modal--header header">
            Add new task
          </div>
          <div className="modal--body">
            <div className="form--field inline">
              <label className="text-field">Key</label>
              <input type="text"/>
            </div>
            <div className="form--field inline">
              <label className="text-field">Start time</label>
              <input type="time" />
            </div>
            <div className="form--field inline">
              <label className="text-field">End time</label>
              <input type="time"/>
            </div>
            <div className="form--field full">
              <label className="text-field">Description</label>
              <input type="text"/>
            </div>
          </div>
          <div className="modal--footer">
            <button type="button">Add</button>
            <button type="button">Cancel</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default timesheetForm;
