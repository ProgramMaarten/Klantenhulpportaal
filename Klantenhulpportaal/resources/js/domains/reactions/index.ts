import {Reaction} from './types';
import {createOverviewRoute} from '../../services/router/factory';
import {setTranslation} from '../../services/translation';
import { storeModuleFactory } from '../../services/store';
import OverviewPage from './pages/Overview.vue';

export const REACTION_DOMAIN_NAME = 'reactions';

setTranslation(REACTION_DOMAIN_NAME, {
    singular: 'Notitie',
    plural: 'notities',
});

export const reactionStore = storeModuleFactory<Reaction>(REACTION_DOMAIN_NAME);

export const reactionRoutes = [createOverviewRoute(REACTION_DOMAIN_NAME, OverviewPage)];
