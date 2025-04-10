import { VNode, ComponentInternalInstance } from 'vue';

export declare const messageTypes: readonly ["info", "success", "warning", "danger", "error"];
export type messageType = (typeof messageTypes)[number];
export interface MessageHandler {
    close(): void;
}
export type MessageFn = {
    (props: MessageParams): MessageHandler;
    closeAll(type?: messageType): void;
};
export type MessageTypeFn = (props: MessageParams) => MessageHandler;
export interface Message extends MessageFn {
    success: MessageTypeFn;
    warning: MessageTypeFn;
    info: MessageTypeFn;
    danger: MessageTypeFn;
    error: MessageTypeFn;
}
export interface MessageProps {
    id: string;
    message?: string | VNode | (() => VNode);
    duration?: number;
    showClose?: boolean;
    center?: boolean;
    type?: messageType;
    offset?: number;
    zIndex: number;
    transitionName?: string;
    onDestory(): void;
}
export type MessageOptions = Partial<Omit<MessageProps, "id">>;
export type MessageParams = string | VNode | MessageOptions;
export interface MessageInstance {
    id: string;
    vnode: VNode;
    props: MessageProps;
    vm: ComponentInternalInstance;
    handler: MessageHandler;
}
export type CreateMessageProps = Omit<MessageProps, "onDestory" | "id" | "zIndex">;
