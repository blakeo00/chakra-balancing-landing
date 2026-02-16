import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

/**
 * Subscribers table for email lead capture.
 */
export const subscribers = sqliteTable("subscribers", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    email: text("email").notNull().unique(),
    name: text("name"),
    source: text("source").default("landing-page"),
    createdAt: text("created_at")
        .notNull()
        .$defaultFn(() => new Date().toISOString()),
});
