package modules;

import com.google.inject.AbstractModule;
import dao.*;
import factory.DaoFactory;
import factory.DaoFactoryImpl;

public class DaoModule extends AbstractModule{

    @Override
    protected void configure() {
        bind(DaoFactory.class).to(DaoFactoryImpl.class);
        bind(OrderDao.class).to(OrderDaoImpl.class);
        bind(ItemDao.class).to(ItemDaoImpl.class);
        bind(CustomerDao.class).to(CustomerDaoImpl.class);
        bind(BatchDao.class).to(BatchDaoImpl.class);
        bind(AddressDao.class).to(AddressDaoImpl.class);
    }
}
