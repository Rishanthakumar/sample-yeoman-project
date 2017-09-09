package controllers;

import factory.DaoFactory;
import factory.ServiceFactory;
import play.mvc.Result;

import javax.inject.Inject;


public class ServiceController extends BaseController {

    @Inject DaoFactory daoFactory;
    @Inject ServiceFactory serviceFactory;

    public Result Test() {
        //serviceFactory.getOrderService().Test();
        return success("Yeay sucess", daoFactory.getOrderDao().findAll());
    }

}
