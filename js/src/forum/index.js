import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import PostUser from 'flarum/components/PostUser';

app.initializers.add('justoverclock/auto-post-count-badge', () => {
  extend(PostUser.prototype, 'view', function (vnode) {
    const routeName = app.current.get('routeName');

    if (routeName === 'discussion' || routeName === 'discussion.near' || routeName === 'blogArticle') {
      const post = this.attrs.post;
      const userPosts = post.user().data.attributes.commentCount
      console.log(post.user().data.attributes.commentCount)

      if (userPosts  > 46){
        vnode.children.push(
          <span className="topicStarter">azzooo</span>
        );
      }
    }
  })
});
