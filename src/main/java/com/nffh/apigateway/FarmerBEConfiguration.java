package com.nffh.apigateway;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FarmerBEConfiguration {
    
    @Value("${farmerBE.url}")
    private String url;

    @Value("${farmerBE.port}")
    private String port;

    @Value("${genericFE.url}")
    private String genericFE;

    @Bean
    public RouteLocator farmerBELocator(RouteLocatorBuilder builder) {

        String farmerBEurl = this.url+":"+this.port;
        return builder.routes()
            // ADMIN
            .route("areas", r -> r.path("/areas")
                .uri(farmerBEurl))
            .route("stores", r -> r.path("/stores")
                .uri(farmerBEurl))
            .route("products", r -> r.path("/products")
                .uri(farmerBEurl))
            .route("getCart", r -> r.path("/cart")
                .uri(farmerBEurl))
            .route("updatecart", r -> r.path("/updatecart")
                .uri(farmerBEurl))
            .route("availability", r -> r.path("/availability")
                .uri(farmerBEurl))
            
                
        .build();
    }
}
