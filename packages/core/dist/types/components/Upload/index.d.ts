export declare const ErUpload: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        action: {
            type: import('vue').PropType<string>;
            required: true;
        };
        defaultFileList: {
            type: import('vue').PropType<import('packages/core').UploadFile[]>;
        };
        beforeUpload: {
            type: import('vue').PropType<(file: File) => boolean | Promise<File>>;
        };
        onChange: {
            type: import('vue').PropType<(file: File) => void>;
        };
        onProgress: {
            type: import('vue').PropType<(percentage: number, file: File) => void>;
        };
        onSuccess: {
            type: import('vue').PropType<(data: any, file: File) => void>;
        };
        onError: {
            type: import('vue').PropType<(err: any, file: File) => void>;
        };
        onRemove: {
            type: import('vue').PropType<(file: import('packages/core').UploadFile) => void>;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        action: {
            type: import('vue').PropType<string>;
            required: true;
        };
        defaultFileList: {
            type: import('vue').PropType<import('packages/core').UploadFile[]>;
        };
        beforeUpload: {
            type: import('vue').PropType<(file: File) => boolean | Promise<File>>;
        };
        onChange: {
            type: import('vue').PropType<(file: File) => void>;
        };
        onProgress: {
            type: import('vue').PropType<(percentage: number, file: File) => void>;
        };
        onSuccess: {
            type: import('vue').PropType<(data: any, file: File) => void>;
        };
        onError: {
            type: import('vue').PropType<(err: any, file: File) => void>;
        };
        onRemove: {
            type: import('vue').PropType<(file: import('packages/core').UploadFile) => void>;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    action: {
        type: import('vue').PropType<string>;
        required: true;
    };
    defaultFileList: {
        type: import('vue').PropType<import('packages/core').UploadFile[]>;
    };
    beforeUpload: {
        type: import('vue').PropType<(file: File) => boolean | Promise<File>>;
    };
    onChange: {
        type: import('vue').PropType<(file: File) => void>;
    };
    onProgress: {
        type: import('vue').PropType<(percentage: number, file: File) => void>;
    };
    onSuccess: {
        type: import('vue').PropType<(data: any, file: File) => void>;
    };
    onError: {
        type: import('vue').PropType<(err: any, file: File) => void>;
    };
    onRemove: {
        type: import('vue').PropType<(file: import('packages/core').UploadFile) => void>;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin;
export * from './types';
