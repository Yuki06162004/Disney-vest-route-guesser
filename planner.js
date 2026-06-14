const parks = {
  land: {
    name: "東京ディズニーランド",
    entrances: [{ id: "entrance", name: "エントランス", x: 48, y: 89 }],
    attractions: [
      { id: "beauty", name: "美女と野獣 魔法のものがたり", area: "ファンタジーランド", x: 66, y: 36, wait: 75, duration: 8, popularity: 10 },
      { id: "pooh", name: "プーさんのハニーハント", area: "ファンタジーランド", x: 54, y: 43, wait: 45, duration: 5, popularity: 8 },
      { id: "monsters", name: "モンスターズ・インク", area: "トゥモローランド", x: 70, y: 69, wait: 35, duration: 4, popularity: 7 },
      { id: "splash", name: "スプラッシュ・マウンテン", area: "クリッターカントリー", x: 24, y: 39, wait: 55, duration: 10, popularity: 9 },
      { id: "bigthunder", name: "ビッグサンダー・マウンテン", area: "ウエスタンランド", x: 25, y: 55, wait: 40, duration: 4, popularity: 8 },
      { id: "hunters", name: "ジャングルクルーズ", area: "アドベンチャーランド", x: 32, y: 72, wait: 25, duration: 10, popularity: 6 },
      { id: "star", name: "スター・ツアーズ", area: "トゥモローランド", x: 80, y: 61, wait: 20, duration: 5, popularity: 6 },
      { id: "haunted", name: "ホーンテッドマンション", area: "ファンタジーランド", x: 42, y: 31, wait: 30, duration: 15, popularity: 7 },
    ],
  },
  sea: {
    name: "東京ディズニーシー",
    entrances: [{ id: "entrance", name: "エントランス", x: 50, y: 90 }],
    attractions: [
      { id: "soaring", name: "ソアリン", area: "メディテレーニアンハーバー", x: 42, y: 63, wait: 85, duration: 5, popularity: 10 },
      { id: "toytory", name: "トイ・ストーリー・マニア！", area: "アメリカンウォーターフロント", x: 31, y: 41, wait: 70, duration: 7, popularity: 10 },
      { id: "tower", name: "タワー・オブ・テラー", area: "アメリカンウォーターフロント", x: 24, y: 53, wait: 55, duration: 3, popularity: 9 },
      { id: "journey", name: "センター・オブ・ジ・アース", area: "ミステリアスアイランド", x: 56, y: 46, wait: 50, duration: 3, popularity: 9 },
      { id: "indy", name: "インディ・ジョーンズ", area: "ロストリバーデルタ", x: 75, y: 33, wait: 45, duration: 3, popularity: 8 },
      { id: "raging", name: "レイジングスピリッツ", area: "ロストリバーデルタ", x: 83, y: 42, wait: 35, duration: 2, popularity: 7 },
      { id: "mermaid", name: "マーメイドラグーンシアター", area: "マーメイドラグーン", x: 62, y: 67, wait: 25, duration: 14, popularity: 6 },
      { id: "nemo", name: "ニモ＆フレンズ・シーライダー", area: "ポートディスカバリー", x: 62, y: 25, wait: 30, duration: 5, popularity: 7 },
    ],
  },
};

