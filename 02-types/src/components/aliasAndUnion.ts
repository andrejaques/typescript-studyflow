// Union

function logDetails(uid: number | string | undefined, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`)
};

logDetails(123, "sapato");
logDetails("123", "sapato");

// Alias

type Uid = number | string | undefined;

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a title as ${user}.`)
};

logInfo(123, "Andre");
logInfo("123", "Andre");

// Other approach
type Platform = "Windows" | "Linux" | "MacOS";

function renderPlatform(platform: Platform) {
  return platform;
};

// Alias with intersection

type AccountInfo = {
  id: number;
  name: string;
  email?: string; // optional. ? = | undefined
};

const account: AccountInfo = {
  id: 123,
  name: "Andre"
};

type CharInfo = {
  nickname: string;
  lvl: number;
};

const char: CharInfo = {
  nickname: "C3RB3RUS",
  lvl: 100
};

// Intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: 123,
  lvl: 100,
  name: "Andre",
  nickname: "C3RB3RUS",
};
