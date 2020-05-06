export type Id = string;

export interface TreeNode {
    id: Id;
    parentId: Id | null;
}
