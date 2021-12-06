import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import PostUser from 'flarum/forum/components/PostUser';
import User from 'flarum/common/models/User';
import Model from 'flarum/common/Model';
import PostCountBadge from './components/PostCountBadge';

app.initializers.add('justoverclock/auto-post-count-badge', () => {
  User.prototype.autoCountBadge = Model.attribute('autoCountBadge');
  User.prototype.autoCountBadgeLabel = Model.attribute('autoCountBadgeLabel');

  extend(PostUser.prototype, 'view', function (vnode) {
    const checkRoute = app.current.get('routeName');

    if (checkRoute === 'discussion' || checkRoute === 'discussion.near' || checkRoute === 'blogArticle') {
      const post = this.attrs.post;
      const user = post.user();

      // If we don't have a user, do nothing
      if (!user) {
        return;
      }

      const userPosts = post.user().commentCount();
      const userClass = post.user().autoCountBadge();
      const userBadgeLabel = post.user().autoCountBadgeLabel();

      // We don't have a class or label, so do nothing
      if (userClass === '' || userBadgeLabel === '') {
        return;
      }

      vnode.children.push(<PostCountBadge posts={userPosts} userClass={userClass} label={userBadgeLabel} />);
    }
  });
});

import * as components from './components';

export { components };
