import asyncRoute from 'lib/asyncRoute';

export const Home = asyncRoute(() => import('./Home'));
export const ConcertList = asyncRoute(() => import('./ConcertList'));
export const MyPage = asyncRoute(() => import('./MyPage'));
