// used for pdf conversion
var marked = require('marked')
  , wkhtmltopdf = require('wkhtmltopdf')
  , fs = require('fs');

/*global module:false*/
module.exports = function(grunt) {

  // enable task timestamps
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON( 'package.json' ),

    // markdownpdf: {
    //   options: {},
    //   syllabus : {
    //     src: 'README.md',
    //     dest: 'pdf'
    //   }
    // },

    md2pdf: {
      options: {},
      syllabus : {
            src: 'README.md',
            dest: 'pdf/<%= pkg.parsons.subject %>_<%= pkg.parsons.course %>_<%= pkg.parsons.section %>_<%= pkg.parsons.faculty %>_<%= pkg.parsons.semester %>.pdf'
      }
    },

    // rename: {
    //   syllabus : {
    //     src: 'pdf/README.pdf',
    //     dest: 'pdf/<%= pkg.parsons.subject %>_<%= pkg.parsons.course %>_<%= pkg.parsons.section %>_<%= pkg.parsons.faculty %>_<%= pkg.parsons.semester %>.pdf'
    //   }
    // },

    watch: {
      markdown: {
        files: '*.md',
        tasks: ['md2pdf']
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
  grunt.registerTask('build', ['md2pdf']);

  // dev task
  grunt.registerTask('dev', ['watch']);

  // release tasks to aid in versioning/tagging
  // also ensures that a built version is always tagged
  grunt.registerTask( 'release', ['build', 'release-it'] );
  grunt.registerTask( 'release:minor', ['build', 'release-it:minor'] );
  grunt.registerTask( 'release:major', ['build', 'release-it:major'] );


  // https://quickleft.com/blog/grunt-js-custom-tasks/
  grunt.registerMultiTask('md2pdf', 'Simple conversion from Markdown to PDF', function(){
    var done = this.async()
        , files = this.files.slice();

    function process() {

      // if there is nothing left to process, we're done
      if (!files.length) {
        done();
        return;
      }

      var file = files.pop()
          , content = grunt.file.read(file.src[0], { encoding: 'utf8'})
          , html
          , pdf;

      // convert to html
      grunt.log.writeln('Converting '+file.src[0]+' to HTML...');
      html = marked(content);

      // convert to pdf
      grunt.log.writeln('Converting HTML to PDF...');
      pdf = wkhtmltopdf(
        content,
        { }
      ).pipe(fs.createWriteStream(file.dest));

      // done with this file
      grunt.log.writeln('PDF saved as '+file.dest);
    }

    process();
  });

};
