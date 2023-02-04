import { RxStompService } from '@services/rxStomp/rxStomp.service';
import { myRxStompConfig } from '@services/rxStomp/rxStompConfig.config';

export function rxStompServiceFactory() {
  const rxStomp = new RxStompService();
  rxStomp.configure(myRxStompConfig);
  rxStomp.activate();
  return rxStomp;
}