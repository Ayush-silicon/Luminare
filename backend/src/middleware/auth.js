// Minimal placeholder auth: production should verify Cognito JWTs with JOSE.
// For now, accept optional header 'x-user-id' to simulate identity in dev.
export function requireAuth(req, res, next) {
  const uid = req.header("x-user-id") || "demo-user"
  req.user = { id: uid }
  next()
}
