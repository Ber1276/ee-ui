export declare const ErPopconfirm: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        icon: {
            type: import('vue').PropType<string>;
            default: string;
        };
        title: {
            type: import('vue').PropType<string>;
            required: true;
            default: string;
        };
        confirmButtonText: {
            type: import('vue').PropType<string>;
        };
        cancelButtonText: {
            type: import('vue').PropType<string>;
        };
        cancelButtonType: {
            type: import('vue').PropType<import('packages/core').ButtonType>;
        };
        confirmButtonType: {
            type: import('vue').PropType<import('packages/core').ButtonType>;
            default: string;
        };
        iconColor: {
            type: import('vue').PropType<string>;
            default: string;
        };
        hideIcon: {
            type: import('vue').PropType<boolean>;
        };
        hideAfter: {
            type: import('vue').PropType<number>;
            default: number;
        };
        width: {
            type: import('vue').PropType<string | number>;
            default: number;
        };
    }>> & Readonly<{
        onConfirm?: ((value: MouseEvent) => any) | undefined;
        onCancel?: ((value: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        confirm: (value: MouseEvent) => void;
        cancel: (value: MouseEvent) => void;
    }, import('vue').PublicProps, {
        icon: string;
        title: string;
        confirmButtonType: import('packages/core').ButtonType;
        iconColor: string;
        hideAfter: number;
        width: number | string;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        icon: {
            type: import('vue').PropType<string>;
            default: string;
        };
        title: {
            type: import('vue').PropType<string>;
            required: true;
            default: string;
        };
        confirmButtonText: {
            type: import('vue').PropType<string>;
        };
        cancelButtonText: {
            type: import('vue').PropType<string>;
        };
        cancelButtonType: {
            type: import('vue').PropType<import('packages/core').ButtonType>;
        };
        confirmButtonType: {
            type: import('vue').PropType<import('packages/core').ButtonType>;
            default: string;
        };
        iconColor: {
            type: import('vue').PropType<string>;
            default: string;
        };
        hideIcon: {
            type: import('vue').PropType<boolean>;
        };
        hideAfter: {
            type: import('vue').PropType<number>;
            default: number;
        };
        width: {
            type: import('vue').PropType<string | number>;
            default: number;
        };
    }>> & Readonly<{
        onConfirm?: ((value: MouseEvent) => any) | undefined;
        onCancel?: ((value: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, {
        icon: string;
        title: string;
        confirmButtonType: import('packages/core').ButtonType;
        iconColor: string;
        hideAfter: number;
        width: number | string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    icon: {
        type: import('vue').PropType<string>;
        default: string;
    };
    title: {
        type: import('vue').PropType<string>;
        required: true;
        default: string;
    };
    confirmButtonText: {
        type: import('vue').PropType<string>;
    };
    cancelButtonText: {
        type: import('vue').PropType<string>;
    };
    cancelButtonType: {
        type: import('vue').PropType<import('packages/core').ButtonType>;
    };
    confirmButtonType: {
        type: import('vue').PropType<import('packages/core').ButtonType>;
        default: string;
    };
    iconColor: {
        type: import('vue').PropType<string>;
        default: string;
    };
    hideIcon: {
        type: import('vue').PropType<boolean>;
    };
    hideAfter: {
        type: import('vue').PropType<number>;
        default: number;
    };
    width: {
        type: import('vue').PropType<string | number>;
        default: number;
    };
}>> & Readonly<{
    onConfirm?: ((value: MouseEvent) => any) | undefined;
    onCancel?: ((value: MouseEvent) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    confirm: (value: MouseEvent) => void;
    cancel: (value: MouseEvent) => void;
}, string, {
    icon: string;
    title: string;
    confirmButtonType: import('packages/core').ButtonType;
    iconColor: string;
    hideAfter: number;
    width: number | string;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        reference?(_: {}): any;
    };
}) & import('vue').Plugin;
export * from './types';
