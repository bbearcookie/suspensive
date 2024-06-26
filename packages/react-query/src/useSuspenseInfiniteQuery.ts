import {
  type InfiniteData,
  type QueryFunction,
  type QueryKey,
  type UseInfiniteQueryOptions,
  type UseInfiniteQueryResult,
  parseQueryArgs,
  useInfiniteQuery,
} from '@tanstack/react-query'
import type { OmitKeyof } from './utility-types'

export type BaseUseSuspenseInfiniteQueryResult<TData = unknown> = OmitKeyof<
  UseInfiniteQueryResult<TData>,
  'error' | 'isLoadingError' | 'isError' | 'isRefetchError' | 'isFetching'
> & { status: 'success' | 'loading' }

export interface UseSuspenseInfiniteQueryResultOnSuccess<TData> extends BaseUseSuspenseInfiniteQueryResult<TData> {
  data: InfiniteData<TData>
  isLoading: false
  isSuccess: true
  status: 'success'
}
export interface UseSuspenseInfiniteQueryResultOnLoading extends BaseUseSuspenseInfiniteQueryResult {
  data: undefined
  isLoading: true
  isSuccess: false
  status: 'loading'
}

export type UseSuspenseInfiniteQueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = OmitKeyof<UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>, 'suspense'>

/**
 * This hook wrapping useInfiniteQuery of @tanstack/react-query with default suspense option. with this hook, you don't have to make unnecessary type narrowing
 * @see {@link https://suspensive.org/docs/react-query/useSuspenseInfiniteQuery}
 */
// arg1: queryKey, arg2: queryFn, arg3: options
export function useSuspenseInfiniteQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options?: OmitKeyof<
    UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'enabled' | 'queryKey' | 'queryFn'
  >
): UseSuspenseInfiniteQueryResultOnSuccess<TData>
export function useSuspenseInfiniteQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options: OmitKeyof<
    UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'enabled' | 'queryKey' | 'queryFn'
  > & {
    enabled?: true
  }
): UseSuspenseInfiniteQueryResultOnSuccess<TData>
export function useSuspenseInfiniteQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options: OmitKeyof<
    UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'enabled' | 'queryKey' | 'queryFn'
  > & {
    enabled: false
  }
): UseSuspenseInfiniteQueryResultOnLoading
export function useSuspenseInfiniteQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options: OmitKeyof<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>
): UseSuspenseInfiniteQueryResultOnSuccess<TData> | UseSuspenseInfiniteQueryResultOnLoading

// arg1: queryKey, arg2: options
export function useSuspenseInfiniteQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryKey: TQueryKey,
  options?: OmitKeyof<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'enabled' | 'queryKey'>
): UseSuspenseInfiniteQueryResultOnSuccess<TData>
export function useSuspenseInfiniteQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryKey: TQueryKey,
  options: OmitKeyof<
    UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'enabled' | 'queryKey'
  > & {
    enabled?: true
  }
): UseSuspenseInfiniteQueryResultOnSuccess<TData>
export function useSuspenseInfiniteQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryKey: TQueryKey,
  options: OmitKeyof<
    UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'enabled' | 'queryKey'
  > & {
    enabled: false
  }
): UseSuspenseInfiniteQueryResultOnLoading
export function useSuspenseInfiniteQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryKey: TQueryKey,
  options: OmitKeyof<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey'>
): UseSuspenseInfiniteQueryResultOnSuccess<TData> | UseSuspenseInfiniteQueryResultOnLoading

// arg1: options
export function useSuspenseInfiniteQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: OmitKeyof<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'enabled'> & {
    enabled?: true
  }
): UseSuspenseInfiniteQueryResultOnSuccess<TData>
export function useSuspenseInfiniteQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: OmitKeyof<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'enabled'> & {
    enabled: false
  }
): UseSuspenseInfiniteQueryResultOnLoading
export function useSuspenseInfiniteQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>
): UseSuspenseInfiniteQueryResultOnSuccess<TData> | UseSuspenseInfiniteQueryResultOnLoading

// base useSuspenseInfiniteQuery
export function useSuspenseInfiniteQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  arg1: TQueryKey | UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  arg2?:
    | QueryFunction<TQueryFnData, TQueryKey>
    | OmitKeyof<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey'>,
  arg3?: OmitKeyof<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>
) {
  return useInfiniteQuery({
    ...parseQueryArgs(arg1, arg2, arg3),
    suspense: true,
  }) as BaseUseSuspenseInfiniteQueryResult<TData>
}
