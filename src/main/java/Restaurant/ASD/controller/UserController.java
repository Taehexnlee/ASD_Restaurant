package Restaurant.ASD.controller;

import Restaurant.ASD.exception.UserNotFoundException;
import Restaurant.ASD.model.User;
import Restaurant.ASD.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController 
{
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser)
    {
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUser()
    {
        return userRepository.findAll();

    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id)
    {
        return userRepository.findById(id)
        .orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id)
    {
        return userRepository.findById(id)
        .map(user -> {
            user.setName(newUser.getName());
            user.setUserName(newUser.getUserName());
            user.setEmail(newUser.getEmail());
            return userRepository.save(user);
        }).orElseThrow(()->new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id)
    {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id); 
        }
        userRepository.deleteById(id);
        return "User with id" + id + " has been deleted success.";
    }
}
