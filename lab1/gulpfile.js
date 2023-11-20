var gulp = require('gulp');
var open = require('gulp-open');
var wait = require('gulp-wait');

const interval = 5000;
const webpages = [
	'lichess.org',
	'chess24.com',
	'chess.com',
	'play.chessbase.com',
	'chess.pro',
];

function openPage(index) {
    if (index < webpages.length) {
        var options = {
            uri: webpages[index],
            app: 'chrome',
        };

        gulp.src(__filename)
            .pipe(open(options))
            .pipe(wait(interval))
            .on('end', function () {
                openPage(index + 1);
            });
    }
}

gulp.task('open', function (done) {
    openPage(0);
    done();
});

gulp.task('default', gulp.series('open'));