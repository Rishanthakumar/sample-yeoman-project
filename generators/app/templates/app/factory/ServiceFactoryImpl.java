package factory;

import services.OrderService;

import javax.inject.Inject;

public class ServiceFactoryImpl implements ServiceFactory {

    @Inject OrderService orderService;

    @Override
    public OrderService getOrderService() {
        return orderService;
    }
}
