import { Chat, Gists, Greeting, Profile } from '@components';
import { Auth } from '@pages/auth/Auth';

export const PAGES = [
    {
        name: 'main_page',
        title: 'Home',
        url: '/',
        component: Greeting,
        isProtected: false,
    },
    {
        name: 'profile_page',
        title: 'Profile',
        url: '/profile',
        component: Profile,
        isProtected: true,
    },
    {
        name: 'chats_page',
        title: 'Chats',
        url: '/chats',
        component: Chat,
        isProtected: true,
    },
    {
        name: 'gists_page',
        title: 'Gists',
        url: '/gists',
        component: Gists,
        isProtected: true,
    },
    {
        name: 'auth_page',
        title: 'Auth',
        url: '/auth',
        component: Auth,
        isProtected: false,
    },
];
