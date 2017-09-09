package factory;

import dao.*;

import javax.inject.Inject;

public class DaoFactoryImpl implements DaoFactory {

    @Inject private OrderDao orderDao;

    @Inject private ItemDao itemDao;

    @Inject private CustomerDao customerDao;

    @Inject private BatchDao batchDao;

    @Inject private AddressDao addressDao;

    @Override
    public OrderDao getOrderDao() {
        return orderDao;
    }

    @Override
    public ItemDao getItemDao() {
        return itemDao;
    }

    @Override
    public CustomerDao getCustomerDao() {
        return customerDao;
    }

    @Override
    public BatchDao getBatchDao() {
        return batchDao;
    }

    @Override
    public AddressDao getAddressDao() {
        return addressDao;
    }
}
