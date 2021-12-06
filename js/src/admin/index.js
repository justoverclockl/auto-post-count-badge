import app from 'flarum/admin/app';
import SettingsPage from './components/SettingsPage';

app.initializers.add('justoverclock/auto-post-count-badge', () => {
  app.extensionData.for('justoverclock-auto-post-count-badge').registerPage(SettingsPage);
});

import * as components from './components';

export { components };
