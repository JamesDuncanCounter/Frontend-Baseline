module.exports = function(grunt) {
    
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Boot up a server to serve the your  project
    express: {
      prod: {
        options: {
          server: 'express-server.js',
          bases: ['./'],
          port: 3001,
          hostname: "*",
          livereload: true,
          keepalive: false
        }
      }
    },

    //Bundle all the JS together
    concat: {
      js: {
        files: {
          'dev/javascript/bundle.js': ['node_modules/jquery/dist/jquery.js', 'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js', 'dev/app/**/*.js']
        }
      }
    },
    
    //Copy fonts from bootstrap to dev and then to dist
    copy: {
      dev_bootstrap_fonts: {
        files: [{
          expand: true,
          cwd: 'node_modules/bootstrap-sass/assets/fonts/bootstrap/',
          src: ['**/*'],
          dest: 'dev/fonts/'
        }]
      },
      dist_fonts: {
        files: [{
          expand: true,
          cwd: 'dev/fonts/',
          src: ['**/*'],
          dest: 'dist/fonts/'
        }]
      },
    },

    //Compress the JS file and output to dist
    uglify: {
      options: {
        manage: 'false',
      },
      my_targets: {
        files: {
          'dist/js/main.min.js' : ['dev/javascript/bundle.js']
        }
      }
    },

    //Compile all the Sass files and compress and output to dist
    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
        },
        files: {
          'dist/stylesheets/style.css' : 'dev/stylesheets/style.scss'
        }
      }
    },

    //Setup the watch tasks
    watch: {
        options: {
          livereload: true,
        },
        files: ['./dev/**/*.scss', './dev/app/**/*.js', './dev/app/**/*.html', './dev/fonts/**/*',],
        tasks: ['sass', 'concat', 'uglify']
    }
  });

  //Load the grunt tasks in
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-express');

  //Register the default grunt task
  grunt.registerTask('default',[
    'express', 
    'concat', 
    'sass',
    'copy',
    'uglify', 
    'watch'
  ]);
  

}