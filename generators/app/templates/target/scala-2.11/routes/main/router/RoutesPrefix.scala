
// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/rishanthakumarrasarathinam/Documents/projects/play-angular2-cli/conf/routes
// @DATE:Sat Sep 09 17:08:52 IST 2017


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
