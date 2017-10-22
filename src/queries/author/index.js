/* eslint-disable import/prefer-default-export, no-unused-vars */
import {
  GraphQLInt,
} from 'graphql';
import { AuthorType } from '../../types/author';

const AuthorData = {
  id: 1,
  firstName: 'Ihsan',
  lastName: 'Satriawan',
  posts: 'Mantap Pak Bok',
};

const AuthorQuery = {
  type: AuthorType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (_, args) => AuthorData,
};

export {
  AuthorQuery,
};
