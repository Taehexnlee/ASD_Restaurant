package Restaurant.ASD;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import com.fasterxml.jackson.databind.ObjectMapper;

import Restaurant.ASD.model.Product;

@SpringBootTest
@AutoConfigureMockMvc
public class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void U127_AddNewProduct() throws Exception {
        Product product = new Product("New Product", "Product Description", 10.99, "Main Courses");

        mockMvc.perform(post("/products")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(product)))
                .andExpect(status().isOk());
    }

    @Test
        public void U128_UpdateProduct() throws Exception {
            Product updatedProduct = new Product("Updated Product", "Updated Description", 15.99, "Main Courses");

            mockMvc.perform(put("/products/1")
                    .contentType("application/json")
                    .content(objectMapper.writeValueAsString(updatedProduct)))
                    .andExpect(status().isOk());
        }
    @Test
    public void U129_DeleteProduct() throws Exception {
        mockMvc.perform(delete("/products/1"))
                .andExpect(status().isOk());
        }
    
}
