module.exports = function(grunt) {

  var targetFolder = 'build/static';
  var sourceFolder = "source/static";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: [targetFolder]
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    },
    copy: {
      main: {
        files: [
          { 
            expand: true,
            cwd: sourceFolder,
            src: ['**/*'],
            dest: targetFolder
          },   // includes files in path 
        ]
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: sourceFolder+'/css/',
          src: ['*.scss'],
          dest: sourceFolder+'/css/',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: sourceFolder+'/css/',
        src: ['*.css', '!*.min.css'],
        dest: targetFolder+'/css/',
        ext: '.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-ftpush');
  grunt.loadNpmTasks('grunt-includes');

  grunt.registerTask('css', ['clean','csslint','cssmin','copy']);
  grunt.registerTask('js', ['clean','jshint','concat','watch','uglify','copy']);
  grunt.registerTask('html', ['clean','htmlmin','imagemin','includes','copy']);
  grunt.registerTask('folder', ['clean','ftpush','copy']);

  grunt.registerTask('default', ['clean','sass','cssmin','copy']);
  grunt.registerTask('dev', ['clean','jshint','watch','concat','uglify','compass','csslint','cssmin','htmlmin','imagemin','includes','copy','ftpush']);
  grunt.registerTask('staging', ['jshint', 'concat', 'uglify']);


















};