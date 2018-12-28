export interface IFilterComparator<T> {
    (value: T): boolean;
}
