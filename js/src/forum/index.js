import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import PostUser from 'flarum/components/PostUser';
import Tooltip from 'flarum/common/components/Tooltip';


app.initializers.add('justoverclock/auto-post-count-badge', () => {
  extend(PostUser.prototype, 'view', function (vnode) {
    const checkRoute = app.current.get('routeName');

    if (checkRoute === 'discussion' || checkRoute === 'discussion.near' || checkRoute === 'blogArticle') {
      const post = this.attrs.post;
      const userPosts = post.user()?.commentCount();

      const tierOne = app.forum.attribute('justoverclock-auto-post-count-badge.levelOne') || 'fas fa-baby' + ' autopost';
      const tierTwo = app.forum.attribute('justoverclock-auto-post-count-badge.levelTwo') || 'fas fa-child' + ' autopost';
      const tierTree = app.forum.attribute('justoverclock-auto-post-count-badge.levelTree') || 'fas fa-bullhorn' + ' autopost';
      const tierFour = app.forum.attribute('justoverclock-auto-post-count-badge.levelFour') || 'fas fa-chalkboard-teacher' + ' autopost';
      const tierFive = app.forum.attribute('justoverclock-auto-post-count-badge.levelFive') || 'fab fa-optin-monster' + ' autopost';
      const tierSix = app.forum.attribute('justoverclock-auto-post-count-badge.levelSix') || 'fas fa-graduation-cap' + ' autopost';
      const tierSeven = app.forum.attribute('justoverclock-auto-post-count-badge.levelSeven') || 'fas fa-medal' + ' autopost';
      const tierEight = app.forum.attribute('justoverclock-auto-post-count-badge.levelEight') || 'fas fa-stethoscope' + ' autopost';
      const tierNine = app.forum.attribute('justoverclock-auto-post-count-badge.levelNine') || 'fas fa-user-shield' + ' autopost';

      if (userPosts >= 0 && userPosts <= 9) {
        vnode.children.push(
         <span><Tooltip text={app.translator.trans('justoverclock-auto-post-count-badge.forum.hasWritten') + ' ' + userPosts + ' ' +
         app.translator.trans('justoverclock-auto-post-count-badge.forum.posts')}><span className="auto-badge">
           <i class={tierOne} />{app.forum.attribute('justoverclock-auto-post-count-badge.badgeOne') || 'The Baby'}
          </span></Tooltip></span>
        );
      }
      if (userPosts >= 10 && userPosts <= 49) {
        vnode.children.push(
          <span><Tooltip text={app.translator.trans('justoverclock-auto-post-count-badge.forum.hasWritten') + ' ' + userPosts + ' ' +
          app.translator.trans('justoverclock-auto-post-count-badge.forum.posts')}><span className="auto-badge">
            <i class={tierTwo} /> {app.forum.attribute('justoverclock-auto-post-count-badge.badgeTwo') || 'The Newbie'}
          </span></Tooltip></span>
        );
      }
      if (userPosts >= 50 && userPosts <= 99) {
        vnode.children.push(
          <span><Tooltip text={app.translator.trans('justoverclock-auto-post-count-badge.forum.hasWritten') + ' ' + userPosts + ' ' +
          app.translator.trans('justoverclock-auto-post-count-badge.forum.posts')}><span className="auto-badge">
            <i class={tierTree} /> {app.forum.attribute('justoverclock-auto-post-count-badge.badgeTree') || 'The Talker'}
          </span></Tooltip></span>
        );
      }
      if (userPosts >= 100 && userPosts <= 299) {
        vnode.children.push(
          <span><Tooltip text={app.translator.trans('justoverclock-auto-post-count-badge.forum.hasWritten') + ' ' + userPosts + ' ' +
          app.translator.trans('justoverclock-auto-post-count-badge.forum.posts')}><span className="auto-badge">
            <i class={tierFour} /> {app.forum.attribute('justoverclock-auto-post-count-badge.badgeFour') || 'The Teacher'}
          </span></Tooltip></span>
        );
      }
      if (userPosts >= 300 && userPosts <= 599) {
        vnode.children.push(
          <span><Tooltip text={app.translator.trans('justoverclock-auto-post-count-badge.forum.hasWritten') + ' ' + userPosts + ' ' +
          app.translator.trans('justoverclock-auto-post-count-badge.forum.posts')}><span className="auto-badge">
            <i class={tierFive} /> {app.forum.attribute('justoverclock-auto-post-count-badge.badgeFive') || 'The Monster!'}
          </span></Tooltip></span>
        );
      }
      if (userPosts >= 600 && userPosts <= 999) {
        vnode.children.push(
          <span><Tooltip text={app.translator.trans('justoverclock-auto-post-count-badge.forum.hasWritten') + ' ' + userPosts + ' ' +
          app.translator.trans('justoverclock-auto-post-count-badge.forum.posts')}><span className="auto-badge">
            <i class={tierSix} /> {app.forum.attribute('justoverclock-auto-post-count-badge.badgeSix') || 'The Guru!'}
          </span></Tooltip></span>
        );
      }
      if (userPosts >= 1000 && userPosts <= 1999) {
        vnode.children.push(
          <span><Tooltip text={app.translator.trans('justoverclock-auto-post-count-badge.forum.hasWritten') + ' ' + userPosts + ' ' +
          app.translator.trans('justoverclock-auto-post-count-badge.forum.posts')}><span className="auto-badge">
            <i class={tierSeven} /> {app.forum.attribute('justoverclock-auto-post-count-badge.badgeSeven') || 'The Flarumist!'}
          </span></Tooltip></span>
        );
      }
      if (userPosts >= 2000 && userPosts <= 3999) {
        vnode.children.push(
          <span><Tooltip text={app.translator.trans('justoverclock-auto-post-count-badge.forum.hasWritten') + ' ' + userPosts + ' ' +
          app.translator.trans('justoverclock-auto-post-count-badge.forum.posts')}><span className="auto-badge">
            <i class={tierEight} /> {app.forum.attribute('justoverclock-auto-post-count-badge.badgeEight') || 'Expert'}
          </span></Tooltip></span>
        );
      }
      if (userPosts >= 4000 && userPosts <= 7999) {
        vnode.children.push(
          <span><Tooltip text={app.translator.trans('justoverclock-auto-post-count-badge.forum.hasWritten') + ' ' + userPosts + ' ' +
          app.translator.trans('justoverclock-auto-post-count-badge.forum.posts')}><span className="auto-badge">
            <i class={tierNine} /> {app.forum.attribute('justoverclock-auto-post-count-badge.badgeNine') || 'Untouchable'}
          </span></Tooltip></span>
        );
      }
    }
  });
});
