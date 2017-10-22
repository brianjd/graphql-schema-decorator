import { Query, Mutation, Schema, schemaFactory, Subscription } from 'graphql-schema-decorator';
import UserQuery from './user.query';
import UserMutation from './user.mutation';
import UserSubscription from './user.subscription';

@Schema()
class RootSchema {
	@Query()
	UserQuery: UserQuery;

	@Mutation()
	UserMutation: UserMutation;

	@Subscription()
	UserSubscription: UserSubscription;
}


const schema: any = schemaFactory(RootSchema);

import * as fs from 'fs';

export default schema;
