package dao;

import com.avaje.ebean.Model;
import models.Item;

public class ItemDaoImpl extends BaseDaoImpl<Item, Long> implements ItemDao {

    public ItemDaoImpl() {
        setFind(new Model.Finder<Long, Item>(Item.class));
    }

    @Override
    public Model.Find<Long, Item> getFinder() {
        return find;
    }
}
