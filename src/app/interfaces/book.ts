export interface Book {
    id?: string;
    etang: string;
    volumeInfo: {
        authors: [],
        categories: [],
        description: string,
        title: string,
        subtitle: string
    };
    detail?: string;
    items: any;
}
