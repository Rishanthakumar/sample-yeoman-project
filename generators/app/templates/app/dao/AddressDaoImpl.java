package dao;

import com.avaje.ebean.Model;
import models.Address;

public class AddressDaoImpl extends BaseDaoImpl<Address, Long> implements AddressDao{

    public AddressDaoImpl() {
        setFind(new Model.Finder<Long, Address>(Address.class));
    }

    @Override
    public Model.Find<Long, Address> getFinder() {
        return find;
    }
}
