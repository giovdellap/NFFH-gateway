package com.nffh.apigateway;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ClientBEConfiguration {
    
    @Value("${clientBE.url}")
    private String url;

    @Value("${clientBE.port}")
    private String port;

    @Value("${genericFE.url}")
    private String genericFE;

    @Bean
    public RouteLocator clientBELocator(RouteLocatorBuilder builder) {

        String clientBEurl = this.url;
        return builder.routes()
            // ADMIN
            .route("getProfile", r -> r.path("/admin/client")
                .uri(clientBEurl))
            .route("search", r -> r.path("/admin/client")
                .uri(clientBEurl))
            .route("search", r -> r.path("/customer")
                .uri(clientBEurl))
            
        .build();
    }
}
