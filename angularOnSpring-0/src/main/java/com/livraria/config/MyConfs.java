package com.livraria.config;

import java.util.Properties;

import javax.sql.DataSource;

import org.springframework.boot.context.embedded.MimeMappings.Mapping;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;

@Configuration
public class MyConfs {


}

// <bean id="dummyDao" class="com.example.dao.DummyDao">
// <constructor-arg>
// <value type="java.lang.Class" >com.example.dao.SampleDto.class</value>
// </constructor-arg>
// </bean>