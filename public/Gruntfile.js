module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

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
          'dev/javascript/bundle.js':
            [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/tether/dist/js/tether.js',
            'node_modules/bootstrap/dist/js/bootstrap.js',
            'dev/app/**/*.js'
            ]
        }
      }
    },

    //Build a minified version of modernizr
    modernizr: {
      dist: {
        "parseFiles": true,
        "customTests": [],
        "devFile": "dev/javascript/modernizr-custom.js",
        "dest": "dist/js/modernizr.js",
        "tests": [
          "cssgradients",
          "borderradius",
          "fontface",
          "flexbox"
        ],

        "options": [
          "setClasses"
        ],

        "uglify": true
      }
    },

    //Copy fonts from bootstrap to dev and then to dist
    copy: {
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
      files:
        [
          './dev/**/*.scss',
          './dev/app/**/*.js',
          './dev/app/**/*.html',
          './dev/fonts/**/*'
        ],

      tasks:
        [
        'sass',
        'concat',
        'uglify'
        ]
    }
  });

  //Register the default grunt task
  grunt.registerTask('default',[
    'express',
    'modernizr',
    'concat',
    'sass',
    'copy',
    'uglify',
    'watch'
  ]);

}