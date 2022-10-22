import gulp from 'gulp';
import { spawn } from 'child_process';
import concat from 'gulp-concat';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import terser from 'gulp-terser';
import postcss from 'gulp-postcss';
import purgecss from '@fullhuman/postcss-purgecss';
import cssnano from 'cssnano';
import removeComments from 'postcss-discard-comments';
import sourcemaps from 'gulp-sourcemaps';
import { default as log } from 'fancy-log';

// Dev
export const cssDev = () => gulp.src('./_sass/styles.scss')
    .pipe(sass({
      includePaths: [
        './_sass',
      ],
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));

export const cssWatch = () => gulp.watch('./_css/**/*.scss', cssDev);

export const jsDev = () => gulp.src([
    './node_modules/jquery/dist/jquery.js',
    './_js/slick.min.js',
    './_js/micromodal.js',
    './_js/scripts.js'
  ])
  .pipe(sourcemaps.init())
  .pipe(concat('scripts.js'))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('assets/js'));

export const jsWatch = () => gulp.watch('./_js/**/*.js', jsDev);

export const jekyllServe = () => {
  const jekyll = spawn('bundle', ['exec', 'jekyll', 'serve']);

  const jekyllLogger = function(buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach(function(message) {
        log('Jekyll: ' + message);
      });
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
}

export const dev = gulp.series(cssDev, jsDev, gulp.parallel(jekyllServe, cssWatch, jsWatch));

// Prod
export const cssProd = () => gulp.src('./_sass/styles.scss')
    .pipe(sass({
      includePaths: [
        './_sass',
      ],
    })
    .on('error', sass.logError))
    .pipe(postcss([purgecss({
        content: [
          '_site/**/*.html'
        ]
      }),
      removeComments({ removeAll: true }),
      cssnano()
    ]))
    .pipe(gulp.dest('./_site/assets/css'));

export const jsProd = () => gulp.src([
      './node_modules/jquery/dist/jquery.js',
      './_js/slick.min.js',
      './_js/micromodal.js',
      './_js/scripts.js'
    ])
    .pipe(concat('scripts.js'))
    .pipe(terser({
      toplevel: true,
      format: {
        comments: false
      }
    }))
    .pipe(gulp.dest('_site/assets/js'));

export const jekyll = (gulpCallback) => {
  const jekyll = spawn('bundle', ['exec', 'jekyll', 'build']);

  const jekyllLogger = function(buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach(function(message) {
        log('Jekyll: ' + message);
      });
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);

  jekyll.on('exit', gulpCallback);
}

export const build = gulp.series(jekyll, cssProd, jsProd);

export default dev;
