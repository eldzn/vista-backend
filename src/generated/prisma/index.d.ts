
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model AgeRating
 * 
 */
export type AgeRating = $Result.DefaultSelection<Prisma.$AgeRatingPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model PlayList
 * 
 */
export type PlayList = $Result.DefaultSelection<Prisma.$PlayListPayload>
/**
 * Model PlayListVideo
 * 
 */
export type PlayListVideo = $Result.DefaultSelection<Prisma.$PlayListVideoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ageRating`: Exposes CRUD operations for the **AgeRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgeRatings
    * const ageRatings = await prisma.ageRating.findMany()
    * ```
    */
  get ageRating(): Prisma.AgeRatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playList`: Exposes CRUD operations for the **PlayList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayLists
    * const playLists = await prisma.playList.findMany()
    * ```
    */
  get playList(): Prisma.PlayListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playListVideo`: Exposes CRUD operations for the **PlayListVideo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayListVideos
    * const playListVideos = await prisma.playListVideo.findMany()
    * ```
    */
  get playListVideo(): Prisma.PlayListVideoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Video: 'Video',
    Tag: 'Tag',
    Category: 'Category',
    AgeRating: 'AgeRating',
    Comment: 'Comment',
    PlayList: 'PlayList',
    PlayListVideo: 'PlayListVideo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "video" | "tag" | "category" | "ageRating" | "comment" | "playList" | "playListVideo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      AgeRating: {
        payload: Prisma.$AgeRatingPayload<ExtArgs>
        fields: Prisma.AgeRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgeRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgeRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeRatingPayload>
          }
          findFirst: {
            args: Prisma.AgeRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgeRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeRatingPayload>
          }
          findMany: {
            args: Prisma.AgeRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeRatingPayload>[]
          }
          create: {
            args: Prisma.AgeRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeRatingPayload>
          }
          createMany: {
            args: Prisma.AgeRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgeRatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeRatingPayload>[]
          }
          delete: {
            args: Prisma.AgeRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeRatingPayload>
          }
          update: {
            args: Prisma.AgeRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeRatingPayload>
          }
          deleteMany: {
            args: Prisma.AgeRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgeRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgeRatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeRatingPayload>[]
          }
          upsert: {
            args: Prisma.AgeRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeRatingPayload>
          }
          aggregate: {
            args: Prisma.AgeRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgeRating>
          }
          groupBy: {
            args: Prisma.AgeRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgeRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgeRatingCountArgs<ExtArgs>
            result: $Utils.Optional<AgeRatingCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      PlayList: {
        payload: Prisma.$PlayListPayload<ExtArgs>
        fields: Prisma.PlayListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload>
          }
          findFirst: {
            args: Prisma.PlayListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload>
          }
          findMany: {
            args: Prisma.PlayListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload>[]
          }
          create: {
            args: Prisma.PlayListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload>
          }
          createMany: {
            args: Prisma.PlayListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload>[]
          }
          delete: {
            args: Prisma.PlayListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload>
          }
          update: {
            args: Prisma.PlayListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload>
          }
          deleteMany: {
            args: Prisma.PlayListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload>[]
          }
          upsert: {
            args: Prisma.PlayListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListPayload>
          }
          aggregate: {
            args: Prisma.PlayListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayList>
          }
          groupBy: {
            args: Prisma.PlayListGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayListGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayListCountArgs<ExtArgs>
            result: $Utils.Optional<PlayListCountAggregateOutputType> | number
          }
        }
      }
      PlayListVideo: {
        payload: Prisma.$PlayListVideoPayload<ExtArgs>
        fields: Prisma.PlayListVideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayListVideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListVideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayListVideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListVideoPayload>
          }
          findFirst: {
            args: Prisma.PlayListVideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListVideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayListVideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListVideoPayload>
          }
          findMany: {
            args: Prisma.PlayListVideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListVideoPayload>[]
          }
          create: {
            args: Prisma.PlayListVideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListVideoPayload>
          }
          createMany: {
            args: Prisma.PlayListVideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayListVideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListVideoPayload>[]
          }
          delete: {
            args: Prisma.PlayListVideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListVideoPayload>
          }
          update: {
            args: Prisma.PlayListVideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListVideoPayload>
          }
          deleteMany: {
            args: Prisma.PlayListVideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayListVideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayListVideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListVideoPayload>[]
          }
          upsert: {
            args: Prisma.PlayListVideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayListVideoPayload>
          }
          aggregate: {
            args: Prisma.PlayListVideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayListVideo>
          }
          groupBy: {
            args: Prisma.PlayListVideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayListVideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayListVideoCountArgs<ExtArgs>
            result: $Utils.Optional<PlayListVideoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    video?: VideoOmit
    tag?: TagOmit
    category?: CategoryOmit
    ageRating?: AgeRatingOmit
    comment?: CommentOmit
    playList?: PlayListOmit
    playListVideo?: PlayListVideoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    videos: number
    favoriteVideos: number
    likesVideo: number
    comments: number
    following: number
    followers: number
    playlist: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | UserCountOutputTypeCountVideosArgs
    favoriteVideos?: boolean | UserCountOutputTypeCountFavoriteVideosArgs
    likesVideo?: boolean | UserCountOutputTypeCountLikesVideoArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    following?: boolean | UserCountOutputTypeCountFollowingArgs
    followers?: boolean | UserCountOutputTypeCountFollowersArgs
    playlist?: boolean | UserCountOutputTypeCountPlaylistArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayListWhereInput
  }


  /**
   * Count Type VideoCountOutputType
   */

  export type VideoCountOutputType = {
    tags: number
    favoritedBy: number
    likedBy: number
    comments: number
    playlistVideos: number
  }

  export type VideoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | VideoCountOutputTypeCountTagsArgs
    favoritedBy?: boolean | VideoCountOutputTypeCountFavoritedByArgs
    likedBy?: boolean | VideoCountOutputTypeCountLikedByArgs
    comments?: boolean | VideoCountOutputTypeCountCommentsArgs
    playlistVideos?: boolean | VideoCountOutputTypeCountPlaylistVideosArgs
  }

  // Custom InputTypes
  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     */
    select?: VideoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountFavoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountLikedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountPlaylistVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayListVideoWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    videos: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | TagCountOutputTypeCountVideosArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    videos: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | CategoryCountOutputTypeCountVideosArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }


  /**
   * Count Type AgeRatingCountOutputType
   */

  export type AgeRatingCountOutputType = {
    videos: number
  }

  export type AgeRatingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | AgeRatingCountOutputTypeCountVideosArgs
  }

  // Custom InputTypes
  /**
   * AgeRatingCountOutputType without action
   */
  export type AgeRatingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeRatingCountOutputType
     */
    select?: AgeRatingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgeRatingCountOutputType without action
   */
  export type AgeRatingCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }


  /**
   * Count Type PlayListCountOutputType
   */

  export type PlayListCountOutputType = {
    playListVideos: number
  }

  export type PlayListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playListVideos?: boolean | PlayListCountOutputTypeCountPlayListVideosArgs
  }

  // Custom InputTypes
  /**
   * PlayListCountOutputType without action
   */
  export type PlayListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayListCountOutputType
     */
    select?: PlayListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayListCountOutputType without action
   */
  export type PlayListCountOutputTypeCountPlayListVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayListVideoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nickname: string | null
    email: string | null
    backupEmail: string | null
    passwordHash: string | null
    about: string | null
    birthDate: string | null
    passwordChangeAt: Date | null
    avatarFileName: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nickname: string | null
    email: string | null
    backupEmail: string | null
    passwordHash: string | null
    about: string | null
    birthDate: string | null
    passwordChangeAt: Date | null
    avatarFileName: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nickname: number
    email: number
    backupEmail: number
    passwordHash: number
    about: number
    birthDate: number
    passwordChangeAt: number
    avatarFileName: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nickname?: true
    email?: true
    backupEmail?: true
    passwordHash?: true
    about?: true
    birthDate?: true
    passwordChangeAt?: true
    avatarFileName?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nickname?: true
    email?: true
    backupEmail?: true
    passwordHash?: true
    about?: true
    birthDate?: true
    passwordChangeAt?: true
    avatarFileName?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nickname?: true
    email?: true
    backupEmail?: true
    passwordHash?: true
    about?: true
    birthDate?: true
    passwordChangeAt?: true
    avatarFileName?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nickname: string
    email: string
    backupEmail: string | null
    passwordHash: string
    about: string | null
    birthDate: string | null
    passwordChangeAt: Date | null
    avatarFileName: string | null
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    email?: boolean
    backupEmail?: boolean
    passwordHash?: boolean
    about?: boolean
    birthDate?: boolean
    passwordChangeAt?: boolean
    avatarFileName?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    videos?: boolean | User$videosArgs<ExtArgs>
    favoriteVideos?: boolean | User$favoriteVideosArgs<ExtArgs>
    likesVideo?: boolean | User$likesVideoArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    following?: boolean | User$followingArgs<ExtArgs>
    followers?: boolean | User$followersArgs<ExtArgs>
    playlist?: boolean | User$playlistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    email?: boolean
    backupEmail?: boolean
    passwordHash?: boolean
    about?: boolean
    birthDate?: boolean
    passwordChangeAt?: boolean
    avatarFileName?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    email?: boolean
    backupEmail?: boolean
    passwordHash?: boolean
    about?: boolean
    birthDate?: boolean
    passwordChangeAt?: boolean
    avatarFileName?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nickname?: boolean
    email?: boolean
    backupEmail?: boolean
    passwordHash?: boolean
    about?: boolean
    birthDate?: boolean
    passwordChangeAt?: boolean
    avatarFileName?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nickname" | "email" | "backupEmail" | "passwordHash" | "about" | "birthDate" | "passwordChangeAt" | "avatarFileName" | "avatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | User$videosArgs<ExtArgs>
    favoriteVideos?: boolean | User$favoriteVideosArgs<ExtArgs>
    likesVideo?: boolean | User$likesVideoArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    following?: boolean | User$followingArgs<ExtArgs>
    followers?: boolean | User$followersArgs<ExtArgs>
    playlist?: boolean | User$playlistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      videos: Prisma.$VideoPayload<ExtArgs>[]
      favoriteVideos: Prisma.$VideoPayload<ExtArgs>[]
      likesVideo: Prisma.$VideoPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      following: Prisma.$UserPayload<ExtArgs>[]
      followers: Prisma.$UserPayload<ExtArgs>[]
      playlist: Prisma.$PlayListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nickname: string
      email: string
      backupEmail: string | null
      passwordHash: string
      about: string | null
      birthDate: string | null
      passwordChangeAt: Date | null
      avatarFileName: string | null
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    videos<T extends User$videosArgs<ExtArgs> = {}>(args?: Subset<T, User$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoriteVideos<T extends User$favoriteVideosArgs<ExtArgs> = {}>(args?: Subset<T, User$favoriteVideosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likesVideo<T extends User$likesVideoArgs<ExtArgs> = {}>(args?: Subset<T, User$likesVideoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    following<T extends User$followingArgs<ExtArgs> = {}>(args?: Subset<T, User$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followers<T extends User$followersArgs<ExtArgs> = {}>(args?: Subset<T, User$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playlist<T extends User$playlistArgs<ExtArgs> = {}>(args?: Subset<T, User$playlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly backupEmail: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly about: FieldRef<"User", 'String'>
    readonly birthDate: FieldRef<"User", 'String'>
    readonly passwordChangeAt: FieldRef<"User", 'DateTime'>
    readonly avatarFileName: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.videos
   */
  export type User$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * User.favoriteVideos
   */
  export type User$favoriteVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * User.likesVideo
   */
  export type User$likesVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.following
   */
  export type User$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.followers
   */
  export type User$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.playlist
   */
  export type User$playlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    where?: PlayListWhereInput
    orderBy?: PlayListOrderByWithRelationInput | PlayListOrderByWithRelationInput[]
    cursor?: PlayListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayListScalarFieldEnum | PlayListScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    size: number | null
    views: number | null
  }

  export type VideoSumAggregateOutputType = {
    size: number | null
    views: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: string | null
    originalName: string | null
    url: string | null
    name: string | null
    mimetype: string | null
    size: number | null
    title: string | null
    description: string | null
    isPublic: boolean | null
    createdAt: Date | null
    userId: string | null
    categoryId: string | null
    ageRatingId: string | null
    views: number | null
  }

  export type VideoMaxAggregateOutputType = {
    id: string | null
    originalName: string | null
    url: string | null
    name: string | null
    mimetype: string | null
    size: number | null
    title: string | null
    description: string | null
    isPublic: boolean | null
    createdAt: Date | null
    userId: string | null
    categoryId: string | null
    ageRatingId: string | null
    views: number | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    originalName: number
    url: number
    name: number
    mimetype: number
    size: number
    title: number
    description: number
    isPublic: number
    createdAt: number
    userId: number
    categoryId: number
    ageRatingId: number
    views: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    size?: true
    views?: true
  }

  export type VideoSumAggregateInputType = {
    size?: true
    views?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    originalName?: true
    url?: true
    name?: true
    mimetype?: true
    size?: true
    title?: true
    description?: true
    isPublic?: true
    createdAt?: true
    userId?: true
    categoryId?: true
    ageRatingId?: true
    views?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    originalName?: true
    url?: true
    name?: true
    mimetype?: true
    size?: true
    title?: true
    description?: true
    isPublic?: true
    createdAt?: true
    userId?: true
    categoryId?: true
    ageRatingId?: true
    views?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    originalName?: true
    url?: true
    name?: true
    mimetype?: true
    size?: true
    title?: true
    description?: true
    isPublic?: true
    createdAt?: true
    userId?: true
    categoryId?: true
    ageRatingId?: true
    views?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description: string | null
    isPublic: boolean
    createdAt: Date
    userId: string
    categoryId: string | null
    ageRatingId: string | null
    views: number
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalName?: boolean
    url?: boolean
    name?: boolean
    mimetype?: boolean
    size?: boolean
    title?: boolean
    description?: boolean
    isPublic?: boolean
    createdAt?: boolean
    userId?: boolean
    categoryId?: boolean
    ageRatingId?: boolean
    views?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Video$categoryArgs<ExtArgs>
    ageRating?: boolean | Video$ageRatingArgs<ExtArgs>
    tags?: boolean | Video$tagsArgs<ExtArgs>
    favoritedBy?: boolean | Video$favoritedByArgs<ExtArgs>
    likedBy?: boolean | Video$likedByArgs<ExtArgs>
    comments?: boolean | Video$commentsArgs<ExtArgs>
    playlistVideos?: boolean | Video$playlistVideosArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalName?: boolean
    url?: boolean
    name?: boolean
    mimetype?: boolean
    size?: boolean
    title?: boolean
    description?: boolean
    isPublic?: boolean
    createdAt?: boolean
    userId?: boolean
    categoryId?: boolean
    ageRatingId?: boolean
    views?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Video$categoryArgs<ExtArgs>
    ageRating?: boolean | Video$ageRatingArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalName?: boolean
    url?: boolean
    name?: boolean
    mimetype?: boolean
    size?: boolean
    title?: boolean
    description?: boolean
    isPublic?: boolean
    createdAt?: boolean
    userId?: boolean
    categoryId?: boolean
    ageRatingId?: boolean
    views?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Video$categoryArgs<ExtArgs>
    ageRating?: boolean | Video$ageRatingArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    originalName?: boolean
    url?: boolean
    name?: boolean
    mimetype?: boolean
    size?: boolean
    title?: boolean
    description?: boolean
    isPublic?: boolean
    createdAt?: boolean
    userId?: boolean
    categoryId?: boolean
    ageRatingId?: boolean
    views?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "originalName" | "url" | "name" | "mimetype" | "size" | "title" | "description" | "isPublic" | "createdAt" | "userId" | "categoryId" | "ageRatingId" | "views", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Video$categoryArgs<ExtArgs>
    ageRating?: boolean | Video$ageRatingArgs<ExtArgs>
    tags?: boolean | Video$tagsArgs<ExtArgs>
    favoritedBy?: boolean | Video$favoritedByArgs<ExtArgs>
    likedBy?: boolean | Video$likedByArgs<ExtArgs>
    comments?: boolean | Video$commentsArgs<ExtArgs>
    playlistVideos?: boolean | Video$playlistVideosArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Video$categoryArgs<ExtArgs>
    ageRating?: boolean | Video$ageRatingArgs<ExtArgs>
  }
  export type VideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Video$categoryArgs<ExtArgs>
    ageRating?: boolean | Video$ageRatingArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
      ageRating: Prisma.$AgeRatingPayload<ExtArgs> | null
      tags: Prisma.$TagPayload<ExtArgs>[]
      favoritedBy: Prisma.$UserPayload<ExtArgs>[]
      likedBy: Prisma.$UserPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      playlistVideos: Prisma.$PlayListVideoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      originalName: string
      url: string
      name: string
      mimetype: string
      size: number
      title: string
      description: string | null
      isPublic: boolean
      createdAt: Date
      userId: string
      categoryId: string | null
      ageRatingId: string | null
      views: number
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends Video$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Video$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ageRating<T extends Video$ageRatingArgs<ExtArgs> = {}>(args?: Subset<T, Video$ageRatingArgs<ExtArgs>>): Prisma__AgeRatingClient<$Result.GetResult<Prisma.$AgeRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tags<T extends Video$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Video$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritedBy<T extends Video$favoritedByArgs<ExtArgs> = {}>(args?: Subset<T, Video$favoritedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedBy<T extends Video$likedByArgs<ExtArgs> = {}>(args?: Subset<T, Video$likedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Video$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Video$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playlistVideos<T extends Video$playlistVideosArgs<ExtArgs> = {}>(args?: Subset<T, Video$playlistVideosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayListVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'String'>
    readonly originalName: FieldRef<"Video", 'String'>
    readonly url: FieldRef<"Video", 'String'>
    readonly name: FieldRef<"Video", 'String'>
    readonly mimetype: FieldRef<"Video", 'String'>
    readonly size: FieldRef<"Video", 'Int'>
    readonly title: FieldRef<"Video", 'String'>
    readonly description: FieldRef<"Video", 'String'>
    readonly isPublic: FieldRef<"Video", 'Boolean'>
    readonly createdAt: FieldRef<"Video", 'DateTime'>
    readonly userId: FieldRef<"Video", 'String'>
    readonly categoryId: FieldRef<"Video", 'String'>
    readonly ageRatingId: FieldRef<"Video", 'String'>
    readonly views: FieldRef<"Video", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video updateManyAndReturn
   */
  export type VideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video.category
   */
  export type Video$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Video.ageRating
   */
  export type Video$ageRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeRating
     */
    select?: AgeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeRating
     */
    omit?: AgeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgeRatingInclude<ExtArgs> | null
    where?: AgeRatingWhereInput
  }

  /**
   * Video.tags
   */
  export type Video$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Video.favoritedBy
   */
  export type Video$favoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Video.likedBy
   */
  export type Video$likedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Video.comments
   */
  export type Video$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Video.playlistVideos
   */
  export type Video$playlistVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayListVideo
     */
    select?: PlayListVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayListVideo
     */
    omit?: PlayListVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListVideoInclude<ExtArgs> | null
    where?: PlayListVideoWhereInput
    orderBy?: PlayListVideoOrderByWithRelationInput | PlayListVideoOrderByWithRelationInput[]
    cursor?: PlayListVideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayListVideoScalarFieldEnum | PlayListVideoScalarFieldEnum[]
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    videos?: boolean | Tag$videosArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | Tag$videosArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      videos: Prisma.$VideoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    videos<T extends Tag$videosArgs<ExtArgs> = {}>(args?: Subset<T, Tag$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.videos
   */
  export type Tag$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    videos?: boolean | Category$videosArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | Category$videosArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      videos: Prisma.$VideoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    videos<T extends Category$videosArgs<ExtArgs> = {}>(args?: Subset<T, Category$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.videos
   */
  export type Category$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model AgeRating
   */

  export type AggregateAgeRating = {
    _count: AgeRatingCountAggregateOutputType | null
    _min: AgeRatingMinAggregateOutputType | null
    _max: AgeRatingMaxAggregateOutputType | null
  }

  export type AgeRatingMinAggregateOutputType = {
    id: string | null
    code: string | null
    createdAt: Date | null
  }

  export type AgeRatingMaxAggregateOutputType = {
    id: string | null
    code: string | null
    createdAt: Date | null
  }

  export type AgeRatingCountAggregateOutputType = {
    id: number
    code: number
    createdAt: number
    _all: number
  }


  export type AgeRatingMinAggregateInputType = {
    id?: true
    code?: true
    createdAt?: true
  }

  export type AgeRatingMaxAggregateInputType = {
    id?: true
    code?: true
    createdAt?: true
  }

  export type AgeRatingCountAggregateInputType = {
    id?: true
    code?: true
    createdAt?: true
    _all?: true
  }

  export type AgeRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgeRating to aggregate.
     */
    where?: AgeRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgeRatings to fetch.
     */
    orderBy?: AgeRatingOrderByWithRelationInput | AgeRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgeRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgeRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgeRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgeRatings
    **/
    _count?: true | AgeRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgeRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgeRatingMaxAggregateInputType
  }

  export type GetAgeRatingAggregateType<T extends AgeRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateAgeRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgeRating[P]>
      : GetScalarType<T[P], AggregateAgeRating[P]>
  }




  export type AgeRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgeRatingWhereInput
    orderBy?: AgeRatingOrderByWithAggregationInput | AgeRatingOrderByWithAggregationInput[]
    by: AgeRatingScalarFieldEnum[] | AgeRatingScalarFieldEnum
    having?: AgeRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgeRatingCountAggregateInputType | true
    _min?: AgeRatingMinAggregateInputType
    _max?: AgeRatingMaxAggregateInputType
  }

  export type AgeRatingGroupByOutputType = {
    id: string
    code: string
    createdAt: Date
    _count: AgeRatingCountAggregateOutputType | null
    _min: AgeRatingMinAggregateOutputType | null
    _max: AgeRatingMaxAggregateOutputType | null
  }

  type GetAgeRatingGroupByPayload<T extends AgeRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgeRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgeRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgeRatingGroupByOutputType[P]>
            : GetScalarType<T[P], AgeRatingGroupByOutputType[P]>
        }
      >
    >


  export type AgeRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    createdAt?: boolean
    videos?: boolean | AgeRating$videosArgs<ExtArgs>
    _count?: boolean | AgeRatingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ageRating"]>

  export type AgeRatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ageRating"]>

  export type AgeRatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ageRating"]>

  export type AgeRatingSelectScalar = {
    id?: boolean
    code?: boolean
    createdAt?: boolean
  }

  export type AgeRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "createdAt", ExtArgs["result"]["ageRating"]>
  export type AgeRatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | AgeRating$videosArgs<ExtArgs>
    _count?: boolean | AgeRatingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgeRatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AgeRatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AgeRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgeRating"
    objects: {
      videos: Prisma.$VideoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      createdAt: Date
    }, ExtArgs["result"]["ageRating"]>
    composites: {}
  }

  type AgeRatingGetPayload<S extends boolean | null | undefined | AgeRatingDefaultArgs> = $Result.GetResult<Prisma.$AgeRatingPayload, S>

  type AgeRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgeRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgeRatingCountAggregateInputType | true
    }

  export interface AgeRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgeRating'], meta: { name: 'AgeRating' } }
    /**
     * Find zero or one AgeRating that matches the filter.
     * @param {AgeRatingFindUniqueArgs} args - Arguments to find a AgeRating
     * @example
     * // Get one AgeRating
     * const ageRating = await prisma.ageRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgeRatingFindUniqueArgs>(args: SelectSubset<T, AgeRatingFindUniqueArgs<ExtArgs>>): Prisma__AgeRatingClient<$Result.GetResult<Prisma.$AgeRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgeRating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgeRatingFindUniqueOrThrowArgs} args - Arguments to find a AgeRating
     * @example
     * // Get one AgeRating
     * const ageRating = await prisma.ageRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgeRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, AgeRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgeRatingClient<$Result.GetResult<Prisma.$AgeRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgeRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgeRatingFindFirstArgs} args - Arguments to find a AgeRating
     * @example
     * // Get one AgeRating
     * const ageRating = await prisma.ageRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgeRatingFindFirstArgs>(args?: SelectSubset<T, AgeRatingFindFirstArgs<ExtArgs>>): Prisma__AgeRatingClient<$Result.GetResult<Prisma.$AgeRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgeRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgeRatingFindFirstOrThrowArgs} args - Arguments to find a AgeRating
     * @example
     * // Get one AgeRating
     * const ageRating = await prisma.ageRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgeRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, AgeRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgeRatingClient<$Result.GetResult<Prisma.$AgeRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgeRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgeRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgeRatings
     * const ageRatings = await prisma.ageRating.findMany()
     * 
     * // Get first 10 AgeRatings
     * const ageRatings = await prisma.ageRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ageRatingWithIdOnly = await prisma.ageRating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgeRatingFindManyArgs>(args?: SelectSubset<T, AgeRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgeRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgeRating.
     * @param {AgeRatingCreateArgs} args - Arguments to create a AgeRating.
     * @example
     * // Create one AgeRating
     * const AgeRating = await prisma.ageRating.create({
     *   data: {
     *     // ... data to create a AgeRating
     *   }
     * })
     * 
     */
    create<T extends AgeRatingCreateArgs>(args: SelectSubset<T, AgeRatingCreateArgs<ExtArgs>>): Prisma__AgeRatingClient<$Result.GetResult<Prisma.$AgeRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgeRatings.
     * @param {AgeRatingCreateManyArgs} args - Arguments to create many AgeRatings.
     * @example
     * // Create many AgeRatings
     * const ageRating = await prisma.ageRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgeRatingCreateManyArgs>(args?: SelectSubset<T, AgeRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgeRatings and returns the data saved in the database.
     * @param {AgeRatingCreateManyAndReturnArgs} args - Arguments to create many AgeRatings.
     * @example
     * // Create many AgeRatings
     * const ageRating = await prisma.ageRating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgeRatings and only return the `id`
     * const ageRatingWithIdOnly = await prisma.ageRating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgeRatingCreateManyAndReturnArgs>(args?: SelectSubset<T, AgeRatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgeRatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgeRating.
     * @param {AgeRatingDeleteArgs} args - Arguments to delete one AgeRating.
     * @example
     * // Delete one AgeRating
     * const AgeRating = await prisma.ageRating.delete({
     *   where: {
     *     // ... filter to delete one AgeRating
     *   }
     * })
     * 
     */
    delete<T extends AgeRatingDeleteArgs>(args: SelectSubset<T, AgeRatingDeleteArgs<ExtArgs>>): Prisma__AgeRatingClient<$Result.GetResult<Prisma.$AgeRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgeRating.
     * @param {AgeRatingUpdateArgs} args - Arguments to update one AgeRating.
     * @example
     * // Update one AgeRating
     * const ageRating = await prisma.ageRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgeRatingUpdateArgs>(args: SelectSubset<T, AgeRatingUpdateArgs<ExtArgs>>): Prisma__AgeRatingClient<$Result.GetResult<Prisma.$AgeRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgeRatings.
     * @param {AgeRatingDeleteManyArgs} args - Arguments to filter AgeRatings to delete.
     * @example
     * // Delete a few AgeRatings
     * const { count } = await prisma.ageRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgeRatingDeleteManyArgs>(args?: SelectSubset<T, AgeRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgeRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgeRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgeRatings
     * const ageRating = await prisma.ageRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgeRatingUpdateManyArgs>(args: SelectSubset<T, AgeRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgeRatings and returns the data updated in the database.
     * @param {AgeRatingUpdateManyAndReturnArgs} args - Arguments to update many AgeRatings.
     * @example
     * // Update many AgeRatings
     * const ageRating = await prisma.ageRating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgeRatings and only return the `id`
     * const ageRatingWithIdOnly = await prisma.ageRating.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgeRatingUpdateManyAndReturnArgs>(args: SelectSubset<T, AgeRatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgeRatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgeRating.
     * @param {AgeRatingUpsertArgs} args - Arguments to update or create a AgeRating.
     * @example
     * // Update or create a AgeRating
     * const ageRating = await prisma.ageRating.upsert({
     *   create: {
     *     // ... data to create a AgeRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgeRating we want to update
     *   }
     * })
     */
    upsert<T extends AgeRatingUpsertArgs>(args: SelectSubset<T, AgeRatingUpsertArgs<ExtArgs>>): Prisma__AgeRatingClient<$Result.GetResult<Prisma.$AgeRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgeRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgeRatingCountArgs} args - Arguments to filter AgeRatings to count.
     * @example
     * // Count the number of AgeRatings
     * const count = await prisma.ageRating.count({
     *   where: {
     *     // ... the filter for the AgeRatings we want to count
     *   }
     * })
    **/
    count<T extends AgeRatingCountArgs>(
      args?: Subset<T, AgeRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgeRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgeRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgeRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgeRatingAggregateArgs>(args: Subset<T, AgeRatingAggregateArgs>): Prisma.PrismaPromise<GetAgeRatingAggregateType<T>>

    /**
     * Group by AgeRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgeRatingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgeRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgeRatingGroupByArgs['orderBy'] }
        : { orderBy?: AgeRatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgeRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgeRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgeRating model
   */
  readonly fields: AgeRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgeRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgeRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    videos<T extends AgeRating$videosArgs<ExtArgs> = {}>(args?: Subset<T, AgeRating$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AgeRating model
   */
  interface AgeRatingFieldRefs {
    readonly id: FieldRef<"AgeRating", 'String'>
    readonly code: FieldRef<"AgeRating", 'String'>
    readonly createdAt: FieldRef<"AgeRating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AgeRating findUnique
   */
  export type AgeRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeRating
     */
    select?: AgeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeRating
     */
    omit?: AgeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgeRatingInclude<ExtArgs> | null
    /**
     * Filter, which AgeRating to fetch.
     */
    where: AgeRatingWhereUniqueInput
  }

  /**
   * AgeRating findUniqueOrThrow
   */
  export type AgeRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeRating
     */
    select?: AgeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeRating
     */
    omit?: AgeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgeRatingInclude<ExtArgs> | null
    /**
     * Filter, which AgeRating to fetch.
     */
    where: AgeRatingWhereUniqueInput
  }

  /**
   * AgeRating findFirst
   */
  export type AgeRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeRating
     */
    select?: AgeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeRating
     */
    omit?: AgeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgeRatingInclude<ExtArgs> | null
    /**
     * Filter, which AgeRating to fetch.
     */
    where?: AgeRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgeRatings to fetch.
     */
    orderBy?: AgeRatingOrderByWithRelationInput | AgeRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgeRatings.
     */
    cursor?: AgeRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgeRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgeRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgeRatings.
     */
    distinct?: AgeRatingScalarFieldEnum | AgeRatingScalarFieldEnum[]
  }

  /**
   * AgeRating findFirstOrThrow
   */
  export type AgeRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeRating
     */
    select?: AgeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeRating
     */
    omit?: AgeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgeRatingInclude<ExtArgs> | null
    /**
     * Filter, which AgeRating to fetch.
     */
    where?: AgeRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgeRatings to fetch.
     */
    orderBy?: AgeRatingOrderByWithRelationInput | AgeRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgeRatings.
     */
    cursor?: AgeRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgeRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgeRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgeRatings.
     */
    distinct?: AgeRatingScalarFieldEnum | AgeRatingScalarFieldEnum[]
  }

  /**
   * AgeRating findMany
   */
  export type AgeRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeRating
     */
    select?: AgeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeRating
     */
    omit?: AgeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgeRatingInclude<ExtArgs> | null
    /**
     * Filter, which AgeRatings to fetch.
     */
    where?: AgeRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgeRatings to fetch.
     */
    orderBy?: AgeRatingOrderByWithRelationInput | AgeRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgeRatings.
     */
    cursor?: AgeRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgeRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgeRatings.
     */
    skip?: number
    distinct?: AgeRatingScalarFieldEnum | AgeRatingScalarFieldEnum[]
  }

  /**
   * AgeRating create
   */
  export type AgeRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeRating
     */
    select?: AgeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeRating
     */
    omit?: AgeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgeRatingInclude<ExtArgs> | null
    /**
     * The data needed to create a AgeRating.
     */
    data: XOR<AgeRatingCreateInput, AgeRatingUncheckedCreateInput>
  }

  /**
   * AgeRating createMany
   */
  export type AgeRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgeRatings.
     */
    data: AgeRatingCreateManyInput | AgeRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgeRating createManyAndReturn
   */
  export type AgeRatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeRating
     */
    select?: AgeRatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgeRating
     */
    omit?: AgeRatingOmit<ExtArgs> | null
    /**
     * The data used to create many AgeRatings.
     */
    data: AgeRatingCreateManyInput | AgeRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgeRating update
   */
  export type AgeRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeRating
     */
    select?: AgeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeRating
     */
    omit?: AgeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgeRatingInclude<ExtArgs> | null
    /**
     * The data needed to update a AgeRating.
     */
    data: XOR<AgeRatingUpdateInput, AgeRatingUncheckedUpdateInput>
    /**
     * Choose, which AgeRating to update.
     */
    where: AgeRatingWhereUniqueInput
  }

  /**
   * AgeRating updateMany
   */
  export type AgeRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgeRatings.
     */
    data: XOR<AgeRatingUpdateManyMutationInput, AgeRatingUncheckedUpdateManyInput>
    /**
     * Filter which AgeRatings to update
     */
    where?: AgeRatingWhereInput
    /**
     * Limit how many AgeRatings to update.
     */
    limit?: number
  }

  /**
   * AgeRating updateManyAndReturn
   */
  export type AgeRatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeRating
     */
    select?: AgeRatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgeRating
     */
    omit?: AgeRatingOmit<ExtArgs> | null
    /**
     * The data used to update AgeRatings.
     */
    data: XOR<AgeRatingUpdateManyMutationInput, AgeRatingUncheckedUpdateManyInput>
    /**
     * Filter which AgeRatings to update
     */
    where?: AgeRatingWhereInput
    /**
     * Limit how many AgeRatings to update.
     */
    limit?: number
  }

  /**
   * AgeRating upsert
   */
  export type AgeRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeRating
     */
    select?: AgeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeRating
     */
    omit?: AgeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgeRatingInclude<ExtArgs> | null
    /**
     * The filter to search for the AgeRating to update in case it exists.
     */
    where: AgeRatingWhereUniqueInput
    /**
     * In case the AgeRating found by the `where` argument doesn't exist, create a new AgeRating with this data.
     */
    create: XOR<AgeRatingCreateInput, AgeRatingUncheckedCreateInput>
    /**
     * In case the AgeRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgeRatingUpdateInput, AgeRatingUncheckedUpdateInput>
  }

  /**
   * AgeRating delete
   */
  export type AgeRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeRating
     */
    select?: AgeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeRating
     */
    omit?: AgeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgeRatingInclude<ExtArgs> | null
    /**
     * Filter which AgeRating to delete.
     */
    where: AgeRatingWhereUniqueInput
  }

  /**
   * AgeRating deleteMany
   */
  export type AgeRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgeRatings to delete
     */
    where?: AgeRatingWhereInput
    /**
     * Limit how many AgeRatings to delete.
     */
    limit?: number
  }

  /**
   * AgeRating.videos
   */
  export type AgeRating$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * AgeRating without action
   */
  export type AgeRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeRating
     */
    select?: AgeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeRating
     */
    omit?: AgeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgeRatingInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    videoId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    videoId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    text: number
    createdAt: number
    updatedAt: number
    userId: number
    videoId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    videoId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    videoId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    videoId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    text: string
    createdAt: Date
    updatedAt: Date
    userId: string
    videoId: string
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    videoId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    videoId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    videoId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    videoId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "createdAt" | "updatedAt" | "userId" | "videoId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      createdAt: Date
      updatedAt: Date
      userId: string
      videoId: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly text: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly videoId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model PlayList
   */

  export type AggregatePlayList = {
    _count: PlayListCountAggregateOutputType | null
    _min: PlayListMinAggregateOutputType | null
    _max: PlayListMaxAggregateOutputType | null
  }

  export type PlayListMinAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PlayListMaxAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PlayListCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type PlayListMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PlayListMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PlayListCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type PlayListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayList to aggregate.
     */
    where?: PlayListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayLists to fetch.
     */
    orderBy?: PlayListOrderByWithRelationInput | PlayListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayLists
    **/
    _count?: true | PlayListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayListMaxAggregateInputType
  }

  export type GetPlayListAggregateType<T extends PlayListAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayList[P]>
      : GetScalarType<T[P], AggregatePlayList[P]>
  }




  export type PlayListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayListWhereInput
    orderBy?: PlayListOrderByWithAggregationInput | PlayListOrderByWithAggregationInput[]
    by: PlayListScalarFieldEnum[] | PlayListScalarFieldEnum
    having?: PlayListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayListCountAggregateInputType | true
    _min?: PlayListMinAggregateInputType
    _max?: PlayListMaxAggregateInputType
  }

  export type PlayListGroupByOutputType = {
    id: string
    title: string
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: PlayListCountAggregateOutputType | null
    _min: PlayListMinAggregateOutputType | null
    _max: PlayListMaxAggregateOutputType | null
  }

  type GetPlayListGroupByPayload<T extends PlayListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayListGroupByOutputType[P]>
            : GetScalarType<T[P], PlayListGroupByOutputType[P]>
        }
      >
    >


  export type PlayListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | PlayList$userArgs<ExtArgs>
    playListVideos?: boolean | PlayList$playListVideosArgs<ExtArgs>
    _count?: boolean | PlayListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playList"]>

  export type PlayListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | PlayList$userArgs<ExtArgs>
  }, ExtArgs["result"]["playList"]>

  export type PlayListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | PlayList$userArgs<ExtArgs>
  }, ExtArgs["result"]["playList"]>

  export type PlayListSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type PlayListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["playList"]>
  export type PlayListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PlayList$userArgs<ExtArgs>
    playListVideos?: boolean | PlayList$playListVideosArgs<ExtArgs>
    _count?: boolean | PlayListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PlayList$userArgs<ExtArgs>
  }
  export type PlayListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PlayList$userArgs<ExtArgs>
  }

  export type $PlayListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayList"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      playListVideos: Prisma.$PlayListVideoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      createdAt: Date
      updatedAt: Date
      userId: string | null
    }, ExtArgs["result"]["playList"]>
    composites: {}
  }

  type PlayListGetPayload<S extends boolean | null | undefined | PlayListDefaultArgs> = $Result.GetResult<Prisma.$PlayListPayload, S>

  type PlayListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayListCountAggregateInputType | true
    }

  export interface PlayListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayList'], meta: { name: 'PlayList' } }
    /**
     * Find zero or one PlayList that matches the filter.
     * @param {PlayListFindUniqueArgs} args - Arguments to find a PlayList
     * @example
     * // Get one PlayList
     * const playList = await prisma.playList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayListFindUniqueArgs>(args: SelectSubset<T, PlayListFindUniqueArgs<ExtArgs>>): Prisma__PlayListClient<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayListFindUniqueOrThrowArgs} args - Arguments to find a PlayList
     * @example
     * // Get one PlayList
     * const playList = await prisma.playList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayListFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayListClient<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListFindFirstArgs} args - Arguments to find a PlayList
     * @example
     * // Get one PlayList
     * const playList = await prisma.playList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayListFindFirstArgs>(args?: SelectSubset<T, PlayListFindFirstArgs<ExtArgs>>): Prisma__PlayListClient<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListFindFirstOrThrowArgs} args - Arguments to find a PlayList
     * @example
     * // Get one PlayList
     * const playList = await prisma.playList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayListFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayListFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayListClient<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayLists
     * const playLists = await prisma.playList.findMany()
     * 
     * // Get first 10 PlayLists
     * const playLists = await prisma.playList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playListWithIdOnly = await prisma.playList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayListFindManyArgs>(args?: SelectSubset<T, PlayListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayList.
     * @param {PlayListCreateArgs} args - Arguments to create a PlayList.
     * @example
     * // Create one PlayList
     * const PlayList = await prisma.playList.create({
     *   data: {
     *     // ... data to create a PlayList
     *   }
     * })
     * 
     */
    create<T extends PlayListCreateArgs>(args: SelectSubset<T, PlayListCreateArgs<ExtArgs>>): Prisma__PlayListClient<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayLists.
     * @param {PlayListCreateManyArgs} args - Arguments to create many PlayLists.
     * @example
     * // Create many PlayLists
     * const playList = await prisma.playList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayListCreateManyArgs>(args?: SelectSubset<T, PlayListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayLists and returns the data saved in the database.
     * @param {PlayListCreateManyAndReturnArgs} args - Arguments to create many PlayLists.
     * @example
     * // Create many PlayLists
     * const playList = await prisma.playList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayLists and only return the `id`
     * const playListWithIdOnly = await prisma.playList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayListCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayList.
     * @param {PlayListDeleteArgs} args - Arguments to delete one PlayList.
     * @example
     * // Delete one PlayList
     * const PlayList = await prisma.playList.delete({
     *   where: {
     *     // ... filter to delete one PlayList
     *   }
     * })
     * 
     */
    delete<T extends PlayListDeleteArgs>(args: SelectSubset<T, PlayListDeleteArgs<ExtArgs>>): Prisma__PlayListClient<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayList.
     * @param {PlayListUpdateArgs} args - Arguments to update one PlayList.
     * @example
     * // Update one PlayList
     * const playList = await prisma.playList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayListUpdateArgs>(args: SelectSubset<T, PlayListUpdateArgs<ExtArgs>>): Prisma__PlayListClient<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayLists.
     * @param {PlayListDeleteManyArgs} args - Arguments to filter PlayLists to delete.
     * @example
     * // Delete a few PlayLists
     * const { count } = await prisma.playList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayListDeleteManyArgs>(args?: SelectSubset<T, PlayListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayLists
     * const playList = await prisma.playList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayListUpdateManyArgs>(args: SelectSubset<T, PlayListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayLists and returns the data updated in the database.
     * @param {PlayListUpdateManyAndReturnArgs} args - Arguments to update many PlayLists.
     * @example
     * // Update many PlayLists
     * const playList = await prisma.playList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayLists and only return the `id`
     * const playListWithIdOnly = await prisma.playList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayListUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayList.
     * @param {PlayListUpsertArgs} args - Arguments to update or create a PlayList.
     * @example
     * // Update or create a PlayList
     * const playList = await prisma.playList.upsert({
     *   create: {
     *     // ... data to create a PlayList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayList we want to update
     *   }
     * })
     */
    upsert<T extends PlayListUpsertArgs>(args: SelectSubset<T, PlayListUpsertArgs<ExtArgs>>): Prisma__PlayListClient<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListCountArgs} args - Arguments to filter PlayLists to count.
     * @example
     * // Count the number of PlayLists
     * const count = await prisma.playList.count({
     *   where: {
     *     // ... the filter for the PlayLists we want to count
     *   }
     * })
    **/
    count<T extends PlayListCountArgs>(
      args?: Subset<T, PlayListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayListAggregateArgs>(args: Subset<T, PlayListAggregateArgs>): Prisma.PrismaPromise<GetPlayListAggregateType<T>>

    /**
     * Group by PlayList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayListGroupByArgs['orderBy'] }
        : { orderBy?: PlayListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayList model
   */
  readonly fields: PlayListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends PlayList$userArgs<ExtArgs> = {}>(args?: Subset<T, PlayList$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    playListVideos<T extends PlayList$playListVideosArgs<ExtArgs> = {}>(args?: Subset<T, PlayList$playListVideosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayListVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayList model
   */
  interface PlayListFieldRefs {
    readonly id: FieldRef<"PlayList", 'String'>
    readonly title: FieldRef<"PlayList", 'String'>
    readonly createdAt: FieldRef<"PlayList", 'DateTime'>
    readonly updatedAt: FieldRef<"PlayList", 'DateTime'>
    readonly userId: FieldRef<"PlayList", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlayList findUnique
   */
  export type PlayListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    /**
     * Filter, which PlayList to fetch.
     */
    where: PlayListWhereUniqueInput
  }

  /**
   * PlayList findUniqueOrThrow
   */
  export type PlayListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    /**
     * Filter, which PlayList to fetch.
     */
    where: PlayListWhereUniqueInput
  }

  /**
   * PlayList findFirst
   */
  export type PlayListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    /**
     * Filter, which PlayList to fetch.
     */
    where?: PlayListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayLists to fetch.
     */
    orderBy?: PlayListOrderByWithRelationInput | PlayListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayLists.
     */
    cursor?: PlayListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayLists.
     */
    distinct?: PlayListScalarFieldEnum | PlayListScalarFieldEnum[]
  }

  /**
   * PlayList findFirstOrThrow
   */
  export type PlayListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    /**
     * Filter, which PlayList to fetch.
     */
    where?: PlayListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayLists to fetch.
     */
    orderBy?: PlayListOrderByWithRelationInput | PlayListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayLists.
     */
    cursor?: PlayListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayLists.
     */
    distinct?: PlayListScalarFieldEnum | PlayListScalarFieldEnum[]
  }

  /**
   * PlayList findMany
   */
  export type PlayListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    /**
     * Filter, which PlayLists to fetch.
     */
    where?: PlayListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayLists to fetch.
     */
    orderBy?: PlayListOrderByWithRelationInput | PlayListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayLists.
     */
    cursor?: PlayListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayLists.
     */
    skip?: number
    distinct?: PlayListScalarFieldEnum | PlayListScalarFieldEnum[]
  }

  /**
   * PlayList create
   */
  export type PlayListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayList.
     */
    data: XOR<PlayListCreateInput, PlayListUncheckedCreateInput>
  }

  /**
   * PlayList createMany
   */
  export type PlayListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayLists.
     */
    data: PlayListCreateManyInput | PlayListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayList createManyAndReturn
   */
  export type PlayListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * The data used to create many PlayLists.
     */
    data: PlayListCreateManyInput | PlayListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayList update
   */
  export type PlayListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayList.
     */
    data: XOR<PlayListUpdateInput, PlayListUncheckedUpdateInput>
    /**
     * Choose, which PlayList to update.
     */
    where: PlayListWhereUniqueInput
  }

  /**
   * PlayList updateMany
   */
  export type PlayListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayLists.
     */
    data: XOR<PlayListUpdateManyMutationInput, PlayListUncheckedUpdateManyInput>
    /**
     * Filter which PlayLists to update
     */
    where?: PlayListWhereInput
    /**
     * Limit how many PlayLists to update.
     */
    limit?: number
  }

  /**
   * PlayList updateManyAndReturn
   */
  export type PlayListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * The data used to update PlayLists.
     */
    data: XOR<PlayListUpdateManyMutationInput, PlayListUncheckedUpdateManyInput>
    /**
     * Filter which PlayLists to update
     */
    where?: PlayListWhereInput
    /**
     * Limit how many PlayLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayList upsert
   */
  export type PlayListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayList to update in case it exists.
     */
    where: PlayListWhereUniqueInput
    /**
     * In case the PlayList found by the `where` argument doesn't exist, create a new PlayList with this data.
     */
    create: XOR<PlayListCreateInput, PlayListUncheckedCreateInput>
    /**
     * In case the PlayList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayListUpdateInput, PlayListUncheckedUpdateInput>
  }

  /**
   * PlayList delete
   */
  export type PlayListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
    /**
     * Filter which PlayList to delete.
     */
    where: PlayListWhereUniqueInput
  }

  /**
   * PlayList deleteMany
   */
  export type PlayListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayLists to delete
     */
    where?: PlayListWhereInput
    /**
     * Limit how many PlayLists to delete.
     */
    limit?: number
  }

  /**
   * PlayList.user
   */
  export type PlayList$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * PlayList.playListVideos
   */
  export type PlayList$playListVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayListVideo
     */
    select?: PlayListVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayListVideo
     */
    omit?: PlayListVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListVideoInclude<ExtArgs> | null
    where?: PlayListVideoWhereInput
    orderBy?: PlayListVideoOrderByWithRelationInput | PlayListVideoOrderByWithRelationInput[]
    cursor?: PlayListVideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayListVideoScalarFieldEnum | PlayListVideoScalarFieldEnum[]
  }

  /**
   * PlayList without action
   */
  export type PlayListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayList
     */
    select?: PlayListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayList
     */
    omit?: PlayListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListInclude<ExtArgs> | null
  }


  /**
   * Model PlayListVideo
   */

  export type AggregatePlayListVideo = {
    _count: PlayListVideoCountAggregateOutputType | null
    _min: PlayListVideoMinAggregateOutputType | null
    _max: PlayListVideoMaxAggregateOutputType | null
  }

  export type PlayListVideoMinAggregateOutputType = {
    id: string | null
    playlistId: string | null
    videoId: string | null
    addedAt: Date | null
  }

  export type PlayListVideoMaxAggregateOutputType = {
    id: string | null
    playlistId: string | null
    videoId: string | null
    addedAt: Date | null
  }

  export type PlayListVideoCountAggregateOutputType = {
    id: number
    playlistId: number
    videoId: number
    addedAt: number
    _all: number
  }


  export type PlayListVideoMinAggregateInputType = {
    id?: true
    playlistId?: true
    videoId?: true
    addedAt?: true
  }

  export type PlayListVideoMaxAggregateInputType = {
    id?: true
    playlistId?: true
    videoId?: true
    addedAt?: true
  }

  export type PlayListVideoCountAggregateInputType = {
    id?: true
    playlistId?: true
    videoId?: true
    addedAt?: true
    _all?: true
  }

  export type PlayListVideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayListVideo to aggregate.
     */
    where?: PlayListVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayListVideos to fetch.
     */
    orderBy?: PlayListVideoOrderByWithRelationInput | PlayListVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayListVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayListVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayListVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayListVideos
    **/
    _count?: true | PlayListVideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayListVideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayListVideoMaxAggregateInputType
  }

  export type GetPlayListVideoAggregateType<T extends PlayListVideoAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayListVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayListVideo[P]>
      : GetScalarType<T[P], AggregatePlayListVideo[P]>
  }




  export type PlayListVideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayListVideoWhereInput
    orderBy?: PlayListVideoOrderByWithAggregationInput | PlayListVideoOrderByWithAggregationInput[]
    by: PlayListVideoScalarFieldEnum[] | PlayListVideoScalarFieldEnum
    having?: PlayListVideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayListVideoCountAggregateInputType | true
    _min?: PlayListVideoMinAggregateInputType
    _max?: PlayListVideoMaxAggregateInputType
  }

  export type PlayListVideoGroupByOutputType = {
    id: string
    playlistId: string
    videoId: string
    addedAt: Date
    _count: PlayListVideoCountAggregateOutputType | null
    _min: PlayListVideoMinAggregateOutputType | null
    _max: PlayListVideoMaxAggregateOutputType | null
  }

  type GetPlayListVideoGroupByPayload<T extends PlayListVideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayListVideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayListVideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayListVideoGroupByOutputType[P]>
            : GetScalarType<T[P], PlayListVideoGroupByOutputType[P]>
        }
      >
    >


  export type PlayListVideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    videoId?: boolean
    addedAt?: boolean
    playlist?: boolean | PlayListDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playListVideo"]>

  export type PlayListVideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    videoId?: boolean
    addedAt?: boolean
    playlist?: boolean | PlayListDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playListVideo"]>

  export type PlayListVideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    videoId?: boolean
    addedAt?: boolean
    playlist?: boolean | PlayListDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playListVideo"]>

  export type PlayListVideoSelectScalar = {
    id?: boolean
    playlistId?: boolean
    videoId?: boolean
    addedAt?: boolean
  }

  export type PlayListVideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playlistId" | "videoId" | "addedAt", ExtArgs["result"]["playListVideo"]>
  export type PlayListVideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlayListDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type PlayListVideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlayListDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type PlayListVideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlayListDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $PlayListVideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayListVideo"
    objects: {
      playlist: Prisma.$PlayListPayload<ExtArgs>
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playlistId: string
      videoId: string
      addedAt: Date
    }, ExtArgs["result"]["playListVideo"]>
    composites: {}
  }

  type PlayListVideoGetPayload<S extends boolean | null | undefined | PlayListVideoDefaultArgs> = $Result.GetResult<Prisma.$PlayListVideoPayload, S>

  type PlayListVideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayListVideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayListVideoCountAggregateInputType | true
    }

  export interface PlayListVideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayListVideo'], meta: { name: 'PlayListVideo' } }
    /**
     * Find zero or one PlayListVideo that matches the filter.
     * @param {PlayListVideoFindUniqueArgs} args - Arguments to find a PlayListVideo
     * @example
     * // Get one PlayListVideo
     * const playListVideo = await prisma.playListVideo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayListVideoFindUniqueArgs>(args: SelectSubset<T, PlayListVideoFindUniqueArgs<ExtArgs>>): Prisma__PlayListVideoClient<$Result.GetResult<Prisma.$PlayListVideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayListVideo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayListVideoFindUniqueOrThrowArgs} args - Arguments to find a PlayListVideo
     * @example
     * // Get one PlayListVideo
     * const playListVideo = await prisma.playListVideo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayListVideoFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayListVideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayListVideoClient<$Result.GetResult<Prisma.$PlayListVideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayListVideo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListVideoFindFirstArgs} args - Arguments to find a PlayListVideo
     * @example
     * // Get one PlayListVideo
     * const playListVideo = await prisma.playListVideo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayListVideoFindFirstArgs>(args?: SelectSubset<T, PlayListVideoFindFirstArgs<ExtArgs>>): Prisma__PlayListVideoClient<$Result.GetResult<Prisma.$PlayListVideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayListVideo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListVideoFindFirstOrThrowArgs} args - Arguments to find a PlayListVideo
     * @example
     * // Get one PlayListVideo
     * const playListVideo = await prisma.playListVideo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayListVideoFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayListVideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayListVideoClient<$Result.GetResult<Prisma.$PlayListVideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayListVideos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListVideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayListVideos
     * const playListVideos = await prisma.playListVideo.findMany()
     * 
     * // Get first 10 PlayListVideos
     * const playListVideos = await prisma.playListVideo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playListVideoWithIdOnly = await prisma.playListVideo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayListVideoFindManyArgs>(args?: SelectSubset<T, PlayListVideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayListVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayListVideo.
     * @param {PlayListVideoCreateArgs} args - Arguments to create a PlayListVideo.
     * @example
     * // Create one PlayListVideo
     * const PlayListVideo = await prisma.playListVideo.create({
     *   data: {
     *     // ... data to create a PlayListVideo
     *   }
     * })
     * 
     */
    create<T extends PlayListVideoCreateArgs>(args: SelectSubset<T, PlayListVideoCreateArgs<ExtArgs>>): Prisma__PlayListVideoClient<$Result.GetResult<Prisma.$PlayListVideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayListVideos.
     * @param {PlayListVideoCreateManyArgs} args - Arguments to create many PlayListVideos.
     * @example
     * // Create many PlayListVideos
     * const playListVideo = await prisma.playListVideo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayListVideoCreateManyArgs>(args?: SelectSubset<T, PlayListVideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayListVideos and returns the data saved in the database.
     * @param {PlayListVideoCreateManyAndReturnArgs} args - Arguments to create many PlayListVideos.
     * @example
     * // Create many PlayListVideos
     * const playListVideo = await prisma.playListVideo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayListVideos and only return the `id`
     * const playListVideoWithIdOnly = await prisma.playListVideo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayListVideoCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayListVideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayListVideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayListVideo.
     * @param {PlayListVideoDeleteArgs} args - Arguments to delete one PlayListVideo.
     * @example
     * // Delete one PlayListVideo
     * const PlayListVideo = await prisma.playListVideo.delete({
     *   where: {
     *     // ... filter to delete one PlayListVideo
     *   }
     * })
     * 
     */
    delete<T extends PlayListVideoDeleteArgs>(args: SelectSubset<T, PlayListVideoDeleteArgs<ExtArgs>>): Prisma__PlayListVideoClient<$Result.GetResult<Prisma.$PlayListVideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayListVideo.
     * @param {PlayListVideoUpdateArgs} args - Arguments to update one PlayListVideo.
     * @example
     * // Update one PlayListVideo
     * const playListVideo = await prisma.playListVideo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayListVideoUpdateArgs>(args: SelectSubset<T, PlayListVideoUpdateArgs<ExtArgs>>): Prisma__PlayListVideoClient<$Result.GetResult<Prisma.$PlayListVideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayListVideos.
     * @param {PlayListVideoDeleteManyArgs} args - Arguments to filter PlayListVideos to delete.
     * @example
     * // Delete a few PlayListVideos
     * const { count } = await prisma.playListVideo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayListVideoDeleteManyArgs>(args?: SelectSubset<T, PlayListVideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayListVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListVideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayListVideos
     * const playListVideo = await prisma.playListVideo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayListVideoUpdateManyArgs>(args: SelectSubset<T, PlayListVideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayListVideos and returns the data updated in the database.
     * @param {PlayListVideoUpdateManyAndReturnArgs} args - Arguments to update many PlayListVideos.
     * @example
     * // Update many PlayListVideos
     * const playListVideo = await prisma.playListVideo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayListVideos and only return the `id`
     * const playListVideoWithIdOnly = await prisma.playListVideo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayListVideoUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayListVideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayListVideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayListVideo.
     * @param {PlayListVideoUpsertArgs} args - Arguments to update or create a PlayListVideo.
     * @example
     * // Update or create a PlayListVideo
     * const playListVideo = await prisma.playListVideo.upsert({
     *   create: {
     *     // ... data to create a PlayListVideo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayListVideo we want to update
     *   }
     * })
     */
    upsert<T extends PlayListVideoUpsertArgs>(args: SelectSubset<T, PlayListVideoUpsertArgs<ExtArgs>>): Prisma__PlayListVideoClient<$Result.GetResult<Prisma.$PlayListVideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayListVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListVideoCountArgs} args - Arguments to filter PlayListVideos to count.
     * @example
     * // Count the number of PlayListVideos
     * const count = await prisma.playListVideo.count({
     *   where: {
     *     // ... the filter for the PlayListVideos we want to count
     *   }
     * })
    **/
    count<T extends PlayListVideoCountArgs>(
      args?: Subset<T, PlayListVideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayListVideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayListVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListVideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayListVideoAggregateArgs>(args: Subset<T, PlayListVideoAggregateArgs>): Prisma.PrismaPromise<GetPlayListVideoAggregateType<T>>

    /**
     * Group by PlayListVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListVideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayListVideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayListVideoGroupByArgs['orderBy'] }
        : { orderBy?: PlayListVideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayListVideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayListVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayListVideo model
   */
  readonly fields: PlayListVideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayListVideo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayListVideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlist<T extends PlayListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayListDefaultArgs<ExtArgs>>): Prisma__PlayListClient<$Result.GetResult<Prisma.$PlayListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayListVideo model
   */
  interface PlayListVideoFieldRefs {
    readonly id: FieldRef<"PlayListVideo", 'String'>
    readonly playlistId: FieldRef<"PlayListVideo", 'String'>
    readonly videoId: FieldRef<"PlayListVideo", 'String'>
    readonly addedAt: FieldRef<"PlayListVideo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlayListVideo findUnique
   */
  export type PlayListVideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayListVideo
     */
    select?: PlayListVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayListVideo
     */
    omit?: PlayListVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListVideoInclude<ExtArgs> | null
    /**
     * Filter, which PlayListVideo to fetch.
     */
    where: PlayListVideoWhereUniqueInput
  }

  /**
   * PlayListVideo findUniqueOrThrow
   */
  export type PlayListVideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayListVideo
     */
    select?: PlayListVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayListVideo
     */
    omit?: PlayListVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListVideoInclude<ExtArgs> | null
    /**
     * Filter, which PlayListVideo to fetch.
     */
    where: PlayListVideoWhereUniqueInput
  }

  /**
   * PlayListVideo findFirst
   */
  export type PlayListVideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayListVideo
     */
    select?: PlayListVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayListVideo
     */
    omit?: PlayListVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListVideoInclude<ExtArgs> | null
    /**
     * Filter, which PlayListVideo to fetch.
     */
    where?: PlayListVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayListVideos to fetch.
     */
    orderBy?: PlayListVideoOrderByWithRelationInput | PlayListVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayListVideos.
     */
    cursor?: PlayListVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayListVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayListVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayListVideos.
     */
    distinct?: PlayListVideoScalarFieldEnum | PlayListVideoScalarFieldEnum[]
  }

  /**
   * PlayListVideo findFirstOrThrow
   */
  export type PlayListVideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayListVideo
     */
    select?: PlayListVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayListVideo
     */
    omit?: PlayListVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListVideoInclude<ExtArgs> | null
    /**
     * Filter, which PlayListVideo to fetch.
     */
    where?: PlayListVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayListVideos to fetch.
     */
    orderBy?: PlayListVideoOrderByWithRelationInput | PlayListVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayListVideos.
     */
    cursor?: PlayListVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayListVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayListVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayListVideos.
     */
    distinct?: PlayListVideoScalarFieldEnum | PlayListVideoScalarFieldEnum[]
  }

  /**
   * PlayListVideo findMany
   */
  export type PlayListVideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayListVideo
     */
    select?: PlayListVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayListVideo
     */
    omit?: PlayListVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListVideoInclude<ExtArgs> | null
    /**
     * Filter, which PlayListVideos to fetch.
     */
    where?: PlayListVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayListVideos to fetch.
     */
    orderBy?: PlayListVideoOrderByWithRelationInput | PlayListVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayListVideos.
     */
    cursor?: PlayListVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayListVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayListVideos.
     */
    skip?: number
    distinct?: PlayListVideoScalarFieldEnum | PlayListVideoScalarFieldEnum[]
  }

  /**
   * PlayListVideo create
   */
  export type PlayListVideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayListVideo
     */
    select?: PlayListVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayListVideo
     */
    omit?: PlayListVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListVideoInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayListVideo.
     */
    data: XOR<PlayListVideoCreateInput, PlayListVideoUncheckedCreateInput>
  }

  /**
   * PlayListVideo createMany
   */
  export type PlayListVideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayListVideos.
     */
    data: PlayListVideoCreateManyInput | PlayListVideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayListVideo createManyAndReturn
   */
  export type PlayListVideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayListVideo
     */
    select?: PlayListVideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayListVideo
     */
    omit?: PlayListVideoOmit<ExtArgs> | null
    /**
     * The data used to create many PlayListVideos.
     */
    data: PlayListVideoCreateManyInput | PlayListVideoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListVideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayListVideo update
   */
  export type PlayListVideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayListVideo
     */
    select?: PlayListVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayListVideo
     */
    omit?: PlayListVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListVideoInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayListVideo.
     */
    data: XOR<PlayListVideoUpdateInput, PlayListVideoUncheckedUpdateInput>
    /**
     * Choose, which PlayListVideo to update.
     */
    where: PlayListVideoWhereUniqueInput
  }

  /**
   * PlayListVideo updateMany
   */
  export type PlayListVideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayListVideos.
     */
    data: XOR<PlayListVideoUpdateManyMutationInput, PlayListVideoUncheckedUpdateManyInput>
    /**
     * Filter which PlayListVideos to update
     */
    where?: PlayListVideoWhereInput
    /**
     * Limit how many PlayListVideos to update.
     */
    limit?: number
  }

  /**
   * PlayListVideo updateManyAndReturn
   */
  export type PlayListVideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayListVideo
     */
    select?: PlayListVideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayListVideo
     */
    omit?: PlayListVideoOmit<ExtArgs> | null
    /**
     * The data used to update PlayListVideos.
     */
    data: XOR<PlayListVideoUpdateManyMutationInput, PlayListVideoUncheckedUpdateManyInput>
    /**
     * Filter which PlayListVideos to update
     */
    where?: PlayListVideoWhereInput
    /**
     * Limit how many PlayListVideos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListVideoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayListVideo upsert
   */
  export type PlayListVideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayListVideo
     */
    select?: PlayListVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayListVideo
     */
    omit?: PlayListVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListVideoInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayListVideo to update in case it exists.
     */
    where: PlayListVideoWhereUniqueInput
    /**
     * In case the PlayListVideo found by the `where` argument doesn't exist, create a new PlayListVideo with this data.
     */
    create: XOR<PlayListVideoCreateInput, PlayListVideoUncheckedCreateInput>
    /**
     * In case the PlayListVideo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayListVideoUpdateInput, PlayListVideoUncheckedUpdateInput>
  }

  /**
   * PlayListVideo delete
   */
  export type PlayListVideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayListVideo
     */
    select?: PlayListVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayListVideo
     */
    omit?: PlayListVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListVideoInclude<ExtArgs> | null
    /**
     * Filter which PlayListVideo to delete.
     */
    where: PlayListVideoWhereUniqueInput
  }

  /**
   * PlayListVideo deleteMany
   */
  export type PlayListVideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayListVideos to delete
     */
    where?: PlayListVideoWhereInput
    /**
     * Limit how many PlayListVideos to delete.
     */
    limit?: number
  }

  /**
   * PlayListVideo without action
   */
  export type PlayListVideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayListVideo
     */
    select?: PlayListVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayListVideo
     */
    omit?: PlayListVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayListVideoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    email: 'email',
    backupEmail: 'backupEmail',
    passwordHash: 'passwordHash',
    about: 'about',
    birthDate: 'birthDate',
    passwordChangeAt: 'passwordChangeAt',
    avatarFileName: 'avatarFileName',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    originalName: 'originalName',
    url: 'url',
    name: 'name',
    mimetype: 'mimetype',
    size: 'size',
    title: 'title',
    description: 'description',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    userId: 'userId',
    categoryId: 'categoryId',
    ageRatingId: 'ageRatingId',
    views: 'views'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const AgeRatingScalarFieldEnum: {
    id: 'id',
    code: 'code',
    createdAt: 'createdAt'
  };

  export type AgeRatingScalarFieldEnum = (typeof AgeRatingScalarFieldEnum)[keyof typeof AgeRatingScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    text: 'text',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    videoId: 'videoId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const PlayListScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type PlayListScalarFieldEnum = (typeof PlayListScalarFieldEnum)[keyof typeof PlayListScalarFieldEnum]


  export const PlayListVideoScalarFieldEnum: {
    id: 'id',
    playlistId: 'playlistId',
    videoId: 'videoId',
    addedAt: 'addedAt'
  };

  export type PlayListVideoScalarFieldEnum = (typeof PlayListVideoScalarFieldEnum)[keyof typeof PlayListVideoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nickname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    backupEmail?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    about?: StringNullableFilter<"User"> | string | null
    birthDate?: StringNullableFilter<"User"> | string | null
    passwordChangeAt?: DateTimeNullableFilter<"User"> | Date | string | null
    avatarFileName?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    videos?: VideoListRelationFilter
    favoriteVideos?: VideoListRelationFilter
    likesVideo?: VideoListRelationFilter
    comments?: CommentListRelationFilter
    following?: UserListRelationFilter
    followers?: UserListRelationFilter
    playlist?: PlayListListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    backupEmail?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    about?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    passwordChangeAt?: SortOrderInput | SortOrder
    avatarFileName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    videos?: VideoOrderByRelationAggregateInput
    favoriteVideos?: VideoOrderByRelationAggregateInput
    likesVideo?: VideoOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    following?: UserOrderByRelationAggregateInput
    followers?: UserOrderByRelationAggregateInput
    playlist?: PlayListOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nickname?: string
    email?: string
    backupEmail?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    about?: StringNullableFilter<"User"> | string | null
    birthDate?: StringNullableFilter<"User"> | string | null
    passwordChangeAt?: DateTimeNullableFilter<"User"> | Date | string | null
    avatarFileName?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    videos?: VideoListRelationFilter
    favoriteVideos?: VideoListRelationFilter
    likesVideo?: VideoListRelationFilter
    comments?: CommentListRelationFilter
    following?: UserListRelationFilter
    followers?: UserListRelationFilter
    playlist?: PlayListListRelationFilter
  }, "id" | "nickname" | "email" | "backupEmail">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    backupEmail?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    about?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    passwordChangeAt?: SortOrderInput | SortOrder
    avatarFileName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nickname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    backupEmail?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    about?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthDate?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordChangeAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    avatarFileName?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: StringFilter<"Video"> | string
    originalName?: StringFilter<"Video"> | string
    url?: StringFilter<"Video"> | string
    name?: StringFilter<"Video"> | string
    mimetype?: StringFilter<"Video"> | string
    size?: IntFilter<"Video"> | number
    title?: StringFilter<"Video"> | string
    description?: StringNullableFilter<"Video"> | string | null
    isPublic?: BoolFilter<"Video"> | boolean
    createdAt?: DateTimeFilter<"Video"> | Date | string
    userId?: StringFilter<"Video"> | string
    categoryId?: StringNullableFilter<"Video"> | string | null
    ageRatingId?: StringNullableFilter<"Video"> | string | null
    views?: IntFilter<"Video"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    ageRating?: XOR<AgeRatingNullableScalarRelationFilter, AgeRatingWhereInput> | null
    tags?: TagListRelationFilter
    favoritedBy?: UserListRelationFilter
    likedBy?: UserListRelationFilter
    comments?: CommentListRelationFilter
    playlistVideos?: PlayListVideoListRelationFilter
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    name?: SortOrder
    mimetype?: SortOrder
    size?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    ageRatingId?: SortOrderInput | SortOrder
    views?: SortOrder
    author?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    ageRating?: AgeRatingOrderByWithRelationInput
    tags?: TagOrderByRelationAggregateInput
    favoritedBy?: UserOrderByRelationAggregateInput
    likedBy?: UserOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    playlistVideos?: PlayListVideoOrderByRelationAggregateInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    originalName?: StringFilter<"Video"> | string
    url?: StringFilter<"Video"> | string
    name?: StringFilter<"Video"> | string
    mimetype?: StringFilter<"Video"> | string
    size?: IntFilter<"Video"> | number
    title?: StringFilter<"Video"> | string
    description?: StringNullableFilter<"Video"> | string | null
    isPublic?: BoolFilter<"Video"> | boolean
    createdAt?: DateTimeFilter<"Video"> | Date | string
    userId?: StringFilter<"Video"> | string
    categoryId?: StringNullableFilter<"Video"> | string | null
    ageRatingId?: StringNullableFilter<"Video"> | string | null
    views?: IntFilter<"Video"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    ageRating?: XOR<AgeRatingNullableScalarRelationFilter, AgeRatingWhereInput> | null
    tags?: TagListRelationFilter
    favoritedBy?: UserListRelationFilter
    likedBy?: UserListRelationFilter
    comments?: CommentListRelationFilter
    playlistVideos?: PlayListVideoListRelationFilter
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    name?: SortOrder
    mimetype?: SortOrder
    size?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    ageRatingId?: SortOrderInput | SortOrder
    views?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Video"> | string
    originalName?: StringWithAggregatesFilter<"Video"> | string
    url?: StringWithAggregatesFilter<"Video"> | string
    name?: StringWithAggregatesFilter<"Video"> | string
    mimetype?: StringWithAggregatesFilter<"Video"> | string
    size?: IntWithAggregatesFilter<"Video"> | number
    title?: StringWithAggregatesFilter<"Video"> | string
    description?: StringNullableWithAggregatesFilter<"Video"> | string | null
    isPublic?: BoolWithAggregatesFilter<"Video"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    userId?: StringWithAggregatesFilter<"Video"> | string
    categoryId?: StringNullableWithAggregatesFilter<"Video"> | string | null
    ageRatingId?: StringNullableWithAggregatesFilter<"Video"> | string | null
    views?: IntWithAggregatesFilter<"Video"> | number
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    videos?: VideoListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    videos?: VideoOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    videos?: VideoListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    videos?: VideoListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    videos?: VideoOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    createdAt?: DateTimeFilter<"Category"> | Date | string
    videos?: VideoListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type AgeRatingWhereInput = {
    AND?: AgeRatingWhereInput | AgeRatingWhereInput[]
    OR?: AgeRatingWhereInput[]
    NOT?: AgeRatingWhereInput | AgeRatingWhereInput[]
    id?: StringFilter<"AgeRating"> | string
    code?: StringFilter<"AgeRating"> | string
    createdAt?: DateTimeFilter<"AgeRating"> | Date | string
    videos?: VideoListRelationFilter
  }

  export type AgeRatingOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    videos?: VideoOrderByRelationAggregateInput
  }

  export type AgeRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: AgeRatingWhereInput | AgeRatingWhereInput[]
    OR?: AgeRatingWhereInput[]
    NOT?: AgeRatingWhereInput | AgeRatingWhereInput[]
    createdAt?: DateTimeFilter<"AgeRating"> | Date | string
    videos?: VideoListRelationFilter
  }, "id" | "code">

  export type AgeRatingOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    _count?: AgeRatingCountOrderByAggregateInput
    _max?: AgeRatingMaxOrderByAggregateInput
    _min?: AgeRatingMinOrderByAggregateInput
  }

  export type AgeRatingScalarWhereWithAggregatesInput = {
    AND?: AgeRatingScalarWhereWithAggregatesInput | AgeRatingScalarWhereWithAggregatesInput[]
    OR?: AgeRatingScalarWhereWithAggregatesInput[]
    NOT?: AgeRatingScalarWhereWithAggregatesInput | AgeRatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgeRating"> | string
    code?: StringWithAggregatesFilter<"AgeRating"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AgeRating"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: StringFilter<"Comment"> | string
    videoId?: StringFilter<"Comment"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    author?: UserOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    text?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: StringFilter<"Comment"> | string
    videoId?: StringFilter<"Comment"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    text?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    videoId?: StringWithAggregatesFilter<"Comment"> | string
  }

  export type PlayListWhereInput = {
    AND?: PlayListWhereInput | PlayListWhereInput[]
    OR?: PlayListWhereInput[]
    NOT?: PlayListWhereInput | PlayListWhereInput[]
    id?: StringFilter<"PlayList"> | string
    title?: StringFilter<"PlayList"> | string
    createdAt?: DateTimeFilter<"PlayList"> | Date | string
    updatedAt?: DateTimeFilter<"PlayList"> | Date | string
    userId?: StringNullableFilter<"PlayList"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    playListVideos?: PlayListVideoListRelationFilter
  }

  export type PlayListOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    playListVideos?: PlayListVideoOrderByRelationAggregateInput
  }

  export type PlayListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayListWhereInput | PlayListWhereInput[]
    OR?: PlayListWhereInput[]
    NOT?: PlayListWhereInput | PlayListWhereInput[]
    title?: StringFilter<"PlayList"> | string
    createdAt?: DateTimeFilter<"PlayList"> | Date | string
    updatedAt?: DateTimeFilter<"PlayList"> | Date | string
    userId?: StringNullableFilter<"PlayList"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    playListVideos?: PlayListVideoListRelationFilter
  }, "id">

  export type PlayListOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: PlayListCountOrderByAggregateInput
    _max?: PlayListMaxOrderByAggregateInput
    _min?: PlayListMinOrderByAggregateInput
  }

  export type PlayListScalarWhereWithAggregatesInput = {
    AND?: PlayListScalarWhereWithAggregatesInput | PlayListScalarWhereWithAggregatesInput[]
    OR?: PlayListScalarWhereWithAggregatesInput[]
    NOT?: PlayListScalarWhereWithAggregatesInput | PlayListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayList"> | string
    title?: StringWithAggregatesFilter<"PlayList"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PlayList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlayList"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"PlayList"> | string | null
  }

  export type PlayListVideoWhereInput = {
    AND?: PlayListVideoWhereInput | PlayListVideoWhereInput[]
    OR?: PlayListVideoWhereInput[]
    NOT?: PlayListVideoWhereInput | PlayListVideoWhereInput[]
    id?: StringFilter<"PlayListVideo"> | string
    playlistId?: StringFilter<"PlayListVideo"> | string
    videoId?: StringFilter<"PlayListVideo"> | string
    addedAt?: DateTimeFilter<"PlayListVideo"> | Date | string
    playlist?: XOR<PlayListScalarRelationFilter, PlayListWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type PlayListVideoOrderByWithRelationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    videoId?: SortOrder
    addedAt?: SortOrder
    playlist?: PlayListOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
  }

  export type PlayListVideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playlistId_videoId?: PlayListVideoPlaylistIdVideoIdCompoundUniqueInput
    AND?: PlayListVideoWhereInput | PlayListVideoWhereInput[]
    OR?: PlayListVideoWhereInput[]
    NOT?: PlayListVideoWhereInput | PlayListVideoWhereInput[]
    playlistId?: StringFilter<"PlayListVideo"> | string
    videoId?: StringFilter<"PlayListVideo"> | string
    addedAt?: DateTimeFilter<"PlayListVideo"> | Date | string
    playlist?: XOR<PlayListScalarRelationFilter, PlayListWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "id" | "playlistId_videoId">

  export type PlayListVideoOrderByWithAggregationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    videoId?: SortOrder
    addedAt?: SortOrder
    _count?: PlayListVideoCountOrderByAggregateInput
    _max?: PlayListVideoMaxOrderByAggregateInput
    _min?: PlayListVideoMinOrderByAggregateInput
  }

  export type PlayListVideoScalarWhereWithAggregatesInput = {
    AND?: PlayListVideoScalarWhereWithAggregatesInput | PlayListVideoScalarWhereWithAggregatesInput[]
    OR?: PlayListVideoScalarWhereWithAggregatesInput[]
    NOT?: PlayListVideoScalarWhereWithAggregatesInput | PlayListVideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayListVideo"> | string
    playlistId?: StringWithAggregatesFilter<"PlayListVideo"> | string
    videoId?: StringWithAggregatesFilter<"PlayListVideo"> | string
    addedAt?: DateTimeWithAggregatesFilter<"PlayListVideo"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    nickname: string
    email: string
    backupEmail?: string | null
    passwordHash: string
    about?: string | null
    birthDate?: string | null
    passwordChangeAt?: Date | string | null
    avatarFileName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutAuthorInput
    favoriteVideos?: VideoCreateNestedManyWithoutFavoritedByInput
    likesVideo?: VideoCreateNestedManyWithoutLikedByInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    playlist?: PlayListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nickname: string
    email: string
    backupEmail?: string | null
    passwordHash: string
    about?: string | null
    birthDate?: string | null
    passwordChangeAt?: Date | string | null
    avatarFileName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutAuthorInput
    favoriteVideos?: VideoUncheckedCreateNestedManyWithoutFavoritedByInput
    likesVideo?: VideoUncheckedCreateNestedManyWithoutLikedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    following?: UserUncheckedCreateNestedManyWithoutFollowersInput
    followers?: UserUncheckedCreateNestedManyWithoutFollowingInput
    playlist?: PlayListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutAuthorNestedInput
    favoriteVideos?: VideoUpdateManyWithoutFavoritedByNestedInput
    likesVideo?: VideoUpdateManyWithoutLikedByNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    following?: UserUpdateManyWithoutFollowersNestedInput
    followers?: UserUpdateManyWithoutFollowingNestedInput
    playlist?: PlayListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutAuthorNestedInput
    favoriteVideos?: VideoUncheckedUpdateManyWithoutFavoritedByNestedInput
    likesVideo?: VideoUncheckedUpdateManyWithoutLikedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowersNestedInput
    followers?: UserUncheckedUpdateManyWithoutFollowingNestedInput
    playlist?: PlayListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nickname: string
    email: string
    backupEmail?: string | null
    passwordHash: string
    about?: string | null
    birthDate?: string | null
    passwordChangeAt?: Date | string | null
    avatarFileName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    views?: number
    author: UserCreateNestedOneWithoutVideosInput
    category?: CategoryCreateNestedOneWithoutVideosInput
    ageRating?: AgeRatingCreateNestedOneWithoutVideosInput
    tags?: TagCreateNestedManyWithoutVideosInput
    favoritedBy?: UserCreateNestedManyWithoutFavoriteVideosInput
    likedBy?: UserCreateNestedManyWithoutLikesVideoInput
    comments?: CommentCreateNestedManyWithoutVideoInput
    playlistVideos?: PlayListVideoCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    userId: string
    categoryId?: string | null
    ageRatingId?: string | null
    views?: number
    tags?: TagUncheckedCreateNestedManyWithoutVideosInput
    favoritedBy?: UserUncheckedCreateNestedManyWithoutFavoriteVideosInput
    likedBy?: UserUncheckedCreateNestedManyWithoutLikesVideoInput
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
    playlistVideos?: PlayListVideoUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutVideosNestedInput
    category?: CategoryUpdateOneWithoutVideosNestedInput
    ageRating?: AgeRatingUpdateOneWithoutVideosNestedInput
    tags?: TagUpdateManyWithoutVideosNestedInput
    favoritedBy?: UserUpdateManyWithoutFavoriteVideosNestedInput
    likedBy?: UserUpdateManyWithoutLikesVideoNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
    playlistVideos?: PlayListVideoUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    ageRatingId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutVideosNestedInput
    favoritedBy?: UserUncheckedUpdateManyWithoutFavoriteVideosNestedInput
    likedBy?: UserUncheckedUpdateManyWithoutLikesVideoNestedInput
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
    playlistVideos?: PlayListVideoUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoCreateManyInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    userId: string
    categoryId?: string | null
    ageRatingId?: string | null
    views?: number
  }

  export type VideoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    ageRatingId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
  }

  export type TagCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    videos?: VideoCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    videos?: VideoCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgeRatingCreateInput = {
    id?: string
    code: string
    createdAt?: Date | string
    videos?: VideoCreateNestedManyWithoutAgeRatingInput
  }

  export type AgeRatingUncheckedCreateInput = {
    id?: string
    code: string
    createdAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutAgeRatingInput
  }

  export type AgeRatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutAgeRatingNestedInput
  }

  export type AgeRatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutAgeRatingNestedInput
  }

  export type AgeRatingCreateManyInput = {
    id?: string
    code: string
    createdAt?: Date | string
  }

  export type AgeRatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgeRatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutCommentsInput
    video: VideoCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    videoId: string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    video?: VideoUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    videoId: string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayListCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPlaylistInput
    playListVideos?: PlayListVideoCreateNestedManyWithoutPlaylistInput
  }

  export type PlayListUncheckedCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    playListVideos?: PlayListVideoUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlayListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPlaylistNestedInput
    playListVideos?: PlayListVideoUpdateManyWithoutPlaylistNestedInput
  }

  export type PlayListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    playListVideos?: PlayListVideoUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlayListCreateManyInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type PlayListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayListVideoCreateInput = {
    id?: string
    addedAt?: Date | string
    playlist: PlayListCreateNestedOneWithoutPlayListVideosInput
    video: VideoCreateNestedOneWithoutPlaylistVideosInput
  }

  export type PlayListVideoUncheckedCreateInput = {
    id?: string
    playlistId: string
    videoId: string
    addedAt?: Date | string
  }

  export type PlayListVideoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlayListUpdateOneRequiredWithoutPlayListVideosNestedInput
    video?: VideoUpdateOneRequiredWithoutPlaylistVideosNestedInput
  }

  export type PlayListVideoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayListVideoCreateManyInput = {
    id?: string
    playlistId: string
    videoId: string
    addedAt?: Date | string
  }

  export type PlayListVideoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayListVideoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PlayListListRelationFilter = {
    every?: PlayListWhereInput
    some?: PlayListWhereInput
    none?: PlayListWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    backupEmail?: SortOrder
    passwordHash?: SortOrder
    about?: SortOrder
    birthDate?: SortOrder
    passwordChangeAt?: SortOrder
    avatarFileName?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    backupEmail?: SortOrder
    passwordHash?: SortOrder
    about?: SortOrder
    birthDate?: SortOrder
    passwordChangeAt?: SortOrder
    avatarFileName?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    backupEmail?: SortOrder
    passwordHash?: SortOrder
    about?: SortOrder
    birthDate?: SortOrder
    passwordChangeAt?: SortOrder
    avatarFileName?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type AgeRatingNullableScalarRelationFilter = {
    is?: AgeRatingWhereInput | null
    isNot?: AgeRatingWhereInput | null
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type PlayListVideoListRelationFilter = {
    every?: PlayListVideoWhereInput
    some?: PlayListVideoWhereInput
    none?: PlayListVideoWhereInput
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayListVideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    name?: SortOrder
    mimetype?: SortOrder
    size?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    ageRatingId?: SortOrder
    views?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    size?: SortOrder
    views?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    name?: SortOrder
    mimetype?: SortOrder
    size?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    ageRatingId?: SortOrder
    views?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    name?: SortOrder
    mimetype?: SortOrder
    size?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    ageRatingId?: SortOrder
    views?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    size?: SortOrder
    views?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type AgeRatingCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type AgeRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type AgeRatingMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type VideoScalarRelationFilter = {
    is?: VideoWhereInput
    isNot?: VideoWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PlayListCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PlayListMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PlayListMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PlayListScalarRelationFilter = {
    is?: PlayListWhereInput
    isNot?: PlayListWhereInput
  }

  export type PlayListVideoPlaylistIdVideoIdCompoundUniqueInput = {
    playlistId: string
    videoId: string
  }

  export type PlayListVideoCountOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    videoId?: SortOrder
    addedAt?: SortOrder
  }

  export type PlayListVideoMaxOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    videoId?: SortOrder
    addedAt?: SortOrder
  }

  export type PlayListVideoMinOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    videoId?: SortOrder
    addedAt?: SortOrder
  }

  export type VideoCreateNestedManyWithoutAuthorInput = {
    create?: XOR<VideoCreateWithoutAuthorInput, VideoUncheckedCreateWithoutAuthorInput> | VideoCreateWithoutAuthorInput[] | VideoUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutAuthorInput | VideoCreateOrConnectWithoutAuthorInput[]
    createMany?: VideoCreateManyAuthorInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type VideoCreateNestedManyWithoutFavoritedByInput = {
    create?: XOR<VideoCreateWithoutFavoritedByInput, VideoUncheckedCreateWithoutFavoritedByInput> | VideoCreateWithoutFavoritedByInput[] | VideoUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutFavoritedByInput | VideoCreateOrConnectWithoutFavoritedByInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type VideoCreateNestedManyWithoutLikedByInput = {
    create?: XOR<VideoCreateWithoutLikedByInput, VideoUncheckedCreateWithoutLikedByInput> | VideoCreateWithoutLikedByInput[] | VideoUncheckedCreateWithoutLikedByInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutLikedByInput | VideoCreateOrConnectWithoutLikedByInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutFollowersInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput> | UserCreateWithoutFollowersInput[] | UserUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput | UserCreateOrConnectWithoutFollowersInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput> | UserCreateWithoutFollowingInput[] | UserUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput | UserCreateOrConnectWithoutFollowingInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PlayListCreateNestedManyWithoutUserInput = {
    create?: XOR<PlayListCreateWithoutUserInput, PlayListUncheckedCreateWithoutUserInput> | PlayListCreateWithoutUserInput[] | PlayListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayListCreateOrConnectWithoutUserInput | PlayListCreateOrConnectWithoutUserInput[]
    createMany?: PlayListCreateManyUserInputEnvelope
    connect?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<VideoCreateWithoutAuthorInput, VideoUncheckedCreateWithoutAuthorInput> | VideoCreateWithoutAuthorInput[] | VideoUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutAuthorInput | VideoCreateOrConnectWithoutAuthorInput[]
    createMany?: VideoCreateManyAuthorInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutFavoritedByInput = {
    create?: XOR<VideoCreateWithoutFavoritedByInput, VideoUncheckedCreateWithoutFavoritedByInput> | VideoCreateWithoutFavoritedByInput[] | VideoUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutFavoritedByInput | VideoCreateOrConnectWithoutFavoritedByInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutLikedByInput = {
    create?: XOR<VideoCreateWithoutLikedByInput, VideoUncheckedCreateWithoutLikedByInput> | VideoCreateWithoutLikedByInput[] | VideoUncheckedCreateWithoutLikedByInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutLikedByInput | VideoCreateOrConnectWithoutLikedByInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFollowersInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput> | UserCreateWithoutFollowersInput[] | UserUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput | UserCreateOrConnectWithoutFollowersInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput> | UserCreateWithoutFollowingInput[] | UserUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput | UserCreateOrConnectWithoutFollowingInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PlayListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlayListCreateWithoutUserInput, PlayListUncheckedCreateWithoutUserInput> | PlayListCreateWithoutUserInput[] | PlayListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayListCreateOrConnectWithoutUserInput | PlayListCreateOrConnectWithoutUserInput[]
    createMany?: PlayListCreateManyUserInputEnvelope
    connect?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VideoUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<VideoCreateWithoutAuthorInput, VideoUncheckedCreateWithoutAuthorInput> | VideoCreateWithoutAuthorInput[] | VideoUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutAuthorInput | VideoCreateOrConnectWithoutAuthorInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutAuthorInput | VideoUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: VideoCreateManyAuthorInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutAuthorInput | VideoUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutAuthorInput | VideoUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type VideoUpdateManyWithoutFavoritedByNestedInput = {
    create?: XOR<VideoCreateWithoutFavoritedByInput, VideoUncheckedCreateWithoutFavoritedByInput> | VideoCreateWithoutFavoritedByInput[] | VideoUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutFavoritedByInput | VideoCreateOrConnectWithoutFavoritedByInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutFavoritedByInput | VideoUpsertWithWhereUniqueWithoutFavoritedByInput[]
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutFavoritedByInput | VideoUpdateWithWhereUniqueWithoutFavoritedByInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutFavoritedByInput | VideoUpdateManyWithWhereWithoutFavoritedByInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type VideoUpdateManyWithoutLikedByNestedInput = {
    create?: XOR<VideoCreateWithoutLikedByInput, VideoUncheckedCreateWithoutLikedByInput> | VideoCreateWithoutLikedByInput[] | VideoUncheckedCreateWithoutLikedByInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutLikedByInput | VideoCreateOrConnectWithoutLikedByInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutLikedByInput | VideoUpsertWithWhereUniqueWithoutLikedByInput[]
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutLikedByInput | VideoUpdateWithWhereUniqueWithoutLikedByInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutLikedByInput | VideoUpdateManyWithWhereWithoutLikedByInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput> | UserCreateWithoutFollowersInput[] | UserUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput | UserCreateOrConnectWithoutFollowersInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowersInput | UserUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowersInput | UserUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowersInput | UserUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput> | UserCreateWithoutFollowingInput[] | UserUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput | UserCreateOrConnectWithoutFollowingInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowingInput | UserUpsertWithWhereUniqueWithoutFollowingInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowingInput | UserUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowingInput | UserUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PlayListUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlayListCreateWithoutUserInput, PlayListUncheckedCreateWithoutUserInput> | PlayListCreateWithoutUserInput[] | PlayListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayListCreateOrConnectWithoutUserInput | PlayListCreateOrConnectWithoutUserInput[]
    upsert?: PlayListUpsertWithWhereUniqueWithoutUserInput | PlayListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlayListCreateManyUserInputEnvelope
    set?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
    disconnect?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
    delete?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
    connect?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
    update?: PlayListUpdateWithWhereUniqueWithoutUserInput | PlayListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlayListUpdateManyWithWhereWithoutUserInput | PlayListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlayListScalarWhereInput | PlayListScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<VideoCreateWithoutAuthorInput, VideoUncheckedCreateWithoutAuthorInput> | VideoCreateWithoutAuthorInput[] | VideoUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutAuthorInput | VideoCreateOrConnectWithoutAuthorInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutAuthorInput | VideoUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: VideoCreateManyAuthorInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutAuthorInput | VideoUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutAuthorInput | VideoUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutFavoritedByNestedInput = {
    create?: XOR<VideoCreateWithoutFavoritedByInput, VideoUncheckedCreateWithoutFavoritedByInput> | VideoCreateWithoutFavoritedByInput[] | VideoUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutFavoritedByInput | VideoCreateOrConnectWithoutFavoritedByInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutFavoritedByInput | VideoUpsertWithWhereUniqueWithoutFavoritedByInput[]
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutFavoritedByInput | VideoUpdateWithWhereUniqueWithoutFavoritedByInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutFavoritedByInput | VideoUpdateManyWithWhereWithoutFavoritedByInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutLikedByNestedInput = {
    create?: XOR<VideoCreateWithoutLikedByInput, VideoUncheckedCreateWithoutLikedByInput> | VideoCreateWithoutLikedByInput[] | VideoUncheckedCreateWithoutLikedByInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutLikedByInput | VideoCreateOrConnectWithoutLikedByInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutLikedByInput | VideoUpsertWithWhereUniqueWithoutLikedByInput[]
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutLikedByInput | VideoUpdateWithWhereUniqueWithoutLikedByInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutLikedByInput | VideoUpdateManyWithWhereWithoutLikedByInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput> | UserCreateWithoutFollowersInput[] | UserUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput | UserCreateOrConnectWithoutFollowersInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowersInput | UserUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowersInput | UserUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowersInput | UserUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput> | UserCreateWithoutFollowingInput[] | UserUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput | UserCreateOrConnectWithoutFollowingInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowingInput | UserUpsertWithWhereUniqueWithoutFollowingInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowingInput | UserUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowingInput | UserUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PlayListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlayListCreateWithoutUserInput, PlayListUncheckedCreateWithoutUserInput> | PlayListCreateWithoutUserInput[] | PlayListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayListCreateOrConnectWithoutUserInput | PlayListCreateOrConnectWithoutUserInput[]
    upsert?: PlayListUpsertWithWhereUniqueWithoutUserInput | PlayListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlayListCreateManyUserInputEnvelope
    set?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
    disconnect?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
    delete?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
    connect?: PlayListWhereUniqueInput | PlayListWhereUniqueInput[]
    update?: PlayListUpdateWithWhereUniqueWithoutUserInput | PlayListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlayListUpdateManyWithWhereWithoutUserInput | PlayListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlayListScalarWhereInput | PlayListScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVideosInput = {
    create?: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideosInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutVideosInput = {
    create?: XOR<CategoryCreateWithoutVideosInput, CategoryUncheckedCreateWithoutVideosInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutVideosInput
    connect?: CategoryWhereUniqueInput
  }

  export type AgeRatingCreateNestedOneWithoutVideosInput = {
    create?: XOR<AgeRatingCreateWithoutVideosInput, AgeRatingUncheckedCreateWithoutVideosInput>
    connectOrCreate?: AgeRatingCreateOrConnectWithoutVideosInput
    connect?: AgeRatingWhereUniqueInput
  }

  export type TagCreateNestedManyWithoutVideosInput = {
    create?: XOR<TagCreateWithoutVideosInput, TagUncheckedCreateWithoutVideosInput> | TagCreateWithoutVideosInput[] | TagUncheckedCreateWithoutVideosInput[]
    connectOrCreate?: TagCreateOrConnectWithoutVideosInput | TagCreateOrConnectWithoutVideosInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutFavoriteVideosInput = {
    create?: XOR<UserCreateWithoutFavoriteVideosInput, UserUncheckedCreateWithoutFavoriteVideosInput> | UserCreateWithoutFavoriteVideosInput[] | UserUncheckedCreateWithoutFavoriteVideosInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteVideosInput | UserCreateOrConnectWithoutFavoriteVideosInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutLikesVideoInput = {
    create?: XOR<UserCreateWithoutLikesVideoInput, UserUncheckedCreateWithoutLikesVideoInput> | UserCreateWithoutLikesVideoInput[] | UserUncheckedCreateWithoutLikesVideoInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikesVideoInput | UserCreateOrConnectWithoutLikesVideoInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutVideoInput = {
    create?: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput> | CommentCreateWithoutVideoInput[] | CommentUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutVideoInput | CommentCreateOrConnectWithoutVideoInput[]
    createMany?: CommentCreateManyVideoInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PlayListVideoCreateNestedManyWithoutVideoInput = {
    create?: XOR<PlayListVideoCreateWithoutVideoInput, PlayListVideoUncheckedCreateWithoutVideoInput> | PlayListVideoCreateWithoutVideoInput[] | PlayListVideoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: PlayListVideoCreateOrConnectWithoutVideoInput | PlayListVideoCreateOrConnectWithoutVideoInput[]
    createMany?: PlayListVideoCreateManyVideoInputEnvelope
    connect?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutVideosInput = {
    create?: XOR<TagCreateWithoutVideosInput, TagUncheckedCreateWithoutVideosInput> | TagCreateWithoutVideosInput[] | TagUncheckedCreateWithoutVideosInput[]
    connectOrCreate?: TagCreateOrConnectWithoutVideosInput | TagCreateOrConnectWithoutVideosInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFavoriteVideosInput = {
    create?: XOR<UserCreateWithoutFavoriteVideosInput, UserUncheckedCreateWithoutFavoriteVideosInput> | UserCreateWithoutFavoriteVideosInput[] | UserUncheckedCreateWithoutFavoriteVideosInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteVideosInput | UserCreateOrConnectWithoutFavoriteVideosInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutLikesVideoInput = {
    create?: XOR<UserCreateWithoutLikesVideoInput, UserUncheckedCreateWithoutLikesVideoInput> | UserCreateWithoutLikesVideoInput[] | UserUncheckedCreateWithoutLikesVideoInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikesVideoInput | UserCreateOrConnectWithoutLikesVideoInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput> | CommentCreateWithoutVideoInput[] | CommentUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutVideoInput | CommentCreateOrConnectWithoutVideoInput[]
    createMany?: CommentCreateManyVideoInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PlayListVideoUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<PlayListVideoCreateWithoutVideoInput, PlayListVideoUncheckedCreateWithoutVideoInput> | PlayListVideoCreateWithoutVideoInput[] | PlayListVideoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: PlayListVideoCreateOrConnectWithoutVideoInput | PlayListVideoCreateOrConnectWithoutVideoInput[]
    createMany?: PlayListVideoCreateManyVideoInputEnvelope
    connect?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideosInput
    upsert?: UserUpsertWithoutVideosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVideosInput, UserUpdateWithoutVideosInput>, UserUncheckedUpdateWithoutVideosInput>
  }

  export type CategoryUpdateOneWithoutVideosNestedInput = {
    create?: XOR<CategoryCreateWithoutVideosInput, CategoryUncheckedCreateWithoutVideosInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutVideosInput
    upsert?: CategoryUpsertWithoutVideosInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutVideosInput, CategoryUpdateWithoutVideosInput>, CategoryUncheckedUpdateWithoutVideosInput>
  }

  export type AgeRatingUpdateOneWithoutVideosNestedInput = {
    create?: XOR<AgeRatingCreateWithoutVideosInput, AgeRatingUncheckedCreateWithoutVideosInput>
    connectOrCreate?: AgeRatingCreateOrConnectWithoutVideosInput
    upsert?: AgeRatingUpsertWithoutVideosInput
    disconnect?: AgeRatingWhereInput | boolean
    delete?: AgeRatingWhereInput | boolean
    connect?: AgeRatingWhereUniqueInput
    update?: XOR<XOR<AgeRatingUpdateToOneWithWhereWithoutVideosInput, AgeRatingUpdateWithoutVideosInput>, AgeRatingUncheckedUpdateWithoutVideosInput>
  }

  export type TagUpdateManyWithoutVideosNestedInput = {
    create?: XOR<TagCreateWithoutVideosInput, TagUncheckedCreateWithoutVideosInput> | TagCreateWithoutVideosInput[] | TagUncheckedCreateWithoutVideosInput[]
    connectOrCreate?: TagCreateOrConnectWithoutVideosInput | TagCreateOrConnectWithoutVideosInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutVideosInput | TagUpsertWithWhereUniqueWithoutVideosInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutVideosInput | TagUpdateWithWhereUniqueWithoutVideosInput[]
    updateMany?: TagUpdateManyWithWhereWithoutVideosInput | TagUpdateManyWithWhereWithoutVideosInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type UserUpdateManyWithoutFavoriteVideosNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteVideosInput, UserUncheckedCreateWithoutFavoriteVideosInput> | UserCreateWithoutFavoriteVideosInput[] | UserUncheckedCreateWithoutFavoriteVideosInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteVideosInput | UserCreateOrConnectWithoutFavoriteVideosInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFavoriteVideosInput | UserUpsertWithWhereUniqueWithoutFavoriteVideosInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFavoriteVideosInput | UserUpdateWithWhereUniqueWithoutFavoriteVideosInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFavoriteVideosInput | UserUpdateManyWithWhereWithoutFavoriteVideosInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutLikesVideoNestedInput = {
    create?: XOR<UserCreateWithoutLikesVideoInput, UserUncheckedCreateWithoutLikesVideoInput> | UserCreateWithoutLikesVideoInput[] | UserUncheckedCreateWithoutLikesVideoInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikesVideoInput | UserCreateOrConnectWithoutLikesVideoInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLikesVideoInput | UserUpsertWithWhereUniqueWithoutLikesVideoInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLikesVideoInput | UserUpdateWithWhereUniqueWithoutLikesVideoInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLikesVideoInput | UserUpdateManyWithWhereWithoutLikesVideoInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutVideoNestedInput = {
    create?: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput> | CommentCreateWithoutVideoInput[] | CommentUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutVideoInput | CommentCreateOrConnectWithoutVideoInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutVideoInput | CommentUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: CommentCreateManyVideoInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutVideoInput | CommentUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutVideoInput | CommentUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PlayListVideoUpdateManyWithoutVideoNestedInput = {
    create?: XOR<PlayListVideoCreateWithoutVideoInput, PlayListVideoUncheckedCreateWithoutVideoInput> | PlayListVideoCreateWithoutVideoInput[] | PlayListVideoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: PlayListVideoCreateOrConnectWithoutVideoInput | PlayListVideoCreateOrConnectWithoutVideoInput[]
    upsert?: PlayListVideoUpsertWithWhereUniqueWithoutVideoInput | PlayListVideoUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: PlayListVideoCreateManyVideoInputEnvelope
    set?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
    disconnect?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
    delete?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
    connect?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
    update?: PlayListVideoUpdateWithWhereUniqueWithoutVideoInput | PlayListVideoUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: PlayListVideoUpdateManyWithWhereWithoutVideoInput | PlayListVideoUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: PlayListVideoScalarWhereInput | PlayListVideoScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutVideosNestedInput = {
    create?: XOR<TagCreateWithoutVideosInput, TagUncheckedCreateWithoutVideosInput> | TagCreateWithoutVideosInput[] | TagUncheckedCreateWithoutVideosInput[]
    connectOrCreate?: TagCreateOrConnectWithoutVideosInput | TagCreateOrConnectWithoutVideosInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutVideosInput | TagUpsertWithWhereUniqueWithoutVideosInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutVideosInput | TagUpdateWithWhereUniqueWithoutVideosInput[]
    updateMany?: TagUpdateManyWithWhereWithoutVideosInput | TagUpdateManyWithWhereWithoutVideosInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFavoriteVideosNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteVideosInput, UserUncheckedCreateWithoutFavoriteVideosInput> | UserCreateWithoutFavoriteVideosInput[] | UserUncheckedCreateWithoutFavoriteVideosInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteVideosInput | UserCreateOrConnectWithoutFavoriteVideosInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFavoriteVideosInput | UserUpsertWithWhereUniqueWithoutFavoriteVideosInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFavoriteVideosInput | UserUpdateWithWhereUniqueWithoutFavoriteVideosInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFavoriteVideosInput | UserUpdateManyWithWhereWithoutFavoriteVideosInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutLikesVideoNestedInput = {
    create?: XOR<UserCreateWithoutLikesVideoInput, UserUncheckedCreateWithoutLikesVideoInput> | UserCreateWithoutLikesVideoInput[] | UserUncheckedCreateWithoutLikesVideoInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikesVideoInput | UserCreateOrConnectWithoutLikesVideoInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLikesVideoInput | UserUpsertWithWhereUniqueWithoutLikesVideoInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLikesVideoInput | UserUpdateWithWhereUniqueWithoutLikesVideoInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLikesVideoInput | UserUpdateManyWithWhereWithoutLikesVideoInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput> | CommentCreateWithoutVideoInput[] | CommentUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutVideoInput | CommentCreateOrConnectWithoutVideoInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutVideoInput | CommentUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: CommentCreateManyVideoInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutVideoInput | CommentUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutVideoInput | CommentUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PlayListVideoUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<PlayListVideoCreateWithoutVideoInput, PlayListVideoUncheckedCreateWithoutVideoInput> | PlayListVideoCreateWithoutVideoInput[] | PlayListVideoUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: PlayListVideoCreateOrConnectWithoutVideoInput | PlayListVideoCreateOrConnectWithoutVideoInput[]
    upsert?: PlayListVideoUpsertWithWhereUniqueWithoutVideoInput | PlayListVideoUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: PlayListVideoCreateManyVideoInputEnvelope
    set?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
    disconnect?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
    delete?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
    connect?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
    update?: PlayListVideoUpdateWithWhereUniqueWithoutVideoInput | PlayListVideoUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: PlayListVideoUpdateManyWithWhereWithoutVideoInput | PlayListVideoUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: PlayListVideoScalarWhereInput | PlayListVideoScalarWhereInput[]
  }

  export type VideoCreateNestedManyWithoutTagsInput = {
    create?: XOR<VideoCreateWithoutTagsInput, VideoUncheckedCreateWithoutTagsInput> | VideoCreateWithoutTagsInput[] | VideoUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutTagsInput | VideoCreateOrConnectWithoutTagsInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<VideoCreateWithoutTagsInput, VideoUncheckedCreateWithoutTagsInput> | VideoCreateWithoutTagsInput[] | VideoUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutTagsInput | VideoCreateOrConnectWithoutTagsInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type VideoUpdateManyWithoutTagsNestedInput = {
    create?: XOR<VideoCreateWithoutTagsInput, VideoUncheckedCreateWithoutTagsInput> | VideoCreateWithoutTagsInput[] | VideoUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutTagsInput | VideoCreateOrConnectWithoutTagsInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutTagsInput | VideoUpsertWithWhereUniqueWithoutTagsInput[]
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutTagsInput | VideoUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutTagsInput | VideoUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<VideoCreateWithoutTagsInput, VideoUncheckedCreateWithoutTagsInput> | VideoCreateWithoutTagsInput[] | VideoUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutTagsInput | VideoCreateOrConnectWithoutTagsInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutTagsInput | VideoUpsertWithWhereUniqueWithoutTagsInput[]
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutTagsInput | VideoUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutTagsInput | VideoUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type VideoCreateNestedManyWithoutCategoryInput = {
    create?: XOR<VideoCreateWithoutCategoryInput, VideoUncheckedCreateWithoutCategoryInput> | VideoCreateWithoutCategoryInput[] | VideoUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutCategoryInput | VideoCreateOrConnectWithoutCategoryInput[]
    createMany?: VideoCreateManyCategoryInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<VideoCreateWithoutCategoryInput, VideoUncheckedCreateWithoutCategoryInput> | VideoCreateWithoutCategoryInput[] | VideoUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutCategoryInput | VideoCreateOrConnectWithoutCategoryInput[]
    createMany?: VideoCreateManyCategoryInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type VideoUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<VideoCreateWithoutCategoryInput, VideoUncheckedCreateWithoutCategoryInput> | VideoCreateWithoutCategoryInput[] | VideoUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutCategoryInput | VideoCreateOrConnectWithoutCategoryInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutCategoryInput | VideoUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: VideoCreateManyCategoryInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutCategoryInput | VideoUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutCategoryInput | VideoUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<VideoCreateWithoutCategoryInput, VideoUncheckedCreateWithoutCategoryInput> | VideoCreateWithoutCategoryInput[] | VideoUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutCategoryInput | VideoCreateOrConnectWithoutCategoryInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutCategoryInput | VideoUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: VideoCreateManyCategoryInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutCategoryInput | VideoUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutCategoryInput | VideoUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type VideoCreateNestedManyWithoutAgeRatingInput = {
    create?: XOR<VideoCreateWithoutAgeRatingInput, VideoUncheckedCreateWithoutAgeRatingInput> | VideoCreateWithoutAgeRatingInput[] | VideoUncheckedCreateWithoutAgeRatingInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutAgeRatingInput | VideoCreateOrConnectWithoutAgeRatingInput[]
    createMany?: VideoCreateManyAgeRatingInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutAgeRatingInput = {
    create?: XOR<VideoCreateWithoutAgeRatingInput, VideoUncheckedCreateWithoutAgeRatingInput> | VideoCreateWithoutAgeRatingInput[] | VideoUncheckedCreateWithoutAgeRatingInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutAgeRatingInput | VideoCreateOrConnectWithoutAgeRatingInput[]
    createMany?: VideoCreateManyAgeRatingInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type VideoUpdateManyWithoutAgeRatingNestedInput = {
    create?: XOR<VideoCreateWithoutAgeRatingInput, VideoUncheckedCreateWithoutAgeRatingInput> | VideoCreateWithoutAgeRatingInput[] | VideoUncheckedCreateWithoutAgeRatingInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutAgeRatingInput | VideoCreateOrConnectWithoutAgeRatingInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutAgeRatingInput | VideoUpsertWithWhereUniqueWithoutAgeRatingInput[]
    createMany?: VideoCreateManyAgeRatingInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutAgeRatingInput | VideoUpdateWithWhereUniqueWithoutAgeRatingInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutAgeRatingInput | VideoUpdateManyWithWhereWithoutAgeRatingInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutAgeRatingNestedInput = {
    create?: XOR<VideoCreateWithoutAgeRatingInput, VideoUncheckedCreateWithoutAgeRatingInput> | VideoCreateWithoutAgeRatingInput[] | VideoUncheckedCreateWithoutAgeRatingInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutAgeRatingInput | VideoCreateOrConnectWithoutAgeRatingInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutAgeRatingInput | VideoUpsertWithWhereUniqueWithoutAgeRatingInput[]
    createMany?: VideoCreateManyAgeRatingInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutAgeRatingInput | VideoUpdateWithWhereUniqueWithoutAgeRatingInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutAgeRatingInput | VideoUpdateManyWithWhereWithoutAgeRatingInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutCommentsInput = {
    create?: XOR<VideoCreateWithoutCommentsInput, VideoUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutCommentsInput
    connect?: VideoWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type VideoUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<VideoCreateWithoutCommentsInput, VideoUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutCommentsInput
    upsert?: VideoUpsertWithoutCommentsInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutCommentsInput, VideoUpdateWithoutCommentsInput>, VideoUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutPlaylistInput = {
    create?: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistInput
    connect?: UserWhereUniqueInput
  }

  export type PlayListVideoCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlayListVideoCreateWithoutPlaylistInput, PlayListVideoUncheckedCreateWithoutPlaylistInput> | PlayListVideoCreateWithoutPlaylistInput[] | PlayListVideoUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlayListVideoCreateOrConnectWithoutPlaylistInput | PlayListVideoCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlayListVideoCreateManyPlaylistInputEnvelope
    connect?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
  }

  export type PlayListVideoUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlayListVideoCreateWithoutPlaylistInput, PlayListVideoUncheckedCreateWithoutPlaylistInput> | PlayListVideoCreateWithoutPlaylistInput[] | PlayListVideoUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlayListVideoCreateOrConnectWithoutPlaylistInput | PlayListVideoCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlayListVideoCreateManyPlaylistInputEnvelope
    connect?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutPlaylistNestedInput = {
    create?: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistInput
    upsert?: UserUpsertWithoutPlaylistInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlaylistInput, UserUpdateWithoutPlaylistInput>, UserUncheckedUpdateWithoutPlaylistInput>
  }

  export type PlayListVideoUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlayListVideoCreateWithoutPlaylistInput, PlayListVideoUncheckedCreateWithoutPlaylistInput> | PlayListVideoCreateWithoutPlaylistInput[] | PlayListVideoUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlayListVideoCreateOrConnectWithoutPlaylistInput | PlayListVideoCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlayListVideoUpsertWithWhereUniqueWithoutPlaylistInput | PlayListVideoUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlayListVideoCreateManyPlaylistInputEnvelope
    set?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
    disconnect?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
    delete?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
    connect?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
    update?: PlayListVideoUpdateWithWhereUniqueWithoutPlaylistInput | PlayListVideoUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlayListVideoUpdateManyWithWhereWithoutPlaylistInput | PlayListVideoUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlayListVideoScalarWhereInput | PlayListVideoScalarWhereInput[]
  }

  export type PlayListVideoUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlayListVideoCreateWithoutPlaylistInput, PlayListVideoUncheckedCreateWithoutPlaylistInput> | PlayListVideoCreateWithoutPlaylistInput[] | PlayListVideoUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlayListVideoCreateOrConnectWithoutPlaylistInput | PlayListVideoCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlayListVideoUpsertWithWhereUniqueWithoutPlaylistInput | PlayListVideoUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlayListVideoCreateManyPlaylistInputEnvelope
    set?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
    disconnect?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
    delete?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
    connect?: PlayListVideoWhereUniqueInput | PlayListVideoWhereUniqueInput[]
    update?: PlayListVideoUpdateWithWhereUniqueWithoutPlaylistInput | PlayListVideoUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlayListVideoUpdateManyWithWhereWithoutPlaylistInput | PlayListVideoUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlayListVideoScalarWhereInput | PlayListVideoScalarWhereInput[]
  }

  export type PlayListCreateNestedOneWithoutPlayListVideosInput = {
    create?: XOR<PlayListCreateWithoutPlayListVideosInput, PlayListUncheckedCreateWithoutPlayListVideosInput>
    connectOrCreate?: PlayListCreateOrConnectWithoutPlayListVideosInput
    connect?: PlayListWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutPlaylistVideosInput = {
    create?: XOR<VideoCreateWithoutPlaylistVideosInput, VideoUncheckedCreateWithoutPlaylistVideosInput>
    connectOrCreate?: VideoCreateOrConnectWithoutPlaylistVideosInput
    connect?: VideoWhereUniqueInput
  }

  export type PlayListUpdateOneRequiredWithoutPlayListVideosNestedInput = {
    create?: XOR<PlayListCreateWithoutPlayListVideosInput, PlayListUncheckedCreateWithoutPlayListVideosInput>
    connectOrCreate?: PlayListCreateOrConnectWithoutPlayListVideosInput
    upsert?: PlayListUpsertWithoutPlayListVideosInput
    connect?: PlayListWhereUniqueInput
    update?: XOR<XOR<PlayListUpdateToOneWithWhereWithoutPlayListVideosInput, PlayListUpdateWithoutPlayListVideosInput>, PlayListUncheckedUpdateWithoutPlayListVideosInput>
  }

  export type VideoUpdateOneRequiredWithoutPlaylistVideosNestedInput = {
    create?: XOR<VideoCreateWithoutPlaylistVideosInput, VideoUncheckedCreateWithoutPlaylistVideosInput>
    connectOrCreate?: VideoCreateOrConnectWithoutPlaylistVideosInput
    upsert?: VideoUpsertWithoutPlaylistVideosInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutPlaylistVideosInput, VideoUpdateWithoutPlaylistVideosInput>, VideoUncheckedUpdateWithoutPlaylistVideosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VideoCreateWithoutAuthorInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    views?: number
    category?: CategoryCreateNestedOneWithoutVideosInput
    ageRating?: AgeRatingCreateNestedOneWithoutVideosInput
    tags?: TagCreateNestedManyWithoutVideosInput
    favoritedBy?: UserCreateNestedManyWithoutFavoriteVideosInput
    likedBy?: UserCreateNestedManyWithoutLikesVideoInput
    comments?: CommentCreateNestedManyWithoutVideoInput
    playlistVideos?: PlayListVideoCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutAuthorInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    categoryId?: string | null
    ageRatingId?: string | null
    views?: number
    tags?: TagUncheckedCreateNestedManyWithoutVideosInput
    favoritedBy?: UserUncheckedCreateNestedManyWithoutFavoriteVideosInput
    likedBy?: UserUncheckedCreateNestedManyWithoutLikesVideoInput
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
    playlistVideos?: PlayListVideoUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutAuthorInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutAuthorInput, VideoUncheckedCreateWithoutAuthorInput>
  }

  export type VideoCreateManyAuthorInputEnvelope = {
    data: VideoCreateManyAuthorInput | VideoCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type VideoCreateWithoutFavoritedByInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    views?: number
    author: UserCreateNestedOneWithoutVideosInput
    category?: CategoryCreateNestedOneWithoutVideosInput
    ageRating?: AgeRatingCreateNestedOneWithoutVideosInput
    tags?: TagCreateNestedManyWithoutVideosInput
    likedBy?: UserCreateNestedManyWithoutLikesVideoInput
    comments?: CommentCreateNestedManyWithoutVideoInput
    playlistVideos?: PlayListVideoCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutFavoritedByInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    userId: string
    categoryId?: string | null
    ageRatingId?: string | null
    views?: number
    tags?: TagUncheckedCreateNestedManyWithoutVideosInput
    likedBy?: UserUncheckedCreateNestedManyWithoutLikesVideoInput
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
    playlistVideos?: PlayListVideoUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutFavoritedByInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutFavoritedByInput, VideoUncheckedCreateWithoutFavoritedByInput>
  }

  export type VideoCreateWithoutLikedByInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    views?: number
    author: UserCreateNestedOneWithoutVideosInput
    category?: CategoryCreateNestedOneWithoutVideosInput
    ageRating?: AgeRatingCreateNestedOneWithoutVideosInput
    tags?: TagCreateNestedManyWithoutVideosInput
    favoritedBy?: UserCreateNestedManyWithoutFavoriteVideosInput
    comments?: CommentCreateNestedManyWithoutVideoInput
    playlistVideos?: PlayListVideoCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutLikedByInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    userId: string
    categoryId?: string | null
    ageRatingId?: string | null
    views?: number
    tags?: TagUncheckedCreateNestedManyWithoutVideosInput
    favoritedBy?: UserUncheckedCreateNestedManyWithoutFavoriteVideosInput
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
    playlistVideos?: PlayListVideoUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutLikedByInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutLikedByInput, VideoUncheckedCreateWithoutLikedByInput>
  }

  export type CommentCreateWithoutAuthorInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    video: VideoCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoId: string
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutFollowersInput = {
    id?: string
    nickname: string
    email: string
    backupEmail?: string | null
    passwordHash: string
    about?: string | null
    birthDate?: string | null
    passwordChangeAt?: Date | string | null
    avatarFileName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutAuthorInput
    favoriteVideos?: VideoCreateNestedManyWithoutFavoritedByInput
    likesVideo?: VideoCreateNestedManyWithoutLikedByInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    following?: UserCreateNestedManyWithoutFollowersInput
    playlist?: PlayListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowersInput = {
    id?: string
    nickname: string
    email: string
    backupEmail?: string | null
    passwordHash: string
    about?: string | null
    birthDate?: string | null
    passwordChangeAt?: Date | string | null
    avatarFileName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutAuthorInput
    favoriteVideos?: VideoUncheckedCreateNestedManyWithoutFavoritedByInput
    likesVideo?: VideoUncheckedCreateNestedManyWithoutLikedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    following?: UserUncheckedCreateNestedManyWithoutFollowersInput
    playlist?: PlayListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
  }

  export type UserCreateWithoutFollowingInput = {
    id?: string
    nickname: string
    email: string
    backupEmail?: string | null
    passwordHash: string
    about?: string | null
    birthDate?: string | null
    passwordChangeAt?: Date | string | null
    avatarFileName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutAuthorInput
    favoriteVideos?: VideoCreateNestedManyWithoutFavoritedByInput
    likesVideo?: VideoCreateNestedManyWithoutLikedByInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    playlist?: PlayListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowingInput = {
    id?: string
    nickname: string
    email: string
    backupEmail?: string | null
    passwordHash: string
    about?: string | null
    birthDate?: string | null
    passwordChangeAt?: Date | string | null
    avatarFileName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutAuthorInput
    favoriteVideos?: VideoUncheckedCreateNestedManyWithoutFavoritedByInput
    likesVideo?: VideoUncheckedCreateNestedManyWithoutLikedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    followers?: UserUncheckedCreateNestedManyWithoutFollowingInput
    playlist?: PlayListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type PlayListCreateWithoutUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playListVideos?: PlayListVideoCreateNestedManyWithoutPlaylistInput
  }

  export type PlayListUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playListVideos?: PlayListVideoUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlayListCreateOrConnectWithoutUserInput = {
    where: PlayListWhereUniqueInput
    create: XOR<PlayListCreateWithoutUserInput, PlayListUncheckedCreateWithoutUserInput>
  }

  export type PlayListCreateManyUserInputEnvelope = {
    data: PlayListCreateManyUserInput | PlayListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VideoUpsertWithWhereUniqueWithoutAuthorInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutAuthorInput, VideoUncheckedUpdateWithoutAuthorInput>
    create: XOR<VideoCreateWithoutAuthorInput, VideoUncheckedCreateWithoutAuthorInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutAuthorInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutAuthorInput, VideoUncheckedUpdateWithoutAuthorInput>
  }

  export type VideoUpdateManyWithWhereWithoutAuthorInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutAuthorInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    id?: StringFilter<"Video"> | string
    originalName?: StringFilter<"Video"> | string
    url?: StringFilter<"Video"> | string
    name?: StringFilter<"Video"> | string
    mimetype?: StringFilter<"Video"> | string
    size?: IntFilter<"Video"> | number
    title?: StringFilter<"Video"> | string
    description?: StringNullableFilter<"Video"> | string | null
    isPublic?: BoolFilter<"Video"> | boolean
    createdAt?: DateTimeFilter<"Video"> | Date | string
    userId?: StringFilter<"Video"> | string
    categoryId?: StringNullableFilter<"Video"> | string | null
    ageRatingId?: StringNullableFilter<"Video"> | string | null
    views?: IntFilter<"Video"> | number
  }

  export type VideoUpsertWithWhereUniqueWithoutFavoritedByInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutFavoritedByInput, VideoUncheckedUpdateWithoutFavoritedByInput>
    create: XOR<VideoCreateWithoutFavoritedByInput, VideoUncheckedCreateWithoutFavoritedByInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutFavoritedByInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutFavoritedByInput, VideoUncheckedUpdateWithoutFavoritedByInput>
  }

  export type VideoUpdateManyWithWhereWithoutFavoritedByInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutFavoritedByInput>
  }

  export type VideoUpsertWithWhereUniqueWithoutLikedByInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutLikedByInput, VideoUncheckedUpdateWithoutLikedByInput>
    create: XOR<VideoCreateWithoutLikedByInput, VideoUncheckedCreateWithoutLikedByInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutLikedByInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutLikedByInput, VideoUncheckedUpdateWithoutLikedByInput>
  }

  export type VideoUpdateManyWithWhereWithoutLikedByInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutLikedByInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: StringFilter<"Comment"> | string
    videoId?: StringFilter<"Comment"> | string
  }

  export type UserUpsertWithWhereUniqueWithoutFollowersInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFollowersInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type UserUpdateManyWithWhereWithoutFollowersInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFollowersInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    nickname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    backupEmail?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    about?: StringNullableFilter<"User"> | string | null
    birthDate?: StringNullableFilter<"User"> | string | null
    passwordChangeAt?: DateTimeNullableFilter<"User"> | Date | string | null
    avatarFileName?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutFollowingInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFollowingInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserUpdateManyWithWhereWithoutFollowingInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFollowingInput>
  }

  export type PlayListUpsertWithWhereUniqueWithoutUserInput = {
    where: PlayListWhereUniqueInput
    update: XOR<PlayListUpdateWithoutUserInput, PlayListUncheckedUpdateWithoutUserInput>
    create: XOR<PlayListCreateWithoutUserInput, PlayListUncheckedCreateWithoutUserInput>
  }

  export type PlayListUpdateWithWhereUniqueWithoutUserInput = {
    where: PlayListWhereUniqueInput
    data: XOR<PlayListUpdateWithoutUserInput, PlayListUncheckedUpdateWithoutUserInput>
  }

  export type PlayListUpdateManyWithWhereWithoutUserInput = {
    where: PlayListScalarWhereInput
    data: XOR<PlayListUpdateManyMutationInput, PlayListUncheckedUpdateManyWithoutUserInput>
  }

  export type PlayListScalarWhereInput = {
    AND?: PlayListScalarWhereInput | PlayListScalarWhereInput[]
    OR?: PlayListScalarWhereInput[]
    NOT?: PlayListScalarWhereInput | PlayListScalarWhereInput[]
    id?: StringFilter<"PlayList"> | string
    title?: StringFilter<"PlayList"> | string
    createdAt?: DateTimeFilter<"PlayList"> | Date | string
    updatedAt?: DateTimeFilter<"PlayList"> | Date | string
    userId?: StringNullableFilter<"PlayList"> | string | null
  }

  export type UserCreateWithoutVideosInput = {
    id?: string
    nickname: string
    email: string
    backupEmail?: string | null
    passwordHash: string
    about?: string | null
    birthDate?: string | null
    passwordChangeAt?: Date | string | null
    avatarFileName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteVideos?: VideoCreateNestedManyWithoutFavoritedByInput
    likesVideo?: VideoCreateNestedManyWithoutLikedByInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    playlist?: PlayListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVideosInput = {
    id?: string
    nickname: string
    email: string
    backupEmail?: string | null
    passwordHash: string
    about?: string | null
    birthDate?: string | null
    passwordChangeAt?: Date | string | null
    avatarFileName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteVideos?: VideoUncheckedCreateNestedManyWithoutFavoritedByInput
    likesVideo?: VideoUncheckedCreateNestedManyWithoutLikedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    following?: UserUncheckedCreateNestedManyWithoutFollowersInput
    followers?: UserUncheckedCreateNestedManyWithoutFollowingInput
    playlist?: PlayListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVideosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
  }

  export type CategoryCreateWithoutVideosInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutVideosInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutVideosInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutVideosInput, CategoryUncheckedCreateWithoutVideosInput>
  }

  export type AgeRatingCreateWithoutVideosInput = {
    id?: string
    code: string
    createdAt?: Date | string
  }

  export type AgeRatingUncheckedCreateWithoutVideosInput = {
    id?: string
    code: string
    createdAt?: Date | string
  }

  export type AgeRatingCreateOrConnectWithoutVideosInput = {
    where: AgeRatingWhereUniqueInput
    create: XOR<AgeRatingCreateWithoutVideosInput, AgeRatingUncheckedCreateWithoutVideosInput>
  }

  export type TagCreateWithoutVideosInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type TagUncheckedCreateWithoutVideosInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type TagCreateOrConnectWithoutVideosInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutVideosInput, TagUncheckedCreateWithoutVideosInput>
  }

  export type UserCreateWithoutFavoriteVideosInput = {
    id?: string
    nickname: string
    email: string
    backupEmail?: string | null
    passwordHash: string
    about?: string | null
    birthDate?: string | null
    passwordChangeAt?: Date | string | null
    avatarFileName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutAuthorInput
    likesVideo?: VideoCreateNestedManyWithoutLikedByInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    playlist?: PlayListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoriteVideosInput = {
    id?: string
    nickname: string
    email: string
    backupEmail?: string | null
    passwordHash: string
    about?: string | null
    birthDate?: string | null
    passwordChangeAt?: Date | string | null
    avatarFileName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutAuthorInput
    likesVideo?: VideoUncheckedCreateNestedManyWithoutLikedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    following?: UserUncheckedCreateNestedManyWithoutFollowersInput
    followers?: UserUncheckedCreateNestedManyWithoutFollowingInput
    playlist?: PlayListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoriteVideosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteVideosInput, UserUncheckedCreateWithoutFavoriteVideosInput>
  }

  export type UserCreateWithoutLikesVideoInput = {
    id?: string
    nickname: string
    email: string
    backupEmail?: string | null
    passwordHash: string
    about?: string | null
    birthDate?: string | null
    passwordChangeAt?: Date | string | null
    avatarFileName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutAuthorInput
    favoriteVideos?: VideoCreateNestedManyWithoutFavoritedByInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    playlist?: PlayListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikesVideoInput = {
    id?: string
    nickname: string
    email: string
    backupEmail?: string | null
    passwordHash: string
    about?: string | null
    birthDate?: string | null
    passwordChangeAt?: Date | string | null
    avatarFileName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutAuthorInput
    favoriteVideos?: VideoUncheckedCreateNestedManyWithoutFavoritedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    following?: UserUncheckedCreateNestedManyWithoutFollowersInput
    followers?: UserUncheckedCreateNestedManyWithoutFollowingInput
    playlist?: PlayListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikesVideoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesVideoInput, UserUncheckedCreateWithoutLikesVideoInput>
  }

  export type CommentCreateWithoutVideoInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutVideoInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CommentCreateOrConnectWithoutVideoInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput>
  }

  export type CommentCreateManyVideoInputEnvelope = {
    data: CommentCreateManyVideoInput | CommentCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type PlayListVideoCreateWithoutVideoInput = {
    id?: string
    addedAt?: Date | string
    playlist: PlayListCreateNestedOneWithoutPlayListVideosInput
  }

  export type PlayListVideoUncheckedCreateWithoutVideoInput = {
    id?: string
    playlistId: string
    addedAt?: Date | string
  }

  export type PlayListVideoCreateOrConnectWithoutVideoInput = {
    where: PlayListVideoWhereUniqueInput
    create: XOR<PlayListVideoCreateWithoutVideoInput, PlayListVideoUncheckedCreateWithoutVideoInput>
  }

  export type PlayListVideoCreateManyVideoInputEnvelope = {
    data: PlayListVideoCreateManyVideoInput | PlayListVideoCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVideosInput = {
    update: XOR<UserUpdateWithoutVideosInput, UserUncheckedUpdateWithoutVideosInput>
    create: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVideosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVideosInput, UserUncheckedUpdateWithoutVideosInput>
  }

  export type UserUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteVideos?: VideoUpdateManyWithoutFavoritedByNestedInput
    likesVideo?: VideoUpdateManyWithoutLikedByNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    following?: UserUpdateManyWithoutFollowersNestedInput
    followers?: UserUpdateManyWithoutFollowingNestedInput
    playlist?: PlayListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteVideos?: VideoUncheckedUpdateManyWithoutFavoritedByNestedInput
    likesVideo?: VideoUncheckedUpdateManyWithoutLikedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowersNestedInput
    followers?: UserUncheckedUpdateManyWithoutFollowingNestedInput
    playlist?: PlayListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutVideosInput = {
    update: XOR<CategoryUpdateWithoutVideosInput, CategoryUncheckedUpdateWithoutVideosInput>
    create: XOR<CategoryCreateWithoutVideosInput, CategoryUncheckedCreateWithoutVideosInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutVideosInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutVideosInput, CategoryUncheckedUpdateWithoutVideosInput>
  }

  export type CategoryUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgeRatingUpsertWithoutVideosInput = {
    update: XOR<AgeRatingUpdateWithoutVideosInput, AgeRatingUncheckedUpdateWithoutVideosInput>
    create: XOR<AgeRatingCreateWithoutVideosInput, AgeRatingUncheckedCreateWithoutVideosInput>
    where?: AgeRatingWhereInput
  }

  export type AgeRatingUpdateToOneWithWhereWithoutVideosInput = {
    where?: AgeRatingWhereInput
    data: XOR<AgeRatingUpdateWithoutVideosInput, AgeRatingUncheckedUpdateWithoutVideosInput>
  }

  export type AgeRatingUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgeRatingUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpsertWithWhereUniqueWithoutVideosInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutVideosInput, TagUncheckedUpdateWithoutVideosInput>
    create: XOR<TagCreateWithoutVideosInput, TagUncheckedCreateWithoutVideosInput>
  }

  export type TagUpdateWithWhereUniqueWithoutVideosInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutVideosInput, TagUncheckedUpdateWithoutVideosInput>
  }

  export type TagUpdateManyWithWhereWithoutVideosInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutVideosInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutFavoriteVideosInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFavoriteVideosInput, UserUncheckedUpdateWithoutFavoriteVideosInput>
    create: XOR<UserCreateWithoutFavoriteVideosInput, UserUncheckedCreateWithoutFavoriteVideosInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFavoriteVideosInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFavoriteVideosInput, UserUncheckedUpdateWithoutFavoriteVideosInput>
  }

  export type UserUpdateManyWithWhereWithoutFavoriteVideosInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFavoriteVideosInput>
  }

  export type UserUpsertWithWhereUniqueWithoutLikesVideoInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutLikesVideoInput, UserUncheckedUpdateWithoutLikesVideoInput>
    create: XOR<UserCreateWithoutLikesVideoInput, UserUncheckedCreateWithoutLikesVideoInput>
  }

  export type UserUpdateWithWhereUniqueWithoutLikesVideoInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutLikesVideoInput, UserUncheckedUpdateWithoutLikesVideoInput>
  }

  export type UserUpdateManyWithWhereWithoutLikesVideoInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutLikesVideoInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutVideoInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutVideoInput, CommentUncheckedUpdateWithoutVideoInput>
    create: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutVideoInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutVideoInput, CommentUncheckedUpdateWithoutVideoInput>
  }

  export type CommentUpdateManyWithWhereWithoutVideoInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutVideoInput>
  }

  export type PlayListVideoUpsertWithWhereUniqueWithoutVideoInput = {
    where: PlayListVideoWhereUniqueInput
    update: XOR<PlayListVideoUpdateWithoutVideoInput, PlayListVideoUncheckedUpdateWithoutVideoInput>
    create: XOR<PlayListVideoCreateWithoutVideoInput, PlayListVideoUncheckedCreateWithoutVideoInput>
  }

  export type PlayListVideoUpdateWithWhereUniqueWithoutVideoInput = {
    where: PlayListVideoWhereUniqueInput
    data: XOR<PlayListVideoUpdateWithoutVideoInput, PlayListVideoUncheckedUpdateWithoutVideoInput>
  }

  export type PlayListVideoUpdateManyWithWhereWithoutVideoInput = {
    where: PlayListVideoScalarWhereInput
    data: XOR<PlayListVideoUpdateManyMutationInput, PlayListVideoUncheckedUpdateManyWithoutVideoInput>
  }

  export type PlayListVideoScalarWhereInput = {
    AND?: PlayListVideoScalarWhereInput | PlayListVideoScalarWhereInput[]
    OR?: PlayListVideoScalarWhereInput[]
    NOT?: PlayListVideoScalarWhereInput | PlayListVideoScalarWhereInput[]
    id?: StringFilter<"PlayListVideo"> | string
    playlistId?: StringFilter<"PlayListVideo"> | string
    videoId?: StringFilter<"PlayListVideo"> | string
    addedAt?: DateTimeFilter<"PlayListVideo"> | Date | string
  }

  export type VideoCreateWithoutTagsInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    views?: number
    author: UserCreateNestedOneWithoutVideosInput
    category?: CategoryCreateNestedOneWithoutVideosInput
    ageRating?: AgeRatingCreateNestedOneWithoutVideosInput
    favoritedBy?: UserCreateNestedManyWithoutFavoriteVideosInput
    likedBy?: UserCreateNestedManyWithoutLikesVideoInput
    comments?: CommentCreateNestedManyWithoutVideoInput
    playlistVideos?: PlayListVideoCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutTagsInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    userId: string
    categoryId?: string | null
    ageRatingId?: string | null
    views?: number
    favoritedBy?: UserUncheckedCreateNestedManyWithoutFavoriteVideosInput
    likedBy?: UserUncheckedCreateNestedManyWithoutLikesVideoInput
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
    playlistVideos?: PlayListVideoUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutTagsInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutTagsInput, VideoUncheckedCreateWithoutTagsInput>
  }

  export type VideoUpsertWithWhereUniqueWithoutTagsInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutTagsInput, VideoUncheckedUpdateWithoutTagsInput>
    create: XOR<VideoCreateWithoutTagsInput, VideoUncheckedCreateWithoutTagsInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutTagsInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutTagsInput, VideoUncheckedUpdateWithoutTagsInput>
  }

  export type VideoUpdateManyWithWhereWithoutTagsInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutTagsInput>
  }

  export type VideoCreateWithoutCategoryInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    views?: number
    author: UserCreateNestedOneWithoutVideosInput
    ageRating?: AgeRatingCreateNestedOneWithoutVideosInput
    tags?: TagCreateNestedManyWithoutVideosInput
    favoritedBy?: UserCreateNestedManyWithoutFavoriteVideosInput
    likedBy?: UserCreateNestedManyWithoutLikesVideoInput
    comments?: CommentCreateNestedManyWithoutVideoInput
    playlistVideos?: PlayListVideoCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutCategoryInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    userId: string
    ageRatingId?: string | null
    views?: number
    tags?: TagUncheckedCreateNestedManyWithoutVideosInput
    favoritedBy?: UserUncheckedCreateNestedManyWithoutFavoriteVideosInput
    likedBy?: UserUncheckedCreateNestedManyWithoutLikesVideoInput
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
    playlistVideos?: PlayListVideoUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutCategoryInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutCategoryInput, VideoUncheckedCreateWithoutCategoryInput>
  }

  export type VideoCreateManyCategoryInputEnvelope = {
    data: VideoCreateManyCategoryInput | VideoCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type VideoUpsertWithWhereUniqueWithoutCategoryInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutCategoryInput, VideoUncheckedUpdateWithoutCategoryInput>
    create: XOR<VideoCreateWithoutCategoryInput, VideoUncheckedCreateWithoutCategoryInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutCategoryInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutCategoryInput, VideoUncheckedUpdateWithoutCategoryInput>
  }

  export type VideoUpdateManyWithWhereWithoutCategoryInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutCategoryInput>
  }

  export type VideoCreateWithoutAgeRatingInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    views?: number
    author: UserCreateNestedOneWithoutVideosInput
    category?: CategoryCreateNestedOneWithoutVideosInput
    tags?: TagCreateNestedManyWithoutVideosInput
    favoritedBy?: UserCreateNestedManyWithoutFavoriteVideosInput
    likedBy?: UserCreateNestedManyWithoutLikesVideoInput
    comments?: CommentCreateNestedManyWithoutVideoInput
    playlistVideos?: PlayListVideoCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutAgeRatingInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    userId: string
    categoryId?: string | null
    views?: number
    tags?: TagUncheckedCreateNestedManyWithoutVideosInput
    favoritedBy?: UserUncheckedCreateNestedManyWithoutFavoriteVideosInput
    likedBy?: UserUncheckedCreateNestedManyWithoutLikesVideoInput
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
    playlistVideos?: PlayListVideoUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutAgeRatingInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutAgeRatingInput, VideoUncheckedCreateWithoutAgeRatingInput>
  }

  export type VideoCreateManyAgeRatingInputEnvelope = {
    data: VideoCreateManyAgeRatingInput | VideoCreateManyAgeRatingInput[]
    skipDuplicates?: boolean
  }

  export type VideoUpsertWithWhereUniqueWithoutAgeRatingInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutAgeRatingInput, VideoUncheckedUpdateWithoutAgeRatingInput>
    create: XOR<VideoCreateWithoutAgeRatingInput, VideoUncheckedCreateWithoutAgeRatingInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutAgeRatingInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutAgeRatingInput, VideoUncheckedUpdateWithoutAgeRatingInput>
  }

  export type VideoUpdateManyWithWhereWithoutAgeRatingInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutAgeRatingInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    nickname: string
    email: string
    backupEmail?: string | null
    passwordHash: string
    about?: string | null
    birthDate?: string | null
    passwordChangeAt?: Date | string | null
    avatarFileName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutAuthorInput
    favoriteVideos?: VideoCreateNestedManyWithoutFavoritedByInput
    likesVideo?: VideoCreateNestedManyWithoutLikedByInput
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
    playlist?: PlayListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    nickname: string
    email: string
    backupEmail?: string | null
    passwordHash: string
    about?: string | null
    birthDate?: string | null
    passwordChangeAt?: Date | string | null
    avatarFileName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutAuthorInput
    favoriteVideos?: VideoUncheckedCreateNestedManyWithoutFavoritedByInput
    likesVideo?: VideoUncheckedCreateNestedManyWithoutLikedByInput
    following?: UserUncheckedCreateNestedManyWithoutFollowersInput
    followers?: UserUncheckedCreateNestedManyWithoutFollowingInput
    playlist?: PlayListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type VideoCreateWithoutCommentsInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    views?: number
    author: UserCreateNestedOneWithoutVideosInput
    category?: CategoryCreateNestedOneWithoutVideosInput
    ageRating?: AgeRatingCreateNestedOneWithoutVideosInput
    tags?: TagCreateNestedManyWithoutVideosInput
    favoritedBy?: UserCreateNestedManyWithoutFavoriteVideosInput
    likedBy?: UserCreateNestedManyWithoutLikesVideoInput
    playlistVideos?: PlayListVideoCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutCommentsInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    userId: string
    categoryId?: string | null
    ageRatingId?: string | null
    views?: number
    tags?: TagUncheckedCreateNestedManyWithoutVideosInput
    favoritedBy?: UserUncheckedCreateNestedManyWithoutFavoriteVideosInput
    likedBy?: UserUncheckedCreateNestedManyWithoutLikesVideoInput
    playlistVideos?: PlayListVideoUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutCommentsInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutCommentsInput, VideoUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutAuthorNestedInput
    favoriteVideos?: VideoUpdateManyWithoutFavoritedByNestedInput
    likesVideo?: VideoUpdateManyWithoutLikedByNestedInput
    following?: UserUpdateManyWithoutFollowersNestedInput
    followers?: UserUpdateManyWithoutFollowingNestedInput
    playlist?: PlayListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutAuthorNestedInput
    favoriteVideos?: VideoUncheckedUpdateManyWithoutFavoritedByNestedInput
    likesVideo?: VideoUncheckedUpdateManyWithoutLikedByNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowersNestedInput
    followers?: UserUncheckedUpdateManyWithoutFollowingNestedInput
    playlist?: PlayListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VideoUpsertWithoutCommentsInput = {
    update: XOR<VideoUpdateWithoutCommentsInput, VideoUncheckedUpdateWithoutCommentsInput>
    create: XOR<VideoCreateWithoutCommentsInput, VideoUncheckedCreateWithoutCommentsInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutCommentsInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutCommentsInput, VideoUncheckedUpdateWithoutCommentsInput>
  }

  export type VideoUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutVideosNestedInput
    category?: CategoryUpdateOneWithoutVideosNestedInput
    ageRating?: AgeRatingUpdateOneWithoutVideosNestedInput
    tags?: TagUpdateManyWithoutVideosNestedInput
    favoritedBy?: UserUpdateManyWithoutFavoriteVideosNestedInput
    likedBy?: UserUpdateManyWithoutLikesVideoNestedInput
    playlistVideos?: PlayListVideoUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    ageRatingId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutVideosNestedInput
    favoritedBy?: UserUncheckedUpdateManyWithoutFavoriteVideosNestedInput
    likedBy?: UserUncheckedUpdateManyWithoutLikesVideoNestedInput
    playlistVideos?: PlayListVideoUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type UserCreateWithoutPlaylistInput = {
    id?: string
    nickname: string
    email: string
    backupEmail?: string | null
    passwordHash: string
    about?: string | null
    birthDate?: string | null
    passwordChangeAt?: Date | string | null
    avatarFileName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutAuthorInput
    favoriteVideos?: VideoCreateNestedManyWithoutFavoritedByInput
    likesVideo?: VideoCreateNestedManyWithoutLikedByInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    following?: UserCreateNestedManyWithoutFollowersInput
    followers?: UserCreateNestedManyWithoutFollowingInput
  }

  export type UserUncheckedCreateWithoutPlaylistInput = {
    id?: string
    nickname: string
    email: string
    backupEmail?: string | null
    passwordHash: string
    about?: string | null
    birthDate?: string | null
    passwordChangeAt?: Date | string | null
    avatarFileName?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutAuthorInput
    favoriteVideos?: VideoUncheckedCreateNestedManyWithoutFavoritedByInput
    likesVideo?: VideoUncheckedCreateNestedManyWithoutLikedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    following?: UserUncheckedCreateNestedManyWithoutFollowersInput
    followers?: UserUncheckedCreateNestedManyWithoutFollowingInput
  }

  export type UserCreateOrConnectWithoutPlaylistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
  }

  export type PlayListVideoCreateWithoutPlaylistInput = {
    id?: string
    addedAt?: Date | string
    video: VideoCreateNestedOneWithoutPlaylistVideosInput
  }

  export type PlayListVideoUncheckedCreateWithoutPlaylistInput = {
    id?: string
    videoId: string
    addedAt?: Date | string
  }

  export type PlayListVideoCreateOrConnectWithoutPlaylistInput = {
    where: PlayListVideoWhereUniqueInput
    create: XOR<PlayListVideoCreateWithoutPlaylistInput, PlayListVideoUncheckedCreateWithoutPlaylistInput>
  }

  export type PlayListVideoCreateManyPlaylistInputEnvelope = {
    data: PlayListVideoCreateManyPlaylistInput | PlayListVideoCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPlaylistInput = {
    update: XOR<UserUpdateWithoutPlaylistInput, UserUncheckedUpdateWithoutPlaylistInput>
    create: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlaylistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlaylistInput, UserUncheckedUpdateWithoutPlaylistInput>
  }

  export type UserUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutAuthorNestedInput
    favoriteVideos?: VideoUpdateManyWithoutFavoritedByNestedInput
    likesVideo?: VideoUpdateManyWithoutLikedByNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    following?: UserUpdateManyWithoutFollowersNestedInput
    followers?: UserUpdateManyWithoutFollowingNestedInput
  }

  export type UserUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutAuthorNestedInput
    favoriteVideos?: VideoUncheckedUpdateManyWithoutFavoritedByNestedInput
    likesVideo?: VideoUncheckedUpdateManyWithoutLikedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowersNestedInput
    followers?: UserUncheckedUpdateManyWithoutFollowingNestedInput
  }

  export type PlayListVideoUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: PlayListVideoWhereUniqueInput
    update: XOR<PlayListVideoUpdateWithoutPlaylistInput, PlayListVideoUncheckedUpdateWithoutPlaylistInput>
    create: XOR<PlayListVideoCreateWithoutPlaylistInput, PlayListVideoUncheckedCreateWithoutPlaylistInput>
  }

  export type PlayListVideoUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: PlayListVideoWhereUniqueInput
    data: XOR<PlayListVideoUpdateWithoutPlaylistInput, PlayListVideoUncheckedUpdateWithoutPlaylistInput>
  }

  export type PlayListVideoUpdateManyWithWhereWithoutPlaylistInput = {
    where: PlayListVideoScalarWhereInput
    data: XOR<PlayListVideoUpdateManyMutationInput, PlayListVideoUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type PlayListCreateWithoutPlayListVideosInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPlaylistInput
  }

  export type PlayListUncheckedCreateWithoutPlayListVideosInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type PlayListCreateOrConnectWithoutPlayListVideosInput = {
    where: PlayListWhereUniqueInput
    create: XOR<PlayListCreateWithoutPlayListVideosInput, PlayListUncheckedCreateWithoutPlayListVideosInput>
  }

  export type VideoCreateWithoutPlaylistVideosInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    views?: number
    author: UserCreateNestedOneWithoutVideosInput
    category?: CategoryCreateNestedOneWithoutVideosInput
    ageRating?: AgeRatingCreateNestedOneWithoutVideosInput
    tags?: TagCreateNestedManyWithoutVideosInput
    favoritedBy?: UserCreateNestedManyWithoutFavoriteVideosInput
    likedBy?: UserCreateNestedManyWithoutLikesVideoInput
    comments?: CommentCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutPlaylistVideosInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    userId: string
    categoryId?: string | null
    ageRatingId?: string | null
    views?: number
    tags?: TagUncheckedCreateNestedManyWithoutVideosInput
    favoritedBy?: UserUncheckedCreateNestedManyWithoutFavoriteVideosInput
    likedBy?: UserUncheckedCreateNestedManyWithoutLikesVideoInput
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutPlaylistVideosInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutPlaylistVideosInput, VideoUncheckedCreateWithoutPlaylistVideosInput>
  }

  export type PlayListUpsertWithoutPlayListVideosInput = {
    update: XOR<PlayListUpdateWithoutPlayListVideosInput, PlayListUncheckedUpdateWithoutPlayListVideosInput>
    create: XOR<PlayListCreateWithoutPlayListVideosInput, PlayListUncheckedCreateWithoutPlayListVideosInput>
    where?: PlayListWhereInput
  }

  export type PlayListUpdateToOneWithWhereWithoutPlayListVideosInput = {
    where?: PlayListWhereInput
    data: XOR<PlayListUpdateWithoutPlayListVideosInput, PlayListUncheckedUpdateWithoutPlayListVideosInput>
  }

  export type PlayListUpdateWithoutPlayListVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPlaylistNestedInput
  }

  export type PlayListUncheckedUpdateWithoutPlayListVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoUpsertWithoutPlaylistVideosInput = {
    update: XOR<VideoUpdateWithoutPlaylistVideosInput, VideoUncheckedUpdateWithoutPlaylistVideosInput>
    create: XOR<VideoCreateWithoutPlaylistVideosInput, VideoUncheckedCreateWithoutPlaylistVideosInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutPlaylistVideosInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutPlaylistVideosInput, VideoUncheckedUpdateWithoutPlaylistVideosInput>
  }

  export type VideoUpdateWithoutPlaylistVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutVideosNestedInput
    category?: CategoryUpdateOneWithoutVideosNestedInput
    ageRating?: AgeRatingUpdateOneWithoutVideosNestedInput
    tags?: TagUpdateManyWithoutVideosNestedInput
    favoritedBy?: UserUpdateManyWithoutFavoriteVideosNestedInput
    likedBy?: UserUpdateManyWithoutLikesVideoNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutPlaylistVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    ageRatingId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutVideosNestedInput
    favoritedBy?: UserUncheckedUpdateManyWithoutFavoriteVideosNestedInput
    likedBy?: UserUncheckedUpdateManyWithoutLikesVideoNestedInput
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoCreateManyAuthorInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    categoryId?: string | null
    ageRatingId?: string | null
    views?: number
  }

  export type CommentCreateManyAuthorInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    videoId: string
  }

  export type PlayListCreateManyUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneWithoutVideosNestedInput
    ageRating?: AgeRatingUpdateOneWithoutVideosNestedInput
    tags?: TagUpdateManyWithoutVideosNestedInput
    favoritedBy?: UserUpdateManyWithoutFavoriteVideosNestedInput
    likedBy?: UserUpdateManyWithoutLikesVideoNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
    playlistVideos?: PlayListVideoUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    ageRatingId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutVideosNestedInput
    favoritedBy?: UserUncheckedUpdateManyWithoutFavoriteVideosNestedInput
    likedBy?: UserUncheckedUpdateManyWithoutLikesVideoNestedInput
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
    playlistVideos?: PlayListVideoUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    ageRatingId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
  }

  export type VideoUpdateWithoutFavoritedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutVideosNestedInput
    category?: CategoryUpdateOneWithoutVideosNestedInput
    ageRating?: AgeRatingUpdateOneWithoutVideosNestedInput
    tags?: TagUpdateManyWithoutVideosNestedInput
    likedBy?: UserUpdateManyWithoutLikesVideoNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
    playlistVideos?: PlayListVideoUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutFavoritedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    ageRatingId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutVideosNestedInput
    likedBy?: UserUncheckedUpdateManyWithoutLikesVideoNestedInput
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
    playlistVideos?: PlayListVideoUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateManyWithoutFavoritedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    ageRatingId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
  }

  export type VideoUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutVideosNestedInput
    category?: CategoryUpdateOneWithoutVideosNestedInput
    ageRating?: AgeRatingUpdateOneWithoutVideosNestedInput
    tags?: TagUpdateManyWithoutVideosNestedInput
    favoritedBy?: UserUpdateManyWithoutFavoriteVideosNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
    playlistVideos?: PlayListVideoUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    ageRatingId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutVideosNestedInput
    favoritedBy?: UserUncheckedUpdateManyWithoutFavoriteVideosNestedInput
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
    playlistVideos?: PlayListVideoUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateManyWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    ageRatingId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutAuthorNestedInput
    favoriteVideos?: VideoUpdateManyWithoutFavoritedByNestedInput
    likesVideo?: VideoUpdateManyWithoutLikedByNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    following?: UserUpdateManyWithoutFollowersNestedInput
    playlist?: PlayListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutAuthorNestedInput
    favoriteVideos?: VideoUncheckedUpdateManyWithoutFavoritedByNestedInput
    likesVideo?: VideoUncheckedUpdateManyWithoutLikedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowersNestedInput
    playlist?: PlayListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutAuthorNestedInput
    favoriteVideos?: VideoUpdateManyWithoutFavoritedByNestedInput
    likesVideo?: VideoUpdateManyWithoutLikedByNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    followers?: UserUpdateManyWithoutFollowingNestedInput
    playlist?: PlayListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutAuthorNestedInput
    favoriteVideos?: VideoUncheckedUpdateManyWithoutFavoritedByNestedInput
    likesVideo?: VideoUncheckedUpdateManyWithoutLikedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    followers?: UserUncheckedUpdateManyWithoutFollowingNestedInput
    playlist?: PlayListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayListUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playListVideos?: PlayListVideoUpdateManyWithoutPlaylistNestedInput
  }

  export type PlayListUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playListVideos?: PlayListVideoUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlayListUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyVideoInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PlayListVideoCreateManyVideoInput = {
    id?: string
    playlistId: string
    addedAt?: Date | string
  }

  export type TagUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutFavoriteVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutAuthorNestedInput
    likesVideo?: VideoUpdateManyWithoutLikedByNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    following?: UserUpdateManyWithoutFollowersNestedInput
    followers?: UserUpdateManyWithoutFollowingNestedInput
    playlist?: PlayListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoriteVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutAuthorNestedInput
    likesVideo?: VideoUncheckedUpdateManyWithoutLikedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowersNestedInput
    followers?: UserUncheckedUpdateManyWithoutFollowingNestedInput
    playlist?: PlayListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFavoriteVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutLikesVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutAuthorNestedInput
    favoriteVideos?: VideoUpdateManyWithoutFavoritedByNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    following?: UserUpdateManyWithoutFollowersNestedInput
    followers?: UserUpdateManyWithoutFollowingNestedInput
    playlist?: PlayListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutAuthorNestedInput
    favoriteVideos?: VideoUncheckedUpdateManyWithoutFavoritedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    following?: UserUncheckedUpdateManyWithoutFollowersNestedInput
    followers?: UserUncheckedUpdateManyWithoutFollowingNestedInput
    playlist?: PlayListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutLikesVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    backupEmail?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    passwordChangeAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarFileName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayListVideoUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlayListUpdateOneRequiredWithoutPlayListVideosNestedInput
  }

  export type PlayListVideoUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayListVideoUncheckedUpdateManyWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutVideosNestedInput
    category?: CategoryUpdateOneWithoutVideosNestedInput
    ageRating?: AgeRatingUpdateOneWithoutVideosNestedInput
    favoritedBy?: UserUpdateManyWithoutFavoriteVideosNestedInput
    likedBy?: UserUpdateManyWithoutLikesVideoNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
    playlistVideos?: PlayListVideoUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    ageRatingId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    favoritedBy?: UserUncheckedUpdateManyWithoutFavoriteVideosNestedInput
    likedBy?: UserUncheckedUpdateManyWithoutLikesVideoNestedInput
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
    playlistVideos?: PlayListVideoUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    ageRatingId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
  }

  export type VideoCreateManyCategoryInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    userId: string
    ageRatingId?: string | null
    views?: number
  }

  export type VideoUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutVideosNestedInput
    ageRating?: AgeRatingUpdateOneWithoutVideosNestedInput
    tags?: TagUpdateManyWithoutVideosNestedInput
    favoritedBy?: UserUpdateManyWithoutFavoriteVideosNestedInput
    likedBy?: UserUpdateManyWithoutLikesVideoNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
    playlistVideos?: PlayListVideoUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    ageRatingId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutVideosNestedInput
    favoritedBy?: UserUncheckedUpdateManyWithoutFavoriteVideosNestedInput
    likedBy?: UserUncheckedUpdateManyWithoutLikesVideoNestedInput
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
    playlistVideos?: PlayListVideoUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    ageRatingId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
  }

  export type VideoCreateManyAgeRatingInput = {
    id?: string
    originalName: string
    url: string
    name: string
    mimetype: string
    size: number
    title: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    userId: string
    categoryId?: string | null
    views?: number
  }

  export type VideoUpdateWithoutAgeRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutVideosNestedInput
    category?: CategoryUpdateOneWithoutVideosNestedInput
    tags?: TagUpdateManyWithoutVideosNestedInput
    favoritedBy?: UserUpdateManyWithoutFavoriteVideosNestedInput
    likedBy?: UserUpdateManyWithoutLikesVideoNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
    playlistVideos?: PlayListVideoUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutAgeRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutVideosNestedInput
    favoritedBy?: UserUncheckedUpdateManyWithoutFavoriteVideosNestedInput
    likedBy?: UserUncheckedUpdateManyWithoutLikesVideoNestedInput
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
    playlistVideos?: PlayListVideoUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateManyWithoutAgeRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
  }

  export type PlayListVideoCreateManyPlaylistInput = {
    id?: string
    videoId: string
    addedAt?: Date | string
  }

  export type PlayListVideoUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutPlaylistVideosNestedInput
  }

  export type PlayListVideoUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayListVideoUncheckedUpdateManyWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}