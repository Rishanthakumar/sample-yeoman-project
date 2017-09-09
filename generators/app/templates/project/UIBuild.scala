import sbt.inc.Analysis
import sbt.{SettingKey, TaskKey}

/** UI build utility object
  *
  */
object UIBuild {

  val uiDirectory: SettingKey[String] = SettingKey[String]("ui-directory", "path of the UI directory")
  val uiCleanCommand: SettingKey[String] = SettingKey[String]("ui-clean-command", "command to run when cleaning the ui distribution build")
  val uiDistCommand: SettingKey[String] = SettingKey[String]("ui-dist-command", "command to run when running ui distribution build")

  val uiClean: TaskKey[Unit] = TaskKey[Unit]("ui-clean", "clean UI distribution build")
  val uiDist: TaskKey[Analysis] = TaskKey[Analysis]("ui-dist", "create UI distribution")
}