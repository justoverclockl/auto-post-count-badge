import app from 'flarum/admin/app';

app.initializers.add('justoverclock/auto-post-count-badge', () => {
  app.extensionData
    .for('justoverclock-auto-post-count-badge')
    .registerSetting({
      setting: 'justoverclock-auto-post-count-badge.levelOne',
      name: 'justoverclock-auto-post-count-badge.levelOne',
      type: 'text',
      placeholder: 'fas fa-baby',
      label: app.translator.trans('justoverclock-auto-post-count-badge.admin.levelOne'),
      help: app.translator.trans('justoverclock-auto-post-count-badge.admin.levelOne-help'),
    })
    .registerSetting({
      setting: 'justoverclock-auto-post-count-badge.levelTwo',
      name: 'justoverclock-auto-post-count-badge.levelTwo',
      type: 'text',
      placeholder: 'fas fa-child',
      label: app.translator.trans('justoverclock-auto-post-count-badge.admin.levelTwo'),
      help: app.translator.trans('justoverclock-auto-post-count-badge.admin.levelTwo-help'),
    })
    .registerSetting({
      setting: 'justoverclock-auto-post-count-badge.levelTree',
      name: 'justoverclock-auto-post-count-badge.levelTree',
      type: 'text',
      placeholder: 'fas fa-bullhorn',
      label: app.translator.trans('justoverclock-auto-post-count-badge.admin.levelTree'),
      help: app.translator.trans('justoverclock-auto-post-count-badge.admin.levelTree-help'),
    })
    .registerSetting({
      setting: 'justoverclock-auto-post-count-badge.levelFour',
      name: 'justoverclock-auto-post-count-badge.levelFour',
      type: 'text',
      placeholder: 'fas fa-chalkboard-teacher',
      label: app.translator.trans('justoverclock-auto-post-count-badge.admin.levelFour'),
      help: app.translator.trans('justoverclock-auto-post-count-badge.admin.levelFour-help'),
    })
    .registerSetting({
      setting: 'justoverclock-auto-post-count-badge.levelFive',
      name: 'justoverclock-auto-post-count-badge.levelFive',
      type: 'text',
      placeholder: 'fab fa-optin-monster',
      label: app.translator.trans('justoverclock-auto-post-count-badge.admin.levelFive'),
      help: app.translator.trans('justoverclock-auto-post-count-badge.admin.levelFive-help'),
    })
    .registerSetting({
      setting: 'justoverclock-auto-post-count-badge.levelSix',
      name: 'justoverclock-auto-post-count-badge.levelSix',
      type: 'text',
      placeholder: 'fas fa-graduation-cap',
      label: app.translator.trans('justoverclock-auto-post-count-badge.admin.levelSix'),
      help: app.translator.trans('justoverclock-auto-post-count-badge.admin.levelSix-help'),
    })
});
