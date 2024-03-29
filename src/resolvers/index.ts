import { Subscription } from './Subscription'
import types from './Types'

const path = require("path");
import { mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';


const resolversQuery = loadFilesSync(path.join(__dirname, "./Query/**/*.ts"));
const Query = mergeResolvers(resolversQuery);

const resolversMutation = loadFilesSync(path.join(__dirname, "./Mutation/**/*.ts"));
const Mutation = mergeResolvers(resolversMutation);

export default {
  Query,
  Mutation,
  Subscription,
  ...types
};
