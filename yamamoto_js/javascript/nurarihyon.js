"use strict";
let player = {
  name: "勇者",
  HP: 100,
  MP: 20,
  attack: 10,
  intelligence: 10,
};

let nurarihyon = {
  name: "nurarihyon",
  HP: 120,
  attack: 11,
};

/* ぬらりひょん 戦闘プログラム */

/* ===== 攻撃 ===== */
document.querySelector(".attack").onclick = function () {
  let nurarihyonAttack = Math.floor(Math.random() * nurarihyon.attack);
  player.HP -= nurarihyonAttack;

  if (nurarihyonAttack === 0) {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details enemy-attack">ぬらりひょんの攻撃<br><span class="miss">勇者はひらりとかわす</span></p>`,
      );
  } else {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details enemy-attack">ぬらりひょんの攻撃<br>勇者に${nurarihyonAttack}のダメージ</p>`,
      );
  }

  let playerAttack = Math.floor(Math.random() * player.attack);

  if (playerAttack === 0) {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details">勇者の攻撃<br><span class="miss">ぬらりひょんはひらりとかわす</span></p>`,
      );
  } else if (Math.random() < 0.1) {
    nurarihyon.HP = nurarihyon.HP - 15;
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details"><span class="hit">勇者の会心の一撃<br>ぬらりひょんに15のダメージ</span></p>`,
      );
  } else {
    nurarihyon.HP -= playerAttack;
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details">勇者の攻撃<br>ぬらりひょんに${playerAttack}のダメージ</p>`,
      );
  }

  console.log("ぬらりひょんHP", nurarihyon.HP);

  document.querySelector(".player-hp").textContent = player.HP;

  console.log("プレイヤーHP", player.HP);

  document.querySelector(".nurarihyon-image").innerHTML =
    '<img src="images/youkai_nurarihyon.png" class="nurarihyon" alt="敵" />';

  /* 勝敗 clear or continue */
  if (player.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/loss.png" alt="負け" class="loss">';
    document.querySelector(".action-box").innerHTML =
      '<button class="continue"><a href="index.html">もう一度</a></button>';
  } else if (nurarihyon.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/win.png" alt="勝ち" class="win">';
    document.querySelector(".action-box").innerHTML =
      '<button class="clear"><a href="ending.html">END</a></button>';
  }
};

/* ===== 回復魔法 ===== */
document.querySelector(".heal").onclick = function () {
  if (player.MP < 3) {
    return;
  }

  player.MP -= 3;

  document.querySelector(".player-mp").textContent = player.MP;

  let playerHeal = Math.floor(Math.random() * player.intelligence * 1.25);
  player.HP += playerHeal;

  if (player.HP > 100) {
    player.HP = 100;
  }

  console.log("プレイヤーHP heal", player.HP);

  let nurarihyonAttack = Math.floor(Math.random() * nurarihyon.attack);
  player.HP -= nurarihyonAttack;

  document.querySelector(".player-hp").textContent = player.HP;

  console.log("プレイヤーHP battile", player.HP);

  document.querySelector(".nurarihyon-image").innerHTML =
    '<img src="images/youkai_nurarihyon.png" class="nurarihyon" alt="敵" />';

  if (nurarihyonAttack === 0) {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details enemy-attack">ぬらりひょんの攻撃<br><span class="miss">勇者はひらりとかわす</span></p>`,
      );
  } else {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details enemy-attack">ぬらりひょんの攻撃<br>勇者に${nurarihyonAttack}のダメージ</p>`,
      );
  }

  if (playerHeal === 0) {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details">勇者は回復魔法を唱えた<br><span class="miss">しかし、何も起こらなかった</span></p>`,
      );
  } else {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details">勇者は回復魔法を唱えた<br>${playerHeal}回復した</p>`,
      );
  }

  /* 勝敗 clear or continue */
  if (player.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/loss.png" alt="負け" class="loss">';
    document.querySelector(".action-box").innerHTML =
      '<button class="continue"><a href="index.html">もう一度</a></button>';
  } else if (nurarihyon.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/win.png" alt="勝ち" class="win">';
    document.querySelector(".action-box").innerHTML =
      '<button class="clear"><a href="ending.html">END</a></button>';
  }
};

/* ===== 魔法攻撃 ===== (0 ~ intelligence - 1 攻撃)*/

document.querySelector(".spell").onclick = function () {
  if (player.MP < 5) {
    return;
  }

  player.MP -= 5;

  document.querySelector(".player-mp").textContent = player.MP;

  let playerAttack = Math.floor(Math.random() * player.intelligence * 1.5);
  nurarihyon.HP -= playerAttack;

  console.log("ぬらりひょんHP", nurarihyon.HP);

  let nurarihyonAttack = Math.floor(Math.random() * nurarihyon.attack);
  player.HP -= nurarihyonAttack;
  document.querySelector(".player-hp").textContent = player.HP;

  console.log("プレイヤーHP", player.HP);

  if (nurarihyonAttack === 0) {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details enemy-attack">ぬらりひょんの攻撃<br><span class="miss">勇者はひらりとかわす</span></p>`,
      );
  } else {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details enemy-attack">ぬらりひょんの攻撃<br>勇者に${nurarihyonAttack}のダメージ</p>`,
      );
  }

  if (playerAttack === 0) {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details">勇者は攻撃魔法を唱えた<br><span class="miss">ぬらりひょんはひらりとかわす</span></p>`,
      );
  } else {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details">勇者は攻撃魔法を唱えた<br>ぬらりひょんに${playerAttack}のダメージ</p>`,
      );
  }

  document.querySelector(".nurarihyon-image").innerHTML =
    '<img src="images/youkai_nurarihyon.png" class="nurarihyon" alt="敵" />';

  /* 勝敗 clear or continue */
  if (player.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/loss.png" alt="負け" class="loss">';
    document.querySelector(".action-box").innerHTML =
      '<button class="continue"><a href="index.html">もう一度</a></button>';
  } else if (nurarihyon.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/win.png" alt="勝ち" class="win">';
    document.querySelector(".action-box").innerHTML =
      '<button class="clear"><a href="ending.html">END</a></button>';
  }
};
