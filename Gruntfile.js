/*global module:false*/
module.exports = function(grunt) {

  // enable task timestamps
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON( 'package.json' ),

    markdownpdf: {
      options: {},
      syllabus : {
        src: '*.md',
        dest: 'pdf'
      }
    },

    rename: {
      syllabus : {
        src: 'pdf/README.pdf',
        dest: 'pdf/<%= pkg.parsons.subject %>_<%= pkg.parsons.course %>_<%= pkg.parsons.section %>_<%= pkg.parsons.faculty %>_<%= pkg.parsons.semester %>.pdf'
      }
    },

    watch: {
      markdown: {
        files: '*.md',
        tasks: ['markdownpdf', 'rename']
      }
    },

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
  grunt.registerTask('build', ['markdownpdf', 'rename']);

  // dev task
  grunt.registerTask('dev', ['watch']);

  // release tasks to aid in versioning/tagging
  // also ensures that a built version is always tagged
  grunt.registerTask( 'release', ['build', 'release-it'] );
  grunt.registerTask( 'release:minor', ['build', 'release-it:minor'] );
  grunt.registerTask( 'release:major', ['build', 'release-it:major'] );

};
