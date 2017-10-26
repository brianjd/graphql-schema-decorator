/**
 * Arguments for an Union type on graphql schema
 */
export interface UnionOption<T> {
  /**
   * (Optional) Description
   */
  description?: string;

  /**
   * Concrete object types
   */
  types: any[];

  /**
   * Resolver function to inform schema what type should be returned based on the value provided
   */
  resolver: (obj: T, context: any, info: any) => Promise<string> | string | null;
}
