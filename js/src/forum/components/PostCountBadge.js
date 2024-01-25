import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Tooltip from 'flarum/common/components/Tooltip';

export default class PostCountBadge extends Component {
  view() {
    const userPosts = this.attrs.posts;
    const userClass = this.attrs.userClass;
    const userBadgeLabel = this.attrs.label;
    
    const isFontAwesome = /^fa/.test(userClass);
    const isFile = /^file:/.test(userClass);

    const badgeIcon = isFontAwesome ? (
      <i class={userClass + ' autopost'} />
    ) : isFile ? (
      <img class='autopost' src={userClass.replace('file:', '')} width="26" height="26" alt={userBadgeLabel} />
    ) : <i class='fas fa-xmark autopost' />;
    return (
      <span>
        <Tooltip
          text={app.translator.trans('justoverclock-auto-post-count-badge.forum.hasWritten', {
            count: userPosts,
          })}
        >
          <span className="auto-badge">
            {badgeIcon}
            {userBadgeLabel}
          </span>
        </Tooltip>
      </span>
    );
  }
}
