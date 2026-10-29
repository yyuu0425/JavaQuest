"use strict";
/* ===== 勇者 ===== */

let player = {
  name: "勇者",
  HP: 100,
  MP: 20,
  attack: 10,
  intelligence: 10,
};

let akaheru = {
  name: "akaheru",
  HP: 100,
  attack: 11,
};

/* あかへる 戦闘プログラム */

/* ===== 攻撃 =====  (MP消費なし 0～15ダメージ)*/
document.querySelector(".attack").onclick = function () {
  let akaheruAttack = Math.floor(Math.random() * akaheru.attack);
  player.HP -= akaheruAttack;

  document.querySelector(".player-hp").textContent = player.HP;

  console.log("プレイヤーHP", player.HP);

  if (akaheruAttack === 0) {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details enemy-attack">あかへるの攻撃<br><span class="miss">勇者はひらりとかわす</span></p>`,
      );
  } else {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details enemy-attack">あかへるの攻撃<br>勇者に${akaheruAttack}のダメージ</p>`,
      );
  }

  let playerAttack = Math.floor(Math.random() * player.attack);
  if (playerAttack === 0) {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details">勇者の攻撃<br><span class="miss">あかへるはひらりとかわす</span></p>`,
      );
  } else if (Math.random() < 0.1) {
    akaheru.HP = akaheru.HP - 15;
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details"><span class="hit">勇者の会心の一撃<br>あかへるに15のダメージ</span></p>`,
      );
  } else {
    akaheru.HP -= playerAttack;
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details">勇者の攻撃<br>あかへるに${playerAttack}のダメージ</p>`,
      );
  }

  console.log("あかへるHP", akaheru.HP);

  /* class="akaheru"を追加*/
  document.querySelector(".akaheru-image").innerHTML =
    '<img src="images/youkai_akaheru.png" class="akaheru" alt="敵" />';

  /* 勝敗 clear or continue */
  if (player.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/loss.png" alt="負け" class="loss">';
    document.querySelector(".action-box").innerHTML =
      '<button class="continue"><a href="index.html">もう一度</a></button>';
  } else if (akaheru.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/win.png" alt="勝ち" class="win">';
    document.querySelector(".action-box").innerHTML =
      '<button class="clear"><a href="battle-kappa.html">次に進む</a></button>';
  }
};

/* ===== 回復魔法 ===== (MP 3消費 0～12回復 その後、敵が攻撃) */
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

  let akaheruAttack = Math.floor(Math.random() * akaheru.attack);
  player.HP -= akaheruAttack;

  document.querySelector(".player-hp").textContent = player.HP;

  console.log("プレイヤーHP battile", player.HP);

  document.querySelector(".akaheru-image").innerHTML =
    '<img src="images/youkai_akaheru.png" class="akaheru" alt="敵" />';

  if (akaheruAttack === 0) {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details enemy-attack">あかへるの攻撃<br><span class="miss">勇者はひらりとかわす</span></p>`,
      );
  } else {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details enemy-attack">あかへるの攻撃<br>勇者に${akaheruAttack}のダメージ</p>`,
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
        `<p class="battle-details">勇者は回復魔法を唱えた<br>勇者は${playerHeal}回復した</p>`,
      );
  }

  /* 勝敗 clear or continue */
  if (player.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/loss.png" alt="負け" class="loss">';
    document.querySelector(".action-box").innerHTML =
      '<button class="continue"><a href="index.html">もう一度</a></button>';
  } else if (akaheru.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/win.png" alt="勝ち" class="win">';
    document.querySelector(".action-box").innerHTML =
      '<button class="clear"><a href="battle-kappa.html">次に進む</a></button>';
  }
};

/* ===== 魔法攻撃 ===== (MP 5消費 0～14ダメージ その後、敵が攻撃) */
document.querySelector(".spell").onclick = function () {
  if (player.MP < 5) {
    return;
  }

  player.MP -= 5;

  document.querySelector(".player-mp").textContent = player.MP;

  let playerAttack = Math.floor(Math.random() * player.intelligence * 1.5);
  akaheru.HP -= playerAttack;

  console.log("あかへるHP", akaheru.HP);

  let akaheruAttack = Math.floor(Math.random() * akaheru.attack);
  player.HP -= akaheruAttack;
  document.querySelector(".player-hp").textContent = player.HP;

  console.log("プレイヤーHP", player.HP);

  if (akaheruAttack === 0) {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details enemy-attack">あかへるの攻撃<br><span class="miss">勇者はひらりとかわす</span></p>`,
      );
  } else {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details enemy-attack">あかへるの攻撃<br>勇者に${akaheruAttack}のダメージ</p>`,
      );
  }

  if (playerAttack === 0) {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details">勇者は攻撃魔法を唱えた<br><span class="miss">あかへるはひらりとかわす</span></p>`,
      );
  } else {
    document
      .querySelector(".battle-scene")
      .insertAdjacentHTML(
        "afterbegin",
        `<p class="battle-details">勇者は攻撃魔法を唱えた<br>あかへるに${playerAttack}のダメージ</p>`,
      );
  }

  document.querySelector(".akaheru-image").innerHTML =
    '<img src="images/youkai_akaheru.png" class="akaheru" alt="敵" />';

  /* 勝敗 clear or continue */
  if (player.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/loss.png" alt="負け" class="loss">';
    document.querySelector(".action-box").innerHTML =
      '<button class="continue"><a href="index.html">もう一度</a></button>';
  } else if (akaheru.HP <= 0) {
    document.querySelector(".enemy").innerHTML =
      '<img src="images/win.png" alt="勝ち" class="win">';
    document.querySelector(".action-box").innerHTML =
      '<button class="clear"><a href="battle-kappa.html">次に進む</a></button>';
  }
};
