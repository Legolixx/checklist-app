
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model CheckList
 * 
 */
export type CheckList = $Result.DefaultSelection<Prisma.$CheckListPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EstadoCheck: {
  BOM: 'BOM',
  RUIM: 'RUIM'
};

export type EstadoCheck = (typeof EstadoCheck)[keyof typeof EstadoCheck]

}

export type EstadoCheck = $Enums.EstadoCheck

export const EstadoCheck: typeof $Enums.EstadoCheck

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clients
 * const clients = await prisma.client.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkList`: Exposes CRUD operations for the **CheckList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CheckLists
    * const checkLists = await prisma.checkList.findMany()
    * ```
    */
  get checkList(): Prisma.CheckListDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Client: 'Client',
    Vehicle: 'Vehicle',
    CheckList: 'CheckList'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "client" | "vehicle" | "checkList"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      CheckList: {
        payload: Prisma.$CheckListPayload<ExtArgs>
        fields: Prisma.CheckListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListPayload>
          }
          findFirst: {
            args: Prisma.CheckListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListPayload>
          }
          findMany: {
            args: Prisma.CheckListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListPayload>[]
          }
          create: {
            args: Prisma.CheckListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListPayload>
          }
          createMany: {
            args: Prisma.CheckListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListPayload>[]
          }
          delete: {
            args: Prisma.CheckListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListPayload>
          }
          update: {
            args: Prisma.CheckListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListPayload>
          }
          deleteMany: {
            args: Prisma.CheckListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CheckListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListPayload>[]
          }
          upsert: {
            args: Prisma.CheckListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListPayload>
          }
          aggregate: {
            args: Prisma.CheckListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckList>
          }
          groupBy: {
            args: Prisma.CheckListGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckListGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckListCountArgs<ExtArgs>
            result: $Utils.Optional<CheckListCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    client?: ClientOmit
    vehicle?: VehicleOmit
    checkList?: CheckListOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    checklists: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklists?: boolean | ClientCountOutputTypeCountChecklistsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountChecklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckListWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    checklists: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklists?: boolean | VehicleCountOutputTypeCountChecklistsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountChecklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckListWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    xata_version: number | null
  }

  export type ClientSumAggregateOutputType = {
    xata_version: number | null
  }

  export type ClientMinAggregateOutputType = {
    xata_id: string | null
    xata_version: number | null
    xata_createdat: Date | null
    xata_updatedat: Date | null
    nome: string | null
    telefone: string | null
    email: string | null
  }

  export type ClientMaxAggregateOutputType = {
    xata_id: string | null
    xata_version: number | null
    xata_createdat: Date | null
    xata_updatedat: Date | null
    nome: string | null
    telefone: string | null
    email: string | null
  }

  export type ClientCountAggregateOutputType = {
    xata_id: number
    xata_version: number
    xata_createdat: number
    xata_updatedat: number
    nome: number
    telefone: number
    email: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    xata_version?: true
  }

  export type ClientSumAggregateInputType = {
    xata_version?: true
  }

  export type ClientMinAggregateInputType = {
    xata_id?: true
    xata_version?: true
    xata_createdat?: true
    xata_updatedat?: true
    nome?: true
    telefone?: true
    email?: true
  }

  export type ClientMaxAggregateInputType = {
    xata_id?: true
    xata_version?: true
    xata_createdat?: true
    xata_updatedat?: true
    nome?: true
    telefone?: true
    email?: true
  }

  export type ClientCountAggregateInputType = {
    xata_id?: true
    xata_version?: true
    xata_createdat?: true
    xata_updatedat?: true
    nome?: true
    telefone?: true
    email?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    xata_id: string
    xata_version: number
    xata_createdat: Date
    xata_updatedat: Date
    nome: string
    telefone: string
    email: string
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    xata_id?: boolean
    xata_version?: boolean
    xata_createdat?: boolean
    xata_updatedat?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
    checklists?: boolean | Client$checklistsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    xata_id?: boolean
    xata_version?: boolean
    xata_createdat?: boolean
    xata_updatedat?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    xata_id?: boolean
    xata_version?: boolean
    xata_createdat?: boolean
    xata_updatedat?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    xata_id?: boolean
    xata_version?: boolean
    xata_createdat?: boolean
    xata_updatedat?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"xata_id" | "xata_version" | "xata_createdat" | "xata_updatedat" | "nome" | "telefone" | "email", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklists?: boolean | Client$checklistsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      checklists: Prisma.$CheckListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      xata_id: string
      xata_version: number
      xata_createdat: Date
      xata_updatedat: Date
      nome: string
      telefone: string
      email: string
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `xata_id`
     * const clientWithXata_idOnly = await prisma.client.findMany({ select: { xata_id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `xata_id`
     * const clientWithXata_idOnly = await prisma.client.createManyAndReturn({
     *   select: { xata_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `xata_id`
     * const clientWithXata_idOnly = await prisma.client.updateManyAndReturn({
     *   select: { xata_id: true },
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    checklists<T extends Client$checklistsArgs<ExtArgs> = {}>(args?: Subset<T, Client$checklistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly xata_id: FieldRef<"Client", 'String'>
    readonly xata_version: FieldRef<"Client", 'Int'>
    readonly xata_createdat: FieldRef<"Client", 'DateTime'>
    readonly xata_updatedat: FieldRef<"Client", 'DateTime'>
    readonly nome: FieldRef<"Client", 'String'>
    readonly telefone: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.checklists
   */
  export type Client$checklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckList
     */
    select?: CheckListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckList
     */
    omit?: CheckListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListInclude<ExtArgs> | null
    where?: CheckListWhereInput
    orderBy?: CheckListOrderByWithRelationInput | CheckListOrderByWithRelationInput[]
    cursor?: CheckListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckListScalarFieldEnum | CheckListScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    xata_version: number | null
    km: number | null
  }

  export type VehicleSumAggregateOutputType = {
    xata_version: number | null
    km: number | null
  }

  export type VehicleMinAggregateOutputType = {
    xata_id: string | null
    xata_version: number | null
    xata_createdat: Date | null
    xata_updatedat: Date | null
    marca: string | null
    modelo: string | null
    km: number | null
  }

  export type VehicleMaxAggregateOutputType = {
    xata_id: string | null
    xata_version: number | null
    xata_createdat: Date | null
    xata_updatedat: Date | null
    marca: string | null
    modelo: string | null
    km: number | null
  }

  export type VehicleCountAggregateOutputType = {
    xata_id: number
    xata_version: number
    xata_createdat: number
    xata_updatedat: number
    marca: number
    modelo: number
    km: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    xata_version?: true
    km?: true
  }

  export type VehicleSumAggregateInputType = {
    xata_version?: true
    km?: true
  }

  export type VehicleMinAggregateInputType = {
    xata_id?: true
    xata_version?: true
    xata_createdat?: true
    xata_updatedat?: true
    marca?: true
    modelo?: true
    km?: true
  }

  export type VehicleMaxAggregateInputType = {
    xata_id?: true
    xata_version?: true
    xata_createdat?: true
    xata_updatedat?: true
    marca?: true
    modelo?: true
    km?: true
  }

  export type VehicleCountAggregateInputType = {
    xata_id?: true
    xata_version?: true
    xata_createdat?: true
    xata_updatedat?: true
    marca?: true
    modelo?: true
    km?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    xata_id: string
    xata_version: number
    xata_createdat: Date
    xata_updatedat: Date
    marca: string
    modelo: string
    km: number
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    xata_id?: boolean
    xata_version?: boolean
    xata_createdat?: boolean
    xata_updatedat?: boolean
    marca?: boolean
    modelo?: boolean
    km?: boolean
    checklists?: boolean | Vehicle$checklistsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    xata_id?: boolean
    xata_version?: boolean
    xata_createdat?: boolean
    xata_updatedat?: boolean
    marca?: boolean
    modelo?: boolean
    km?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    xata_id?: boolean
    xata_version?: boolean
    xata_createdat?: boolean
    xata_updatedat?: boolean
    marca?: boolean
    modelo?: boolean
    km?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    xata_id?: boolean
    xata_version?: boolean
    xata_createdat?: boolean
    xata_updatedat?: boolean
    marca?: boolean
    modelo?: boolean
    km?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"xata_id" | "xata_version" | "xata_createdat" | "xata_updatedat" | "marca" | "modelo" | "km", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklists?: boolean | Vehicle$checklistsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      checklists: Prisma.$CheckListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      xata_id: string
      xata_version: number
      xata_createdat: Date
      xata_updatedat: Date
      marca: string
      modelo: string
      km: number
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `xata_id`
     * const vehicleWithXata_idOnly = await prisma.vehicle.findMany({ select: { xata_id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `xata_id`
     * const vehicleWithXata_idOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { xata_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `xata_id`
     * const vehicleWithXata_idOnly = await prisma.vehicle.updateManyAndReturn({
     *   select: { xata_id: true },
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
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
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
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    checklists<T extends Vehicle$checklistsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$checklistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly xata_id: FieldRef<"Vehicle", 'String'>
    readonly xata_version: FieldRef<"Vehicle", 'Int'>
    readonly xata_createdat: FieldRef<"Vehicle", 'DateTime'>
    readonly xata_updatedat: FieldRef<"Vehicle", 'DateTime'>
    readonly marca: FieldRef<"Vehicle", 'String'>
    readonly modelo: FieldRef<"Vehicle", 'String'>
    readonly km: FieldRef<"Vehicle", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.checklists
   */
  export type Vehicle$checklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckList
     */
    select?: CheckListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckList
     */
    omit?: CheckListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListInclude<ExtArgs> | null
    where?: CheckListWhereInput
    orderBy?: CheckListOrderByWithRelationInput | CheckListOrderByWithRelationInput[]
    cursor?: CheckListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckListScalarFieldEnum | CheckListScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model CheckList
   */

  export type AggregateCheckList = {
    _count: CheckListCountAggregateOutputType | null
    _avg: CheckListAvgAggregateOutputType | null
    _sum: CheckListSumAggregateOutputType | null
    _min: CheckListMinAggregateOutputType | null
    _max: CheckListMaxAggregateOutputType | null
  }

  export type CheckListAvgAggregateOutputType = {
    xata_version: number | null
  }

  export type CheckListSumAggregateOutputType = {
    xata_version: number | null
  }

  export type CheckListMinAggregateOutputType = {
    xata_id: string | null
    xata_version: number | null
    xata_createdat: Date | null
    xata_updatedat: Date | null
    createdBy: string | null
    createdByName: string | null
    clientId: string | null
    vehicleId: string | null
    nivelOleo: $Enums.EstadoCheck | null
    fluidoFreio: $Enums.EstadoCheck | null
    fluidoDirecao: $Enums.EstadoCheck | null
    fluidoArrefecimento: $Enums.EstadoCheck | null
    desgastePneu: $Enums.EstadoCheck | null
    calibragemPneus: $Enums.EstadoCheck | null
    lampadasDianteiras: $Enums.EstadoCheck | null
    lampadasTraseiras: $Enums.EstadoCheck | null
    fluidoLimpador: $Enums.EstadoCheck | null
    desgasteBorrachaLimpador: $Enums.EstadoCheck | null
    correaAcessorios: $Enums.EstadoCheck | null
    observacoes: string | null
  }

  export type CheckListMaxAggregateOutputType = {
    xata_id: string | null
    xata_version: number | null
    xata_createdat: Date | null
    xata_updatedat: Date | null
    createdBy: string | null
    createdByName: string | null
    clientId: string | null
    vehicleId: string | null
    nivelOleo: $Enums.EstadoCheck | null
    fluidoFreio: $Enums.EstadoCheck | null
    fluidoDirecao: $Enums.EstadoCheck | null
    fluidoArrefecimento: $Enums.EstadoCheck | null
    desgastePneu: $Enums.EstadoCheck | null
    calibragemPneus: $Enums.EstadoCheck | null
    lampadasDianteiras: $Enums.EstadoCheck | null
    lampadasTraseiras: $Enums.EstadoCheck | null
    fluidoLimpador: $Enums.EstadoCheck | null
    desgasteBorrachaLimpador: $Enums.EstadoCheck | null
    correaAcessorios: $Enums.EstadoCheck | null
    observacoes: string | null
  }

  export type CheckListCountAggregateOutputType = {
    xata_id: number
    xata_version: number
    xata_createdat: number
    xata_updatedat: number
    createdBy: number
    createdByName: number
    clientId: number
    vehicleId: number
    nivelOleo: number
    fluidoFreio: number
    fluidoDirecao: number
    fluidoArrefecimento: number
    desgastePneu: number
    calibragemPneus: number
    lampadasDianteiras: number
    lampadasTraseiras: number
    fluidoLimpador: number
    desgasteBorrachaLimpador: number
    correaAcessorios: number
    observacoes: number
    _all: number
  }


  export type CheckListAvgAggregateInputType = {
    xata_version?: true
  }

  export type CheckListSumAggregateInputType = {
    xata_version?: true
  }

  export type CheckListMinAggregateInputType = {
    xata_id?: true
    xata_version?: true
    xata_createdat?: true
    xata_updatedat?: true
    createdBy?: true
    createdByName?: true
    clientId?: true
    vehicleId?: true
    nivelOleo?: true
    fluidoFreio?: true
    fluidoDirecao?: true
    fluidoArrefecimento?: true
    desgastePneu?: true
    calibragemPneus?: true
    lampadasDianteiras?: true
    lampadasTraseiras?: true
    fluidoLimpador?: true
    desgasteBorrachaLimpador?: true
    correaAcessorios?: true
    observacoes?: true
  }

  export type CheckListMaxAggregateInputType = {
    xata_id?: true
    xata_version?: true
    xata_createdat?: true
    xata_updatedat?: true
    createdBy?: true
    createdByName?: true
    clientId?: true
    vehicleId?: true
    nivelOleo?: true
    fluidoFreio?: true
    fluidoDirecao?: true
    fluidoArrefecimento?: true
    desgastePneu?: true
    calibragemPneus?: true
    lampadasDianteiras?: true
    lampadasTraseiras?: true
    fluidoLimpador?: true
    desgasteBorrachaLimpador?: true
    correaAcessorios?: true
    observacoes?: true
  }

  export type CheckListCountAggregateInputType = {
    xata_id?: true
    xata_version?: true
    xata_createdat?: true
    xata_updatedat?: true
    createdBy?: true
    createdByName?: true
    clientId?: true
    vehicleId?: true
    nivelOleo?: true
    fluidoFreio?: true
    fluidoDirecao?: true
    fluidoArrefecimento?: true
    desgastePneu?: true
    calibragemPneus?: true
    lampadasDianteiras?: true
    lampadasTraseiras?: true
    fluidoLimpador?: true
    desgasteBorrachaLimpador?: true
    correaAcessorios?: true
    observacoes?: true
    _all?: true
  }

  export type CheckListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckList to aggregate.
     */
    where?: CheckListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckLists to fetch.
     */
    orderBy?: CheckListOrderByWithRelationInput | CheckListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CheckLists
    **/
    _count?: true | CheckListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckListMaxAggregateInputType
  }

  export type GetCheckListAggregateType<T extends CheckListAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckList[P]>
      : GetScalarType<T[P], AggregateCheckList[P]>
  }




  export type CheckListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckListWhereInput
    orderBy?: CheckListOrderByWithAggregationInput | CheckListOrderByWithAggregationInput[]
    by: CheckListScalarFieldEnum[] | CheckListScalarFieldEnum
    having?: CheckListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckListCountAggregateInputType | true
    _avg?: CheckListAvgAggregateInputType
    _sum?: CheckListSumAggregateInputType
    _min?: CheckListMinAggregateInputType
    _max?: CheckListMaxAggregateInputType
  }

  export type CheckListGroupByOutputType = {
    xata_id: string
    xata_version: number
    xata_createdat: Date
    xata_updatedat: Date
    createdBy: string
    createdByName: string
    clientId: string
    vehicleId: string
    nivelOleo: $Enums.EstadoCheck
    fluidoFreio: $Enums.EstadoCheck
    fluidoDirecao: $Enums.EstadoCheck
    fluidoArrefecimento: $Enums.EstadoCheck
    desgastePneu: $Enums.EstadoCheck
    calibragemPneus: $Enums.EstadoCheck
    lampadasDianteiras: $Enums.EstadoCheck
    lampadasTraseiras: $Enums.EstadoCheck
    fluidoLimpador: $Enums.EstadoCheck
    desgasteBorrachaLimpador: $Enums.EstadoCheck
    correaAcessorios: $Enums.EstadoCheck
    observacoes: string | null
    _count: CheckListCountAggregateOutputType | null
    _avg: CheckListAvgAggregateOutputType | null
    _sum: CheckListSumAggregateOutputType | null
    _min: CheckListMinAggregateOutputType | null
    _max: CheckListMaxAggregateOutputType | null
  }

  type GetCheckListGroupByPayload<T extends CheckListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckListGroupByOutputType[P]>
            : GetScalarType<T[P], CheckListGroupByOutputType[P]>
        }
      >
    >


  export type CheckListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    xata_id?: boolean
    xata_version?: boolean
    xata_createdat?: boolean
    xata_updatedat?: boolean
    createdBy?: boolean
    createdByName?: boolean
    clientId?: boolean
    vehicleId?: boolean
    nivelOleo?: boolean
    fluidoFreio?: boolean
    fluidoDirecao?: boolean
    fluidoArrefecimento?: boolean
    desgastePneu?: boolean
    calibragemPneus?: boolean
    lampadasDianteiras?: boolean
    lampadasTraseiras?: boolean
    fluidoLimpador?: boolean
    desgasteBorrachaLimpador?: boolean
    correaAcessorios?: boolean
    observacoes?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkList"]>

  export type CheckListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    xata_id?: boolean
    xata_version?: boolean
    xata_createdat?: boolean
    xata_updatedat?: boolean
    createdBy?: boolean
    createdByName?: boolean
    clientId?: boolean
    vehicleId?: boolean
    nivelOleo?: boolean
    fluidoFreio?: boolean
    fluidoDirecao?: boolean
    fluidoArrefecimento?: boolean
    desgastePneu?: boolean
    calibragemPneus?: boolean
    lampadasDianteiras?: boolean
    lampadasTraseiras?: boolean
    fluidoLimpador?: boolean
    desgasteBorrachaLimpador?: boolean
    correaAcessorios?: boolean
    observacoes?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkList"]>

  export type CheckListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    xata_id?: boolean
    xata_version?: boolean
    xata_createdat?: boolean
    xata_updatedat?: boolean
    createdBy?: boolean
    createdByName?: boolean
    clientId?: boolean
    vehicleId?: boolean
    nivelOleo?: boolean
    fluidoFreio?: boolean
    fluidoDirecao?: boolean
    fluidoArrefecimento?: boolean
    desgastePneu?: boolean
    calibragemPneus?: boolean
    lampadasDianteiras?: boolean
    lampadasTraseiras?: boolean
    fluidoLimpador?: boolean
    desgasteBorrachaLimpador?: boolean
    correaAcessorios?: boolean
    observacoes?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkList"]>

  export type CheckListSelectScalar = {
    xata_id?: boolean
    xata_version?: boolean
    xata_createdat?: boolean
    xata_updatedat?: boolean
    createdBy?: boolean
    createdByName?: boolean
    clientId?: boolean
    vehicleId?: boolean
    nivelOleo?: boolean
    fluidoFreio?: boolean
    fluidoDirecao?: boolean
    fluidoArrefecimento?: boolean
    desgastePneu?: boolean
    calibragemPneus?: boolean
    lampadasDianteiras?: boolean
    lampadasTraseiras?: boolean
    fluidoLimpador?: boolean
    desgasteBorrachaLimpador?: boolean
    correaAcessorios?: boolean
    observacoes?: boolean
  }

  export type CheckListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"xata_id" | "xata_version" | "xata_createdat" | "xata_updatedat" | "createdBy" | "createdByName" | "clientId" | "vehicleId" | "nivelOleo" | "fluidoFreio" | "fluidoDirecao" | "fluidoArrefecimento" | "desgastePneu" | "calibragemPneus" | "lampadasDianteiras" | "lampadasTraseiras" | "fluidoLimpador" | "desgasteBorrachaLimpador" | "correaAcessorios" | "observacoes", ExtArgs["result"]["checkList"]>
  export type CheckListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type CheckListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type CheckListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $CheckListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CheckList"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      xata_id: string
      xata_version: number
      xata_createdat: Date
      xata_updatedat: Date
      createdBy: string
      createdByName: string
      clientId: string
      vehicleId: string
      nivelOleo: $Enums.EstadoCheck
      fluidoFreio: $Enums.EstadoCheck
      fluidoDirecao: $Enums.EstadoCheck
      fluidoArrefecimento: $Enums.EstadoCheck
      desgastePneu: $Enums.EstadoCheck
      calibragemPneus: $Enums.EstadoCheck
      lampadasDianteiras: $Enums.EstadoCheck
      lampadasTraseiras: $Enums.EstadoCheck
      fluidoLimpador: $Enums.EstadoCheck
      desgasteBorrachaLimpador: $Enums.EstadoCheck
      correaAcessorios: $Enums.EstadoCheck
      observacoes: string | null
    }, ExtArgs["result"]["checkList"]>
    composites: {}
  }

  type CheckListGetPayload<S extends boolean | null | undefined | CheckListDefaultArgs> = $Result.GetResult<Prisma.$CheckListPayload, S>

  type CheckListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckListCountAggregateInputType | true
    }

  export interface CheckListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CheckList'], meta: { name: 'CheckList' } }
    /**
     * Find zero or one CheckList that matches the filter.
     * @param {CheckListFindUniqueArgs} args - Arguments to find a CheckList
     * @example
     * // Get one CheckList
     * const checkList = await prisma.checkList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckListFindUniqueArgs>(args: SelectSubset<T, CheckListFindUniqueArgs<ExtArgs>>): Prisma__CheckListClient<$Result.GetResult<Prisma.$CheckListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CheckList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckListFindUniqueOrThrowArgs} args - Arguments to find a CheckList
     * @example
     * // Get one CheckList
     * const checkList = await prisma.checkList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckListFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckListClient<$Result.GetResult<Prisma.$CheckListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckListFindFirstArgs} args - Arguments to find a CheckList
     * @example
     * // Get one CheckList
     * const checkList = await prisma.checkList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckListFindFirstArgs>(args?: SelectSubset<T, CheckListFindFirstArgs<ExtArgs>>): Prisma__CheckListClient<$Result.GetResult<Prisma.$CheckListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckListFindFirstOrThrowArgs} args - Arguments to find a CheckList
     * @example
     * // Get one CheckList
     * const checkList = await prisma.checkList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckListFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckListFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckListClient<$Result.GetResult<Prisma.$CheckListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CheckLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckLists
     * const checkLists = await prisma.checkList.findMany()
     * 
     * // Get first 10 CheckLists
     * const checkLists = await prisma.checkList.findMany({ take: 10 })
     * 
     * // Only select the `xata_id`
     * const checkListWithXata_idOnly = await prisma.checkList.findMany({ select: { xata_id: true } })
     * 
     */
    findMany<T extends CheckListFindManyArgs>(args?: SelectSubset<T, CheckListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CheckList.
     * @param {CheckListCreateArgs} args - Arguments to create a CheckList.
     * @example
     * // Create one CheckList
     * const CheckList = await prisma.checkList.create({
     *   data: {
     *     // ... data to create a CheckList
     *   }
     * })
     * 
     */
    create<T extends CheckListCreateArgs>(args: SelectSubset<T, CheckListCreateArgs<ExtArgs>>): Prisma__CheckListClient<$Result.GetResult<Prisma.$CheckListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CheckLists.
     * @param {CheckListCreateManyArgs} args - Arguments to create many CheckLists.
     * @example
     * // Create many CheckLists
     * const checkList = await prisma.checkList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckListCreateManyArgs>(args?: SelectSubset<T, CheckListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CheckLists and returns the data saved in the database.
     * @param {CheckListCreateManyAndReturnArgs} args - Arguments to create many CheckLists.
     * @example
     * // Create many CheckLists
     * const checkList = await prisma.checkList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CheckLists and only return the `xata_id`
     * const checkListWithXata_idOnly = await prisma.checkList.createManyAndReturn({
     *   select: { xata_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckListCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CheckList.
     * @param {CheckListDeleteArgs} args - Arguments to delete one CheckList.
     * @example
     * // Delete one CheckList
     * const CheckList = await prisma.checkList.delete({
     *   where: {
     *     // ... filter to delete one CheckList
     *   }
     * })
     * 
     */
    delete<T extends CheckListDeleteArgs>(args: SelectSubset<T, CheckListDeleteArgs<ExtArgs>>): Prisma__CheckListClient<$Result.GetResult<Prisma.$CheckListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CheckList.
     * @param {CheckListUpdateArgs} args - Arguments to update one CheckList.
     * @example
     * // Update one CheckList
     * const checkList = await prisma.checkList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckListUpdateArgs>(args: SelectSubset<T, CheckListUpdateArgs<ExtArgs>>): Prisma__CheckListClient<$Result.GetResult<Prisma.$CheckListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CheckLists.
     * @param {CheckListDeleteManyArgs} args - Arguments to filter CheckLists to delete.
     * @example
     * // Delete a few CheckLists
     * const { count } = await prisma.checkList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckListDeleteManyArgs>(args?: SelectSubset<T, CheckListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckLists
     * const checkList = await prisma.checkList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckListUpdateManyArgs>(args: SelectSubset<T, CheckListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckLists and returns the data updated in the database.
     * @param {CheckListUpdateManyAndReturnArgs} args - Arguments to update many CheckLists.
     * @example
     * // Update many CheckLists
     * const checkList = await prisma.checkList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CheckLists and only return the `xata_id`
     * const checkListWithXata_idOnly = await prisma.checkList.updateManyAndReturn({
     *   select: { xata_id: true },
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
    updateManyAndReturn<T extends CheckListUpdateManyAndReturnArgs>(args: SelectSubset<T, CheckListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CheckList.
     * @param {CheckListUpsertArgs} args - Arguments to update or create a CheckList.
     * @example
     * // Update or create a CheckList
     * const checkList = await prisma.checkList.upsert({
     *   create: {
     *     // ... data to create a CheckList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckList we want to update
     *   }
     * })
     */
    upsert<T extends CheckListUpsertArgs>(args: SelectSubset<T, CheckListUpsertArgs<ExtArgs>>): Prisma__CheckListClient<$Result.GetResult<Prisma.$CheckListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CheckLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckListCountArgs} args - Arguments to filter CheckLists to count.
     * @example
     * // Count the number of CheckLists
     * const count = await prisma.checkList.count({
     *   where: {
     *     // ... the filter for the CheckLists we want to count
     *   }
     * })
    **/
    count<T extends CheckListCountArgs>(
      args?: Subset<T, CheckListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CheckList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckListAggregateArgs>(args: Subset<T, CheckListAggregateArgs>): Prisma.PrismaPromise<GetCheckListAggregateType<T>>

    /**
     * Group by CheckList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckListGroupByArgs} args - Group by arguments.
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
      T extends CheckListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckListGroupByArgs['orderBy'] }
        : { orderBy?: CheckListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CheckListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CheckList model
   */
  readonly fields: CheckListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CheckList model
   */
  interface CheckListFieldRefs {
    readonly xata_id: FieldRef<"CheckList", 'String'>
    readonly xata_version: FieldRef<"CheckList", 'Int'>
    readonly xata_createdat: FieldRef<"CheckList", 'DateTime'>
    readonly xata_updatedat: FieldRef<"CheckList", 'DateTime'>
    readonly createdBy: FieldRef<"CheckList", 'String'>
    readonly createdByName: FieldRef<"CheckList", 'String'>
    readonly clientId: FieldRef<"CheckList", 'String'>
    readonly vehicleId: FieldRef<"CheckList", 'String'>
    readonly nivelOleo: FieldRef<"CheckList", 'EstadoCheck'>
    readonly fluidoFreio: FieldRef<"CheckList", 'EstadoCheck'>
    readonly fluidoDirecao: FieldRef<"CheckList", 'EstadoCheck'>
    readonly fluidoArrefecimento: FieldRef<"CheckList", 'EstadoCheck'>
    readonly desgastePneu: FieldRef<"CheckList", 'EstadoCheck'>
    readonly calibragemPneus: FieldRef<"CheckList", 'EstadoCheck'>
    readonly lampadasDianteiras: FieldRef<"CheckList", 'EstadoCheck'>
    readonly lampadasTraseiras: FieldRef<"CheckList", 'EstadoCheck'>
    readonly fluidoLimpador: FieldRef<"CheckList", 'EstadoCheck'>
    readonly desgasteBorrachaLimpador: FieldRef<"CheckList", 'EstadoCheck'>
    readonly correaAcessorios: FieldRef<"CheckList", 'EstadoCheck'>
    readonly observacoes: FieldRef<"CheckList", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CheckList findUnique
   */
  export type CheckListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckList
     */
    select?: CheckListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckList
     */
    omit?: CheckListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListInclude<ExtArgs> | null
    /**
     * Filter, which CheckList to fetch.
     */
    where: CheckListWhereUniqueInput
  }

  /**
   * CheckList findUniqueOrThrow
   */
  export type CheckListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckList
     */
    select?: CheckListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckList
     */
    omit?: CheckListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListInclude<ExtArgs> | null
    /**
     * Filter, which CheckList to fetch.
     */
    where: CheckListWhereUniqueInput
  }

  /**
   * CheckList findFirst
   */
  export type CheckListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckList
     */
    select?: CheckListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckList
     */
    omit?: CheckListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListInclude<ExtArgs> | null
    /**
     * Filter, which CheckList to fetch.
     */
    where?: CheckListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckLists to fetch.
     */
    orderBy?: CheckListOrderByWithRelationInput | CheckListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckLists.
     */
    cursor?: CheckListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckLists.
     */
    distinct?: CheckListScalarFieldEnum | CheckListScalarFieldEnum[]
  }

  /**
   * CheckList findFirstOrThrow
   */
  export type CheckListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckList
     */
    select?: CheckListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckList
     */
    omit?: CheckListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListInclude<ExtArgs> | null
    /**
     * Filter, which CheckList to fetch.
     */
    where?: CheckListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckLists to fetch.
     */
    orderBy?: CheckListOrderByWithRelationInput | CheckListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckLists.
     */
    cursor?: CheckListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckLists.
     */
    distinct?: CheckListScalarFieldEnum | CheckListScalarFieldEnum[]
  }

  /**
   * CheckList findMany
   */
  export type CheckListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckList
     */
    select?: CheckListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckList
     */
    omit?: CheckListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListInclude<ExtArgs> | null
    /**
     * Filter, which CheckLists to fetch.
     */
    where?: CheckListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckLists to fetch.
     */
    orderBy?: CheckListOrderByWithRelationInput | CheckListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CheckLists.
     */
    cursor?: CheckListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckLists.
     */
    skip?: number
    distinct?: CheckListScalarFieldEnum | CheckListScalarFieldEnum[]
  }

  /**
   * CheckList create
   */
  export type CheckListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckList
     */
    select?: CheckListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckList
     */
    omit?: CheckListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListInclude<ExtArgs> | null
    /**
     * The data needed to create a CheckList.
     */
    data: XOR<CheckListCreateInput, CheckListUncheckedCreateInput>
  }

  /**
   * CheckList createMany
   */
  export type CheckListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckLists.
     */
    data: CheckListCreateManyInput | CheckListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CheckList createManyAndReturn
   */
  export type CheckListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckList
     */
    select?: CheckListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckList
     */
    omit?: CheckListOmit<ExtArgs> | null
    /**
     * The data used to create many CheckLists.
     */
    data: CheckListCreateManyInput | CheckListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckList update
   */
  export type CheckListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckList
     */
    select?: CheckListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckList
     */
    omit?: CheckListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListInclude<ExtArgs> | null
    /**
     * The data needed to update a CheckList.
     */
    data: XOR<CheckListUpdateInput, CheckListUncheckedUpdateInput>
    /**
     * Choose, which CheckList to update.
     */
    where: CheckListWhereUniqueInput
  }

  /**
   * CheckList updateMany
   */
  export type CheckListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckLists.
     */
    data: XOR<CheckListUpdateManyMutationInput, CheckListUncheckedUpdateManyInput>
    /**
     * Filter which CheckLists to update
     */
    where?: CheckListWhereInput
    /**
     * Limit how many CheckLists to update.
     */
    limit?: number
  }

  /**
   * CheckList updateManyAndReturn
   */
  export type CheckListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckList
     */
    select?: CheckListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckList
     */
    omit?: CheckListOmit<ExtArgs> | null
    /**
     * The data used to update CheckLists.
     */
    data: XOR<CheckListUpdateManyMutationInput, CheckListUncheckedUpdateManyInput>
    /**
     * Filter which CheckLists to update
     */
    where?: CheckListWhereInput
    /**
     * Limit how many CheckLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckList upsert
   */
  export type CheckListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckList
     */
    select?: CheckListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckList
     */
    omit?: CheckListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListInclude<ExtArgs> | null
    /**
     * The filter to search for the CheckList to update in case it exists.
     */
    where: CheckListWhereUniqueInput
    /**
     * In case the CheckList found by the `where` argument doesn't exist, create a new CheckList with this data.
     */
    create: XOR<CheckListCreateInput, CheckListUncheckedCreateInput>
    /**
     * In case the CheckList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckListUpdateInput, CheckListUncheckedUpdateInput>
  }

  /**
   * CheckList delete
   */
  export type CheckListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckList
     */
    select?: CheckListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckList
     */
    omit?: CheckListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListInclude<ExtArgs> | null
    /**
     * Filter which CheckList to delete.
     */
    where: CheckListWhereUniqueInput
  }

  /**
   * CheckList deleteMany
   */
  export type CheckListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckLists to delete
     */
    where?: CheckListWhereInput
    /**
     * Limit how many CheckLists to delete.
     */
    limit?: number
  }

  /**
   * CheckList without action
   */
  export type CheckListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckList
     */
    select?: CheckListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckList
     */
    omit?: CheckListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListInclude<ExtArgs> | null
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


  export const ClientScalarFieldEnum: {
    xata_id: 'xata_id',
    xata_version: 'xata_version',
    xata_createdat: 'xata_createdat',
    xata_updatedat: 'xata_updatedat',
    nome: 'nome',
    telefone: 'telefone',
    email: 'email'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    xata_id: 'xata_id',
    xata_version: 'xata_version',
    xata_createdat: 'xata_createdat',
    xata_updatedat: 'xata_updatedat',
    marca: 'marca',
    modelo: 'modelo',
    km: 'km'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const CheckListScalarFieldEnum: {
    xata_id: 'xata_id',
    xata_version: 'xata_version',
    xata_createdat: 'xata_createdat',
    xata_updatedat: 'xata_updatedat',
    createdBy: 'createdBy',
    createdByName: 'createdByName',
    clientId: 'clientId',
    vehicleId: 'vehicleId',
    nivelOleo: 'nivelOleo',
    fluidoFreio: 'fluidoFreio',
    fluidoDirecao: 'fluidoDirecao',
    fluidoArrefecimento: 'fluidoArrefecimento',
    desgastePneu: 'desgastePneu',
    calibragemPneus: 'calibragemPneus',
    lampadasDianteiras: 'lampadasDianteiras',
    lampadasTraseiras: 'lampadasTraseiras',
    fluidoLimpador: 'fluidoLimpador',
    desgasteBorrachaLimpador: 'desgasteBorrachaLimpador',
    correaAcessorios: 'correaAcessorios',
    observacoes: 'observacoes'
  };

  export type CheckListScalarFieldEnum = (typeof CheckListScalarFieldEnum)[keyof typeof CheckListScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EstadoCheck'
   */
  export type EnumEstadoCheckFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCheck'>
    


  /**
   * Reference to a field of type 'EstadoCheck[]'
   */
  export type ListEnumEstadoCheckFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCheck[]'>
    


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


  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    xata_id?: StringFilter<"Client"> | string
    xata_version?: IntFilter<"Client"> | number
    xata_createdat?: DateTimeFilter<"Client"> | Date | string
    xata_updatedat?: DateTimeFilter<"Client"> | Date | string
    nome?: StringFilter<"Client"> | string
    telefone?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    checklists?: CheckListListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    xata_id?: SortOrder
    xata_version?: SortOrder
    xata_createdat?: SortOrder
    xata_updatedat?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    checklists?: CheckListOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    xata_id?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    xata_version?: IntFilter<"Client"> | number
    xata_createdat?: DateTimeFilter<"Client"> | Date | string
    xata_updatedat?: DateTimeFilter<"Client"> | Date | string
    nome?: StringFilter<"Client"> | string
    telefone?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    checklists?: CheckListListRelationFilter
  }, "xata_id" | "xata_id">

  export type ClientOrderByWithAggregationInput = {
    xata_id?: SortOrder
    xata_version?: SortOrder
    xata_createdat?: SortOrder
    xata_updatedat?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    xata_id?: StringWithAggregatesFilter<"Client"> | string
    xata_version?: IntWithAggregatesFilter<"Client"> | number
    xata_createdat?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    xata_updatedat?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    nome?: StringWithAggregatesFilter<"Client"> | string
    telefone?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    xata_id?: StringFilter<"Vehicle"> | string
    xata_version?: IntFilter<"Vehicle"> | number
    xata_createdat?: DateTimeFilter<"Vehicle"> | Date | string
    xata_updatedat?: DateTimeFilter<"Vehicle"> | Date | string
    marca?: StringFilter<"Vehicle"> | string
    modelo?: StringFilter<"Vehicle"> | string
    km?: IntFilter<"Vehicle"> | number
    checklists?: CheckListListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    xata_id?: SortOrder
    xata_version?: SortOrder
    xata_createdat?: SortOrder
    xata_updatedat?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    km?: SortOrder
    checklists?: CheckListOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    xata_id?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    xata_version?: IntFilter<"Vehicle"> | number
    xata_createdat?: DateTimeFilter<"Vehicle"> | Date | string
    xata_updatedat?: DateTimeFilter<"Vehicle"> | Date | string
    marca?: StringFilter<"Vehicle"> | string
    modelo?: StringFilter<"Vehicle"> | string
    km?: IntFilter<"Vehicle"> | number
    checklists?: CheckListListRelationFilter
  }, "xata_id" | "xata_id">

  export type VehicleOrderByWithAggregationInput = {
    xata_id?: SortOrder
    xata_version?: SortOrder
    xata_createdat?: SortOrder
    xata_updatedat?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    km?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    xata_id?: StringWithAggregatesFilter<"Vehicle"> | string
    xata_version?: IntWithAggregatesFilter<"Vehicle"> | number
    xata_createdat?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    xata_updatedat?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    marca?: StringWithAggregatesFilter<"Vehicle"> | string
    modelo?: StringWithAggregatesFilter<"Vehicle"> | string
    km?: IntWithAggregatesFilter<"Vehicle"> | number
  }

  export type CheckListWhereInput = {
    AND?: CheckListWhereInput | CheckListWhereInput[]
    OR?: CheckListWhereInput[]
    NOT?: CheckListWhereInput | CheckListWhereInput[]
    xata_id?: StringFilter<"CheckList"> | string
    xata_version?: IntFilter<"CheckList"> | number
    xata_createdat?: DateTimeFilter<"CheckList"> | Date | string
    xata_updatedat?: DateTimeFilter<"CheckList"> | Date | string
    createdBy?: StringFilter<"CheckList"> | string
    createdByName?: StringFilter<"CheckList"> | string
    clientId?: StringFilter<"CheckList"> | string
    vehicleId?: StringFilter<"CheckList"> | string
    nivelOleo?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    fluidoFreio?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    fluidoDirecao?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    fluidoArrefecimento?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    desgastePneu?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    calibragemPneus?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    lampadasDianteiras?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    lampadasTraseiras?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    fluidoLimpador?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    desgasteBorrachaLimpador?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    correaAcessorios?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    observacoes?: StringNullableFilter<"CheckList"> | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type CheckListOrderByWithRelationInput = {
    xata_id?: SortOrder
    xata_version?: SortOrder
    xata_createdat?: SortOrder
    xata_updatedat?: SortOrder
    createdBy?: SortOrder
    createdByName?: SortOrder
    clientId?: SortOrder
    vehicleId?: SortOrder
    nivelOleo?: SortOrder
    fluidoFreio?: SortOrder
    fluidoDirecao?: SortOrder
    fluidoArrefecimento?: SortOrder
    desgastePneu?: SortOrder
    calibragemPneus?: SortOrder
    lampadasDianteiras?: SortOrder
    lampadasTraseiras?: SortOrder
    fluidoLimpador?: SortOrder
    desgasteBorrachaLimpador?: SortOrder
    correaAcessorios?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type CheckListWhereUniqueInput = Prisma.AtLeast<{
    xata_id?: string
    AND?: CheckListWhereInput | CheckListWhereInput[]
    OR?: CheckListWhereInput[]
    NOT?: CheckListWhereInput | CheckListWhereInput[]
    xata_version?: IntFilter<"CheckList"> | number
    xata_createdat?: DateTimeFilter<"CheckList"> | Date | string
    xata_updatedat?: DateTimeFilter<"CheckList"> | Date | string
    createdBy?: StringFilter<"CheckList"> | string
    createdByName?: StringFilter<"CheckList"> | string
    clientId?: StringFilter<"CheckList"> | string
    vehicleId?: StringFilter<"CheckList"> | string
    nivelOleo?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    fluidoFreio?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    fluidoDirecao?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    fluidoArrefecimento?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    desgastePneu?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    calibragemPneus?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    lampadasDianteiras?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    lampadasTraseiras?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    fluidoLimpador?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    desgasteBorrachaLimpador?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    correaAcessorios?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    observacoes?: StringNullableFilter<"CheckList"> | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "xata_id" | "xata_id">

  export type CheckListOrderByWithAggregationInput = {
    xata_id?: SortOrder
    xata_version?: SortOrder
    xata_createdat?: SortOrder
    xata_updatedat?: SortOrder
    createdBy?: SortOrder
    createdByName?: SortOrder
    clientId?: SortOrder
    vehicleId?: SortOrder
    nivelOleo?: SortOrder
    fluidoFreio?: SortOrder
    fluidoDirecao?: SortOrder
    fluidoArrefecimento?: SortOrder
    desgastePneu?: SortOrder
    calibragemPneus?: SortOrder
    lampadasDianteiras?: SortOrder
    lampadasTraseiras?: SortOrder
    fluidoLimpador?: SortOrder
    desgasteBorrachaLimpador?: SortOrder
    correaAcessorios?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    _count?: CheckListCountOrderByAggregateInput
    _avg?: CheckListAvgOrderByAggregateInput
    _max?: CheckListMaxOrderByAggregateInput
    _min?: CheckListMinOrderByAggregateInput
    _sum?: CheckListSumOrderByAggregateInput
  }

  export type CheckListScalarWhereWithAggregatesInput = {
    AND?: CheckListScalarWhereWithAggregatesInput | CheckListScalarWhereWithAggregatesInput[]
    OR?: CheckListScalarWhereWithAggregatesInput[]
    NOT?: CheckListScalarWhereWithAggregatesInput | CheckListScalarWhereWithAggregatesInput[]
    xata_id?: StringWithAggregatesFilter<"CheckList"> | string
    xata_version?: IntWithAggregatesFilter<"CheckList"> | number
    xata_createdat?: DateTimeWithAggregatesFilter<"CheckList"> | Date | string
    xata_updatedat?: DateTimeWithAggregatesFilter<"CheckList"> | Date | string
    createdBy?: StringWithAggregatesFilter<"CheckList"> | string
    createdByName?: StringWithAggregatesFilter<"CheckList"> | string
    clientId?: StringWithAggregatesFilter<"CheckList"> | string
    vehicleId?: StringWithAggregatesFilter<"CheckList"> | string
    nivelOleo?: EnumEstadoCheckWithAggregatesFilter<"CheckList"> | $Enums.EstadoCheck
    fluidoFreio?: EnumEstadoCheckWithAggregatesFilter<"CheckList"> | $Enums.EstadoCheck
    fluidoDirecao?: EnumEstadoCheckWithAggregatesFilter<"CheckList"> | $Enums.EstadoCheck
    fluidoArrefecimento?: EnumEstadoCheckWithAggregatesFilter<"CheckList"> | $Enums.EstadoCheck
    desgastePneu?: EnumEstadoCheckWithAggregatesFilter<"CheckList"> | $Enums.EstadoCheck
    calibragemPneus?: EnumEstadoCheckWithAggregatesFilter<"CheckList"> | $Enums.EstadoCheck
    lampadasDianteiras?: EnumEstadoCheckWithAggregatesFilter<"CheckList"> | $Enums.EstadoCheck
    lampadasTraseiras?: EnumEstadoCheckWithAggregatesFilter<"CheckList"> | $Enums.EstadoCheck
    fluidoLimpador?: EnumEstadoCheckWithAggregatesFilter<"CheckList"> | $Enums.EstadoCheck
    desgasteBorrachaLimpador?: EnumEstadoCheckWithAggregatesFilter<"CheckList"> | $Enums.EstadoCheck
    correaAcessorios?: EnumEstadoCheckWithAggregatesFilter<"CheckList"> | $Enums.EstadoCheck
    observacoes?: StringNullableWithAggregatesFilter<"CheckList"> | string | null
  }

  export type ClientCreateInput = {
    xata_id?: string
    xata_version?: number
    xata_createdat?: Date | string
    xata_updatedat?: Date | string
    nome: string
    telefone: string
    email: string
    checklists?: CheckListCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    xata_id?: string
    xata_version?: number
    xata_createdat?: Date | string
    xata_updatedat?: Date | string
    nome: string
    telefone: string
    email: string
    checklists?: CheckListUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    checklists?: CheckListUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    checklists?: CheckListUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    xata_id?: string
    xata_version?: number
    xata_createdat?: Date | string
    xata_updatedat?: Date | string
    nome: string
    telefone: string
    email: string
  }

  export type ClientUpdateManyMutationInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUncheckedUpdateManyInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleCreateInput = {
    xata_id?: string
    xata_version?: number
    xata_createdat?: Date | string
    xata_updatedat?: Date | string
    marca: string
    modelo: string
    km: number
    checklists?: CheckListCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    xata_id?: string
    xata_version?: number
    xata_createdat?: Date | string
    xata_updatedat?: Date | string
    marca: string
    modelo: string
    km: number
    checklists?: CheckListUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
    checklists?: CheckListUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
    checklists?: CheckListUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    xata_id?: string
    xata_version?: number
    xata_createdat?: Date | string
    xata_updatedat?: Date | string
    marca: string
    modelo: string
    km: number
  }

  export type VehicleUpdateManyMutationInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleUncheckedUpdateManyInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
  }

  export type CheckListCreateInput = {
    xata_id?: string
    xata_version?: number
    xata_createdat?: Date | string
    xata_updatedat?: Date | string
    createdBy: string
    createdByName: string
    nivelOleo: $Enums.EstadoCheck
    fluidoFreio: $Enums.EstadoCheck
    fluidoDirecao: $Enums.EstadoCheck
    fluidoArrefecimento: $Enums.EstadoCheck
    desgastePneu: $Enums.EstadoCheck
    calibragemPneus: $Enums.EstadoCheck
    lampadasDianteiras: $Enums.EstadoCheck
    lampadasTraseiras: $Enums.EstadoCheck
    fluidoLimpador: $Enums.EstadoCheck
    desgasteBorrachaLimpador: $Enums.EstadoCheck
    correaAcessorios: $Enums.EstadoCheck
    observacoes?: string | null
    client: ClientCreateNestedOneWithoutChecklistsInput
    vehicle: VehicleCreateNestedOneWithoutChecklistsInput
  }

  export type CheckListUncheckedCreateInput = {
    xata_id?: string
    xata_version?: number
    xata_createdat?: Date | string
    xata_updatedat?: Date | string
    createdBy: string
    createdByName: string
    clientId: string
    vehicleId: string
    nivelOleo: $Enums.EstadoCheck
    fluidoFreio: $Enums.EstadoCheck
    fluidoDirecao: $Enums.EstadoCheck
    fluidoArrefecimento: $Enums.EstadoCheck
    desgastePneu: $Enums.EstadoCheck
    calibragemPneus: $Enums.EstadoCheck
    lampadasDianteiras: $Enums.EstadoCheck
    lampadasTraseiras: $Enums.EstadoCheck
    fluidoLimpador: $Enums.EstadoCheck
    desgasteBorrachaLimpador: $Enums.EstadoCheck
    correaAcessorios: $Enums.EstadoCheck
    observacoes?: string | null
  }

  export type CheckListUpdateInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdByName?: StringFieldUpdateOperationsInput | string
    nivelOleo?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoFreio?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoDirecao?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoArrefecimento?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgastePneu?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    calibragemPneus?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasDianteiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasTraseiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgasteBorrachaLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    correaAcessorios?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneRequiredWithoutChecklistsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutChecklistsNestedInput
  }

  export type CheckListUncheckedUpdateInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdByName?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    nivelOleo?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoFreio?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoDirecao?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoArrefecimento?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgastePneu?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    calibragemPneus?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasDianteiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasTraseiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgasteBorrachaLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    correaAcessorios?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckListCreateManyInput = {
    xata_id?: string
    xata_version?: number
    xata_createdat?: Date | string
    xata_updatedat?: Date | string
    createdBy: string
    createdByName: string
    clientId: string
    vehicleId: string
    nivelOleo: $Enums.EstadoCheck
    fluidoFreio: $Enums.EstadoCheck
    fluidoDirecao: $Enums.EstadoCheck
    fluidoArrefecimento: $Enums.EstadoCheck
    desgastePneu: $Enums.EstadoCheck
    calibragemPneus: $Enums.EstadoCheck
    lampadasDianteiras: $Enums.EstadoCheck
    lampadasTraseiras: $Enums.EstadoCheck
    fluidoLimpador: $Enums.EstadoCheck
    desgasteBorrachaLimpador: $Enums.EstadoCheck
    correaAcessorios: $Enums.EstadoCheck
    observacoes?: string | null
  }

  export type CheckListUpdateManyMutationInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdByName?: StringFieldUpdateOperationsInput | string
    nivelOleo?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoFreio?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoDirecao?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoArrefecimento?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgastePneu?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    calibragemPneus?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasDianteiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasTraseiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgasteBorrachaLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    correaAcessorios?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckListUncheckedUpdateManyInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdByName?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    nivelOleo?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoFreio?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoDirecao?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoArrefecimento?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgastePneu?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    calibragemPneus?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasDianteiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasTraseiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgasteBorrachaLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    correaAcessorios?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type CheckListListRelationFilter = {
    every?: CheckListWhereInput
    some?: CheckListWhereInput
    none?: CheckListWhereInput
  }

  export type CheckListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    xata_id?: SortOrder
    xata_version?: SortOrder
    xata_createdat?: SortOrder
    xata_updatedat?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    xata_version?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    xata_id?: SortOrder
    xata_version?: SortOrder
    xata_createdat?: SortOrder
    xata_updatedat?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    xata_id?: SortOrder
    xata_version?: SortOrder
    xata_createdat?: SortOrder
    xata_updatedat?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    xata_version?: SortOrder
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

  export type VehicleCountOrderByAggregateInput = {
    xata_id?: SortOrder
    xata_version?: SortOrder
    xata_createdat?: SortOrder
    xata_updatedat?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    km?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    xata_version?: SortOrder
    km?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    xata_id?: SortOrder
    xata_version?: SortOrder
    xata_createdat?: SortOrder
    xata_updatedat?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    km?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    xata_id?: SortOrder
    xata_version?: SortOrder
    xata_createdat?: SortOrder
    xata_updatedat?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    km?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    xata_version?: SortOrder
    km?: SortOrder
  }

  export type EnumEstadoCheckFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCheck | EnumEstadoCheckFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCheck[] | ListEnumEstadoCheckFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCheck[] | ListEnumEstadoCheckFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCheckFilter<$PrismaModel> | $Enums.EstadoCheck
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

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CheckListCountOrderByAggregateInput = {
    xata_id?: SortOrder
    xata_version?: SortOrder
    xata_createdat?: SortOrder
    xata_updatedat?: SortOrder
    createdBy?: SortOrder
    createdByName?: SortOrder
    clientId?: SortOrder
    vehicleId?: SortOrder
    nivelOleo?: SortOrder
    fluidoFreio?: SortOrder
    fluidoDirecao?: SortOrder
    fluidoArrefecimento?: SortOrder
    desgastePneu?: SortOrder
    calibragemPneus?: SortOrder
    lampadasDianteiras?: SortOrder
    lampadasTraseiras?: SortOrder
    fluidoLimpador?: SortOrder
    desgasteBorrachaLimpador?: SortOrder
    correaAcessorios?: SortOrder
    observacoes?: SortOrder
  }

  export type CheckListAvgOrderByAggregateInput = {
    xata_version?: SortOrder
  }

  export type CheckListMaxOrderByAggregateInput = {
    xata_id?: SortOrder
    xata_version?: SortOrder
    xata_createdat?: SortOrder
    xata_updatedat?: SortOrder
    createdBy?: SortOrder
    createdByName?: SortOrder
    clientId?: SortOrder
    vehicleId?: SortOrder
    nivelOleo?: SortOrder
    fluidoFreio?: SortOrder
    fluidoDirecao?: SortOrder
    fluidoArrefecimento?: SortOrder
    desgastePneu?: SortOrder
    calibragemPneus?: SortOrder
    lampadasDianteiras?: SortOrder
    lampadasTraseiras?: SortOrder
    fluidoLimpador?: SortOrder
    desgasteBorrachaLimpador?: SortOrder
    correaAcessorios?: SortOrder
    observacoes?: SortOrder
  }

  export type CheckListMinOrderByAggregateInput = {
    xata_id?: SortOrder
    xata_version?: SortOrder
    xata_createdat?: SortOrder
    xata_updatedat?: SortOrder
    createdBy?: SortOrder
    createdByName?: SortOrder
    clientId?: SortOrder
    vehicleId?: SortOrder
    nivelOleo?: SortOrder
    fluidoFreio?: SortOrder
    fluidoDirecao?: SortOrder
    fluidoArrefecimento?: SortOrder
    desgastePneu?: SortOrder
    calibragemPneus?: SortOrder
    lampadasDianteiras?: SortOrder
    lampadasTraseiras?: SortOrder
    fluidoLimpador?: SortOrder
    desgasteBorrachaLimpador?: SortOrder
    correaAcessorios?: SortOrder
    observacoes?: SortOrder
  }

  export type CheckListSumOrderByAggregateInput = {
    xata_version?: SortOrder
  }

  export type EnumEstadoCheckWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCheck | EnumEstadoCheckFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCheck[] | ListEnumEstadoCheckFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCheck[] | ListEnumEstadoCheckFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCheckWithAggregatesFilter<$PrismaModel> | $Enums.EstadoCheck
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoCheckFilter<$PrismaModel>
    _max?: NestedEnumEstadoCheckFilter<$PrismaModel>
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

  export type CheckListCreateNestedManyWithoutClientInput = {
    create?: XOR<CheckListCreateWithoutClientInput, CheckListUncheckedCreateWithoutClientInput> | CheckListCreateWithoutClientInput[] | CheckListUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CheckListCreateOrConnectWithoutClientInput | CheckListCreateOrConnectWithoutClientInput[]
    createMany?: CheckListCreateManyClientInputEnvelope
    connect?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
  }

  export type CheckListUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<CheckListCreateWithoutClientInput, CheckListUncheckedCreateWithoutClientInput> | CheckListCreateWithoutClientInput[] | CheckListUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CheckListCreateOrConnectWithoutClientInput | CheckListCreateOrConnectWithoutClientInput[]
    createMany?: CheckListCreateManyClientInputEnvelope
    connect?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CheckListUpdateManyWithoutClientNestedInput = {
    create?: XOR<CheckListCreateWithoutClientInput, CheckListUncheckedCreateWithoutClientInput> | CheckListCreateWithoutClientInput[] | CheckListUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CheckListCreateOrConnectWithoutClientInput | CheckListCreateOrConnectWithoutClientInput[]
    upsert?: CheckListUpsertWithWhereUniqueWithoutClientInput | CheckListUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CheckListCreateManyClientInputEnvelope
    set?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
    disconnect?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
    delete?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
    connect?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
    update?: CheckListUpdateWithWhereUniqueWithoutClientInput | CheckListUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CheckListUpdateManyWithWhereWithoutClientInput | CheckListUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CheckListScalarWhereInput | CheckListScalarWhereInput[]
  }

  export type CheckListUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<CheckListCreateWithoutClientInput, CheckListUncheckedCreateWithoutClientInput> | CheckListCreateWithoutClientInput[] | CheckListUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CheckListCreateOrConnectWithoutClientInput | CheckListCreateOrConnectWithoutClientInput[]
    upsert?: CheckListUpsertWithWhereUniqueWithoutClientInput | CheckListUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CheckListCreateManyClientInputEnvelope
    set?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
    disconnect?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
    delete?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
    connect?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
    update?: CheckListUpdateWithWhereUniqueWithoutClientInput | CheckListUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CheckListUpdateManyWithWhereWithoutClientInput | CheckListUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CheckListScalarWhereInput | CheckListScalarWhereInput[]
  }

  export type CheckListCreateNestedManyWithoutVehicleInput = {
    create?: XOR<CheckListCreateWithoutVehicleInput, CheckListUncheckedCreateWithoutVehicleInput> | CheckListCreateWithoutVehicleInput[] | CheckListUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: CheckListCreateOrConnectWithoutVehicleInput | CheckListCreateOrConnectWithoutVehicleInput[]
    createMany?: CheckListCreateManyVehicleInputEnvelope
    connect?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
  }

  export type CheckListUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<CheckListCreateWithoutVehicleInput, CheckListUncheckedCreateWithoutVehicleInput> | CheckListCreateWithoutVehicleInput[] | CheckListUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: CheckListCreateOrConnectWithoutVehicleInput | CheckListCreateOrConnectWithoutVehicleInput[]
    createMany?: CheckListCreateManyVehicleInputEnvelope
    connect?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
  }

  export type CheckListUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<CheckListCreateWithoutVehicleInput, CheckListUncheckedCreateWithoutVehicleInput> | CheckListCreateWithoutVehicleInput[] | CheckListUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: CheckListCreateOrConnectWithoutVehicleInput | CheckListCreateOrConnectWithoutVehicleInput[]
    upsert?: CheckListUpsertWithWhereUniqueWithoutVehicleInput | CheckListUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: CheckListCreateManyVehicleInputEnvelope
    set?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
    disconnect?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
    delete?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
    connect?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
    update?: CheckListUpdateWithWhereUniqueWithoutVehicleInput | CheckListUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: CheckListUpdateManyWithWhereWithoutVehicleInput | CheckListUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: CheckListScalarWhereInput | CheckListScalarWhereInput[]
  }

  export type CheckListUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<CheckListCreateWithoutVehicleInput, CheckListUncheckedCreateWithoutVehicleInput> | CheckListCreateWithoutVehicleInput[] | CheckListUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: CheckListCreateOrConnectWithoutVehicleInput | CheckListCreateOrConnectWithoutVehicleInput[]
    upsert?: CheckListUpsertWithWhereUniqueWithoutVehicleInput | CheckListUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: CheckListCreateManyVehicleInputEnvelope
    set?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
    disconnect?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
    delete?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
    connect?: CheckListWhereUniqueInput | CheckListWhereUniqueInput[]
    update?: CheckListUpdateWithWhereUniqueWithoutVehicleInput | CheckListUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: CheckListUpdateManyWithWhereWithoutVehicleInput | CheckListUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: CheckListScalarWhereInput | CheckListScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutChecklistsInput = {
    create?: XOR<ClientCreateWithoutChecklistsInput, ClientUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutChecklistsInput
    connect?: ClientWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutChecklistsInput = {
    create?: XOR<VehicleCreateWithoutChecklistsInput, VehicleUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutChecklistsInput
    connect?: VehicleWhereUniqueInput
  }

  export type EnumEstadoCheckFieldUpdateOperationsInput = {
    set?: $Enums.EstadoCheck
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClientUpdateOneRequiredWithoutChecklistsNestedInput = {
    create?: XOR<ClientCreateWithoutChecklistsInput, ClientUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutChecklistsInput
    upsert?: ClientUpsertWithoutChecklistsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutChecklistsInput, ClientUpdateWithoutChecklistsInput>, ClientUncheckedUpdateWithoutChecklistsInput>
  }

  export type VehicleUpdateOneRequiredWithoutChecklistsNestedInput = {
    create?: XOR<VehicleCreateWithoutChecklistsInput, VehicleUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutChecklistsInput
    upsert?: VehicleUpsertWithoutChecklistsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutChecklistsInput, VehicleUpdateWithoutChecklistsInput>, VehicleUncheckedUpdateWithoutChecklistsInput>
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

  export type NestedEnumEstadoCheckFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCheck | EnumEstadoCheckFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCheck[] | ListEnumEstadoCheckFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCheck[] | ListEnumEstadoCheckFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCheckFilter<$PrismaModel> | $Enums.EstadoCheck
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

  export type NestedEnumEstadoCheckWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCheck | EnumEstadoCheckFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCheck[] | ListEnumEstadoCheckFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCheck[] | ListEnumEstadoCheckFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCheckWithAggregatesFilter<$PrismaModel> | $Enums.EstadoCheck
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoCheckFilter<$PrismaModel>
    _max?: NestedEnumEstadoCheckFilter<$PrismaModel>
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

  export type CheckListCreateWithoutClientInput = {
    xata_id?: string
    xata_version?: number
    xata_createdat?: Date | string
    xata_updatedat?: Date | string
    createdBy: string
    createdByName: string
    nivelOleo: $Enums.EstadoCheck
    fluidoFreio: $Enums.EstadoCheck
    fluidoDirecao: $Enums.EstadoCheck
    fluidoArrefecimento: $Enums.EstadoCheck
    desgastePneu: $Enums.EstadoCheck
    calibragemPneus: $Enums.EstadoCheck
    lampadasDianteiras: $Enums.EstadoCheck
    lampadasTraseiras: $Enums.EstadoCheck
    fluidoLimpador: $Enums.EstadoCheck
    desgasteBorrachaLimpador: $Enums.EstadoCheck
    correaAcessorios: $Enums.EstadoCheck
    observacoes?: string | null
    vehicle: VehicleCreateNestedOneWithoutChecklistsInput
  }

  export type CheckListUncheckedCreateWithoutClientInput = {
    xata_id?: string
    xata_version?: number
    xata_createdat?: Date | string
    xata_updatedat?: Date | string
    createdBy: string
    createdByName: string
    vehicleId: string
    nivelOleo: $Enums.EstadoCheck
    fluidoFreio: $Enums.EstadoCheck
    fluidoDirecao: $Enums.EstadoCheck
    fluidoArrefecimento: $Enums.EstadoCheck
    desgastePneu: $Enums.EstadoCheck
    calibragemPneus: $Enums.EstadoCheck
    lampadasDianteiras: $Enums.EstadoCheck
    lampadasTraseiras: $Enums.EstadoCheck
    fluidoLimpador: $Enums.EstadoCheck
    desgasteBorrachaLimpador: $Enums.EstadoCheck
    correaAcessorios: $Enums.EstadoCheck
    observacoes?: string | null
  }

  export type CheckListCreateOrConnectWithoutClientInput = {
    where: CheckListWhereUniqueInput
    create: XOR<CheckListCreateWithoutClientInput, CheckListUncheckedCreateWithoutClientInput>
  }

  export type CheckListCreateManyClientInputEnvelope = {
    data: CheckListCreateManyClientInput | CheckListCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type CheckListUpsertWithWhereUniqueWithoutClientInput = {
    where: CheckListWhereUniqueInput
    update: XOR<CheckListUpdateWithoutClientInput, CheckListUncheckedUpdateWithoutClientInput>
    create: XOR<CheckListCreateWithoutClientInput, CheckListUncheckedCreateWithoutClientInput>
  }

  export type CheckListUpdateWithWhereUniqueWithoutClientInput = {
    where: CheckListWhereUniqueInput
    data: XOR<CheckListUpdateWithoutClientInput, CheckListUncheckedUpdateWithoutClientInput>
  }

  export type CheckListUpdateManyWithWhereWithoutClientInput = {
    where: CheckListScalarWhereInput
    data: XOR<CheckListUpdateManyMutationInput, CheckListUncheckedUpdateManyWithoutClientInput>
  }

  export type CheckListScalarWhereInput = {
    AND?: CheckListScalarWhereInput | CheckListScalarWhereInput[]
    OR?: CheckListScalarWhereInput[]
    NOT?: CheckListScalarWhereInput | CheckListScalarWhereInput[]
    xata_id?: StringFilter<"CheckList"> | string
    xata_version?: IntFilter<"CheckList"> | number
    xata_createdat?: DateTimeFilter<"CheckList"> | Date | string
    xata_updatedat?: DateTimeFilter<"CheckList"> | Date | string
    createdBy?: StringFilter<"CheckList"> | string
    createdByName?: StringFilter<"CheckList"> | string
    clientId?: StringFilter<"CheckList"> | string
    vehicleId?: StringFilter<"CheckList"> | string
    nivelOleo?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    fluidoFreio?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    fluidoDirecao?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    fluidoArrefecimento?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    desgastePneu?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    calibragemPneus?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    lampadasDianteiras?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    lampadasTraseiras?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    fluidoLimpador?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    desgasteBorrachaLimpador?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    correaAcessorios?: EnumEstadoCheckFilter<"CheckList"> | $Enums.EstadoCheck
    observacoes?: StringNullableFilter<"CheckList"> | string | null
  }

  export type CheckListCreateWithoutVehicleInput = {
    xata_id?: string
    xata_version?: number
    xata_createdat?: Date | string
    xata_updatedat?: Date | string
    createdBy: string
    createdByName: string
    nivelOleo: $Enums.EstadoCheck
    fluidoFreio: $Enums.EstadoCheck
    fluidoDirecao: $Enums.EstadoCheck
    fluidoArrefecimento: $Enums.EstadoCheck
    desgastePneu: $Enums.EstadoCheck
    calibragemPneus: $Enums.EstadoCheck
    lampadasDianteiras: $Enums.EstadoCheck
    lampadasTraseiras: $Enums.EstadoCheck
    fluidoLimpador: $Enums.EstadoCheck
    desgasteBorrachaLimpador: $Enums.EstadoCheck
    correaAcessorios: $Enums.EstadoCheck
    observacoes?: string | null
    client: ClientCreateNestedOneWithoutChecklistsInput
  }

  export type CheckListUncheckedCreateWithoutVehicleInput = {
    xata_id?: string
    xata_version?: number
    xata_createdat?: Date | string
    xata_updatedat?: Date | string
    createdBy: string
    createdByName: string
    clientId: string
    nivelOleo: $Enums.EstadoCheck
    fluidoFreio: $Enums.EstadoCheck
    fluidoDirecao: $Enums.EstadoCheck
    fluidoArrefecimento: $Enums.EstadoCheck
    desgastePneu: $Enums.EstadoCheck
    calibragemPneus: $Enums.EstadoCheck
    lampadasDianteiras: $Enums.EstadoCheck
    lampadasTraseiras: $Enums.EstadoCheck
    fluidoLimpador: $Enums.EstadoCheck
    desgasteBorrachaLimpador: $Enums.EstadoCheck
    correaAcessorios: $Enums.EstadoCheck
    observacoes?: string | null
  }

  export type CheckListCreateOrConnectWithoutVehicleInput = {
    where: CheckListWhereUniqueInput
    create: XOR<CheckListCreateWithoutVehicleInput, CheckListUncheckedCreateWithoutVehicleInput>
  }

  export type CheckListCreateManyVehicleInputEnvelope = {
    data: CheckListCreateManyVehicleInput | CheckListCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type CheckListUpsertWithWhereUniqueWithoutVehicleInput = {
    where: CheckListWhereUniqueInput
    update: XOR<CheckListUpdateWithoutVehicleInput, CheckListUncheckedUpdateWithoutVehicleInput>
    create: XOR<CheckListCreateWithoutVehicleInput, CheckListUncheckedCreateWithoutVehicleInput>
  }

  export type CheckListUpdateWithWhereUniqueWithoutVehicleInput = {
    where: CheckListWhereUniqueInput
    data: XOR<CheckListUpdateWithoutVehicleInput, CheckListUncheckedUpdateWithoutVehicleInput>
  }

  export type CheckListUpdateManyWithWhereWithoutVehicleInput = {
    where: CheckListScalarWhereInput
    data: XOR<CheckListUpdateManyMutationInput, CheckListUncheckedUpdateManyWithoutVehicleInput>
  }

  export type ClientCreateWithoutChecklistsInput = {
    xata_id?: string
    xata_version?: number
    xata_createdat?: Date | string
    xata_updatedat?: Date | string
    nome: string
    telefone: string
    email: string
  }

  export type ClientUncheckedCreateWithoutChecklistsInput = {
    xata_id?: string
    xata_version?: number
    xata_createdat?: Date | string
    xata_updatedat?: Date | string
    nome: string
    telefone: string
    email: string
  }

  export type ClientCreateOrConnectWithoutChecklistsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutChecklistsInput, ClientUncheckedCreateWithoutChecklistsInput>
  }

  export type VehicleCreateWithoutChecklistsInput = {
    xata_id?: string
    xata_version?: number
    xata_createdat?: Date | string
    xata_updatedat?: Date | string
    marca: string
    modelo: string
    km: number
  }

  export type VehicleUncheckedCreateWithoutChecklistsInput = {
    xata_id?: string
    xata_version?: number
    xata_createdat?: Date | string
    xata_updatedat?: Date | string
    marca: string
    modelo: string
    km: number
  }

  export type VehicleCreateOrConnectWithoutChecklistsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutChecklistsInput, VehicleUncheckedCreateWithoutChecklistsInput>
  }

  export type ClientUpsertWithoutChecklistsInput = {
    update: XOR<ClientUpdateWithoutChecklistsInput, ClientUncheckedUpdateWithoutChecklistsInput>
    create: XOR<ClientCreateWithoutChecklistsInput, ClientUncheckedCreateWithoutChecklistsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutChecklistsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutChecklistsInput, ClientUncheckedUpdateWithoutChecklistsInput>
  }

  export type ClientUpdateWithoutChecklistsInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUncheckedUpdateWithoutChecklistsInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleUpsertWithoutChecklistsInput = {
    update: XOR<VehicleUpdateWithoutChecklistsInput, VehicleUncheckedUpdateWithoutChecklistsInput>
    create: XOR<VehicleCreateWithoutChecklistsInput, VehicleUncheckedCreateWithoutChecklistsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutChecklistsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutChecklistsInput, VehicleUncheckedUpdateWithoutChecklistsInput>
  }

  export type VehicleUpdateWithoutChecklistsInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleUncheckedUpdateWithoutChecklistsInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
  }

  export type CheckListCreateManyClientInput = {
    xata_id?: string
    xata_version?: number
    xata_createdat?: Date | string
    xata_updatedat?: Date | string
    createdBy: string
    createdByName: string
    vehicleId: string
    nivelOleo: $Enums.EstadoCheck
    fluidoFreio: $Enums.EstadoCheck
    fluidoDirecao: $Enums.EstadoCheck
    fluidoArrefecimento: $Enums.EstadoCheck
    desgastePneu: $Enums.EstadoCheck
    calibragemPneus: $Enums.EstadoCheck
    lampadasDianteiras: $Enums.EstadoCheck
    lampadasTraseiras: $Enums.EstadoCheck
    fluidoLimpador: $Enums.EstadoCheck
    desgasteBorrachaLimpador: $Enums.EstadoCheck
    correaAcessorios: $Enums.EstadoCheck
    observacoes?: string | null
  }

  export type CheckListUpdateWithoutClientInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdByName?: StringFieldUpdateOperationsInput | string
    nivelOleo?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoFreio?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoDirecao?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoArrefecimento?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgastePneu?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    calibragemPneus?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasDianteiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasTraseiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgasteBorrachaLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    correaAcessorios?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle?: VehicleUpdateOneRequiredWithoutChecklistsNestedInput
  }

  export type CheckListUncheckedUpdateWithoutClientInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdByName?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    nivelOleo?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoFreio?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoDirecao?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoArrefecimento?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgastePneu?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    calibragemPneus?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasDianteiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasTraseiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgasteBorrachaLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    correaAcessorios?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckListUncheckedUpdateManyWithoutClientInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdByName?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    nivelOleo?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoFreio?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoDirecao?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoArrefecimento?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgastePneu?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    calibragemPneus?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasDianteiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasTraseiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgasteBorrachaLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    correaAcessorios?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckListCreateManyVehicleInput = {
    xata_id?: string
    xata_version?: number
    xata_createdat?: Date | string
    xata_updatedat?: Date | string
    createdBy: string
    createdByName: string
    clientId: string
    nivelOleo: $Enums.EstadoCheck
    fluidoFreio: $Enums.EstadoCheck
    fluidoDirecao: $Enums.EstadoCheck
    fluidoArrefecimento: $Enums.EstadoCheck
    desgastePneu: $Enums.EstadoCheck
    calibragemPneus: $Enums.EstadoCheck
    lampadasDianteiras: $Enums.EstadoCheck
    lampadasTraseiras: $Enums.EstadoCheck
    fluidoLimpador: $Enums.EstadoCheck
    desgasteBorrachaLimpador: $Enums.EstadoCheck
    correaAcessorios: $Enums.EstadoCheck
    observacoes?: string | null
  }

  export type CheckListUpdateWithoutVehicleInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdByName?: StringFieldUpdateOperationsInput | string
    nivelOleo?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoFreio?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoDirecao?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoArrefecimento?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgastePneu?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    calibragemPneus?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasDianteiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasTraseiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgasteBorrachaLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    correaAcessorios?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneRequiredWithoutChecklistsNestedInput
  }

  export type CheckListUncheckedUpdateWithoutVehicleInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdByName?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    nivelOleo?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoFreio?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoDirecao?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoArrefecimento?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgastePneu?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    calibragemPneus?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasDianteiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasTraseiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgasteBorrachaLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    correaAcessorios?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckListUncheckedUpdateManyWithoutVehicleInput = {
    xata_id?: StringFieldUpdateOperationsInput | string
    xata_version?: IntFieldUpdateOperationsInput | number
    xata_createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    xata_updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdByName?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    nivelOleo?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoFreio?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoDirecao?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoArrefecimento?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgastePneu?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    calibragemPneus?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasDianteiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    lampadasTraseiras?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    fluidoLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    desgasteBorrachaLimpador?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    correaAcessorios?: EnumEstadoCheckFieldUpdateOperationsInput | $Enums.EstadoCheck
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
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