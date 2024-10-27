package Restaurant.ASD.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import Restaurant.ASD.model.OrderItem;
import Restaurant.ASD.repository.OrderItemRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class OrderItemController {
    @Autowired
    private OrderItemRepository orderItemRepository;

    @GetMapping("/orderitems")
    List<OrderItem> getAllOrderItems() {
        return orderItemRepository.findAll();
    }
}
