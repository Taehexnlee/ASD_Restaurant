package Restaurant.ASD.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import Restaurant.ASD.model.Order;
import Restaurant.ASD.repository.OrderRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/orders")
    List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}
