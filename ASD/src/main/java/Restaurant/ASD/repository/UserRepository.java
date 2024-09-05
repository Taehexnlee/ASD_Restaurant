package Restaurant.ASD.repository;

import Restaurant.ASD.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

}
