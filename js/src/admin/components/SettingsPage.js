import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/components/ExtensionPage';
import Button from 'flarum/common/components/Button';
import ItemList from 'flarum/common/utils/ItemList';

export default class AutoPostBadgePage extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);
  }

  content() {
    return (
      <div className="container">
        <div className="row">
          <div className="column">{this.iconManagerItems().toArray()}</div>

          <div className="column">{this.labelManagerItems().toArray()}</div>
        </div>
      </div>
    );
  }

  iconManagerItems() {
    const items = new ItemList();

    items.add(
      'heading',
      <div>
        <h2 class="h2titleext">{app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.icon-manager.title')}</h2>
        <p class="helpText">
          {app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.icon-manager.help_text', {
            a: <a href="https://fontawesome.com/icons?m=free" tabindex="-1" />,
          })}
        </p>
      </div>,
      100
    );

    items.add(
      'tierOne',
      <div class="formOne">
        <div class="helptext">
          {app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
            tier: 1,
            from: 0,
            to: 9,
          })}
        </div>
        <input type="text" name="tierOne" class="FormControl autopost" placeholder="fas fa-baby" bidi={this.setting('justoverclock-auto-post-count-badge.levelOne')} />
        <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
          <i className="fas fa-save autopost" />
        </Button>
      </div>,
      95
    );

    items.add(
      'tierTwo',
      <div className="formtwo">
        <div className="helptext">
          {app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
            tier: 2,
            from: 10,
            to: 49,
          })}
        </div>
        <input type="text" name="tierTwo" class="FormControl autopost" placeholder="fas fa-child" bidi={this.setting('justoverclock-auto-post-count-badge.levelTwo')} />
        <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
          <i className="fas fa-save autopost" />
        </Button>
      </div>,
      90
    );

    items.add(
      'tierThree',
      <div className="formTree">
        <div className="helptext">
          {app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
            tier: 3,
            from: 50,
            to: 99,
          })}
        </div>
        <input type="text" name="tierTree" className="FormControl autopost" placeholder="fas fa-bullhorn" bidi={this.setting('justoverclock-auto-post-count-badge.levelTree')} />
        <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
          <i className="fas fa-save autopost" />
        </Button>
      </div>,
      85
    );

    items.add(
      'tierFour',
      <div className="formFour">
        <div className="helptext">
          {app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
            tier: 4,
            from: 100,
            to: 299,
          })}
        </div>
        <input type="text" name="tierFour" className="FormControl autopost" placeholder="fas fa-chalkboard-teacher" bidi={this.setting('justoverclock-auto-post-count-badge.levelFour')} />
        <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
          <i className="fas fa-save autopost" />
        </Button>
      </div>,
      80
    );

    items.add(
      'tierFive',
      <div className="formFive">
        <div className="helptext">
          {app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
            tier: 5,
            from: 300,
            to: 599,
          })}
        </div>
        <input type="text" name="tierFive" className="FormControl autopost" placeholder="fab fa-optin-monster" bidi={this.setting('justoverclock-auto-post-count-badge.levelFive')} />
        <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
          <i className="fas fa-save autopost" />
        </Button>
      </div>,
      75
    );

    items.add(
      'tierSix',
      <div className="formSix">
        <div className="helptext">
          {app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
            tier: 6,
            from: 600,
            to: 999,
          })}
        </div>
        <input type="text" name="tierSix" className="FormControl autopost" placeholder="fas fa-graduation-cap" bidi={this.setting('justoverclock-auto-post-count-badge.levelSix')} />
        <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
          <i className="fas fa-save autopost" />
        </Button>
      </div>,
      70
    );

    items.add(
      'tierSeven',
      <div className="formSeven">
        <div className="helptext">
          {app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
            tier: 7,
            from: 1000,
            to: 1999,
          })}
        </div>
        <input type="text" name="tierSeven" className="FormControl autopost" placeholder="fas fa-medal" bidi={this.setting('justoverclock-auto-post-count-badge.levelSeven')} />
        <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
          <i className="fas fa-save autopost" />
        </Button>
      </div>,
      65
    );

    items.add(
      'tierEight',
      <div className="formEight">
        <div className="helptext">
          {app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
            tier: 8,
            from: 2000,
            to: 3999,
          })}
        </div>
        <input type="text" name="tierEight" className="FormControl autopost" placeholder="fas fa-stethoscope" bidi={this.setting('justoverclock-auto-post-count-badge.levelEight')} />
        <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
          <i className="fas fa-save autopost" />
        </Button>
      </div>,
      60
    );

    items.add(
      'tierNine',
      <div className="formNine">
        <div className="helptext">
          {app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
            tier: 9,
            from: 4000,
            to: 7999,
          })}
        </div>
        <input type="text" name="tierNine" className="FormControl autopost" placeholder="fas fa-user-shield" bidi={this.setting('justoverclock-auto-post-count-badge.levelEight')} />
        <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
          <i className="fas fa-save autopost" />
        </Button>
      </div>,
      55
    );

    return items;
  }

  labelManagerItems() {
    const items = new ItemList();

    items.add(
      'heading',
      <div>
        <h2 class="h2titleext">{app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.label-manager.title')}</h2>
        <p class="helpText">{app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.label-manager.help')}</p>
      </div>,
      100
    );

    items.add(
      'tierOne',
      <div className="formOne">
        <div className="helptext">
          {app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
            tier: 1,
            from: 0,
            to: 9,
          })}
        </div>
        <input
          type="text"
          name="badgeOne"
          className="FormControl autopost"
          placeholder="The Baby"
          bidi={this.setting('justoverclock-auto-post-count-badge.badgeOne')}
        />
        <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
          <i className="fas fa-save autopost" />
        </Button>
      </div>,
      95
    );

    items.add(
      'tierTwo',
      <div className="formtwo">
        <div className="helptext">
          {app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
            tier: 2,
            from: 10,
            to: 49,
          })}
        </div>
        <input
          type="text"
          name="badgeTwo"
          className="FormControl autopost"
          placeholder="The Newbie"
          bidi={this.setting('justoverclock-auto-post-count-badge.badgeTwo')}
        />
        <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
          <i className="fas fa-save autopost" />
        </Button>
      </div>,
      90
    );

    items.add(
      'tierThree',
      <div className="formTree">
        <div className="helptext">
          {app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
            tier: 3,
            from: 50,
            to: 99,
          })}
        </div>
        <input
          type="text"
          name="badgeTree"
          className="FormControl autopost"
          placeholder="The Talker"
          bidi={this.setting('justoverclock-auto-post-count-badge.badgeTree')}
        />
        <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
          <i className="fas fa-save autopost" />
        </Button>
      </div>,
      85
    );

    items.add(
      'tierFour',
      <div className="formFour">
        <div className="helptext">
          {app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
            tier: 4,
            from: 100,
            to: 299,
          })}
        </div>
        <input
          type="text"
          name="badgeFour"
          className="FormControl autopost"
          placeholder="The teacher"
          bidi={this.setting('justoverclock-auto-post-count-badge.badgeFour')}
        />
        <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
          <i className="fas fa-save autopost" />
        </Button>
      </div>,
      80
    );

    items.add(
      'tierFive',
      <div className="formFive">
        <div className="helptext">
          {app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
            tier: 5,
            from: 300,
            to: 599,
          })}
        </div>
        <input
          type="text"
          name="badgeFive"
          className="FormControl autopost"
          placeholder="The Monster!"
          bidi={this.setting('justoverclock-auto-post-count-badge.badgeFive')}
        />
        <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
          <i className="fas fa-save autopost" />
        </Button>
      </div>,
      75
    );

    items.add(
      'tierSix',
      <div className="formSix">
        <div className="helptext">
          {app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
            tier: 6,
            from: 600,
            to: 999,
          })}
        </div>
        <input
          type="text"
          name="badgeSix"
          className="FormControl autopost"
          placeholder="The Guru!"
          bidi={this.setting('justoverclock-auto-post-count-badge.badgeSix')}
        />
        <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
          <i className="fas fa-save autopost" />
        </Button>
      </div>,
      70
    );

    items.add(
      'tierSeven',
      <div className="formSeven">
        <div className="helptext">
          {app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
            tier: 7,
            from: 1000,
            to: 1999,
          })}
        </div>
        <input
          type="text"
          name="badgeSeven"
          className="FormControl autopost"
          placeholder="The Flarumist!"
          bidi={this.setting('justoverclock-auto-post-count-badge.badgeSeven')}
        />
        <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
          <i className="fas fa-save autopost" />
        </Button>
      </div>,
      65
    );

    items.add(
      'tierEight',
      <div className="formEight">
        <div className="helptext">
          {app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
            tier: 8,
            from: 2000,
            to: 3999,
          })}
        </div>
        <input
          type="text"
          name="badgeEight"
          className="FormControl autopost"
          placeholder="Expert"
          bidi={this.setting('justoverclock-auto-post-count-badge.badgeEight')}
        />
        <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
          <i className="fas fa-save autopost" />
        </Button>
      </div>,
      60
    );

    items.add(
      'tierNine',
      <div className="formNine">
        <div className="helptext">
          {app.translator.trans('justoverclock-auto-post-count-badge.admin.settings.tier', {
            tier: 9,
            from: 4000,
            to: 7999,
          })}
        </div>
        <input
          type="text"
          name="badgeNine"
          className="FormControl autopost"
          placeholder="Untouchable"
          bidi={this.setting('justoverclock-auto-post-count-badge.badgeNine')}
        />
        <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
          <i className="fas fa-save autopost" />
        </Button>
      </div>,
      55
    );

    return items;
  }
}
