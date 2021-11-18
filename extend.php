<?php

/*
 * This file is part of justoverclock/auto-post-count-badge.
 *
 * Copyright (c) 2021 Marco Colia.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Justoverclock\AutoPostCountBadge;

use Flarum\Extend;
use Flarum\Api\Event\Serializing;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),
    (new Extend\Settings)
        ->serializeToForum('justoverclock-auto-post-count-badge.levelOne', 'justoverclock-auto-post-count-badge.levelOne')
        ->serializeToForum('justoverclock-auto-post-count-badge.levelTwo', 'justoverclock-auto-post-count-badge.levelTwo')
        ->serializeToForum('justoverclock-auto-post-count-badge.levelTree', 'justoverclock-auto-post-count-badge.levelTree')
        ->serializeToForum('justoverclock-auto-post-count-badge.levelFour', 'justoverclock-auto-post-count-badge.levelFour')
        ->serializeToForum('justoverclock-auto-post-count-badge.levelFive', 'justoverclock-auto-post-count-badge.levelFive')
        ->serializeToForum('justoverclock-auto-post-count-badge.levelSix', 'justoverclock-auto-post-count-badge.levelSix')
        ->serializeToForum('justoverclock-auto-post-count-badge.levelSeven', 'justoverclock-auto-post-count-badge.levelSeven')
    // Text Settings
        ->serializeToForum('justoverclock-auto-post-count-badge.badgeOne', 'justoverclock-auto-post-count-badge.badgeOne')
        ->serializeToForum('justoverclock-auto-post-count-badge.badgeTwo', 'justoverclock-auto-post-count-badge.badgeTwo')
        ->serializeToForum('justoverclock-auto-post-count-badge.badgeTree', 'justoverclock-auto-post-count-badge.badgeTree')
        ->serializeToForum('justoverclock-auto-post-count-badge.badgeFour', 'justoverclock-auto-post-count-badge.badgeFour')
        ->serializeToForum('justoverclock-auto-post-count-badge.badgeFive', 'justoverclock-auto-post-count-badge.badgeFive')
        ->serializeToForum('justoverclock-auto-post-count-badge.badgeSix', 'justoverclock-auto-post-count-badge.badgeSix')
        ->serializeToForum('justoverclock-auto-post-count-badge.badgeSeven', 'justoverclock-auto-post-count-badge.badgeSeven')
];
