
// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/rishanthakumarrasarathinam/Documents/projects/play-angular2-cli/conf/routes
// @DATE:Sat Sep 09 17:08:52 IST 2017

package router

import play.core.routing._
import play.core.routing.HandlerInvokerFactory._
import play.core.j._

import play.api.mvc._

import _root_.controllers.Assets.Asset
import _root_.play.libs.F

class Routes(
  override val errorHandler: play.api.http.HttpErrorHandler, 
  // @LINE:8
  ServiceController_0: controllers.ServiceController,
  val prefix: String
) extends GeneratedRouter {

   @javax.inject.Inject()
   def this(errorHandler: play.api.http.HttpErrorHandler,
    // @LINE:8
    ServiceController_0: controllers.ServiceController
  ) = this(errorHandler, ServiceController_0, "/")

  import ReverseRouteContext.empty

  def withPrefix(prefix: String): Routes = {
    router.RoutesPrefix.setPrefix(prefix)
    new Routes(errorHandler, ServiceController_0, prefix)
  }

  private[this] val defaultPrefix: String = {
    if (this.prefix.endsWith("/")) "" else "/"
  }

  def documentation = List(
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """api/v1/hello-world""", """controllers.ServiceController.helloWorldService()"""),
    Nil
  ).foldLeft(List.empty[(String,String,String)]) { (s,e) => e.asInstanceOf[Any] match {
    case r @ (_,_,_) => s :+ r.asInstanceOf[(String,String,String)]
    case l => s ++ l.asInstanceOf[List[(String,String,String)]]
  }}


  // @LINE:8
  private[this] lazy val controllers_ServiceController_helloWorldService0_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("api/v1/hello-world")))
  )
  private[this] lazy val controllers_ServiceController_helloWorldService0_invoker = createInvoker(
    ServiceController_0.helloWorldService(),
    HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ServiceController",
      "helloWorldService",
      Nil,
      "GET",
      """""",
      this.prefix + """api/v1/hello-world"""
    )
  )


  def routes: PartialFunction[RequestHeader, Handler] = {
  
    // @LINE:8
    case controllers_ServiceController_helloWorldService0_route(params) =>
      call { 
        controllers_ServiceController_helloWorldService0_invoker.call(ServiceController_0.helloWorldService())
      }
  }
}
