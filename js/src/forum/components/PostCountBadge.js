import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Tooltip from 'flarum/common/components/Tooltip';

export default class PostCountBadge extends Component {
  view() {
    const userPosts = this.attrs.posts;
    const userClass = this.attrs.userClass;
    const userBadgeLabel = this.attrs.label;
    return (
      <span>
        <Tooltip
          text={app.translator.trans('justoverclock-auto-post-count-badge.forum.hasWritten', {
            count: userPosts,
          })}
        >
          <span className="auto-badge">
            <i class={userClass + ' autopost'} />
            {userBadgeLabel}
          </span>
        </Tooltip>
      </span>
    );
  }
}
