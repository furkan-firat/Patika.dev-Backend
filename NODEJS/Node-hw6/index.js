const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

// Ana sayfa (http://localhost:3000/)
router.get("/", async (ctx) => {
  ctx.body = "<h2>Welcome to Index Page</h2>";
});

// Hakkında sayfası (http://localhost:3000/users)
router.get("/about", async (ctx) => {
  ctx.body = "<h2>Welcome to About Page</h2>";
});

// İletişim sayfası (http://localhost:3000/users)
router.get("/contact", async (ctx) => {
  ctx.body = "<h2>Welcome to Contact Page</h2>";
});

// Middleware'ler ekleme (örneğin, logger middleware)
app.use(async (ctx, next) => {
  console.log(`${ctx.method} ${ctx.url}`);
  await next();
});

// Routing middleware'ini uygulama ile bağlama
app.use(router.routes());
app.use(router.allowedMethods());

// Uygulamayı belirli bir port üzerinden dinlemeye başlama
const port = 3000;
app.listen(port, () => {
  console.log(`Uygulama ${port} portunda çalışıyor`);
});
