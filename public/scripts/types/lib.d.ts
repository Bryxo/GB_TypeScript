export declare function renderBlock(elementId: string, html: string): void;
export declare function renderToast(message: {
    text: string;
    type: string;
} | null, action: {
    name: string;
    handler: () => void;
} | null): void;
