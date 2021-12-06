import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import PostUser from 'flarum/forum/components/PostUser';
import Tooltip from 'flarum/common/components/Tooltip';
import User from 'flarum/common/models/User';
import Model from 'flarum/common/Model';

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

      vnode.children.push(
        <span>
          <Tooltip
            text={
              app.translator.trans('justoverclock-auto-post-count-badge.forum.hasWritten') +
              ' ' +
              userPosts +
              ' ' +
              app.translator.trans('justoverclock-auto-post-count-badge.forum.posts')
            }
          >
            <span className="auto-badge">
              <i class={userClass + ' autopost'} />
              {userBadgeLabel}
            </span>
          </Tooltip>
        </span>
      );
    }
  });
});
