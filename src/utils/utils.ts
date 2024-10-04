export const call = (value: any, ...args: any[]) => {
    return typeof value === "function" ? value(...args) : value;
}

export const random_variant = (variants: string[]) => {
    let index = Math.floor(Math.random() * variants.length);

    return variants[index];
}

export const by_field = <T, K extends keyof T, V extends string | number | symbol>(items: Record<any, T>, field: K): Record<V, T[]> => {
    return Object.values(items).reduce((accumulator, item) => {
        const key = item[field] as T[K] & V;

        accumulator[key] = accumulator[key] ?? [];
        accumulator[key].push(item);

        return accumulator;
    }, {} as Record<V, T[]>);
};

export const filer_by_field = <T, K extends keyof T>(items: Record<string, T>, field: K, value: T[K]): Record<string, T> => {
    return Object.fromEntries(
        Object.entries(items).filter(([_, item]) => item[field] === value)
    );
};