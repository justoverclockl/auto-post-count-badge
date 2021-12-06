import ExtensionPage from 'flarum/components/ExtensionPage';
import Button from 'flarum/common/components/Button';

export default class AutoPostBadgePage extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);
  }
  content() {
    return (
      <div className="row">
        <div className="column">
          <h2 class="h2titleext">Icon Manager</h2>
          <p class="autopostbadge">Customize fontawesome icon</p>

          <div class="formOne">
            <div class="helptext">Tier 1 : from 0 to 10 posts</div>
            <input
              type="text"
              name="tierOne"
              class="FormControl autopost"
              bidi={this.setting('justoverclock-auto-post-count-badge.levelOne')}
            />
            <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
              <i className="fas fa-save autopost" />
            </Button>
          </div>

          <div className="formtwo">
            <div className="helptext">Tier 2 : from 10 to 50 posts</div>
            <input
              type="text"
              name="tierTwo"
              class="FormControl autopost"
              bidi={this.setting('justoverclock-auto-post-count-badge.levelTwo')}
            />
            <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
              <i className="fas fa-save autopost" />
            </Button>
          </div>

          <div className="formTree">
            <div className="helptext">Tier 3 : from 50 to 100 posts</div>
            <input
              type="text"
              name="tierTree"
              className="FormControl autopost"
              bidi={this.setting('justoverclock-auto-post-count-badge.levelTree')}
            />
            <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
              <i className="fas fa-save autopost" />
            </Button>
          </div>

          <div className="formFour">
            <div className="helptext">Tier 4 : from 100 to 300 posts</div>
            <input
              type="text"
              name="tierFour"
              className="FormControl autopost"
              bidi={this.setting('justoverclock-auto-post-count-badge.levelFour')}
            />
            <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
              <i className="fas fa-save autopost" />
            </Button>
          </div>

          <div className="formFive">
            <div className="helptext">Tier 5 : from 300 to 600 posts</div>
            <input
              type="text"
              name="tierFive"
              className="FormControl autopost"
              bidi={this.setting('justoverclock-auto-post-count-badge.levelFive')}
            />
            <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
              <i className="fas fa-save autopost" />
            </Button>
          </div>

          <div className="formSix">
            <div className="helptext">Tier 6 : from 600 to 1000 posts</div>
            <input
              type="text"
              name="tierSix"
              className="FormControl autopost"
              bidi={this.setting('justoverclock-auto-post-count-badge.levelSix')}
            />
            <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
              <i className="fas fa-save autopost" />
            </Button>
          </div>

          <div className="formSeven">
            <div className="helptext">Tier 7 : from 1000 to 2000 posts</div>
            <input
              type="text"
              name="tierSeven"
              className="FormControl autopost"
              bidi={this.setting('justoverclock-auto-post-count-badge.levelSeven')}
            />
            <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
              <i className="fas fa-save autopost" />
            </Button>
          </div>

          <div className="formEight">
            <div className="helptext">Tier 8 : from 2000 to 4000 posts</div>
            <input
              type="text"
              name="tierEight"
              className="FormControl autopost"
              bidi={this.setting('justoverclock-auto-post-count-badge.levelEight')}
            />
            <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
              <i className="fas fa-save autopost" />
            </Button>
          </div>

          <div className="formNine">
            <div className="helptext">Tier 9 : from 4000 to 8000 posts</div>
            <input
              type="text"
              name="tierNine"
              className="FormControl autopost"
              bidi={this.setting('justoverclock-auto-post-count-badge.levelEight')}
            />
            <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost">
              <i className="fas fa-save autopost" />
            </Button>
          </div>
        </div>

        <div className="column">
          <h2 class="h2titleext">Text Label Manager</h2>
          <p class="autopostbadge">Customize name for tiers</p>

          <div className="formOne">
            <div className="helptext">Tier 1 : from 0 to 10 posts</div>
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
          </div>

          <div className="formtwo">
            <div className="helptext">Tier 2 : from 10 to 50 posts</div>
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
          </div>

          <div className="formTree">
            <div className="helptext">Tier 3 : from 50 to 100 posts</div>
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
          </div>

          <div className="formFour">
            <div className="helptext">Tier 4 : from 100 to 300 posts</div>
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
          </div>

          <div className="formFive">
            <div className="helptext">Tier 5 : from 300 to 600 posts</div>
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
          </div>

          <div className="formSix">
            <div className="helptext">Tier 6 : from 600 to 1000 posts</div>
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
          </div>

          <div className="formSeven">
            <div className="helptext">Tier 7 : from 1000 to 2000 posts</div>
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
          </div>

          <div className="formEight">
            <div className="helptext">Tier 8 : from 2000 to 4000 posts</div>
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
          </div>

          <div className="formNine">
            <div className="helptext">Tier 9 : from 4000 to 8000 posts</div>
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
          </div>
        </div>
      </div>
    );
  }
}
