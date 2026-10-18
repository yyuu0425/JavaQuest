"use strict";
let player = {
  name: "勇者",
  HP: 100,
  attack: 10,
};

console.log(player);

let akaheru = {
  name: "akaheru",
  HP: 80,
  attack: 10,
};

let kappa = {
  name: "kappa",
  HP: 100,
  attack: 8,
}

/* あかへる戦闘プログラム */
document.querySelector(".akaheru-attack").onclick = function () {
  let playerAttack = Math.floor(Math.random() * player.attack) + 1;
  akaheru.HP -= playerAttack;

  console.log("あかへるHP", akaheru.HP);

  let akaheruAttack = Math.floor(Math.random() * akaheru.attack) + 1;
  player.HP -= akaheruAttack;
  document.querySelector(".player-hp").textContent = player.HP;

  console.log("プレイヤーHP", player.HP);

  document.querySelector(".battle-scene").insertAdjacentHTML("afterbegin", `<p class="battle-details">勇者の攻撃、あかへるに${playerAttack}のダメージ</p>`);
  document.querySelector(".battle-scene").insertAdjacentHTML("afterbegin", `<p class="battle-details">あかへるの攻撃、勇者に${akaheruAttack}のダメージ</p>`);

  if (player.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/lose_boy.png" alt="負け" class="loss">';
    document.querySelector(".attack").innerHTML =
      '<a href="index.html">もう一度</a>';
  } else if (akaheru.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/win_boy.png" alt="勝ち" class="win">';
    document.querySelector(".attack").innerHTML =
      '<a href="battle-kappa.html">次に進む</a>';
  }
};

/* 河童戦闘プログラム */
document.querySelector(".kappa-attack").onclick = function () {
  let playerAttack = Math.floor(Math.random() * player.attack) + 1;
  kappa.HP -= playerAttack;

  let kappaAttack = Math.floor(Math.random() * kappa.attack) + 1;
  player.HP -= kappaAttack;
  document.querySelector(".player-hp").textContent = player.HP;

  document.querySelector(".battle-scene").insertAdjacentHTML("afterbegin", `<p class="battle-details">勇者の攻撃、河童に${playerAttack}のダメージ</p>`);
  document.querySelector(".battle-scene").insertAdjacentHTML("afterbegin", `<p class="battle-details">河童の攻撃、勇者に${kappaAttack}のダメージ</p>`);

  if (player.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/lose_boy.png" alt="負け" class="loss">';
    document.querySelector(".attack").innerHTML =
      '<a href="index.html">もう一度</a>';
  } else if (kappa.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/win_boy.png" alt="勝ち" class="win">';
    document.querySelector(".attack").innerHTML =
      '<a href="battle-kappa.html">次に進む</a>';
  }
};