const parkCatalog = {
  land: {
    name: "東京ディズニーランド",
    entrances: [{ id: "entrance", name: "エントランス", x: 48, y: 90 }],
    attractions: [
      { id: "omnibus", name: "オムニバス", area: "ワールドバザール", x: 49, y: 78, wait: 10, duration: 6, popularity: 3 },
      { id: "penny-arcade", name: "ペニーアーケード", area: "ワールドバザール", x: 45, y: 82, wait: 5, duration: 10, popularity: 2 },
      { id: "pirates", name: "カリブの海賊", area: "アドベンチャーランド", x: 36, y: 76, wait: 15, duration: 15, popularity: 7 },
      { id: "jungle-cruise", name: "ジャングルクルーズ", area: "アドベンチャーランド", x: 31, y: 72, wait: 25, duration: 10, popularity: 6 },
      { id: "western-river", name: "ウエスタンリバー鉄道", area: "アドベンチャーランド", x: 34, y: 66, wait: 20, duration: 15, popularity: 5 },
      { id: "tiki-room", name: "魅惑のチキルーム", area: "アドベンチャーランド", x: 29, y: 78, wait: 10, duration: 10, popularity: 3 },
      { id: "swiss-treehouse", name: "スイスファミリー・ツリーハウス", area: "アドベンチャーランド", x: 39, y: 70, wait: 5, duration: 9, popularity: 2 },
      { id: "shooting-gallery", name: "ウエスタンランド・シューティングギャラリー", area: "ウエスタンランド", x: 27, y: 60, wait: 10, duration: 6, popularity: 3 },
      { id: "country-bear", name: "カントリーベア・シアター", area: "ウエスタンランド", x: 30, y: 53, wait: 10, duration: 15, popularity: 4 },
      { id: "mark-twain", name: "蒸気船マークトウェイン号", area: "ウエスタンランド", x: 21, y: 50, wait: 15, duration: 12, popularity: 4 },
      { id: "tom-sawyer", name: "トムソーヤ島いかだ", area: "ウエスタンランド", x: 18, y: 57, wait: 10, duration: 10, popularity: 3 },
      { id: "big-thunder", name: "ビッグサンダー・マウンテン", area: "ウエスタンランド", x: 25, y: 55, wait: 40, duration: 4, popularity: 8 },
      { id: "splash", name: "スプラッシュ・マウンテン", area: "クリッターカントリー", x: 23, y: 38, wait: 55, duration: 10, popularity: 9 },
      { id: "canoes", name: "ビーバーブラザーズのカヌー探険", area: "クリッターカントリー", x: 19, y: 43, wait: 15, duration: 10, popularity: 4 },
      { id: "alice-tea-party", name: "アリスのティーパーティー", area: "ファンタジーランド", x: 48, y: 39, wait: 15, duration: 2, popularity: 5 },
      { id: "small-world", name: "イッツ・ア・スモールワールド", area: "ファンタジーランド", x: 58, y: 33, wait: 20, duration: 10, popularity: 6 },
      { id: "castle-carrousel", name: "キャッスルカルーセル", area: "ファンタジーランド", x: 51, y: 46, wait: 15, duration: 2, popularity: 4 },
      { id: "snow-white", name: "白雪姫と七人のこびと", area: "ファンタジーランド", x: 44, y: 44, wait: 15, duration: 3, popularity: 4 },
      { id: "cinderella-hall", name: "シンデレラのフェアリーテイル・ホール", area: "ファンタジーランド", x: 48, y: 55, wait: 20, duration: 8, popularity: 5 },
      { id: "dumbo", name: "空飛ぶダンボ", area: "ファンタジーランド", x: 56, y: 40, wait: 25, duration: 2, popularity: 6 },
      { id: "peter-pan", name: "ピーターパン空の旅", area: "ファンタジーランド", x: 42, y: 38, wait: 35, duration: 3, popularity: 7 },
      { id: "pinocchio", name: "ピノキオの冒険旅行", area: "ファンタジーランド", x: 46, y: 35, wait: 15, duration: 3, popularity: 4 },
      { id: "pooh", name: "プーさんのハニーハント", area: "ファンタジーランド", x: 54, y: 43, wait: 45, duration: 5, popularity: 8 },
      { id: "haunted-mansion", name: "ホーンテッドマンション", area: "ファンタジーランド", x: 41, y: 31, wait: 30, duration: 15, popularity: 7 },
      { id: "philharmagic", name: "ミッキーのフィルハーマジック", area: "ファンタジーランド", x: 53, y: 49, wait: 15, duration: 11, popularity: 5 },
      { id: "beauty-beast", name: "美女と野獣 魔法のものがたり", area: "ファンタジーランド", x: 66, y: 36, wait: 75, duration: 8, popularity: 10 },
      { id: "gadget", name: "ガジェットのゴーコースター", area: "トゥーンタウン", x: 73, y: 35, wait: 25, duration: 1, popularity: 5 },
      { id: "goofy-paint", name: "グーフィーのペイント＆プレイハウス", area: "トゥーンタウン", x: 78, y: 43, wait: 20, duration: 2, popularity: 5 },
      { id: "chipdale-treehouse", name: "チップとデールのツリーハウス", area: "トゥーンタウン", x: 75, y: 30, wait: 5, duration: 6, popularity: 3 },
      { id: "donald-boat", name: "ドナルドのボート", area: "トゥーンタウン", x: 82, y: 38, wait: 5, duration: 6, popularity: 3 },
      { id: "minnie-house", name: "ミニーの家", area: "トゥーンタウン", x: 79, y: 32, wait: 10, duration: 6, popularity: 4 },
      { id: "roger-rabbit", name: "ロジャーラビットのカートゥーンスピン", area: "トゥーンタウン", x: 70, y: 42, wait: 25, duration: 4, popularity: 6 },
      { id: "star-tours", name: "スター・ツアーズ", area: "トゥモローランド", x: 80, y: 61, wait: 20, duration: 5, popularity: 6 },
      { id: "stitch-encounter", name: "スティッチ・エンカウンター", area: "トゥモローランド", x: 77, y: 70, wait: 20, duration: 12, popularity: 5 },
      { id: "monsters-inc", name: "モンスターズ・インク ライド＆ゴーシーク！", area: "トゥモローランド", x: 69, y: 69, wait: 35, duration: 4, popularity: 7 },
      { id: "baymax", name: "ベイマックスのハッピーライド", area: "トゥモローランド", x: 69, y: 56, wait: 50, duration: 2, popularity: 9 },
    ],
  },
  sea: {
    name: "東京ディズニーシー",
    entrances: [{ id: "entrance", name: "エントランス", x: 50, y: 91 }],
    attractions: [
      { id: "gondolas", name: "ヴェネツィアン・ゴンドラ", area: "メディテレーニアンハーバー", x: 42, y: 73, wait: 25, duration: 12, popularity: 5 },
      { id: "fortress", name: "フォートレス・エクスプロレーション", area: "メディテレーニアンハーバー", x: 49, y: 63, wait: 5, duration: 15, popularity: 3 },
      { id: "soaring", name: "ソアリン：ファンタスティック・フライト", area: "メディテレーニアンハーバー", x: 42, y: 62, wait: 85, duration: 5, popularity: 10 },
      { id: "steamer-med", name: "ディズニーシー・トランジットスチーマーライン", area: "メディテレーニアンハーバー", x: 55, y: 69, wait: 15, duration: 7, popularity: 4 },
      { id: "turtle-talk", name: "タートル・トーク", area: "アメリカンウォーターフロント", x: 27, y: 50, wait: 25, duration: 12, popularity: 6 },
      { id: "tower-terror", name: "タワー・オブ・テラー", area: "アメリカンウォーターフロント", x: 24, y: 54, wait: 55, duration: 3, popularity: 9 },
      { id: "toy-story", name: "トイ・ストーリー・マニア！", area: "アメリカンウォーターフロント", x: 31, y: 41, wait: 70, duration: 7, popularity: 10 },
      { id: "big-city-vehicles", name: "ビッグシティ・ヴィークル", area: "アメリカンウォーターフロント", x: 35, y: 55, wait: 10, duration: 10, popularity: 3 },
      { id: "electric-railway-aw", name: "ディズニーシー・エレクトリックレールウェイ", area: "アメリカンウォーターフロント", x: 39, y: 45, wait: 15, duration: 2, popularity: 4 },
      { id: "aquatopia", name: "アクアトピア", area: "ポートディスカバリー", x: 58, y: 27, wait: 30, duration: 3, popularity: 6 },
      { id: "electric-railway-pd", name: "ディズニーシー・エレクトリックレールウェイ", area: "ポートディスカバリー", x: 61, y: 23, wait: 15, duration: 2, popularity: 4 },
      { id: "nemo", name: "ニモ＆フレンズ・シーライダー", area: "ポートディスカバリー", x: 63, y: 28, wait: 30, duration: 5, popularity: 7 },
      { id: "indy", name: "インディ・ジョーンズ・アドベンチャー", area: "ロストリバーデルタ", x: 75, y: 33, wait: 45, duration: 3, popularity: 8 },
      { id: "raging", name: "レイジングスピリッツ", area: "ロストリバーデルタ", x: 82, y: 42, wait: 35, duration: 2, popularity: 7 },
      { id: "steamer-lost", name: "ディズニーシー・トランジットスチーマーライン", area: "ロストリバーデルタ", x: 72, y: 48, wait: 15, duration: 7, popularity: 4 },
      { id: "caravan-carousel", name: "キャラバンカルーセル", area: "アラビアンコースト", x: 72, y: 62, wait: 15, duration: 3, popularity: 4 },
      { id: "jasmine-carpets", name: "ジャスミンのフライングカーペット", area: "アラビアンコースト", x: 77, y: 67, wait: 20, duration: 2, popularity: 5 },
      { id: "sindbad", name: "シンドバッド・ストーリーブック・ヴォヤッジ", area: "アラビアンコースト", x: 82, y: 57, wait: 10, duration: 10, popularity: 5 },
      { id: "magic-lamp", name: "マジックランプシアター", area: "アラビアンコースト", x: 69, y: 69, wait: 20, duration: 23, popularity: 5 },
      { id: "flounder", name: "フランダーのフライングフィッシュコースター", area: "マーメイドラグーン", x: 62, y: 66, wait: 25, duration: 1, popularity: 5 },
      { id: "scuttle", name: "スカットルのスクーター", area: "マーメイドラグーン", x: 57, y: 70, wait: 15, duration: 2, popularity: 4 },
      { id: "jumpin-jellyfish", name: "ジャンピン・ジェリーフィッシュ", area: "マーメイドラグーン", x: 65, y: 72, wait: 15, duration: 2, popularity: 4 },
      { id: "blowfish", name: "ブローフィッシュ・バルーンレース", area: "マーメイドラグーン", x: 68, y: 66, wait: 15, duration: 2, popularity: 4 },
      { id: "whirlpool", name: "ワールプール", area: "マーメイドラグーン", x: 60, y: 74, wait: 15, duration: 2, popularity: 4 },
      { id: "mermaid-theater", name: "マーメイドラグーンシアター", area: "マーメイドラグーン", x: 62, y: 69, wait: 25, duration: 14, popularity: 6 },
      { id: "journey", name: "センター・オブ・ジ・アース", area: "ミステリアスアイランド", x: 55, y: 46, wait: 50, duration: 3, popularity: 9 },
      { id: "leagues", name: "海底2万マイル", area: "ミステリアスアイランド", x: 51, y: 50, wait: 25, duration: 5, popularity: 6 },
      { id: "frozen", name: "アナとエルサのフローズンジャーニー", area: "ファンタジースプリングス", x: 70, y: 16, wait: 90, duration: 6, popularity: 10 },
      { id: "rapunzel", name: "ラプンツェルのランタンフェスティバル", area: "ファンタジースプリングス", x: 77, y: 20, wait: 65, duration: 5, popularity: 9 },
      { id: "peter-pan-sea", name: "ピーターパンのネバーランドアドベンチャー", area: "ファンタジースプリングス", x: 83, y: 17, wait: 75, duration: 6, popularity: 9 },
      { id: "tinker-bell", name: "フェアリー・ティンカーベルのビジーバギー", area: "ファンタジースプリングス", x: 86, y: 24, wait: 45, duration: 2, popularity: 7 },
    ],
  },
};

