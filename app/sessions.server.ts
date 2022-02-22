// importing createArcTableSessionStorage doesn't work, even though the docs say it should
import { createCookie /* createArcTableSessionStorage */ } from "remix";
import { createArcTableSessionStorage } from "@remix-run/architect";

const sessionCookie = createCookie("__session", {
  secrets: ["XXX--replace me"],
  maxAge: 3600,
  sameSite: true,
});

const { getSession, commitSession, destroySession } =
  createArcTableSessionStorage({
    table: "session",
    idx: "_idx",
    ttl: "_ttl",
    cookie: sessionCookie,
  });

export { getSession, commitSession, destroySession };
