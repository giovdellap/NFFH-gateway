FROM openjdk:17

COPY target/apigateway-0.0.1-SNAPSHOT.jar apigateway-0.0.1-SNAPSHOT.jar 

ENTRYPOINT [ "java", "-jar", "apigateway-0.0.1-SNAPSHOT.jar" ]
