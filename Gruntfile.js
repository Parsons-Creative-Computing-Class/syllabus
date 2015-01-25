/*global module:false*/
module.exports = function(grunt) {

  // enable task timestamps
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON( 'package.json' ),

    // output filename based on school requirements
    pdfOutputFilename: '<%= pkg.parsons.subject %>_<%= pkg.parsons.course %>_<%= pkg.parsons.section %>_<%= pkg.parsons.faculty %>_<%= pkg.parsons.semester %>',

    // markdown -> html
    markdown: {
      syllabus : {
        options: {
          template: 'assets/template.jst',
          templateContext: {
            title: '<%=pkg.title%>',
            styles: grunt.file.read("assets/styles.css")
          }
        },
        files: {
          'dist/<%=pdfOutputFilename%>.html': ['README.md']
        }
      }
    },

    // html -> pdf
    wkhtmltopdf: {
      syllabus : {
        files: {
          'dist/' : ['dist/<%=pdfOutputFilename%>.html']
        }
      }
    },

    // dev mode
    watch: {
      markdown: {
        files: '*.md',
        tasks: ['build']
      }
    },

    // handle releases
    'release-it' : {
      options: {
        pkgFiles: ['package.json'],
        commitMessage: 'Release %s',
        tagName: '%s',
        tagAnnotation: 'Release %s',
        publish: false,
        distRepo: false
      }
    }

  });

  // default task.
  grunt.registerTask('default', ['build']);

  // build task
  grunt.registerTask('build', ['markdown', 'wkhtmltopdf']);

  // dev task
  grunt.registerTask('dev', ['watch']);

  // release tasks to aid in versioning/tagging
  // also ensures that a built version is always tagged
  grunt.registerTask( 'release', ['build', 'release-it'] );
  grunt.registerTask( 'release:minor', ['build', 'release-it:minor'] );
  grunt.registerTask( 'release:major', ['build', 'release-it:major'] );
}
