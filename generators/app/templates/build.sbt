import UIBuild._

name := "packing_robot"

version := "1.0-SNAPSHOT"
//lazy val root = (project in file(".")).enablePlugins(PlayJava, SbtEbean)
//lazy val root = (project in file(".")).enablePlugins(PlayScala)
lazy val myProject = (project in file(".")).enablePlugins(PlayJava, PlayEbean)
scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws,
  javaWs,
  filters,
  "org.scalatestplus.play" %% "scalatestplus-play" % "1.5.1" % Test,
  "com.h2database" % "h2" % "1.4.192",
  "mysql" % "mysql-connector-java" % "5.1.18"
)

// this is the UI folder name
uiDirectory := "ui"

// this will be executed with clean sbt command
uiCleanCommand := "npm run clean:dist"

// this will get executed with compile sbt command
uiDistCommand := "npm run build"

// this will get executed with run comman
val uiWatchCommand = "npm run server"
enablePlugins(JavaServerAppPackaging)

// region ui build
import UIBuild._
import sbt._
import sbt.inc.Analysis


unmanagedResourceDirectories in Assets += baseDirectory.value / "ui/dist"


uiClean := {
  println("cleaning ui")
  val uiDirectoryValue: File = new File(baseDirectory.value, uiDirectory.value)
  Process(uiCleanCommand.value, uiDirectoryValue).run
}

uiDist := {
  println("creating ui distribution")
  val uiDirectoryValue: File = new File(baseDirectory.value, uiDirectory.value)
  val success = Process(uiDistCommand.value, uiDirectoryValue).run.exitValue()
  if (success==0) {
    Analysis.Empty
  } else {
    Analysis.Empty
  }
}


clean <<= clean dependsOn uiClean

dist <<= dist dependsOn uiDist

stage <<= stage dependsOn uiDist
// endregion

// region watch task
import UIBuild.uiDirectory

PlayKeys.playRunHooks += WatchTask(new File(baseDirectory.value, uiDirectory.value), uiWatchCommand)
// endregion


//To Inject
routesGenerator := InjectedRoutesGenerator