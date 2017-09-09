package modules;

import com.google.inject.AbstractModule;
import factory.ServiceFactory;
import factory.ServiceFactoryImpl;
import services.OrderService;
import services.OrdersServiceImpl;

public class ServiceModule extends AbstractModule {

    @Override
    protected void configure() {
        bind(ServiceFactory.class).to(ServiceFactoryImpl.class);
        bind(OrderService.class).to(OrdersServiceImpl.class);
    }
}
