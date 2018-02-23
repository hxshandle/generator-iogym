'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the sublime ' + chalk.red('generator-iogym') + ' generator!'
      )
    )

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: '页面名称:',
        default: 'PageNew'
      },
      {
        type: 'confirm',
        name: 'isProui',
        message: '是否是Proui的页面?',
        default: true
      }
    ]

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props
    })
  }

  writing() {
    // 复制page
    this.fs.copyTpl(
      this.templatePath('proui/websysPage/page.js'),
      this.destinationPath(`${this.props.name}/${this.props.name}.js`),
      this.props
    )
    this.fs.copyTpl(
      this.templatePath('proui/websysPage/components/_page.vue'),
      this.destinationPath(`${this.props.name}/components/_${this.props.name}.js`),
      this.props
    )
    this.fs.copy(
      this.templatePath('proui/websysPage/vuex'),
      this.destinationPath(`${this.props.name}/vuex`)
    )
  }

  install() {
    // this.installDependencies()
  }
}
