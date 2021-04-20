package com.santhosh.pmtool.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.santhosh.pmtool.domain.Project;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long>{
	
	Project findByProjectIdentifier(String projectId);

}
