module.exports = function(grunt){
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),

    watch:{
      options: {
        livereload: true,
        spawn: false
      },
      // files:['site/**'],
      files:['*'],
      tasks:['sass']
      // spawn: false

    },

     sass: {
    dist: {
      files: {
        'style.css': 'style.scss'
      }
    }
  },
  connect: {
    server: {
      options: {
        port: 8000,
        // base: './site',
        base: '.',
        hostname: 'localhost',
        protocol: 'http',
        livereload: true,
        app: 'Firefox',
        // open: 'true'
      }
    }
  },

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('server',[  'connect', 'watch']);
  };
