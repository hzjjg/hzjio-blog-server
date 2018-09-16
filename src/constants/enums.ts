/** 文章状态 */
export enum ArticleStatus {
    /** 不可见 */
    DISABLED = 0,

    /** 已发布 */
    PUBLISHED = 1,

    /** 已删除 */
    REMOVED = 2,
}

/** 用户状态 */
export enum UserStatus {
    /** 不可用 */
    DISABLED = 0,

    /** 正常 */
    AVAILABLE = 1,

    /** 已删除 */
    REMOVED = 2,
}