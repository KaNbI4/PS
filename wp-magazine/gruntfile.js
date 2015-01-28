module.exports = function(grunt) {
	
	grunt.initConfig({
		
		stylus: {

			compile: {

				files: {
					'./css/index.css': ['./styl/style.styl']
				}
			}
		},

		watch: {
			stylus: {
				files: './styl/style.styl',
				tasks: ['stylus']
			}
		}
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['stylus', 'watch']);
};