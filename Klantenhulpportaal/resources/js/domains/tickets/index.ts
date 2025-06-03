import {Ticket} from './types';
import {createOverviewRoute} from '../../services/router/factory';
import {setTranslation} from '../../services/translation';
import { storeModuleFactory } from '../../services/store';
import OverviewPage from './pages/Overview.vue';

export const TICKET_DOMAIN_NAME = 'tickets';

setTranslation(TICKET_DOMAIN_NAME, {
    singular: 'ticket',
    plural: 'tickets',
});

export const ticketStore = storeModuleFactory<Ticket>(TICKET_DOMAIN_NAME);

export const ticketRoutes = [createOverviewRoute(TICKET_DOMAIN_NAME, OverviewPage)];

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  const month = monthNames[date.getMonth()];
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${day} ${month} ${year} ${hours}:${minutes}:${seconds}`;
}

export function ticketsByUserID(userID:number){
  

}