let state = {
  park: "land",
  start: "entrance",
  priority: "balanced",
  timeBudget: 180,
  maxStops: 4,
  waits: {},
  route: [],
  roomId: "",
  updatedAt: Date.now(),
};

let db = null;
let cloudReady = false;
let unsubscribeRoom = null;
let channel = null;

const parkSelect = document.querySelector("#parkSelect");
const startSelect = document.querySelector("#startSelect");
const prioritySelect = document.querySelector("#prioritySelect");
const timeBudgetInput = document.querySelector("#timeBudgetInput");
const maxStopsInput = document.querySelector("#maxStopsInput");
const optimizeButton = document.querySelector("#optimizeButton");
const resetWaitsButton = document.querySelector("#resetWaitsButton");
const attractionList = document.querySelector("#attractionList");
const routeList = document.querySelector("#routeList");
const parkMap = document.querySelector("#parkMap");
const totalTime = document.querySelector("#totalTime");
const walkTime = document.querySelector("#walkTime");
const waitTime = document.querySelector("#waitTime");
const parkName = document.querySelector("#parkName");
const roomCode = document.querySelector("#roomCode");
const syncStatus = document.querySelector("#syncStatus");
const message = document.querySelector("#message");
const roomInput = document.querySelector("#roomInput");
const joinRoomButton = document.querySelector("#joinRoomButton");
const createRoomButton = document.querySelector("#createRoomButton");

