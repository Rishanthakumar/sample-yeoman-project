package dao;

import com.avaje.ebean.Model;

import java.util.List;

public interface BaseDao<T, K> {

    T create(T entity);

    T update(T entity);

    T delete(T entity);

    T findById(K id);

    List<T> findAll();

    Model.Find<K,T> getFinder();
}
