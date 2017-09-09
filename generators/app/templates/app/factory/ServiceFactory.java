package factory;

import services.OrderService;

public interface ServiceFactory {

    OrderService getOrderService();
}
