import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { addProjectTask } from '../../../actions/backlogActions';
import { useDispatch, useSelector } from 'react-redux';

const AddProjectTask = (props) => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors);
    const { id } = props.match.params;

    const [state, setState] = useState({
        summary: "",
        acceptanceCriteria: "",
        status: "",
        priority: 0,
        dueDate: "",
        projectIdentifier: id
    })

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            summary: state.summary,
            acceptanceCriteria: state.acceptanceCriteria,
            status: state.status,
            priority: state.priority,
            dueDate: state.dueDate,
        }
        //console.log(newTask)
        dispatch(addProjectTask(state.projectIdentifier, newTask, props.history));
    }

    return (
        <div className="add-PBI">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Link to={`/projectBoard/${id}`} className="btn btn-light">
                            Back to Project Board
              </Link>
                        <h4 className="display-4 text-center">Add Project Task</h4>
                        <p className="lead text-center">Project Name + Project Code</p>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className={classnames("form-control form-control-lg ", {
                                        "is-invalid": errors.summary
                                    })}
                                    name="summary"
                                    placeholder="Project Task summary"
                                    value={state.summary}
                                    onChange={onChange}
                                />
                                {errors.summary && (
                                    <div className="invalid-feedback">{errors.summary}</div>
                                )}
                            </div>
                            <div className="form-group">
                                <textarea
                                    className="form-control form-control-lg"
                                    placeholder="Acceptance Criteria"
                                    name="acceptanceCriteria"
                                    value={state.acceptanceCriteria}
                                    onChange={onChange}
                                />
                            </div>
                            <h6>Due Date</h6>
                            <div className="form-group">
                                <input
                                    type="date"
                                    className="form-control form-control-lg"
                                    name="dueDate"
                                    value={state.dueDate}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <select
                                    className="form-control form-control-lg"
                                    name="priority"
                                    value={state.priority}
                                    onChange={onChange}
                                >
                                    <option value={0}>Select Priority</option>
                                    <option value={1}>High</option>
                                    <option value={2}>Medium</option>
                                    <option value={3}>Low</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <select
                                    className="form-control form-control-lg"
                                    name="status"
                                    value={state.status}
                                    onChange={onChange}
                                >
                                    <option value="">Select Status</option>
                                    <option value="TO_DO">TO DO</option>
                                    <option value="IN_PROGRESS">IN PROGRESS</option>
                                    <option value="DONE">DONE</option>
                                </select>
                            </div>

                            <input
                                type="submit"
                                className="btn btn-primary btn-block mt-4"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProjectTask
