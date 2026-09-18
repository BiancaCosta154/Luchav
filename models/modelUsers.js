class User {
  constructor({
    id = null,
    name,
    email,
    password,
    role = "user",
    active = true,
  }) {
    if (!name || typeof name !== "string") {
      throw new Error("O nome do usuário é obrigatório.");
    }

    if (!email || typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
      throw new Error("Informe um e-mail válido.");
    }

    if (!password || typeof password !== "string" || password.length < 6) {
      throw new Error("A senha deve ter pelo menos 6 caracteres.");
    }

    if (typeof role !== "string" || !role.trim()) {
      throw new Error("O perfil do usuário é obrigatório.");
    }

    this.id = id;
    this.name = name.trim();
    this.email = email.trim().toLowerCase();
    this.password = password;
    this.role = role.trim();
    this.active = Boolean(active);
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = User;
