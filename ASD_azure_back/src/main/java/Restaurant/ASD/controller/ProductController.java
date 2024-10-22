package Restaurant.ASD.controller;


import Restaurant.ASD.exception.ProductNotFoundException;
import Restaurant.ASD.model.Product;
import Restaurant.ASD.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController  
{
    @Autowired
    private ProductRepository productRepository;

    @PostMapping("/product")
    Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @GetMapping("/products")
    List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/product/{id}")
    Product getUserById(@PathVariable Long id)
    {
        return productRepository.findById(id)
        .orElseThrow(()->new ProductNotFoundException(id));
    }

    @PutMapping("/product/{id}")
    Product updateProduct(@PathVariable Long id, @RequestBody Product updatedProduct)
    {
        return productRepository.findById(id)
        .map(product -> {
            updatedProduct.setName(updatedProduct.getName());
            updatedProduct.setDescription(updatedProduct.getDescription());
            updatedProduct.setPrice(updatedProduct.getPrice());
            return productRepository.save(updatedProduct);
        }).orElseThrow(()->new ProductNotFoundException(id));
    }

    @DeleteMapping("/product/{id}")
    String deleteUserdeleteProduct(@PathVariable Long id)
    {
        if (!productRepository.existsById(id)) {
            throw new ProductNotFoundException(id); 
        }
        productRepository.deleteById(id);
        return "User with id" + id + " has been deleted success.";
    }
}
