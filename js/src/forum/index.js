import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import PostUser from 'flarum/components/PostUser';

app.initializers.add('justoverclock/auto-post-count-badge', () => {
  extend(PostUser.prototype, 'view', function (vnode) {
    const checkRoute = app.current.get('routeName');

    if (checkRoute === 'discussion' || checkRoute === 'discussion.near' || checkRoute === 'blogArticle') {
      const post = this.attrs.post;
      const userPosts = post.user().data.attributes.commentCount;

      if (userPosts >= 0 && userPosts <= 10) {
        vnode.children.push(
          <span className="auto-badge">
            <i class="fas fa-baby autopost" /> {app.translator.trans('justoverclock-auto-post-count-badge.forum.less10post')}
          </span>
        );
      }
      if (userPosts >= 10 && userPosts <= 50) {
        vnode.children.push(
          <span className="auto-badge">
            <i class="fas fa-child autopost" /> {app.translator.trans('justoverclock-auto-post-count-badge.forum.less50post')}
          </span>
        );
      }
      if (userPosts >= 50 && userPosts <= 100) {
        vnode.children.push(
          <span className="auto-badge">
            <i class="fas fa-bullhorn autopost" /> {app.translator.trans('justoverclock-auto-post-count-badge.forum.less100post')}
          </span>
        );
      }
      if (userPosts >= 100 && userPosts <= 300) {
        vnode.children.push(
          <span className="auto-badge">
            <i class="fas fa-chalkboard-teacher autopost" /> {app.translator.trans('justoverclock-auto-post-count-badge.forum.less300post')}
          </span>
        );
      }
      if (userPosts >= 300 && userPosts <= 600) {
        vnode.children.push(
          <span className="auto-badge">
            <i class="fab fa-optin-monster autopost" /> {app.translator.trans('justoverclock-auto-post-count-badge.forum.less600post')}
          </span>
        );
      }
      if (userPosts >= 600 && userPosts <= 1000) {
        vnode.children.push(
          <span className="auto-badge">
            <i class="fas fa-graduation-cap autopost" /> {app.translator.trans('justoverclock-auto-post-count-badge.forum.less1000post')}
          </span>
        );
      }
    }
  });
});
