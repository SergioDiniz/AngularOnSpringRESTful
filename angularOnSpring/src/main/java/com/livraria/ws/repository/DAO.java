package com.livraria.ws.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaQuery;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.cfg.Configuration;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public class DAO<T> {

//	private Class<T> classe;
//
//	private Session session;
//
//	public DAO(Class<T> classe) {
//		this.classe = classe;
//		this.session = new Configuration().configure().buildSessionFactory().openSession();
//	}
//	
//	@SuppressWarnings("unchecked")
//	public List<T> findAll() {
//		Criteria criteria = session.createCriteria(classe);
//		return criteria.list();
//	}
//
//	public T findOne(int id) {
//		return session.get(classe, id);
//	}
//
//	public void delete(T entity) {
//		session.beginTransaction();
//		session.delete(entity);
//		session.getTransaction().commit();
//	}
//
//	public T saveOrUpdate(T entity) {
//		session.beginTransaction();
//		T t = (T) session.merge(entity);
//		session.getTransaction().commit();
//		return t;
//	}

}
