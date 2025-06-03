import gulp from 'gulp';
import { spawn } from 'child_process';
import concat from 'gulp-concat';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import terser from 'gulp-terser';
import postcss from 'gulp-postcss';
import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';
import cssnano from 'cssnano';
import removeComments from 'postcss-discard-comments';
import sourcemaps from 'gulp-sourcemaps';
import { default as log } from 'fancy-log';

// Dev
export const cssDev = () => gulp.src('./_sass/styles.scss')
    .pipe(sass({
      loadPaths: [
        './_sass',
      ],
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./css'));

export const cssWatch = () => gulp.watch('./_sass/**/*.scss', cssDev);

export const jsDev = () => gulp.src([
    './node_modules/jquery/dist/jquery.js',
    './_js/slick.min.js',
    // './_js/micromodal.js',
    './_js/scripts.js',
  ])
  .pipe(sourcemaps.init())
  .pipe(concat('scripts.js'))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('js'));

export const jsWatch = () => gulp.watch('./_js/**/*.js', jsDev);

export const htmlServe = () => {
  const eleventy = spawn('npx', ['@11ty/eleventy', '--serve']);

  const htmlLogger = function(buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach(function(message) {
        log('11ty: ' + message);
      });
  };

  eleventy.stdout.on('data', htmlLogger);
  eleventy.stderr.on('data', htmlLogger);
}

// Prod
export const cssProd = () => gulp.src('./_sass/styles.scss')
    .pipe(sass({
      loadPaths: [
        './_sass',
      ],
    })
    .on('error', sass.logError))
    .pipe(postcss([purgeCSSPlugin({
        content: [
          '_site/**/*.html'
        ],
        safelist: {
          greedy: [/slick/, /show-modal/]
        }
      }),
      removeComments({ removeAll: true }),
      cssnano()
    ]))
    .pipe(gulp.dest('./_site/css'));

export const jsProd = () => gulp.src([
      './node_modules/jquery/dist/jquery.js',
      './_js/slick.min.js',
      // './_js/micromodal.js',
      './_js/scripts.js',
    ])
    .pipe(concat('scripts.js'))
    .pipe(terser({
      toplevel: true,
      format: {
        comments: false
      }
    }))
    .pipe(gulp.dest('_site/js'));

export const htmlBuild = (gulpCallback) => {
  const eleventy = spawn('npx', ['@11ty/eleventy']);

  const htmlLogger = function(buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach(function(message) {
        log('11ty: ' + message);
      });
  };

  eleventy.stdout.on('data', htmlLogger);
  eleventy.stderr.on('data', htmlLogger);

  eleventy.on('exit', gulpCallback);
}

export const dev = gulp.series(cssDev, jsDev, gulp.parallel(htmlServe, cssWatch, jsWatch));
export const build = gulp.series(htmlBuild, cssProd, jsProd);

export default dev;
