package dao;

import com.avaje.ebean.Model;

import models.Batch;

public class BatchDaoImpl extends BaseDaoImpl<Batch, Long> implements BatchDao {

    public BatchDaoImpl() {
        setFind(new Model.Finder<Long, Batch>(Batch.class));
    }

    @Override
    public Model.Find<Long, Batch> getFinder() {
        return find;
    }
}
