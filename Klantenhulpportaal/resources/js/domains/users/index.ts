import {User} from './types';
import {createOverviewRoute} from '../../services/router/factory';
import {setTranslation} from '../../services/translation';
import {storeModuleFactory} from '../../services/store';
import OverviewPage from './../users/pages/Overview.vue';

export const USER_DOMAIN_NAME = 'users';

setTranslation(USER_DOMAIN_NAME, {
    singular: 'gebruiker',
    plural: 'gebruikers',
});

export const userStore = storeModuleFactory<User>(USER_DOMAIN_NAME);

export const userRoutes = [createOverviewRoute(USER_DOMAIN_NAME, OverviewPage)];