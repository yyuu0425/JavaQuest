"use strict";
let player = {
  name: "勇者",
  HP: 100,
  MP: 20,
  attack: 10,
  intelligence: 10,
};

let tengu = {
  name: "tengu",
  HP: 110,
  attack: 12,
};

/* 天狗 戦闘プログラム */

/* ===== 攻撃 ===== */
document.querySelector(".attack").onclick = function () {
  let tenguAttack = Math.floor(Math.random() * tengu.attack);
  player.HP -= tenguAttack;
  document.querySelector(".player-hp").textContent = player.HP;

  console.log("プレイヤーHP", player.HP);

  if (tenguAttack === 0) {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details enemy-attack">天狗の攻撃<br><span class="miss">勇者はひらりとかわす</span></p>`,
      );
  } else {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details enemy-attack">天狗の攻撃<br>勇者に${tenguAttack}のダメージ</p>`,
      );
  }

  let playerAttack = Math.floor(Math.random() * player.attack);

  if (playerAttack === 0) {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details">勇者の攻撃<br><span class="miss">天狗はひらりとかわす</span></p>`,
      );
  } else if (Math.random() < 0.1) {
    tengu.HP = tengu.HP - 15;
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details"><span class="hit">勇者の会心の一撃<br>天狗に15のダメージ</span></p>`,
      );
  } else {
    tengu.HP -= playerAttack;
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details">勇者の攻撃<br>天狗に${playerAttack}のダメージ</p>`,
      );
  }

  console.log("天狗HP", tengu.HP);

  document.querySelector(".tengu-image").innerHTML =
    '<img src="images/youkai_tengu.png" class="tengu" alt="敵" />';

  /* 勝敗 clear or continue */
  if (player.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/loss.png" alt="負け" class="loss">';
    document.querySelector(".action-box").innerHTML =
      '<button class="continue"><a href="index.html">もう一度</a></button>';
  } else if (tengu.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/win.png" alt="勝ち" class="win">';
    document.querySelector(".action-box").innerHTML =
      '<button class="clear"><a href="battle-nurarihyon.html">次に進む</a></button>';
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

  let tenguAttack = Math.floor(Math.random() * tengu.attack);
  player.HP -= tenguAttack;

  document.querySelector(".player-hp").textContent = player.HP;

  console.log("プレイヤーHP battile", player.HP);

  document.querySelector(".tengu-image").innerHTML =
    '<img src="images/youkai_tengu.png" class="tengu" alt="敵" />';

  if (tenguAttack === 0) {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details enemy-attack">天狗の攻撃<br><span class="miss">勇者はひらりとかわす</span></p>`,
      );
  } else {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details enemy-attack">天狗の攻撃<br>勇者に${tenguAttack}のダメージ</p>`,
      );
  }

  if (playerHeal === 0) {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details">勇者の回復魔法を唱えた<br><span class="miss">しかし、何も起こらなかった</span></p>`,
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
  } else if (tengu.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/win.png" alt="勝ち" class="win">';
    document.querySelector(".action-box").innerHTML =
      '<button class="clear"><a href="battle-nurarihyon.html">次に進む</a></button>';
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
  tengu.HP -= playerAttack;

  console.log("天狗HP", tengu.HP);

  let tenguAttack = Math.floor(Math.random() * tengu.attack);
  player.HP -= tenguAttack;
  document.querySelector(".player-hp").textContent = player.HP;

  console.log("プレイヤーHP", player.HP);

  if (tenguAttack === 0) {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details enemy-attack">天狗の攻撃<br><span class="miss">勇者はひらりとかわす</span></p>`,
      );
  } else {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details enemy-attack">天狗の攻撃<br>勇者に${tenguAttack}のダメージ</p>`,
      );
  }

  if (playerAttack === 0) {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details">勇者は攻撃魔法を唱えた<br><span class="miss">天狗はひらりとかわす</span></p>`,
      );
  } else {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details">勇者は攻撃魔法を唱えた<br>天狗に${playerAttack}のダメージ</p>`,
      );
  }

  document.querySelector(".tengu-image").innerHTML =
    '<img src="images/youkai_tengu.png" class="tengu" alt="敵" />';

  /* 勝敗 clear or continue */
  if (player.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/loss.png" alt="負け" class="loss">';
    document.querySelector(".action-box").innerHTML =
      '<button class="continue"><a href="index.html">もう一度</a></button>';
  } else if (tengu.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/win.png" alt="勝ち" class="win">';
    document.querySelector(".action-box").innerHTML =
      '<button class="clear"><a href="battle-nurarihyon.html">次に進む</a></button>';
  }
};
