package com.sakshin.app.demo.Controller;


import com.sakshin.app.demo.Models.User;
import com.sakshin.app.demo.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class ApiControllers {

    @Autowired
    private UserRepo userRepo;


    @GetMapping(value ="/")
    public String getPage(){
        return "Welcome";
    }
    //Get request -- read

    @GetMapping(value = "/users")
//    @Cacheable(value = "User",key ="#id" )
    public List<User> getUsers(){
        System.out.println("Getting Data from DB");
        return userRepo.findAll();
    }
    // Post request -- Go to body, raw and json and send req to find changes
    @PostMapping(value = "/save")
    public String saveUser(@RequestBody User user) {
        userRepo.save(user);
        return "Saved!!!";
    }


    //Update User with id value
    @PutMapping(value = "update/{id}")
//    @CachePut(value = "users", key = "id")
    public String updateUser(@PathVariable long id,@RequestBody User user){
        User updatedUser = userRepo.findById(id).get();
        updatedUser.setFirstName(user.getFirstName());
        updatedUser.setLastName(user.getLastName());
        updatedUser.setOccupation(user.getOccupation());
        updatedUser.setAge(user.getAge());
        userRepo.save(updatedUser);
        System.out.println("Called from DB");
        return "Updated!!";
    }

    //Delete User with id
    @DeleteMapping(value = "/delete/{id}")
//    @CacheEvict(value ="users", allEntries = true )
    public String deleteUser(@PathVariable long id){
        User deleteUser = userRepo.findById(id).get();
        userRepo.delete(deleteUser);
        return "User with id: "+id+" has been deleted";
    }

}
