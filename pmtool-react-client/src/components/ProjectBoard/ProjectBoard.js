import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Backlog from './Backlog';
import { useDispatch, useSelector } from 'react-redux';
import { getBacklog } from '../../actions/backlogActions';

function ProjectBoard(props) {
    const { id } = props.match.params;
    const dispatch = useDispatch();
    const backlog = useSelector(state => state.backlog);
    const { project_tasks } = backlog;
    const errors = useSelector(state => state.errors);

    useEffect(() => {
        dispatch(getBacklog(id));
    }, [dispatch, id])

    let BoardContent;

    const boardAlgorithm = (errors, project_tasks) => {
        if (project_tasks.length < 1) {
            if (errors.projectNotFound) {
                return (
                    <div className="alert alert-danger text-center" role="alert">
                        {errors.projectNotFound}
                    </div>
                );
            } else {
                return (
                    <div className="alert alert-info text-center" role="alert">
                        No Project Tasks on this board
                    </div>
                );
            }
        } else {
            return <Backlog project_tasks_prop={project_tasks} />;
        }
    };

    BoardContent = boardAlgorithm(errors, project_tasks);

    return (
        <div className="container">
            <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
                <i className="fas fa-plus-circle"> Create Project Task</i>
            </Link>
            <br />
            <hr />
            {BoardContent}

        </div>
    )
}

export default ProjectBoard
