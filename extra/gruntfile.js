module.exports = function(grunt) {
	grunt.initConfig({
		stylus:{
			compile:{
				options: {
					compress: 'true'
				},
				files:{
					'./css/build.css': ['./index.styl']
				}
			}
		},
		
		watch:{
			stylus: {
				files: ['./index.styl'],
				tasks: ['my']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-newer');
	
	grunt.registerTask('my', ['newer:stylus']);
	grunt.registerTask('default', ['stylus', 'watch']);
	
};