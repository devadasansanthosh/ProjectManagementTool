import React, { useState } from 'react';
import { createProject } from '../../actions/projectActions'
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';

const AddProject = (props) => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors);
    const [state, setState] = useState({
        projectName: "",
        projectIdentifier: "",
        description: "",
        start_date: "",
        end_date: "",

    })
    /*const [projectName, setProjectName] = useState("");
    const [projectIdentifier, setprojectIdentifier] = useState("");
    const [description, setDescription] = useState("");
    const [start_date, setStart_date] = useState("");
    const [end_date, setEnd_date] = useState("");*/

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
        /*setprojectIdentifier(e.target.value);
        setDescription(e.target.value);
        setStart_date(e.target.value);
        setEnd_date(e.target.value);*/
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newProject = {
            projectName: state.projectName,
            projectIdentifier: state.projectIdentifier,
            description: state.description,
            start_date: state.start_date,
            end_date: state.end_date
        }
        dispatch(createProject(newProject, props.history));
    }
    return (
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create Project form</h5>
                        <hr />
                        <form onSubmit={onSubmit}>
                            {/* Using bootstrap is-invalid and classnames package, which will dispay in red the field */}
                            <div className="form-group">
                                <input type="text" className={classnames("form-control form-control-lg ", {
                                    "is-invalid": errors.projectName
                                })}
                                    placeholder="Project Name"
                                    name="projectName" value={state.projectName}
                                    onChange={onChange} />
                                {errors.projectName && (
                                    <div className="invalid-feedback">{errors.projectName}</div>
                                )}
                            </div>
                            <div className="form-group">
                                <input type="text" className={classnames("form-control form-control-lg ", {
                                    "is-invalid": errors.projectIdentifier
                                })}
                                    placeholder="Unique Project ID"
                                    name="projectIdentifier" value={state.projectIdentifier}
                                    onChange={onChange} />
                                {errors.projectIdentifier && (
                                    <div className="invalid-feedback">{errors.projectIdentifier}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <textarea className={classnames("form-control form-control-lg ", {
                                    "is-invalid": errors.description
                                })}
                                    placeholder="Project Description"
                                    name="description" value={state.description}
                                    onChange={onChange}></textarea>
                                {errors.description && (
                                    <div className="invalid-feedback">{errors.description}</div>
                                )}
                            </div>
                            <h6>Start Date</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg" name="start_date" value={state.start_date}
                                    onChange={onChange} />
                            </div>
                            <h6>Estimated End Date</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg" name="end_date" value={state.end_date}
                                    onChange={onChange} />
                            </div>

                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
/*AddProject.propTypes = {
    createProject: PropTypes.func.isRequired
}*/
export default AddProject
