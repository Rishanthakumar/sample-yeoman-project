
// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/rishanthakumarrasarathinam/Documents/projects/play-angular2-cli/conf/routes
// @DATE:Sat Sep 09 17:08:52 IST 2017

import play.api.routing.JavaScriptReverseRoute
import play.api.mvc.{ QueryStringBindable, PathBindable, Call, JavascriptLiteral }
import play.core.routing.{ HandlerDef, ReverseRouteContext, queryString, dynamicString }


import _root_.controllers.Assets.Asset
import _root_.play.libs.F

// @LINE:8
package controllers.javascript {
  import ReverseRouteContext.empty

  // @LINE:8
  class ReverseServiceController(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:8
    def helloWorldService: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ServiceController.helloWorldService",
      """
        function() {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "api/v1/hello-world"})
        }
      """
    )
  
  }


}
