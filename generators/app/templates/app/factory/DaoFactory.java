package factory;

import dao.*;

public interface DaoFactory {

    OrderDao getOrderDao();

    ItemDao getItemDao();

    CustomerDao getCustomerDao();

    BatchDao getBatchDao();

    AddressDao getAddressDao();
}
