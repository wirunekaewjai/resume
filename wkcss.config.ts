import c from '@wirunekaewjai/css/config';

export default c({
  source: {
    dir: 'src',
    ext: '.css',
  },

  out: {
    classes: {
      ext: '.c.js',
    },

    css: {
      dir: 'src',
      entries: {
        'app': [
          'src/pages/index.tsx'
        ],
      },
    },
  },
});