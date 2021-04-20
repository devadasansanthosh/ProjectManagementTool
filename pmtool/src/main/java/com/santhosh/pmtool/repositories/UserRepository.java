package com.santhosh.pmtool.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.santhosh.pmtool.domain.User;

@Repository
public interface UserRepository extends CrudRepository<User,Long>{

}
