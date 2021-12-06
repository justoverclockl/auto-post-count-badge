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

use Flarum\Api\Serializer\UserSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;

class AddUserAttributes
{
    const prefix = 'justoverclock-auto-post-count-badge.';
    
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __invoke(UserSerializer $serializer, User $user, array $attribtues): array
    {
        if (!$user->isGuest()) {
            $level = $this->getUserLevel($user);

            $attribtues['autoCountBadge'] = $this->getBadgeForLevel($level);
            $attribtues['autoCountBadgeLabel'] = $this->getBadgeLabelForLevel($level);
        }

        return $attribtues;
    }

    private function getUserLevel(User $user): int
    {
        $count = $user->comment_count;

        if (!$count) {
            return 0;
        }

        switch ($count) {
            case $count >= 0 && $count <= 9:
                return 1;
            case $count >= 10 && $count <= 49:
                return 2;
            case $count >= 50 && $count <= 99:
                return 3;
            case $count >= 100 && $count <= 299:
                return 4;
            case $count >= 300 && $count <= 599:
                return 5;
            case $count >= 600 && $count <= 999:
                return 6;
            case $count >= 1000 && $count <= 1999:
                return 7;
            case $count >= 2000 && $count <= 3999:
                return 8;
            case $count >= 4000:
                return 9;
        }
    }

    private function getBadgeForLevel(int $level): string
    {
        switch ($level) {
            case $level === 1:
                return $this->settings->get(self::prefix . 'levelOne', 'fas fa-baby');
            case $level === 2:
                return $this->settings->get(self::prefix . 'levelTwo', 'fas fa-child');
            case $level === 3:
                return $this->settings->get(self::prefix . 'levelThree', 'fas fa-bullhorn');
            case $level === 4:
                return $this->settings->get(self::prefix . 'levelFour', 'fas fa-chalkboard-teacher');
            case $level === 5:
                return $this->settings->get(self::prefix . 'jlevelFive', 'fab fa-optin-monster');
            case $level === 6:
                return $this->settings->get(self::prefix . 'levelSix', 'fas fa-graduation-cap');
            case $level === 7:
                return $this->settings->get(self::prefix . 'levelSeven', 'fas fa-medal');
            case $level === 8:
                return $this->settings->get(self::prefix . 'levelEight', 'fas fa-stethoscope');
            case $level === 9:
                return $this->settings->get(self::prefix . 'levelNine', 'fas fa-user-shield');
            default:
                return '';
        }
    }

    private function getBadgeLabelForLevel(int $level): string
    {
        switch ($level) {
            case $level === 1:
                return $this->settings->get(self::prefix . 'badgeOne', 'The Baby');
            case $level === 2:
                return $this->settings->get(self::prefix . 'badgeTwo', 'The Newbie');
            case $level === 3:
                return $this->settings->get(self::prefix . 'badgeThree', 'The Talker');
            case $level === 4:
                return $this->settings->get(self::prefix . 'badgeFour', 'The Teacher');
            case $level === 5:
                return $this->settings->get(self::prefix . 'badgeFive', 'The Monster!');
            case $level === 6:
                return $this->settings->get(self::prefix . 'badgeSix', 'The Guru!');
            case $level === 7:
                return $this->settings->get(self::prefix . 'badgeSeven', 'The Flarumist!');
            case $level === 8:
                return $this->settings->get(self::prefix . 'badgeEight', 'Expert');
            case $level === 9:
                return $this->settings->get(self::prefix . 'badgeNine', 'Untouchable');
            default:
                return '';
        }
    }
}
