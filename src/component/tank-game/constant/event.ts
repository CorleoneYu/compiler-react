import EventEmitter from 'wolfy87-eventemitter';
export const eventEmitter = new EventEmitter();


export const EVENTS = {
  MOVE: 'MOVE',
  TURN_LEFT: 'TURN_LEFT',
  TURN_RIGHT: 'TURN_RIGHT',
  TANK_CHANGE: 'TANK_CHANGE',
  CAN_MOVE: 'CAN_MOVE',
};

