//Página principal
app.get("/", (req, res) => {
  res.send("Página principal");
});

//usuários
app.get("/users", (req, res) => {
  res.send("Lista de usuários");
});

app.get("/users/:id", (req, res) => {
  res.send(`Detalhes do usuário com ID ${req.params.id}`);
});

//produtos
app.get("/products", (req, res) => {
  res.send("Lista de produtos");
});

app.get("/products/:id", (req, res) => {
  res.send(`Detalhes do produto com ID ${req.params.id}`);
});

app.post("/products", (req, res) => {
  res.send("Produto criado com sucesso!");
});
