module.exports = function(grunt) {

grunt.initConfig({
	stylus:{
		compile:{
			options: {
                   'compress': true,
                   'paths': ['css/styl/']
                },
				files:{
					'./css/build.css' : ['./styl/*.styl']
				}
		}
	},
	
	watch: {
		stylus: {
			files: ['./styl/**'],
			tasks: ['newer:stylus']
		}
	}
});

grunt.loadNpmTasks('grunt-contrib-stylus');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-newer');
grunt.registerTask('default', ['stylus', 'watch']);

};