package services;

import com.google.inject.Inject;
import enumeration.BatchStatus;
import enumeration.ItemStatus;
import factory.DaoFactory;
import models.*;

public class OrdersServiceImpl implements OrderService {

    @Inject DaoFactory daoFactory;

    public void Test() {
        Address address = new Address();
        address.setLine1("No 2");
        address.setLine2("2nd Street");
        address.setCity("Colombo");
        address.setCountry("Sri Lanka");

        daoFactory.getAddressDao().create(address);

        Customer customer = new Customer();
        customer.setBillingAddress(address);
        customer.setShippingAddress(address);
        customer.setEmail("rishanthakumarr@zone24x7.com");
        customer.setName("Rish");

        daoFactory.getCustomerDao().create(customer);

        Batch batch  = new Batch();
        batch.setStatus(BatchStatus.IN_PROGRESS);

        daoFactory.getBatchDao().create(batch);

        Order order = new Order();
        order.setBatch(batch);
        order.setCustomer(customer);

        daoFactory.getOrderDao().create(order);

        Item item = new Item();
        item.setName("Item_01");
        item.setStatus(ItemStatus.NOT_PICKED);
        item.setOrder(order);

        daoFactory.getItemDao().create(item);
    }
}
