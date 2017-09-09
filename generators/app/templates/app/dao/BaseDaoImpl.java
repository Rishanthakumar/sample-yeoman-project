package dao;

import com.avaje.ebean.Model;

import java.util.List;

public abstract class BaseDaoImpl<T, K> implements BaseDao<T, K> {

    Model.Finder<K, T> find = null;

    public final void setFind(Model.Finder<K, T> find) {
        this.find = find;
    }

    @Override
    public T create(T entity) {
        Model model = (Model) entity;
        model.save();
        return entity;
    }

    @Override
    public T update(T entity) {
        Model model = (Model) entity;
        model.update();
        return  entity;
    }

    @Override
    public T delete(T entity) {
        Model model = (Model) entity;
        model.delete();
        return  entity;
    }

    @Override
    public T findById(K id) {
        return find.byId(id);
    }

    @Override
    public List<T> findAll(){
        return find.all();
    }
}
