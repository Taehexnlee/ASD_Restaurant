package Restaurant.ASD.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import Restaurant.ASD.model.User;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByEmail(String email);
}