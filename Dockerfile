<<<<<<< HEAD
FROM openjdk:17

COPY target/apigateway-0.0.1-SNAPSHOT.jar apigateway-0.0.1-SNAPSHOT.jar 

ENTRYPOINT [ "java", "-jar", "apigateway-0.0.1-SNAPSHOT.jar" ]
=======
FR

FROM MAVEN:3.6.3 AS maven

WORKDIR /opt/app
 
COPY mvnw mvnw.cmd pom.xml ./

COPY ./src ./src
RUN ./mvnw clean package


 
FROM eclipse-temurin:17-jre-jammy as builder
WORKDIR /opt/app
EXPOSE 8080
COPY --from=builder /opt/app/target/*.jar /opt/app/*.jar
ENTRYPOINT ["java", "-jar", "/opt/app/*.jar" ]
>>>>>>> ecc2fda3f0cdcd6fcd4883224fb55ac40f5cca5e
