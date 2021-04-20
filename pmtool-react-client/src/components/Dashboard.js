import React, { useEffect } from 'react'
import CreateProjectButton from './Project/CreateProjectButton'
import ProjectItem from './Project/ProjectItem';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../actions/projectActions'

export default function Dashboard() {
    const projectList = useSelector(state => state.projectList);
    const { loading, projects } = projectList;
    //console.log(projects)
    //console.log(loading)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch])
    return (
        <div>
            {loading ? (
                <div><h4>Loading...</h4></div>
            ) : (
                <div>
                    <div className="projects">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="display-4 text-center">Projects</h1>
                                    <br />
                                    <CreateProjectButton />
                                    <br />
                                    <hr />
                                    {
                                        projects.map((prj) => (
                                            <ProjectItem key={prj.id} projectitem={prj}></ProjectItem>
                                        ))
                                    }

                                </div >
                            </div >
                        </div >
                    </div >
                </div >
            )

            }


        </div>
    )
}
