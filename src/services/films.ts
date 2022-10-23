import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';

export interface Film {
  id: string;
  title: string;
}

interface FilmResponse {
  data: {
    film: Film;
  };
}

export interface FilmsResponse {
  data: {
    allFilms: {
      films: Film[];
    };
  };
}

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  }),

  endpoints: (builder) => ({
    getFilm: builder.query<Film, string>({
      query: (id) => ({
        document: gql`
          query GetFilm($id: ID!) {
            film(id: $id) {
              id
              title
            }
          }
        `,
        variables: {
          id,
        },
      }),
      transformResponse: (data: FilmResponse['data']) => data.film,
    }),

    getFilms: builder.query<Film[], void>({
      query: () => ({
        document: gql`
          query GetFilms {
            allFilms {
              films {
                id
                title
              }
            }
          }
        `,
      }),
      transformResponse: (data: FilmsResponse['data']) => data.allFilms.films,
    }),
  }),
});

export const { useGetFilmsQuery, useGetFilmQuery } = api;
