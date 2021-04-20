import React, { useEffect, useState } from 'react';
import { getProject } from '../../actions/projectActions';
import { useDispatch, useSelector } from 'react-redux';
import { createProject } from '../../actions/projectActions';
import classnames from 'classnames';

function UpdateProject(props) {
    const [state, setState] = useState({
        id: "",
        projectName: "",
        projectIdentifier: "",
        description: "",
        start_date: "",
        end_date: "",
        errors: {}
    })
    const projectList = useSelector(state => state.projectList);
    const { project } = projectList;
    const errors = useSelector(state => state.errors);

    const dispatch = useDispatch();
    const pid = props.match.params.id;

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const updateProject = {
            id: state.id,
            projectName: state.projectName,
            projectIdentifier: state.projectIdentifier,
            description: state.description,
            start_date: state.start_date,
            end_date: state.end_date
        }
        dispatch(createProject(updateProject, props.history));
    }
    useEffect(() => {
        setState({
            id: project.id || "",
            projectName: project.projectName || "",
            projectIdentifier: project.projectIdentifier || "",
            description: project.description || "",
            start_date: project.start_date || "",
            end_date: project.end_date || "",
        })
    }, [project])
    useEffect(() => {
        if (pid)
            dispatch(getProject(pid, props.history));
    }, [dispatch, pid, props.history])
    return (
        <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Update Project form</h5>
                        <hr />
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="projectName"
                                    value={state.projectName}
                                    className={classnames("form-control form-control-lg ", {
                                        "is-invalid": errors.projectName
                                    })}
                                    placeholder="Project Name"
                                    onChange={onChange}
                                />
                                {errors.projectName && (
                                    <div className="invalid-feedback">{errors.projectName}</div>
                                )}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    value={state.projectIdentifier}
                                    className={classnames("form-control form-control-lg ", {
                                        "is-invalid": errors.projectIdentifier
                                    })}
                                    placeholder="Unique Project ID"
                                    onChange={onChange}
                                    disabled
                                />
                                {errors.projectIdentifier && (
                                    <div className="invalid-feedback">{errors.projectIdentifier}</div>
                                )}
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="description"
                                    value={state.description}
                                    className={classnames("form-control form-control-lg ", {
                                        "is-invalid": errors.description
                                    })}
                                    placeholder="Project Description"
                                    onChange={onChange}
                                />
                                {errors.description && (
                                    <div className="invalid-feedback">{errors.description}</div>
                                )}
                            </div>
                            <h6>Start Date</h6>
                            <div className="form-group">
                                <input
                                    type="date"
                                    name="start_date"
                                    value={state.start_date}
                                    className="form-control form-control-lg"
                                    onChange={onChange}
                                />
                            </div>
                            <h6>Estimated End Date</h6>
                            <div className="form-group">
                                <input
                                    type="date"
                                    name="end_date"
                                    value={state.end_date}
                                    className="form-control form-control-lg"
                                    onChange={onChange}
                                />
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

export default UpdateProject
