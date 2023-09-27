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
