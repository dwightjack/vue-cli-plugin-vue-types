module.exports = (api) => {
  api.extendPackage({
    dependencies: {
      'vue-types': '~1.3.0',
    },
  })

  if (api.hasPlugin('eslint')) {
    api.extendPackage({
      devDependencies: {
        'eslint-plugin-vue-types': '~1.0.0',
      },
      eslintConfig: {
        extends: ['plugin:vue-types/strongly-recommended'],
      },
    })
  }
}
