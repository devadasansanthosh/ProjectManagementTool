import React from 'react';
import { Link } from 'react-router-dom';
import { deleteProject } from '../../actions/projectActions';
import { useDispatch } from 'react-redux';

export default function ProjectItem(props) {
    const { projectitem } = props;
    const dispatch = useDispatch();
    //console.log(props)
    const onDeleteClick = id => {
        dispatch(deleteProject(id));
    }
    return (
        <div className="container">
            <div className="card card-body bg-light mb-3">
                <div className="row">
                    <div className="col-2">
                        <span className="mx-auto">{projectitem.projectIdentifier}</span>
                    </div>
                    <div className="col-lg-6 col-md-4 col-8">
                        <h3>{projectitem.projectName}</h3>
                        <p>{projectitem.description}</p>
                    </div>
                    <div className="col-md-4 d-none d-lg-block">
                        <ul className="list-group">
                            <Link to={`/projectBoard/${projectitem.projectIdentifier}`}>
                                <li className="list-group-item board">
                                    <i className="fa fa-flag-checkered pr-1"> Project Board </i>
                                </li>
                            </Link>
                            <Link to={`/updateProject/${projectitem.projectIdentifier}`}>
                                <li className="list-group-item update">
                                    <i className="fa fa-edit pr-1"> Update Project Info</i>
                                </li>
                            </Link>

                            <li className="list-group-item delete" onClick={() => onDeleteClick(projectitem.projectIdentifier)}>
                                <i className="fa fa-minus-circle pr-1"> Delete Project</i>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}


