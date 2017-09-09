import java.net.InetSocketAddress

import play.sbt.PlayRunHook
import sbt._

/** Watch task
  *
  * This object defines watch task which can be registered to execute with sbt run command
  *
  *
  */
object WatchTask {

  /** Create a play run hook with a base directory and watch command to execute
    *
    * @param uiDirectory UI directory
    * @param watchCommand watch command
    * @return constructed run hook
    */
  def apply(uiDirectory: File, watchCommand: String): PlayRunHook = {
    object  WatchTaskProcess extends PlayRunHook {

      var watchProcess: Option[Process] = None

      override def afterStarted(addr: InetSocketAddress): Unit = {
        watchProcess = Some(Process(watchCommand, uiDirectory).run)
      }

      override def afterStopped(): Unit = {
        watchProcess.foreach(_.destroy())
        watchProcess = None
      }
    }
    WatchTaskProcess
  }
}

