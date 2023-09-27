package com.nffh.apigateway;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OrderBEConfiguration {
    
    @Value("${orderBE.url}")
    private String url;

    @Value("${orderBE.port}")
    private String port;

    @Value("${genericFE.url}")
    private String genericFE;

    @Bean
    public RouteLocator orderBELocator(RouteLocatorBuilder builder) {

        String orderBEurl = this.url+":"+this.port;
        return builder.routes()
            // ADMIN
            .route("getProfile", r -> r.path("/admin/client")
                .uri(orderBEurl))
        .build();
    }
}
