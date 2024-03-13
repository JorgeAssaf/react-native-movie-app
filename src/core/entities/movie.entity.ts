export interface Movie {
  id: number;

  title: string;
  overview: string;
  popularity: number;
  poster: string;
  release_date: Date;
  backdrop: string;
}
export enum OriginalLanguage {
  En = 'en',
  Es = 'es',
  Pt = 'pt',
}

export interface FullMovie extends Movie {
  budget: number;
  genres: string[];
  original_language: string;
  original_title: string;
  overview: string;
  poster: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  spoken_languages: SpokenLanguage[];
  status: string;
  video: boolean;
}

export interface ProductionCompany {
  id: number;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}
