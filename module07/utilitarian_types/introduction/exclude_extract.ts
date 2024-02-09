// Exclude<unionType, excludedMembers>
// Extract<Type, union>

type Ex1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;
type Ex2 = Exclude<boolean | string | number, string | number>;

type Ex3 = Extract<'a' | 'b' | 'c', 'a' | 'b'>;
type Ex4 = Extract<number | number[], number>;
