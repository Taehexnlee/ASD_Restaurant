package Restaurant.ASD.repository;

import Restaurant.ASD.model.AccessLog;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AccessLogRepository extends JpaRepository<AccessLog,Long> {
}
