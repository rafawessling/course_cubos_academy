const pets = []; 

function adicionarPet(nome, especie, idade) { // CREATE
  const pet = { nome, especie, idade };
  pets.push(pet);
  console.log("Novo pet adicionado:");
  console.log(pet);
}

function exibirPets() { // READ
  console.log("Lista de pets:");
  pets.forEach((pet) => {
    console.log("Nome:", pet.nome);
    console.log("Espécie:", pet.especie);
    console.log("Idade:", pet.idade);
    console.log("--------------------");
  });
}

// function exibirPets() { // READ com for of
//   console.log("Lista de pets for of:");
//   for (const pet of pets) {
//     console.log("Nome:", pet.nome);
//     console.log("Espécie:", pet.especie);
//     console.log("Idade:", pet.idade);
//     console.log("--------------------");
//   }
// }

function atualizarPet(nome, novaEspecie, novaIdade) { // UPDATE
  let petAtualizado = false;
  pets.forEach((pet) => {
    if (pet.nome === nome) {
      pet.especie = novaEspecie;
      pet.idade = novaIdade;
      petAtualizado = true;
      console.log(`Informações do pet ${nome} atualizadas com sucesso!`);
    }
  });

  if (!petAtualizado) {
    console.log(`Pet ${nome} não encontrado.`);
  }
}

function removerPet(nome) { // DELETE
  let petRemovido = false;
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].nome === nome) {
      pets.splice(i, 1);
      petRemovido = true;
      console.log(`Pet ${nome} removido com sucesso!`);
      break;
    }
  }

  if (!petRemovido) {
    console.log(`Pet ${nome} não encontrado.`);
  }
}

// Adicionar novos pets
adicionarPet("Rex", "Cachorro", 3);
adicionarPet("Mia", "Gato", 5);

// Exibir todos os pets
exibirPets();

// Atualizar informações de um pet
atualizarPet("Rex", "Cachorro", 4);

// Exibir todos os pets novamente
exibirPets();

// Remover um pet
removerPet("Mia");

// Exibir todos os pets após a remoção
exibirPets();
