package com.sakshin.app.demo.Repo;

import com.sakshin.app.demo.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
}
