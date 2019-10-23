module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8888,
                    base: '.',
                    livereload: true,
                    open: {
                        target: 'http://localhost:8888',
                      }
                    }
                }
            },
        watch: {
          css: {
            files: 'css/*.scss',
            tasks: ['sass']
          },
          reload: {
            options: {
                livereload: true
            },
            files: [
                "*.html",
                "css/*.css",
                "js/*.js",
                "images/*.*"
              ]
          }
        },
        sass: {
            dist: {
                src: 'css/styles.scss',
                dest: 'css/styles.css'
            }
        },
        copy: {
          main: {
            files: [
              { expand: true, cwd: 'node_modules/bootstrap/dist/css', src: ['bootstrap.min.*'], dest: 'css/', filter: 'isFile' },
              { expand: true, cwd: 'node_modules/bootstrap/dist/js', src: ['bootstrap.min.*'], dest: 'js/', filter: 'isFile' }
            ]
          }
        }
		});

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-node-sass');

		grunt.registerTask('default', ['connect', 'sass', 'copy', 'watch']);
};