function makeId(size = 6) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: size }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

function normalizeRoomId(id) {
  return id.toUpperCase().replace(/[^0-9A-Z]/g, "").slice(0, 8);
}

function storageKey(id) {
  return `park-route-room-${id}`;
}

function getPark() {
  return parkCatalog[state.park] || parkCatalog.land;
}

function getAttractions() {
  return getPark().attractions.map((item) => ({
    ...item,
    wait: Number.isFinite(state.waits[item.id]) ? state.waits[item.id] : item.wait,
  }));
}

function allLocations() {
  return [...getPark().entrances, ...getPark().attractions];
}

function distance(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function walkMinutes(a, b) {
  return Math.max(2, Math.round(distance(a, b) / 5.4));
}

function scoreAttraction(current, attraction) {
  const walk = walkMinutes(current, attraction);
  const wait = attraction.wait;
  const popularityBoost = (11 - attraction.popularity) * 4;
  if (state.priority === "shortWait") return wait * 1.35 + walk * 0.8 - attraction.popularity;
  if (state.priority === "nearby") return walk * 2.4 + wait * 0.55 - attraction.popularity;
  if (state.priority === "popular") return wait * 0.8 + walk - popularityBoost;
  return wait + walk * 1.5 - attraction.popularity * 1.8;
}

function buildRoute() {
  const candidates = getAttractions();
  const route = [];
  let current = allLocations().find((item) => item.id === state.start) || getPark().entrances[0];
  let remaining = Math.max(30, state.timeBudget);

  while (route.length < state.maxStops && candidates.length) {
    const ranked = candidates
      .map((item) => {
        const walk = walkMinutes(current, item);
        const total = walk + item.wait + item.duration;
        return { item, walk, total, score: scoreAttraction(current, item) };
      })
      .filter((entry) => entry.total <= remaining || route.length === 0)
      .sort((a, b) => a.score - b.score);

    if (!ranked.length) break;
    const next = ranked[0];
    route.push(next);
    remaining -= next.total;
    current = next.item;
    candidates.splice(candidates.findIndex((item) => item.id === next.item.id), 1);
  }

  state.route = route.map((entry) => ({
    id: entry.item.id,
    walk: entry.walk,
    total: entry.total,
    score: Math.max(1, Math.round(100 - entry.score)),
  }));
}

function routeDetails() {
  const attractions = getAttractions();
  return state.route
    .map((step) => {
      const item = attractions.find((candidate) => candidate.id === step.id);
      return item ? { ...step, item } : null;
    })
    .filter(Boolean);
}

function totals() {
  return routeDetails().reduce(
    (sum, step) => ({
      walk: sum.walk + step.walk,
      wait: sum.wait + step.item.wait,
      total: sum.total + step.walk + step.item.wait + step.item.duration,
    }),
    { walk: 0, wait: 0, total: 0 },
  );
}

async function initCloud() {
  const config = window.ROUTE_PLANNER_FIREBASE_CONFIG || window.JANKEN_FIREBASE_CONFIG;
  cloudReady = Boolean(config?.apiKey && config?.projectId && window.firebase?.firestore);
  if (!cloudReady) return false;
  if (!window.firebase.apps.length) window.firebase.initializeApp(config);
  db = window.firebase.firestore();
  return true;
}

async function saveState() {
  state.updatedAt = Date.now();
  if (state.roomId && cloudReady) {
    await db.collection("parkPlannerRooms").doc(state.roomId).set(JSON.parse(JSON.stringify(state)));
  } else if (state.roomId) {
    localStorage.setItem(storageKey(state.roomId), JSON.stringify(state));
    channel?.postMessage({ roomId: state.roomId });
  }
  render();
}

async function joinRoom(id) {
  const nextId = normalizeRoomId(id);
  if (!nextId) {
    message.textContent = "ルームコードを入力してください。";
    return;
  }

  await initCloud();
  state.roomId = nextId;
  history.replaceState(null, "", `${location.href.split("#")[0]}#planner=${nextId}`);

  if (cloudReady) {
    const snapshot = await db.collection("parkPlannerRooms").doc(nextId).get();
    if (snapshot.exists) state = { ...state, ...snapshot.data(), roomId: nextId };
    setupSync();
    await saveState();
    return;
  }

  const saved = localStorage.getItem(storageKey(nextId));
  if (saved) state = { ...state, ...JSON.parse(saved), roomId: nextId };
  setupSync();
  await saveState();
}

function setupSync() {
  unsubscribeRoom?.();
  unsubscribeRoom = null;
  channel?.close();
  channel = null;

  if (cloudReady && state.roomId) {
    unsubscribeRoom = db.collection("parkPlannerRooms").doc(state.roomId).onSnapshot((snapshot) => {
      if (!snapshot.exists) return;
      state = { ...state, ...snapshot.data() };
      render();
    });
    return;
  }

  if ("BroadcastChannel" in window && state.roomId) {
    channel = new BroadcastChannel(`park-route-${state.roomId}`);
    channel.onmessage = () => {
      const saved = localStorage.getItem(storageKey(state.roomId));
      if (!saved) return;
      state = { ...state, ...JSON.parse(saved) };
      render();
    };
  }
}

function renderControls() {
  parkSelect.value = state.park;
  prioritySelect.value = state.priority;
  if (timeBudgetInput) timeBudgetInput.value = state.timeBudget;
  if (maxStopsInput) maxStopsInput.value = state.maxStops;
  parkName.textContent = getPark().name;
  roomCode.textContent = state.roomId || "未作成";
  syncStatus.textContent = state.roomId ? (cloudReady ? "Firebaseで共有中" : "同じ端末内で共有") : "この端末のみ";

  startSelect.innerHTML = allLocations()
    .map((item) => `<option value="${item.id}">${item.name}</option>`)
    .join("");
  startSelect.value = state.start;
}

function renderAttractions() {
  attractionList.innerHTML = getAttractions()
    .map(
      (item) => `
        <article class="attraction-card">
          <header>
            <strong>${item.name}</strong>
            <span class="tag">${item.area}</span>
          </header>
          <div class="wait-control">
            <input type="number" min="0" max="300" step="5" value="${item.wait}" data-wait-id="${item.id}" aria-label="${item.name}の待ち時間" />
            <span>分待ち</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderRoute() {
  const details = routeDetails();
  const sum = totals();
  totalTime.textContent = details.length ? `${sum.total} 分` : "-- 分";
  walkTime.textContent = details.length ? `${sum.walk} 分` : "-- 分";
  waitTime.textContent = details.length ? `${sum.wait} 分` : "-- 分";

  routeList.innerHTML = details.length
    ? details
        .map(
          (step, index) => `
            <li>
              <span class="step-number">${index + 1}</span>
              <div>
                <strong>${step.item.name}</strong>
                <div class="route-meta">
                  <span>${step.item.area}</span>
                  <span>徒歩 ${step.walk}分</span>
                  <span>待ち ${step.item.wait}分</span>
                  <span>体験 ${step.item.duration}分</span>
                </div>
              </div>
              <span class="score">${step.score}</span>
            </li>
          `,
        )
        .join("")
    : `<li><span class="step-number">1</span><div><strong>条件を入れて更新してください</strong><div class="route-meta"><span>候補がここに表示されます</span></div></div></li>`;
}

function renderMap() {
  const details = routeDetails();
  const routeIds = details.map((step) => step.item.id);
  const locations = allLocations();
  const routePoints = [
    locations.find((item) => item.id === state.start) || getPark().entrances[0],
    ...details.map((step) => step.item),
  ];
  const linePoints = routePoints.map((point) => `${point.x},${point.y}`).join(" ");

  parkMap.innerHTML = `
    <defs>
      <pattern id="water" width="12" height="12" patternUnits="userSpaceOnUse">
        <path d="M0 6 C3 2 9 10 12 6" fill="none" stroke="#c9e7ea" stroke-width="1.3" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="#f8fbfc" />
    <path d="M15 83 C28 66 20 49 34 31 C47 13 70 15 82 31 C94 48 85 70 67 83 C51 95 30 95 15 83Z" fill="url(#water)" stroke="#d7e0e8" stroke-width="1.4" />
    <polyline points="${linePoints}" fill="none" stroke="#cc4f4a" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
    ${locations
      .map((item) => {
        const isStart = item.id === state.start;
        const routeIndex = routeIds.indexOf(item.id);
        const isRoute = routeIndex >= 0;
        const fill = isStart ? "#17212b" : isRoute ? "#cc4f4a" : "#097c86";
        const label = isStart ? "S" : isRoute ? String(routeIndex + 1) : "";
        return `
          <g class="pin" data-start-id="${item.id}">
            <circle cx="${item.x}" cy="${item.y}" r="${isRoute || isStart ? 3.8 : 2.7}" fill="${fill}" />
            ${label ? `<text x="${item.x}" y="${item.y + 1.3}" text-anchor="middle" fill="white" font-size="3.2" font-weight="800">${label}</text>` : ""}
            <title>${item.name}</title>
          </g>
        `;
      })
      .join("")}
  `;
}

function render() {
  renderControls();
  renderAttractions();
  renderRoute();
  renderMap();
}

function readForm() {
  state.park = parkSelect.value;
  state.start = startSelect.value;
  state.priority = prioritySelect.value;
  state.timeBudget = Number.parseInt(timeBudgetInput?.value, 10) || 210;
  state.maxStops = Number.parseInt(maxStopsInput?.value, 10) || 5;
}

function resetWaits() {
  state.waits = {};
  buildRoute();
  saveState();
}

parkSelect.addEventListener("change", () => {
  state.park = parkSelect.value;
  state.start = "entrance";
  state.waits = {};
  buildRoute();
  saveState();
});

startSelect.addEventListener("change", () => {
  state.start = startSelect.value;
  buildRoute();
  saveState();
});

prioritySelect.addEventListener("change", () => {
  state.priority = prioritySelect.value;
  buildRoute();
  saveState();
});

timeBudgetInput?.addEventListener("change", () => {
  state.timeBudget = Number.parseInt(timeBudgetInput.value, 10) || 210;
  buildRoute();
  saveState();
});

maxStopsInput?.addEventListener("change", () => {
  state.maxStops = Number.parseInt(maxStopsInput.value, 10) || 5;
  buildRoute();
  saveState();
});

attractionList.addEventListener("change", (event) => {
  const id = event.target?.dataset?.waitId;
  if (!id) return;
  state.waits[id] = Math.max(0, Number.parseInt(event.target.value, 10) || 0);
  buildRoute();
  saveState();
});

parkMap.addEventListener("click", (event) => {
  const id = event.target.closest("[data-start-id]")?.dataset?.startId;
  if (!id) return;
  state.start = id;
  buildRoute();
  saveState();
});

optimizeButton.addEventListener("click", () => {
  readForm();
  buildRoute();
  saveState();
  message.textContent = "現在の条件でルートを更新しました。";
  setTimeout(() => {
    message.textContent = "";
  }, 1600);
});

resetWaitsButton.addEventListener("click", resetWaits);
createRoomButton.addEventListener("click", () => joinRoom(makeId()));
joinRoomButton.addEventListener("click", () => joinRoom(roomInput.value));

const initialRoom = new URLSearchParams(location.hash.replace(/^#/, "")).get("planner");
buildRoute();
render();
if (initialRoom) {
  roomInput.value = initialRoom;
  joinRoom(initialRoom);
}
