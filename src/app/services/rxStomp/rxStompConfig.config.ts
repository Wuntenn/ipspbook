import { RxStompConfig } from '@stomp/rx-stomp';

export const myRxStompConfig: RxStompConfig = {
  // Which server?
  //brokerURL: 'ws://ec2-18-130-236-146.eu-west-2.compute.amazonaws.com:8080/sportsbook',
  brokerURL: 'ws://localhost:4200/websocket',

  // Headers
  // Typical keys: login, passcode, host
  /*
  connectHeaders: {
    login: 'guest',
    passcode: 'guest',
  },
  */

  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeatIncoming: 0, // Typical value 0 - disabled
  heartbeatOutgoing: 20000, // Typical value 20000 - every 20 seconds

  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 500 (500 milli seconds)
  reconnectDelay: 5000,

  // Will log diagnostics on console
  // It can be quite verbose, not recommended in production
  // Skip this key to stop logging to console
  debug: (msg: string): void => {
    console.log(new Date(), msg);
  },
};