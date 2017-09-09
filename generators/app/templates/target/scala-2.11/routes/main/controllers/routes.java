
// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/rishanthakumarrasarathinam/Documents/projects/play-angular2-cli/conf/routes
// @DATE:Sat Sep 09 17:08:52 IST 2017

package controllers;

import router.RoutesPrefix;

public class routes {
  
  public static final controllers.ReverseServiceController ServiceController = new controllers.ReverseServiceController(RoutesPrefix.byNamePrefix());

  public static class javascript {
    
    public static final controllers.javascript.ReverseServiceController ServiceController = new controllers.javascript.ReverseServiceController(RoutesPrefix.byNamePrefix());
  }

}
