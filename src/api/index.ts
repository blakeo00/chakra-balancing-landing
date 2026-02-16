import { Hono } from 'hono';
import { cors } from "hono/cors";
import { drizzle } from "drizzle-orm/d1";
import { eq } from "drizzle-orm";
import { subscribers } from "./database/schema";

type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>()
  .basePath('/api');

app.use(cors({
  origin: "*"
}));

app.get('/ping', (c) => c.json({ message: `Pong! ${Date.now()}` }));

// ── Email Subscription Endpoint ──────────────────────────────────────────────
app.post('/subscribe', async (c) => {
  try {
    const body = await c.req.json<{ email?: string; name?: string; source?: string }>();

    const email = body.email?.trim().toLowerCase();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return c.json({ error: "Please provide a valid email address." }, 400);
    }

    const db = drizzle(c.env.DB);

    // Check for duplicate
    const existing = await db
      .select()
      .from(subscribers)
      .where(eq(subscribers.email, email))
      .get();

    if (existing) {
      return c.json({ message: "You're already on the list! We'll be in touch." }, 200);
    }

    await db.insert(subscribers).values({
      email,
      name: body.name?.trim() || null,
      source: body.source || "landing-page",
    });

    return c.json({ message: "Welcome aboard! Check your inbox for a special surprise." }, 201);
  } catch (err) {
    console.error("Subscribe error:", err);
    return c.json({ error: "Something went wrong. Please try again later." }, 500);
  }
});

export default app;