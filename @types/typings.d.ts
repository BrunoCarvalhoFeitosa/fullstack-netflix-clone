export interface DataUserProps {
    created_at: Date;
    email: string;
    emailVerified: Date;
    favoritesIds: Array<string>;
    hashedPassword: string;
    id: string;
    image: string;
    name: string;
    updated_at: Date;
}

export type DataUserType = {
    created_at: Date;
    email: string;
    emailVerified: Date;
    favoritesIds: Array<string>;
    hashedPassword: string;
    id: string;
    image: string;
    name: string;
    updated_at: Date;
}

export interface DataFilmsInterface {
    id: string;
    title: string;
    description: string
    genre: string
    thumbnailUrl: string
    videoUrl: string
    year: string
    classification: string
    duration: string
    rating: string
}

export interface CatalogueProps {
    cover: any;
    title: string;
    description: string
    resume: string;
    duration: string;
    trailerLink: string;
    season: number;
}

export type DataFilmsAndMoviesType = {
    id: string;
    title: string;
    description: string
    genre: string
    thumbnailUrl: string
    videoUrl: string
    year: string
    classification: string
    duration: string
    rating: string
}