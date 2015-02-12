module.exports = function(grunt) {

	grunt.initConfig({

		stylus:{
			compile:{
				files: {
					'./css/style.css': ['./styl/*.styl']
				}
			}
		},

		concat_css:{
			all: {
				src: ['./css/reset.css', './css/font-awesome.css','./css/style.css'],
				dest: './css/build.css'
			} 
		},

		watch: {
			stylus: {
				files: ['./styl/*.styl'],
				tasks: ['newer:stylus']
			},
			concat_css: {
				files: ['./css/*.css'],
				tasks: ['newer:concat_css']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-newer');

	grunt.registerTask('default', ['stylus', 'concat_css', 'watch']);
};