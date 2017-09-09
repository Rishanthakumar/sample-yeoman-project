var Generator = require('yeoman-generator');

module.exports = class extends Generator {
// The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // This makes `appname` a required argument.
    // this.argument('appname', { type: String, required: true });

    // // And you can then access it later; e.g.
    // this.log(this.options.appname);

    // // Next, add your custom code
    // this.option('babel'); // This method adds support for a `--babel` flag

    // this.helperMethod = function () {
    //     console.log('won\'t be called automatically');
    //   };
  }

   prompting() {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }, {
      type    : 'confirm',
      name    : 'cool',
      message : 'Would you like to enable the Cool feature?'
    },{
      type    : 'input',
  	  name    : 'username',
  	  message : 'What\'s your GitHub username',
  	  store   : true
	}]).then((answers) => {
      this.log('app name', answers.name);
      this.log('cool feature', answers.cool);
    });
  }

  //  installingLodash() {
  //   this.npmInstall(['lodash'], { 'save-dev': true });
  // }

  writing() {
    this.fs.copy(
      this.templatePath('*'),
      this.destinationPath(),
      { title: 'Templating with Yeoman' }
    );

    this.fs.copy(
      this.templatePath('*/*'),
      this.destinationPath(),
      { title: 'Templating with Yeoman' }
    );
  }

   install() {
   		process.chdir("ui/")
   		this.spawnCommandSync('npm', ['i']);
   		
   		process.chdir("./../");
    	this.spawnCommandSync('sbt', ['run']);
   	
   		
	}

  // paths() {
  //   this.destinationRoot();
  //   // returns '~/projects'

  //   this.destinationPath('index.js');
  //   // returns '~/projects/index.js'

  //    this.sourceRoot();
  //   // returns './templates'

  //   this.templatePath('index.js');
  //   // returns './templates/index.js'
  // }


};