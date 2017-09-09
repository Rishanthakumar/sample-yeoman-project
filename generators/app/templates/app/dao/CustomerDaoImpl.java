package dao;

import com.avaje.ebean.Model;
import models.Customer;

public class CustomerDaoImpl extends BaseDaoImpl<Customer, Long> implements CustomerDao  {

    public CustomerDaoImpl() {
        setFind(new Model.Finder<Long, Customer>(Customer.class));
    }

    @Override
    public Model.Find<Long, Customer> getFinder() {
        return find;
    }
}
