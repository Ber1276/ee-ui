import { MessageFn, Message, MessageProps, messageType } from './types';

export declare const messageDefaults: {
    readonly type: "info";
    readonly duration: 3000;
    readonly offset: 10;
    readonly transitionName: "fade-up";
};
export declare const message: MessageFn & Partial<Message>;
export declare function getLastBottomOffset(this: MessageProps): any;
export declare function closeAll(type?: messageType): void;
declare const _default: Message;
export default _default;
