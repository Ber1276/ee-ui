export declare const ErInput: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<"small" | "large">;
        };
        type: {
            type: import('vue').PropType<string>;
            default: string;
        };
        form: {
            type: import('vue').PropType<string>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        autofocus: {
            type: import('vue').PropType<boolean>;
        };
        modelValue: {
            type: import('vue').PropType<string>;
            required: true;
        };
        id: {
            type: import('vue').PropType<string>;
        };
        placeholder: {
            type: import('vue').PropType<string>;
        };
        clearable: {
            type: import('vue').PropType<boolean>;
        };
        showPassword: {
            type: import('vue').PropType<boolean>;
        };
        readonly: {
            type: import('vue').PropType<boolean>;
        };
        autocomplete: {
            type: import('vue').PropType<string>;
            default: string;
        };
    }>> & Readonly<{
        onClear?: (() => any) | undefined;
        onInput?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onBlur?: ((value: FocusEvent) => any) | undefined;
        onFocus?: ((value: FocusEvent) => any) | undefined;
    }>, {
        ref: import('vue').Ref<HTMLInputElement | HTMLTextAreaElement | void>;
        focus(): Promise<void>;
        blur(): void;
        select(): void;
        clear(): void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: string) => void;
        input: (value: string) => void;
        change: (value: string) => void;
        focus: (value: FocusEvent) => void;
        blur: (value: FocusEvent) => void;
        clear: () => void;
    }, import('vue').PublicProps, {
        type: string;
        autocomplete: string;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<"small" | "large">;
        };
        type: {
            type: import('vue').PropType<string>;
            default: string;
        };
        form: {
            type: import('vue').PropType<string>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        autofocus: {
            type: import('vue').PropType<boolean>;
        };
        modelValue: {
            type: import('vue').PropType<string>;
            required: true;
        };
        id: {
            type: import('vue').PropType<string>;
        };
        placeholder: {
            type: import('vue').PropType<string>;
        };
        clearable: {
            type: import('vue').PropType<boolean>;
        };
        showPassword: {
            type: import('vue').PropType<boolean>;
        };
        readonly: {
            type: import('vue').PropType<boolean>;
        };
        autocomplete: {
            type: import('vue').PropType<string>;
            default: string;
        };
    }>> & Readonly<{
        onClear?: (() => any) | undefined;
        onInput?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onBlur?: ((value: FocusEvent) => any) | undefined;
        onFocus?: ((value: FocusEvent) => any) | undefined;
    }>, {
        ref: import('vue').Ref<HTMLInputElement | HTMLTextAreaElement | void>;
        focus(): Promise<void>;
        blur(): void;
        select(): void;
        clear(): void;
    }, {}, {}, {}, {
        type: string;
        autocomplete: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    size: {
        type: import('vue').PropType<"small" | "large">;
    };
    type: {
        type: import('vue').PropType<string>;
        default: string;
    };
    form: {
        type: import('vue').PropType<string>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    autofocus: {
        type: import('vue').PropType<boolean>;
    };
    modelValue: {
        type: import('vue').PropType<string>;
        required: true;
    };
    id: {
        type: import('vue').PropType<string>;
    };
    placeholder: {
        type: import('vue').PropType<string>;
    };
    clearable: {
        type: import('vue').PropType<boolean>;
    };
    showPassword: {
        type: import('vue').PropType<boolean>;
    };
    readonly: {
        type: import('vue').PropType<boolean>;
    };
    autocomplete: {
        type: import('vue').PropType<string>;
        default: string;
    };
}>> & Readonly<{
    onClear?: (() => any) | undefined;
    onInput?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    onBlur?: ((value: FocusEvent) => any) | undefined;
    onFocus?: ((value: FocusEvent) => any) | undefined;
}>, {
    ref: import('vue').Ref<HTMLInputElement | HTMLTextAreaElement | void>;
    focus(): Promise<void>;
    blur(): void;
    select(): void;
    clear(): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
    input: (value: string) => void;
    change: (value: string) => void;
    focus: (value: FocusEvent) => void;
    blur: (value: FocusEvent) => void;
    clear: () => void;
}, string, {
    type: string;
    autocomplete: string;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        prepend?(_: {}): any;
        prefix?(_: {}): any;
        suffix?(_: {}): any;
        append?(_: {}): any;
    };
}) & import('vue').Plugin;
export * from './types';
