package Restaurant.ASD.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import Restaurant.ASD.model.AccessLog;
import Restaurant.ASD.repository.AccessLogRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class AccessLogController {
    
    @Autowired
    private AccessLogRepository accessLogRepository;

    @GetMapping("/accesslogs")
    List<AccessLog> getAllAccessLogs() {
        return accessLogRepository.findAll();
    }
}
