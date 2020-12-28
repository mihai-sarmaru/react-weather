export interface ILocalization {
    language: Map<string, string>;
    weekArray: string[];
    selected: Languages;
}

export enum Languages {
    ENGLISH,
    ROMANIAN
}