package Restaurant.ASD.controller;

import Restaurant.ASD.exception.ProductNotFoundException;
import Restaurant.ASD.model.Product;
import Restaurant.ASD.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    Product getProductById(@PathVariable Long id)
    {
        return productRepository.findById(id)
            .orElseThrow(() -> new ProductNotFoundException(id));
    }

    @PutMapping("/product/{id}")
    Product updateProduct(@PathVariable Long id, @RequestBody Product updatedProduct) {
        return productRepository.findById(id)
            .map(product -> {
                product.setName(updatedProduct.getName());
                product.setDescription(updatedProduct.getDescription());
                product.setPrice(updatedProduct.getPrice());
                product.setCategory(updatedProduct.getCategory());
                return productRepository.save(product);
            }).orElseThrow(() -> new ProductNotFoundException(id));
    }

    @DeleteMapping("/product/{id}")
    String deleteProduct(@PathVariable Long id) {
        if (!productRepository.existsById(id)) {
            throw new ProductNotFoundException(id);
        }
        productRepository.deleteById(id);
        return "Product with id " + id + " has been deleted successfully.";
    }

    // Endpoint to toggle availability
    @PutMapping("/product/{id}/toggleAvailability")
    public ResponseEntity<Product> toggleProductAvailability(@PathVariable Long id) {
        Product product = productRepository.findById(id)
            .orElseThrow(() -> new ProductNotFoundException(id));
        product.setActive(!product.isActive());
        Product updatedProduct = productRepository.save(product);
        return ResponseEntity.ok(updatedProduct);
    }

    // Endpoint to get only active products for users
    @GetMapping("/products/active")
    public List<Product> getActiveProducts() {
        return productRepository.findByIsActiveTrue();
    }
}