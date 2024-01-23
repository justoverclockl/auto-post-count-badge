import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Tooltip from 'flarum/common/components/Tooltip';

export default class PostCountBadge extends Component {
  view() {
    const userPosts = this.attrs.posts;
    const userClass = this.attrs.userClass;
    const userBadgeLabel = this.attrs.label;
    
    // 检测 userClass 是否以 'fa' 开头
    const isFontAwesome = /^fa/.test(userClass);
    // 检测 userClass 是否以 'file:' 开头
    const isFile = /^file:/.test(userClass);

    // 根据 userClass 的值选择使用 <i> 或 <img>
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
