import {Note} from './types';
import {createOverviewRoute} from '../../services/router/factory';
import {setTranslation} from '../../services/translation';
import { storeModuleFactory } from '../../services/store';
import OverviewPage from './pages/Overview.vue';

export const NOTE_DOMAIN_NAME = 'notes';

setTranslation(NOTE_DOMAIN_NAME, {
    singular: 'Notitie',
    plural: 'notities',
});

export const noteStore = storeModuleFactory<Note>(NOTE_DOMAIN_NAME);

export const noteRoutes = [createOverviewRoute(NOTE_DOMAIN_NAME, OverviewPage)];
