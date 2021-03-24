import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import actor from './doc/actor'
import movie from './doc/movie'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    actor,
    movie
  ]),
})
