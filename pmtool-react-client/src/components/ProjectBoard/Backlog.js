import React from 'react'
import ProjectTask from './ProjectTasks/ProjectTask';

const Backlog = (props) => {
    const { project_tasks_prop } = props;

    let todoItems = [];
    let inProgressItems = [];
    let doneItems = [];

    project_tasks_prop.map(project_task => {

        if (project_task.status === "TO_DO") {
            todoItems.push(<ProjectTask key={project_task.id} project_task={project_task} />);
        }
        if (project_task.status === "IN_PROGRESS") {
            inProgressItems.push(<ProjectTask key={project_task.id} project_task={project_task} />);
        }
        if (project_task.status === "DONE") {
            doneItems.push(<ProjectTask key={project_task.id} project_task={project_task} />);
        }
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-secondary text-white">
                            <h3>TO DO</h3>
                        </div>
                    </div>
                    {todoItems}
                </div>

                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-primary text-white">
                            <h3>In Progress</h3>
                        </div>
                    </div>
                    {inProgressItems}
                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-success text-white">
                            <h3>Done</h3>
                        </div>
                    </div>
                    {doneItems}
                </div>
            </div>
        </div>
    )
}

export default Backlog
