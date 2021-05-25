export type Resolver = (
  uri: string
) => { width: number; srcSet: string; src: string }[];
