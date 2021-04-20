package com.santhosh.pmtool.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.santhosh.pmtool.domain.Backlog;
import com.santhosh.pmtool.domain.Project;
import com.santhosh.pmtool.exceptions.ProjectIdException;
import com.santhosh.pmtool.repositories.BacklogRepository;
import com.santhosh.pmtool.repositories.ProjectRepository;

@Service
public class ProjectService {
	
	@Autowired
	private ProjectRepository projectRepository;
	
	@Autowired
	private BacklogRepository backlogRepository;
	
	public Project saveOrUpdateProject(Project project) {
		try {
			project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
			if(project.getId()== null) {
				Backlog backlog = new Backlog();
				project.setBacklog(backlog);
				backlog.setProject(project);
				backlog.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
			}
			if(project.getId()!=null) {
				project.setBacklog(backlogRepository.findByProjectIdentifier(project.getProjectIdentifier()));
			}
			return projectRepository.save(project);
		}catch(Exception e) {
			throw new ProjectIdException("Project ID "+project.getProjectIdentifier()+" already exists");
		}
		
	}
	
	public Project findProjectByIdentifier(String projectId) {
		Project project =  projectRepository.findByProjectIdentifier(projectId.toUpperCase());
		if(project==null) {
			throw new ProjectIdException("Project ID "+projectId.toUpperCase()+" does not exist");
		}
		return project;
	}
	
	public Iterable<Project> findAllProjects(){
		return projectRepository.findAll();
	}
	
	public void deleteProjectByIdentifier(String projectId) {
		Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
		if(project==null) {
			throw new ProjectIdException("Project ID "+projectId.toUpperCase()+" does not exist");
		}
		projectRepository.delete(project);
	}

}
