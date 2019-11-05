export interface AllocatorInterface {
    allocate(): Array<string>;
    execute(str: string, n: number): Allocator;
}
export declare class Allocator implements AllocatorInterface {
    insStr: string;
    droneCount: number;
    allocatedIns: Array<any>;
    constructor(insStr: string, droneCount: number);
    allocate(): any[];
    execute(str: string, n: number): Allocator;
}
