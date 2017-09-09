package dao;

import com.avaje.ebean.Model;
import models.Order;

public class OrderDaoImpl extends BaseDaoImpl<Order, Long>  implements OrderDao {

    public OrderDaoImpl() {
        setFind(new Model.Finder<Long, Order>(Order.class));
    }

    @Override
    public Model.Find<Long, Order> getFinder() {
        return find;
    }
}
