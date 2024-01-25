import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Tooltip from 'flarum/common/components/Tooltip';

export default class PostCountBadge extends Component {
  view() {
    const userPosts = this.attrs.posts;
    const userClass = this.attrs.userClass;
    console.log(userClass)
    const userBadgeLabel = this.attrs.label;

    const isFontAwesome = /^fa/.test(userClass);
    const isFile = /^link:/.test(userClass);

    console.log(userClass.replace('link:', ''))

    const badgeIcon = isFontAwesome ? (
      <i className={userClass + ' autopost'} />
    ) : isFile ? (
      <img className='autopost' src={userClass.replace('link:', '')} width="26" height="26" alt={userBadgeLabel} />
    ) : <i className='fas fa-xmark autopost'></i>;
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
