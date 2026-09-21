import React, { useState, useRef, useEffect } from "react";
import { Trophy, Swords, Users, Star, ChevronRight, RotateCcw, Shield } from "lucide-react";

const LOGO_DATA_URI = "data:image/png;base64,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";

const ROLES = ["Jungler", "Mid Laner", "Gold Laner", "Exp Laner", "Roamer"];

const ROLE_STYLE = {
  Jungler: { accent: "#8B5CF6", soft: "rgba(139,92,246,0.14)", label: "JUNG" },
  "Mid Laner": { accent: "#22D3EE", soft: "rgba(34,211,238,0.14)", label: "MID" },
  "Gold Laner": { accent: "#FBBF24", soft: "rgba(251,191,36,0.14)", label: "GOLD" },
  "Exp Laner": { accent: "#FB7185", soft: "rgba(251,113,133,0.14)", label: "EXP" },
  Roamer: { accent: "#34D399", soft: "rgba(52,211,153,0.14)", label: "ROAM" },
};

const ALL_TIME_LEGENDS = {
  Jungler: [
    ["Alberttt", 93], ["Demonkite", 84], ["Kairi", 93], ["Nnael", 90], ["Sutsujin", 84], ["Reyy", 79], ["Rinee", 80], ["AyamJAGO", 80], ["Aether", 77], ["1rad", 80], ["Sugar", 77], ["Marlo", 79],
    ["Oura", 84], ["Celiboy", 89], ["Kayn", 79], ["Kevin", 79], ["Tazz", 80], ["Super Kenn", 75], ["Kenn", 80], ["JessNoLimit", 86], ["High", 80], ["Woshipaul", 78], ["MarceL", 78], ["Doyok", 75],
    ["Nazara", 78], ["Affan", 80], ["Andoryuuu", 81], ["Rave", 80], ["Vincent", 79], ["Faviann", 83], ["Variety", 79], ["Yazuke", 81], ["Fearless", 74],["Gebe", 75], ["Joshua", 79], ["Ferxiic", 84]
  ],
  "Mid Laner": [
    ["SANZ", 92], ["DrianW", 72], ["Luminaire", 93], ["RINZ", 84], ["Yehezkiel", 86], ["Clayyy", 81], ["Swaylow", 79], ["Roundel", 78], ["Wannn", 90], ["Kido", 77],
    ["Jiizee", 81], ["Hajirin", 77], ["Dalvin", 83], ["Moreno", 87], ["Swaylow", 79], ["Facehugger", 83], ["Renbo", 80], ["Hijume", 84], ["Crish", 73], ["Emperor", 80], ["Cr1te", 77],
    ["Octa", 80], ["Drichel", 79], ["Billy", 78], ["ABOY", 81], ["Udil", 88], ["Lemon", 95],["Ryzaa", 71], ["Rexxy", 76], ["Tezet", 74], ["Drian", 81]
  ],
  "Gold Laner": [
    ["CW", 90], ["REKT", 95], ["EMANN", 90], ["Erlan", 83], ["Branz", 85], ["Cadera", 83], ["Tuturu", 88], ["Clover", 79], ["BunnyQT", 73], ["Dee", 75],
    ["Kelra", 89], ["Dingarai", 82], ["Watt", 83], ["Arthur", 77], ["Skylar", 91], ["Mattt", 76], ["Spade", 79], ["Nino", 80], ["Kabuki", 83], ["Marky", 80],
    ["Keven", 83], ["Maybeee", 81], ["Zeonn", 79], ["KennzyySkie", 80], ["Xinnn", 89], ["Sasa", 85], ["Arfy", 84], ["Haizz", 77], ["Kuroky", 74]
  ],
  "Exp Laner": [
    ["Antimage", 92], ["REKT", 80], ["Butss", 91], ["Lutpiii", 90], ["Rimitchi", 79],["Veldora", 78], ["Rezz", 75], ["Luke", 82], ["G", 79],
    ["Nino", 84], ["Shogun", 86], ["Rendyy", 78], ["Aran", 83], ["Banana", 79], ["Pendragon", 75], ["Saykots", 83], ["PAI", 82], ["Watt", 80], ["Edward", 81],
    ["Joshua", 77], ["QINN", 81], ["MarceL", 76], ["Karss", 80], ["Oura", 98], ["Fluffy",83], ["Dyrenn", 82], ["Rippo", 80], ["Rinazmi", 78], ["Xorizo", 78]
  ],
  Roamer: [
    ["Donkey", 89], ["Kiboy", 91], ["LJ", 86], ["Psychoo", 87], ["Leomurphy", 83], ["Yawi", 82], ["Dreams", 83],["Fredo", 79], ["Marsha", 79], ["IOS", 79], ["Instinct", 82], ["Bajan", 80],
    ["Finn", 85], ["Muezza", 80], ["Said", 78], ["Alexander", 84], ["Godiva", 82], ["Xwin", 74],["Rave", 82], ["Baloyskie", 84], ["widy", 81], ["Alek", 85], ["Drian", 90], ["Rasy", 80],
    ["Lyoni", 70], ["APHRO", 83], ["AudyTzy", 77], ["Itoshi Kesu", 81], ["REKT", 89], ["Naomi", 83], ["Brusko", 82], ["Liam", 84],["Owenn", 73], ["Shanee", 79], ["Darknesss", 74]
  ],
};

const TEAM_NAMES = [
  "Geek Fam", "Evos Esport", "Dewa United", "RRQ Hoshi", "Liquid ID", "Bigetron Vitality", "Onic Esport", "Alter Ego", "NAVI"
];

const FORMATIONS = {
  "1-3-1": {
    label: "Seimbang",
    accent: "#8B5CF6",
    desc: "Exp Laner main sendiri di atas, Jungler, Roamer, Mid Laner  di tengah Roam dan Milane bisa rotasi fleks, Gold Laner farming aman di bawah.",
    lines: { "Exp Laner": "Depan", Jungler: "Tengah", Roamer: "Tengah", "Mid Laner": "Tengah", "Gold Laner": "Belakang" },
  },
  "2-1-2": {
    label: "Serang Total",
    accent: "#FB7185",
    desc: "Exp & Mid/support press atas dan rotasi cepat nyari objektif, Jungler sendirian farming di tengah, Roamer & Gold Laner pressing goldlane di bawah.",
    lines: { "Exp Laner": "Depan", "Mid Laner": "Depan", Jungler: "Tengah", Roamer: "Belakang", "Gold Laner": "Belakang" },
  },
  "3-1-1": {
    label: "Bertahan / Farming",
    accent: "#22D3EE",
    desc: "Exp, Roamer, & Mid Laner pressing explane di atas dan bisa rotasi cepet, Jungler sendirian pegang tengah, Gold Laner farming sendiri di bawah.",
    lines: { "Exp Laner": "Depan", Roamer: "Depan", "Mid Laner": "Depan", Jungler: "Tengah", "Gold Laner": "Belakang" },
  },
  "1-1-3": {
    label: "Hyper Aggressive",
    accent: "#FBBF24",
    desc: "Exp Laner sendiri di atas, Jungler sendiri farming di tengah, Roamer + Mid Laner + Gold Laner menangin goldlane di bawah.",
    lines: { "Exp Laner": "Depan", Jungler: "Tengah", Roamer: "Belakang", "Mid Laner": "Belakang", "Gold Laner": "Belakang" },
  },
  "2-2-1": {
    label: "Kontrol Map",
    accent: "#34D399",
    desc: "Exp & Roamer di atas dan bisa fleks clear cepat lalu rotasi dan open map, Mid Laner & Jungler di tengah, Gold Laner sendiri bermain aman dan farming di bawah.",
    lines: { "Exp Laner": "Depan", Roamer: "Depan", "Mid Laner": "Tengah", Jungler: "Tengah", "Gold Laner": "Belakang" },
  },
  "0-5-0": {
    label: "Straight Push",
    accent: "#F87171",
    desc: "Semua 5 role maksa push mid bareng-bareng di awal game, kalo itu gagal masih bisa di fleksibel nyebar lagi.",
    lines: { Roamer: "Tengah", Jungler: "Tengah", "Exp Laner": "Tengah", "Mid Laner": "Tengah", "Gold Laner": "Tengah" },
  },
};
const FORMATION_KEYS = Object.keys(FORMATIONS);
const LINE_WEIGHT = { Belakang: 0.9, Tengah: 1.0, Depan: 1.2 };

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePool() {
  const pool = {};
  ROLES.forEach((role) => {
    pool[role] = ALL_TIME_LEGENDS[role]
      .map(([name, rating], i) => ({ id: `${role}-${i}-${name}`, name, role, rating }))
      .sort((a, b) => b.rating - a.rating);
  });
  return pool;
}

function drawCandidates(pool, role, count = 3) {
  const available = pool[role];
  const picks = [];
  const copy = [...available];
  while (picks.length < count && copy.length) {
    const idx = randInt(0, copy.length - 1);
    picks.push(copy[idx]);
    copy.splice(idx, 1);
  }
  return picks;
}

function removeFromPool(pool, role, id) {
  return { ...pool, [role]: pool[role].filter((p) => p.id !== id) };
}

function generateAiTeam(pool, name) {
  const squad = [];
  let workingPool = pool;
  ROLES.forEach((role) => {
    const options = [...workingPool[role]].sort((a, b) => b.rating - a.rating);
    const pick = options[randInt(0, Math.min(4, options.length - 1))];
    if (pick) {
      squad.push(pick);
      workingPool = removeFromPool(workingPool, role, pick.id);
    }
  });
  const formation = FORMATION_KEYS[randInt(0, FORMATION_KEYS.length - 1)];
  return { name, squad, pool: workingPool, formation };
}

function pickRandomPlayer(squad) {
  return squad[randInt(0, squad.length - 1)];
}

const PBP_TEMPLATES = [
  "{w1} ({wt}) dapet First Blood dari {l1} ({lt})!",
  "{wt} berhasil curi Lord lewat rotasi cepat {w2}.",
  "War 5v5 pecah di base musuh — {wt} menang telak!",
  "{w1} triple kill lewat combo ultimate!",
  "{l1} ({lt}) salah posisi, langsung diserbu {wt}.",
  "{wt} amanin Turtle tanpa perlawanan berarti.",
  "{w2} carry abis lewat build item late game.",
  "{lt} coba comeback tapi telat, {wt} udah keburu unggul jauh.",
  "{l1} coba split push sendirian, malah kena gank & mati sia-sia.",
  "Objective control {wt} dari early game bikin {lt} kewalahan.",
  "{w1} pull off outplay 1v2 di late game!",
  "{lt} coba all-in death ball tapi gagal total, {wt} langsung tekan balik.",
  "Clash di river dimenangin {wt} berkat rotasi {w2}.",
  "{l1} keburu diganking pas farming sendirian di jungle musuh.",
];

function generatePlayByPlay(winnerName, winnerSquad, loserName, loserSquad) {
  const w1 = pickRandomPlayer(winnerSquad);
  const w2 = pickRandomPlayer(winnerSquad);
  const l1 = pickRandomPlayer(loserSquad);
  const fill = (t) =>
    t
      .replaceAll("{w1}", `${w1.role} ${w1.name}`)
      .replaceAll("{w2}", `${w2.role} ${w2.name}`)
      .replaceAll("{l1}", `${l1.role} ${l1.name}`)
      .replaceAll("{wt}", winnerName)
      .replaceAll("{lt}", loserName);
  const shuffled = [...PBP_TEMPLATES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, randInt(2, 3)).map(fill);
}

function pickGameMVP(winnerSquad) {
  const sorted = [...winnerSquad].sort((a, b) => b.rating - a.rating);
  if (Math.random() < 0.25 && sorted.length > 1) {
    return sorted[randInt(1, Math.min(2, sorted.length - 1))];
  }
  return sorted[0];
}

function computeSeriesMVP(gameLog) {
  const counts = {};
  gameLog.forEach((g) => {
    if (!g.mvp) return;
    const key = g.mvp.name + "|" + g.mvp.role;
    if (!counts[key]) counts[key] = { player: g.mvp, count: 0 };
    counts[key].count += 1;
  });
  const arr = Object.values(counts);
  if (arr.length === 0) return null;
  arr.sort((a, b) => b.count - a.count || b.player.rating - a.player.rating);
  return arr[0].player;
}

function teamPower(squad, formationKey) {
  const lines = FORMATIONS[formationKey]?.lines || FORMATIONS["1-3-1"].lines;
  let weightedSum = 0;
  let totalWeight = 0;
  squad.forEach((p) => {
    const line = lines[p.role] || "Tengah";
    const w = LINE_WEIGHT[line];
    weightedSum += p.rating * w;
    totalWeight += w;
  });
  return weightedSum / totalWeight;
}

function simulateMatch(teamA, teamB) {
  const powerA = teamPower(teamA.squad, teamA.formation) + randInt(-12, 12);
  const powerB = teamPower(teamB.squad, teamB.formation) + randInt(-12, 12);
  let aWins = powerA >= powerB;
  if (Math.random() < 0.12) aWins = !aWins; // sesekali ada upset biar gak selalu tim kuat menang
  const winner = aWins ? teamA : teamB;
  const loserGames = Math.random() < 0.45 ? 1 : 0;
  return {
    home: teamA.name,
    away: teamB.name,
    scoreHome: aWins ? 2 : loserGames,
    scoreAway: aWins ? loserGames : 2,
    winner: winner.name,
  };
}

function simulateSeries(teamA, teamB, bestOf) {
  const winsNeeded = Math.ceil((bestOf + 1) / 2);
  let winsA = 0;
  let winsB = 0;
  while (winsA < winsNeeded && winsB < winsNeeded) {
    const powerA = teamPower(teamA.squad, teamA.formation) + randInt(-12, 12);
    const powerB = teamPower(teamB.squad, teamB.formation) + randInt(-12, 12);
    let aWinsGame = powerA >= powerB;
    if (Math.random() < 0.12) aWinsGame = !aWinsGame;
    if (aWinsGame) winsA += 1;
    else winsB += 1;
  }
  const winner = winsA > winsB ? teamA.name : teamB.name;
  return { home: teamA.name, away: teamB.name, scoreHome: winsA, scoreAway: winsB, winner, bestOf };
}

function roundRobinSchedule(teams) {
  const matches = [];
  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      matches.push([teams[i], teams[j]]);
    }
  }
  return matches;
}

function RoleTag({ role }) {
  const s = ROLE_STYLE[role];
  return (
    <span className="ldm-tag" style={{ color: s.accent, background: s.soft }}>
      {s.label}
    </span>
  );
}

function getFormationInsight(formationKey) {
  const f = FORMATIONS[formationKey];
  const lines = f.lines;
  const strongRoles = ROLES.filter((r) => lines[r] === "Depan");
  const weakRoles = ROLES.filter((r) => lines[r] === "Belakang");
  const neutralRoles = ROLES.filter((r) => lines[r] === "Tengah");
  return { strongRoles, weakRoles, neutralRoles, label: f.label };
}

function getTeamInsight(squad) {
  const sorted = [...squad].sort((a, b) => b.rating - a.rating);
  return { best: sorted[0], worst: sorted[sorted.length - 1] };
}

function ScoutingReport({ team }) {
  const insight = getFormationInsight(team.formation);
  const teamInsight = getTeamInsight(team.squad);
  return (
    <div style={{ background: "#0F1424", borderRadius: "14px", padding: "16px", border: "1px solid rgba(255,255,255,0.08)", marginBottom: "20px" }}>
      <div className="ldm-squad-label" style={{ marginBottom: "10px" }}>
        Scouting Report — {team.name}
      </div>

      <div style={{ fontSize: "12px", color: "#94A3B8", marginBottom: "10px" }}>
        Pakai meta <strong style={{ color: "#E5E9F0" }}>{team.formation}</strong> ({insight.label})
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "12px" }}>
        <div style={{ flex: "1 1 140px" }}>
          <div style={{ fontSize: "10px", fontWeight: 700, color: "#FB7185", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.03em" }}>
            Lemah di formasi
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
            {insight.weakRoles.length > 0 ? (
              insight.weakRoles.map((r) => <RoleTag key={r} role={r} />)
            ) : (
              <span style={{ fontSize: "11px", color: "#64748B" }}>Nggak ada lini lemah</span>
            )}
          </div>
        </div>
        <div style={{ flex: "1 1 140px" }}>
          <div style={{ fontSize: "10px", fontWeight: 700, color: "#34D399", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.03em" }}>
            Kuat di formasi
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
            {insight.strongRoles.length > 0 ? (
              insight.strongRoles.map((r) => <RoleTag key={r} role={r} />)
            ) : (
              <span style={{ fontSize: "11px", color: "#64748B" }}>Nggak ada lini kuat</span>
            )}
          </div>
        </div>
      </div>

      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "10px 0" }} />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <div style={{ flex: "1 1 140px" }}>
          <div style={{ fontSize: "10px", fontWeight: 700, color: "#FB7185", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.03em" }}>
            Titik lemah tim
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <RoleTag role={teamInsight.worst.role} />
            <span style={{ fontSize: "12px", color: "#E5E9F0" }}>{teamInsight.worst.name}</span>
            <span style={{ fontSize: "11px", color: "#64748B" }}>{teamInsight.worst.rating}</span>
          </div>
        </div>
        <div style={{ flex: "1 1 140px" }}>
          <div style={{ fontSize: "10px", fontWeight: 700, color: "#34D399", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.03em" }}>
            Pemain andalan
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <RoleTag role={teamInsight.best.role} />
            <span style={{ fontSize: "12px", color: "#E5E9F0" }}>{teamInsight.best.name}</span>
            <span style={{ fontSize: "11px", color: "#64748B" }}>{teamInsight.best.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LigaDraftML() {
  const [phase, setPhase] = useState("modeSelect");
  const [pool, setPool] = useState(() => generatePool());
  const [roleIndex, setRoleIndex] = useState(0);
  const [candidates, setCandidates] = useState([]);
  const [userSquad, setUserSquad] = useState([]);
  const [userTeamName, setUserTeamName] = useState("Timku FC");
  const [formation, setFormation] = useState("1-3-1");
  const [season, setSeason] = useState(null);
  const [standingsTab, setStandingsTab] = useState("klasemen");
  const [rerollsLeft, setRerollsLeft] = useState(3);
  const [aiTeams, setAiTeams] = useState([]);
  const [aiVsAiResults, setAiVsAiResults] = useState([]);
  const [matchResults, setMatchResults] = useState([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [playoffSeeds, setPlayoffSeeds] = useState([]);
  const [playoffStage, setPlayoffStage] = useState("m1");
  const [bracket, setBracket] = useState({});
  const [playoffLog, setPlayoffLog] = useState([]);
  const [pendingPlayoffMatch, setPendingPlayoffMatch] = useState(null);
  const [pendingAdvance, setPendingAdvance] = useState(null);
  const [championTeam, setChampionTeam] = useState(null);
  const [showLiveStandings, setShowLiveStandings] = useState(false);
  const [showBracket, setShowBracket] = useState(false);
  const [bracketReturnPhase, setBracketReturnPhase] = useState("standings");

  const [userSub, setUserSub] = useState(null);
  const [subRerollsLeft, setSubRerollsLeft] = useState(2);
  const [subSlotRole, setSubSlotRole] = useState(null);
 const [seriesWins, setSeriesWins] = useState({ home: 0, away: 0 });
const [seriesGameLog, setSeriesGameLog] = useState([]);

const [gameMode, setGameMode] = useState(null); 
const [draftingTeam, setDraftingTeam] = useState("A");
const [teamBSquad, setTeamBSquad] = useState([]);
const [teamBName, setTeamBName] = useState("Tim B");
const [teamBFormation, setTeamBFormation] = useState("1-3-1");
const [teamBSub, setTeamBSub] = useState(null);
const [teamBSubSlotRole, setTeamBSubSlotRole] = useState(null);
const [rerollsLeftB, setRerollsLeftB] = useState(3);
const [subRerollsLeftB, setSubRerollsLeftB] = useState(2);
const [activeSide, setActiveSide] = useState("A");
const [matchQueue, setMatchQueue] = useState([]);
const [queueIndex, setQueueIndex] = useState(0);
const [abContext, setAbContext] = useState("regular");
const [teamAData, setTeamAData] = useState(null);
const [teamBData, setTeamBData] = useState(null);
const [duelTurn, setDuelTurn] = useState("A");
const [duelFormationA, setDuelFormationA] = useState("1-3-1");
const [duelFormationB, setDuelFormationB] = useState("1-3-1");
const [duelSubActiveA, setDuelSubActiveA] = useState(false);
const [duelSubActiveB, setDuelSubActiveB] = useState(false);
const [duelWins, setDuelWins] = useState({ a: 0, b: 0 });
const [duelGameLog, setDuelGameLog] = useState([]);

  const [simCommentary, setSimCommentary] = useState([]);
  const [simHomeName, setSimHomeName] = useState("");
  const [simAwayName, setSimAwayName] = useState("");
  const simTimersRef = useRef([]);
  const simActionRef = useRef(null);
  const simOutcomeRef = useRef(null);

  useEffect(() => {
    return () => {
      simTimersRef.current.forEach(clearTimeout);
    };
  }, []);

const TOTAL_LEGS = 2;
const REGULAR_BEST_OF = 3;
  const PLAYOFF_ORDER = ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8"];
  const PLAYOFF_BEST_OF = { m1: 5, m2: 5, m3: 5, m4: 5, m5: 5, m6: 5, m7: 7, m8: 7 };
  const OFF_ROLE_PENALTY = 10;
  const PLAYOFF_LABELS = {
    m1: "M1 — Upper Bracket Ronde 1", m2: "M2 — Upper Bracket Ronde 1",
    m3: "M3 — Upper Bracket Ronde 2", m4: "M4 — Upper Bracket Ronde 2",
    m5: "M5 — Lower Bracket Ronde 1", m6: "M6 — Upper Bracket Final (lolos langsung ke Grand Final)",
    m7: "M7 — Lower Bracket Final", m8: "M8 — Grand Final",
  };

  function resetRunState() {
    setUserSquad([]);
    setTeamBSquad([]);
    setTeamBName("Tim B");
    setTeamBFormation("1-3-1");
    setTeamBSub(null);
    setTeamBSubSlotRole(null);
    setRerollsLeftB(3);
    setSubRerollsLeftB(2);
    setActiveSide("A");
    setMatchQueue([]);
    setQueueIndex(0);
    setAbContext("regular");
    setRoleIndex(0);
    setCandidates([]);
    setRerollsLeft(3);
    setUserSub(null);
    setSubRerollsLeft(2);
    setAiTeams([]);
    setAiVsAiResults([]);
    setMatchResults([]);
    setCurrentMatchIndex(0);
    setPlayoffSeeds([]);
    setPlayoffStage("m1");
    setBracket({});
    setPlayoffLog([]);
    setPendingPlayoffMatch(null);
    setPendingAdvance(null);
    setChampionTeam(null);
    setShowLiveStandings(false);
    setSeason(null);
    setSeriesWins({ home: 0, away: 0 });
    setSeriesGameLog([]);
  }

  function chooseMode(mode) {
    setGameMode(mode);
    setDraftingTeam("A");
    setUserTeamName(mode === "solo" ? "Timku FC" : "Tim A");
    setFormation("1-3-1");
    setPhase("intro");
  }

  function beginDraftPhase() {
    const sharePoolWithTeamA = gameMode === "direct1v1" && draftingTeam === "B";
    const activePool = sharePoolWithTeamA ? pool : generatePool();
    if (!sharePoolWithTeamA) setPool(activePool);
    resetRunState();
    setCandidates(drawCandidates(activePool, ROLES[0]));
    setPhase("draft");
  }

  function startNewGame() {
    resetRunState();
    setGameMode(null);
    setDraftingTeam("A");
    setTeamAData(null);
    setTeamBData(null);
    setUserTeamName("Timku FC");
    setFormation("1-3-1");
    setDuelTurn("A");
    setDuelFormationA("1-3-1");
    setDuelFormationB("1-3-1");
    setDuelSubActiveA(false);
    setDuelSubActiveB(false);
    setDuelWins({ a: 0, b: 0 });
    setDuelGameLog([]);
    setPool(generatePool());
    setPhase("modeSelect");
  }

  function rerollCandidates() {
    const isB = (gameMode === "liga1v1" || gameMode === "direct1v1") && draftingTeam === "B";
    const left = isB ? rerollsLeftB : rerollsLeft;
    if (left <= 0) return;
    setCandidates(drawCandidates(pool, ROLES[roleIndex]));
    if (isB) setRerollsLeftB(rerollsLeftB - 1);
    else setRerollsLeft(rerollsLeft - 1);
  }

  function drawSubCandidates(currentPool) {
    const shuffledRoles = [...ROLES].sort(() => Math.random() - 0.5).slice(0, 3);
    return shuffledRoles
      .map((role) => drawCandidates(currentPool, role, 1)[0])
      .filter(Boolean);
  }

  function pickPlayer(player) {
    const newPool = removeFromPool(pool, player.role, player.id);
    setPool(newPool);

    if (gameMode === "liga1v1" || gameMode === "direct1v1") {
      if (draftingTeam === "A") {
        setUserSquad((prev) => [...prev, player]);
        setDraftingTeam("B");
        setCandidates(drawCandidates(newPool, ROLES[roleIndex]));
        return;
      }
      setTeamBSquad((prev) => [...prev, player]);
      setDraftingTeam("A");
      if (roleIndex + 1 < ROLES.length) {
        const nextRole = ROLES[roleIndex + 1];
        setCandidates(drawCandidates(newPool, nextRole));
        setRoleIndex(roleIndex + 1);
      } else {
        setSubRerollsLeft(2);
        setCandidates(drawSubCandidates(newPool));
        setPhase("draftSub");
      }
      return;
    }

    const newSquad = [...userSquad, player];
    setUserSquad(newSquad);
    if (roleIndex + 1 < ROLES.length) {
      const nextRole = ROLES[roleIndex + 1];
      setCandidates(drawCandidates(newPool, nextRole));
      setRoleIndex(roleIndex + 1);
    } else {
      setSubRerollsLeft(2);
      setCandidates(drawSubCandidates(newPool));
      setPhase("draftSub");
    }
  }

  function rerollSubCandidates() {
    const isB = (gameMode === "liga1v1" || gameMode === "direct1v1") && draftingTeam === "B";
    const left = isB ? subRerollsLeftB : subRerollsLeft;
    if (left <= 0) return;
    setCandidates(drawSubCandidates(pool));
    if (isB) setSubRerollsLeftB(subRerollsLeftB - 1);
    else setSubRerollsLeft(subRerollsLeft - 1);
  }

  function startDuel(finalPool, teamBSubPlayer) {
    const teamA = { name: userTeamName.trim() || "Tim A", squad: userSquad, sub: userSub, formation };
    const teamBFormationPick = teamBFormation || FORMATION_KEYS[randInt(0, FORMATION_KEYS.length - 1)];
    const teamB = { name: teamBName.trim() || "Tim B", squad: teamBSquad, sub: teamBSubPlayer, formation: teamBFormationPick };
    setTeamAData(teamA);
    setTeamBData(teamB);
    setDuelTurn("A");
    setDuelFormationA(teamA.formation);
    setDuelFormationB(teamB.formation);
    setDuelSubActiveA(false);
    setDuelSubActiveB(false);
    setDuelWins({ a: 0, b: 0 });
    setDuelGameLog([]);
    setPool(finalPool);
    setPhase("duelPrep");
  }

  function pickSubPlayer(player) {
    const newPool = removeFromPool(pool, player.role, player.id);
    setPool(newPool);

    if ((gameMode === "liga1v1" || gameMode === "direct1v1") && draftingTeam === "A") {
      setUserSub(player);
      setDraftingTeam("B");
      setSubRerollsLeft(2);
      setCandidates(drawSubCandidates(newPool));
      return;
    }
    if (gameMode === "liga1v1" && draftingTeam === "B") {
      const teamBFormationPick = FORMATION_KEYS[randInt(0, FORMATION_KEYS.length - 1)];
      const teamB = { name: teamBName.trim() || "Tim B", squad: teamBSquad, sub: player, formation: teamBFormationPick };
      finalizeDraft(newPool, teamB);
      return;
    }
    if (gameMode === "direct1v1" && draftingTeam === "B") {
      startDuel(newPool, player);
      return;
    }

    setUserSub(player);
    finalizeDraft(newPool);
  }

  function skipSubDraft() {
    if ((gameMode === "liga1v1" || gameMode === "direct1v1") && draftingTeam === "A") {
      setUserSub(null);
      setDraftingTeam("B");
      setSubRerollsLeft(2);
      setCandidates(drawSubCandidates(pool));
      return;
    }
    if (gameMode === "liga1v1" && draftingTeam === "B") {
      const teamBFormationPick = FORMATION_KEYS[randInt(0, FORMATION_KEYS.length - 1)];
      const teamB = { name: teamBName.trim() || "Tim B", squad: teamBSquad, sub: null, formation: teamBFormationPick };
      finalizeDraft(pool, teamB);
      return;
    }
    if (gameMode === "direct1v1" && draftingTeam === "B") {
      startDuel(pool, null);
      return;
    }
    setUserSub(null);
    finalizeDraft(pool);
  }

  function buildMatchQueue(pureAiTeams) {
    const n = pureAiTeams.length;
    const offset = Math.max(1, Math.floor(n / 2));
    const q = [];
       for (let leg = 1; leg <= TOTAL_LEGS; leg++) {
        for (let i = 0; i <n; i++) {
          const oppForA = pureAiTeams[i];
          const oppForB = pureAiTeams[(i + offset) % n];
        q.push({ kind: "AI", side: "B", opponent: oppForA, leg });
        q.push({ kind: "AI", side: "A", opponent: oppForB, leg });
      }
    }
    q.push({ kind: "AB", leg: 1 });
    q.push({ kind: "AB", leg: 2 });
    return q;
  }

  function finalizeDraft(basePool, extraTeam) {
    let workingPool = basePool;
    const pureAiTeams = [];
    TEAM_NAMES.forEach((name) => {
      const t = generateAiTeam(workingPool, name);
      workingPool = t.pool;
      pureAiTeams.push({ name: t.name, squad: t.squad, formation: t.formation });
    });
    const newAiTeams = extraTeam ? [...pureAiTeams, extraTeam] : pureAiTeams;
    setAiTeams(newAiTeams);
    if (extraTeam) {
      setTeamBSub(extraTeam.sub || null);
      setTeamBFormation(extraTeam.formation);
    }
    const aiFixturesLeg1 = roundRobinSchedule(pureAiTeams);
    const aiFixturesLeg2 = aiFixturesLeg1.map(([a, b]) => [b, a]);
    const aiResults = [...aiFixturesLeg1, ...aiFixturesLeg2].map(([a, b]) => simulateMatch(a, b));
    setAiVsAiResults(aiResults);
    setMatchResults([]);
    setCurrentMatchIndex(0);
    setSubSlotRole(null);
    setTeamBSubSlotRole(null);
    setSeriesWins({ home: 0, away: 0 });
    setSeriesGameLog([]);

    if (gameMode === "liga1v1") {
      const q = buildMatchQueue(pureAiTeams);
      setMatchQueue(q);
      setQueueIndex(0);
      setAbContext("regular");
      const first = q[0];
      if (first.kind === "AB") {
        setActiveSide("A");
        setPhase("abMetaA");
      } else {
        setActiveSide(first.side);
        setPhase("matchPrep");
      }
    } else {
      setPhase("matchPrep");
    }
  }

function getDuelTeamObj(side) {
  const data = side === "A" ? teamAData : teamBData;
    const subActiveVal = side === "A" ? duelSubActiveA : duelSubActiveB;
    const formationUsed = side === "A" ? duelFormationA : duelFormationB;
    let squad = data.squad;
    if (subActiveVal && data.sub) {
      squad = data.squad.map((p) => (p.role === data.sub.role ? data.sub : p));
    }
  return { name: data.name, squad, formation: formationUsed };
}
  function playDuelGame() {
    const teamA = getDuelTeamObj("A");
    const teamB = getDuelTeamObj("B");
    const basePowerA = teamPower(teamA.squad, teamA.formation);
    const basePowerB = teamPower(teamB.squad, teamB.formation);
    let aWinsGame = consumeSimOutcome(basePowerA, basePowerB);
    const winsNeeded = Math.ceil((REGULAR_BEST_OF + 1) / 2);
    const newWins = { a: duelWins.a + (aWinsGame ? 1 : 0), b: duelWins.b + (aWinsGame ? 0 : 1) };
    const gameEntry = {
      gameNumber: duelGameLog.length + 1,
      formationA: teamA.formation, formationB: teamB.formation,
      winner: aWinsGame ? "A" : "B",
    };
    const newLog = [...duelGameLog, gameEntry];
    setDuelWins(newWins);
    setDuelGameLog(newLog);
    if (newWins.a >= winsNeeded || newWins.b >= winsNeeded) {
      setPhase("duelResult");
    } else {
      setPhase("duelGameResult");
    }
  }
  
  function renderDuelSquadManager(side) {
    const data = side === "A" ? teamAData : teamBData;
    const subActiveVal = side === "A" ? duelSubActiveA : duelSubActiveB;
    const setSubActiveVal = side === "A" ? setDuelSubActiveA : setDuelSubActiveB;
    return (
      <div style={{ background: "#0F1424", borderRadius: "14px", padding: "16px", border: "1px solid rgba(255,255,255,0.08)", marginBottom: "20px" }}>
        <div className="ldm-squad-label" style={{ marginBottom: "10px" }}>Atur Skuad {data.name}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {data.squad.map((p) => {
            const isSubHere = !!(data.sub && data.sub.role === p.role);
            const playing = isSubHere && subActiveVal ? data.sub : p;
        return (
              <div
                key={p.role}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px",
                  background: "#141A2E", borderRadius: "10px", padding: "8px 12px",
                  border: `1px solid ${isSubHere && subActiveVal ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.05)"}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
                  <RoleTag role={p.role} />
                  <span style={{ fontSize: "13px", color: "#E5E9F0", fontWeight: 500 }}>{playing.name}</span>
                  <span style={{ fontSize: "11px", color: "#64748B" }}>{playing.rating} OVR</span>
                </div>
                {isSubHere && (
                  <button
                    onClick={() => setSubActiveVal(!subActiveVal)}
                    className="ldm-reroll-btn"
                    style={{
                      color: subActiveVal ? "#34D399" : "#94A3B8",
                      background: subActiveVal ? "rgba(52,211,153,0.1)" : "rgba(148,163,184,0.08)",
                      borderColor: subActiveVal ? "rgba(52,211,153,0.3)" : "rgba(148,163,184,0.2)",
                    }}
                     >
                    {subActiveVal ? `Balikin ${p.name}` : `Pasang ${data.sub.name}`}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

   function renderDuelFormationGrid(side) {
    const activeKey = side === "A" ? duelFormationA : duelFormationB;
    const setKey = side === "A" ? setDuelFormationA : setDuelFormationB;
    return (
      <div className="ldm-formation-grid">
        {FORMATION_KEYS.map((key) => {
          const f = FORMATIONS[key];
          const active = activeKey === key;
          const lineOrder = ["Depan", "Tengah", "Belakang"];
          const grouped = { Depan: [], Tengah: [], Belakang: [] };
          ROLES.forEach((r) => grouped[f.lines[r]]?.push(r));
          return (
            <button
              key={key}
              onClick={() => setKey(key)}
              className="ldm-formation-card"
              style={{
                border: `2px solid ${active ? f.accent : "rgba(255,255,255,0.06)"}`,
                background: active ? f.accent + "14" : "#0F1424",
              }}
            >
              <div className="ldm-formation-key-col">
                <span className="ldm-formation-key" style={{ color: active ? f.accent : "#E5E9F0" }}>{key}</span>
                <span className="ldm-formation-label" style={{ color: active ? f.accent : "#7C8797" }}>{f.label}</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="ldm-formation-lines">
                  {lineOrder.map((line) => (
                    <div key={line} className="ldm-formation-line">
                      {grouped[line].map((r) => (
                        <div key={r} title={r} className="ldm-dot" style={{ background: ROLE_STYLE[r].accent }}>
                          {ROLE_STYLE[r].label[0]}
                        </div>
                      ))}
                    </div>
              ))}
                </div>
                <div className="ldm-formation-desc">{f.desc}</div>
              </div>
            </button>
          );
        })}
      </div>
    );
  }
  
  function getStageResult(stage) {
    return playoffLog.find((l) => l.roundLabel === PLAYOFF_LABELS[stage]);
  }

  function openBracket(fromPhase) {
    setBracketReturnPhase(fromPhase);
    setPhase("bracket");
  }

  function renderBracketMatch(stage, home, away) {
    const stageResult = getStageResult(stage);
    const winner = bracket[stage];
    const bo = PLAYOFF_BEST_OF[stage];
    return (
      <div key={stage} style={{ background: "#0F1424", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", padding: "10px 12px", marginBottom: "8px" }}>
        <div style={{ fontSize: "10px", color: "#64748B", marginBottom: "6px", display: "flex", justifyContent: "space-between" }}>
          <span>{stage.toUpperCase()}</span><span>Bo{bo}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", fontSize: "13px" }}>
          <span style={{
            fontWeight: winner && home && winner.name === home.name ? 700 : 400,
            color: winner && home && winner.name === home.name ? "#34D399" : home ? "#E5E9F0" : "#475569",
            flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          }}>
            {home ? home.name : "TBD"}
          </span>
          <span style={{ color: "#FBBF24", fontWeight: 700, fontSize: "12px", flexShrink: 0 }}>
            {stageResult ? `${stageResult.result.scoreHome}–${stageResult.result.scoreAway}` : "vs"}
          </span>
          <span style={{
            fontWeight: winner && away && winner.name === away.name ? 700 : 400,
            color: winner && away && winner.name === away.name ? "#34D399" : away ? "#E5E9F0" : "#475569",
            flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", textAlign: "right",
          }}>
            {away ? away.name : "TBD"}
          </span>
        </div>
      </div>
    );
  }

  function getTeamObjForSide(side) {
    if (side === "B") {
      let squad = teamBSquad;
      if (teamBSubSlotRole && teamBSub) {
        const offRole = teamBSub.role !== teamBSubSlotRole;
        const effectiveRating = offRole ? Math.max(40, teamBSub.rating - OFF_ROLE_PENALTY) : teamBSub.rating;
        squad = teamBSquad.map((p) =>
          p.role === teamBSubSlotRole ? { ...teamBSub, role: teamBSubSlotRole, rating: effectiveRating } : p
        );
      }
      return { name: teamBName.trim() || "Tim B", squad, isUser: true, side: "B", formation: teamBFormation };
    }
    let squad = userSquad;
    if (subSlotRole && userSub) {
      const offRole = userSub.role !== subSlotRole;
      const effectiveRating = offRole ? Math.max(40, userSub.rating - OFF_ROLE_PENALTY) : userSub.rating;
      squad = userSquad.map((p) =>
        p.role === subSlotRole ? { ...userSub, role: subSlotRole, rating: effectiveRating } : p
      );
    }
    return { name: userTeamName.trim() || "Timku FC", squad, isUser: true, side: "A", formation };
  }

  function getUserTeamObj() {
    return getTeamObjForSide(gameMode === "liga1v1" ? activeSide : "A");
  }

  function getActiveFormation() {
    return gameMode === "liga1v1" && activeSide === "B" ? teamBFormation : formation;
  }
  function setActiveFormation(key) {
    if (gameMode === "liga1v1" && activeSide === "B") setTeamBFormation(key);
    else setFormation(key);
  }

  function renderSquadManager() {
    const side = gameMode === "liga1v1" ? activeSide : "A";
    const squadSrc = side === "B" ? teamBSquad : userSquad;
    const subSrc = side === "B" ? teamBSub : userSub;
    const slotRole = side === "B" ? teamBSubSlotRole : subSlotRole;
    const setSlotRole = side === "B" ? setTeamBSubSlotRole : setSubSlotRole;
    return renderSquadManagerFor(squadSrc, subSrc, slotRole, setSlotRole);
  }

  function renderSquadManagerFor(userSquad, userSub, subSlotRole, setSubSlotRole) {
    return (
      <div style={{ background: "#0F1424", borderRadius: "14px", padding: "16px", border: "1px solid rgba(255,255,255,0.08)", marginBottom: "20px" }}>
        <div className="ldm-squad-label" style={{ marginBottom: "10px" }}>Atur Skuad</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {userSquad.map((p) => {
            const isSubHere = subSlotRole === p.role;
            const offRole = userSub && userSub.role !== p.role;
            const subRatingHere = userSub ? (offRole ? Math.max(40, userSub.rating - OFF_ROLE_PENALTY) : userSub.rating) : null;
            const playingName = isSubHere ? userSub.name : p.name;
            const playingRating = isSubHere ? subRatingHere : p.rating;
            return (
              <div
                key={p.role}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px",
                  background: "#141A2E", borderRadius: "10px", padding: "8px 12px",
                  border: `1px solid ${isSubHere ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.05)"}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
                  <RoleTag role={p.role} />
                  <span style={{ fontSize: "13px", color: "#E5E9F0", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {playingName}
                  </span>
                  <span style={{ fontSize: "11px", color: "#64748B", flexShrink: 0 }}>{playingRating} OVR</span>
                  {isSubHere && offRole && (
                    <span style={{ fontSize: "10px", color: "#FB7185", flexShrink: 0 }}>
                      (-{OFF_ROLE_PENALTY}, bukan role asli)
                    </span>
                  )}
                </div>
                {userSub && (
                  <button
                    onClick={() => setSubSlotRole(isSubHere ? null : p.role)}
                    className="ldm-reroll-btn"
                    style={{
                      flexShrink: 0,
                      color: isSubHere ? "#34D399" : "#94A3B8",
                      background: isSubHere ? "rgba(52,211,153,0.1)" : "rgba(148,163,184,0.08)",
                      borderColor: isSubHere ? "rgba(52,211,153,0.3)" : "rgba(148,163,184,0.2)",
                    }}
                  >
                    {isSubHere
                      ? `Balikin ${p.name}`
                      : `Pasang ${userSub.name} (${offRole ? Math.max(40, userSub.rating - OFF_ROLE_PENALTY) : userSub.rating} OVR)`}
                  </button>
                )}
              </div>
            );
          })}
        </div>
        {userSub ? (
          <p style={{ fontSize: "11px", color: "#64748B", marginTop: "10px", marginBottom: 0 }}>
            Cadangan: <strong style={{ color: "#CBD5E1" }}>{userSub.name}</strong> ({userSub.rating} OVR, role asli {userSub.role}) —
            bisa dipasang gantiin starter di role MANAPUN. Di role aslinya OVR-nya penuh, di role lain turun {OFF_ROLE_PENALTY} poin.
            Ganti-ganti bebas sebelum tiap game dimulai.
          </p>
        ) : (
          <p style={{ fontSize: "11px", color: "#64748B", marginTop: "10px", marginBottom: 0 }}>
            Kamu nggak ambil pemain cadangan waktu draft.
          </p>
        )}
      </div>
    );
  }

  function computeLiveStandings() {
    const anchorTeam = gameMode === "liga1v1" ? getTeamObjForSide("A") : getUserTeamObj();
    const allTeams = [anchorTeam, ...aiTeams];
    const standings = {};
    allTeams.forEach((t) => {
      standings[t.name] = { name: t.name, isUser: !!t.isUser, w: 0, l: 0, gf: 0, ga: 0, pts: 0 };
    });
    matchResults.forEach((m) => {
      const r = m.result;
      standings[r.home].gf += r.scoreHome;
      standings[r.home].ga += r.scoreAway;
      standings[r.away].gf += r.scoreAway;
      standings[r.away].ga += r.scoreHome;
      if (r.winner === r.home) {
        standings[r.home].w += 1;
        standings[r.away].l += 1;
        standings[r.home].pts += 3;
      } else {
        standings[r.away].w += 1;
        standings[r.home].l += 1;
        standings[r.away].pts += 3;
      }
    });
    aiVsAiResults.forEach((r) => {
      standings[r.home].gf += r.scoreHome;
      standings[r.home].ga += r.scoreAway;
      standings[r.away].gf += r.scoreAway;
      standings[r.away].ga += r.scoreHome;
      if (r.winner === r.home) {
        standings[r.home].w += 1;
        standings[r.away].l += 1;
        standings[r.home].pts += 3;
      } else {
        standings[r.away].w += 1;
        standings[r.home].l += 1;
        standings[r.away].pts += 3;
      }
    });
    return Object.values(standings).sort((a, b) => b.pts - a.pts || (b.gf - b.ga) - (a.gf - a.ga));
  }

  function getCurrentOpponent() {
    if (gameMode === "liga1v1") {
      const entry = matchQueue[queueIndex];
      if (!entry) return aiTeams[0];
      return entry.kind === "AI" ? entry.opponent : getTeamObjForSide(activeSide === "A" ? "B" : "A");
    }
    return aiTeams[currentMatchIndex % aiTeams.length];
  }
  function getCurrentLeg() {
    if (gameMode === "liga1v1") return matchQueue[queueIndex]?.leg || 1;
    return Math.floor(currentMatchIndex / aiTeams.length) + 1;
  }

  function generateMatchNarrative(favoriteName, underdogName, favoriteWins) {
    const earlyLines = [
      (f, u) => `${f} ambil early advantage di lane atas!`,
      (f, u) => `${f} rotasi cepat amanin Turtle pertama!`,
      (f, u) => `${f} menang farming dari lawan ${u}!`,
      (f, u) => `Team fight pertama dimenangin ${f} telak!`,
      (f, u) => `${f} menang gold jauh di menit-menit awal!`,
      (f, u) => `${f} dapet First Blood duluan!`,
    ];
    const midLines = [
      (f, u) => `${f} terus tekan, ${u} kesusahan nahan rotasi!`,
      (f, u) => ` blunder dari ${u} membuat keuntungan free lord untuk ${f}`,
      (f, u) => `Splitpush ${f} bikin ${u} kesusahan jaga map!`,
      (f, u) => `${u} mencoba comeback tapi ${f} masih bisa pegang kendali!`,
      (f, u) => `${f} unggul jauh objective control yang bagus`,
      (f, u) => `${u} memenangkan kontes lord memaksa ${f} untuk melakukan defense`,

    ];
    const closingLinesWin = [
      (f, u) => `${f} tutup game dengan clean sweep, ${u} bertekuk lutut!`,
      (f, u) => `pembantai oleh ${f} membuat ${u} bertekuk lutut`,
      (f, u) => `${u}mencoba melakukan defense lord, tapi langsung di end oleh${f}`,
      (f, u) => `${u} coba all-in death ball tapi telat, ${f} udah merebut kemenangan!`,
      (f, u) => `${u} wiped out ${f} langsung one straight push mid dan melakukan end game`,
    ];
    const comebackLines = [
      (f, u) => `Tapi di late game, ${u} COMEBACK dan wipe out ${f} abis-abisan!`,
      (f, u) => `${u} kaiting teamfight krusial, wipe out ${f} momentum langsung balik!`,
      (f, u) => `${u} pull off outplay gila, ${f}, dan balikin keadaan di detik-detik akhir!`,
      (f, u) => `${f} lengah di area lord ${u} nyelinap comeback lewat backdoor!`,
      (f, u) => `reverse sweep berkelas yang di lakukan oleh ${f}`,
    ];

    const lines = [];
    const e = [...earlyLines].sort(() => Math.random() - 0.5).slice(0, 2);
    const m = [...midLines].sort(() => Math.random() - 0.5).slice(0, 2);
    lines.push(...e.map((fn) => fn(favoriteName, underdogName)));
    lines.push(...m.map((fn) => fn(favoriteName, underdogName)));

    const closing = favoriteWins
      ? closingLinesWin[randInt(0, closingLinesWin.length - 1)]
      : comebackLines[randInt(0, comebackLines.length - 1)];
    lines.push(closing(favoriteName, underdogName));
    return lines;
  }

  function consumeSimOutcome(fallbackPowerHome, fallbackPowerAway) {
    if (simOutcomeRef.current !== null) {
      const val = simOutcomeRef.current;
      simOutcomeRef.current = null;
      return val;
    }
    let result = fallbackPowerHome + randInt(-12, 12) >= fallbackPowerAway + randInt(-12, 12);
    if (Math.random() < 0.12) result = !result;
    return result;
  }

  function startMatchSimulation(nameHome, nameAway, powerHome, powerAway, actionFn) {
    simTimersRef.current.forEach(clearTimeout);
    simTimersRef.current = [];

    let homeWins = powerHome + randInt(-12, 12) >= powerAway + randInt(-12, 12);
    if (Math.random() < 0.12) homeWins = !homeWins;
    simOutcomeRef.current = homeWins;

    const favoriteIsHome = powerHome >= powerAway;
    const favoriteName = favoriteIsHome ? nameHome : nameAway;
    const underdogName = favoriteIsHome ? nameAway : nameHome;
    const favoriteWins = favoriteIsHome ? homeWins : !homeWins;

    const lines = generateMatchNarrative(favoriteName, underdogName, favoriteWins);
    setSimHomeName(nameHome);
    setSimAwayName(nameAway);
    setSimCommentary([]);
    setPhase("simulating");
    simActionRef.current = actionFn;

    const totalDuration = 8000;
    const stepDuration = totalDuration / (lines.length + 1);
    lines.forEach((line, i) => {
      const t = setTimeout(() => {
        setSimCommentary((prev) => [...prev, line]);
      }, stepDuration * (i + 1));
      simTimersRef.current.push(t);
    });
    const finalTimer = setTimeout(() => {
      if (simActionRef.current) simActionRef.current();
    }, totalDuration);
    simTimersRef.current.push(finalTimer);
  }

  function playRegularGame() {
    const userTeam = getUserTeamObj();
    const opponent = getCurrentOpponent();
    const basePowerA = teamPower(userTeam.squad, userTeam.formation);
    const basePowerB = teamPower(opponent.squad, opponent.formation);
    let userWinsGame = consumeSimOutcome(basePowerA, basePowerB);

    const winsNeeded = Math.ceil((REGULAR_BEST_OF + 1) / 2);
    const newWins = {
      home: seriesWins.home + (userWinsGame ? 1 : 0),
      away: seriesWins.away + (userWinsGame ? 0 : 1),
    };
    const activeSub = gameMode === "liga1v1" && activeSide === "B" ? teamBSubSlotRole && teamBSub : subSlotRole && userSub;
    const winnerSquad = userWinsGame ? userTeam.squad : opponent.squad;
    const loserSquad = userWinsGame ? opponent.squad : userTeam.squad;
    const winnerNameForGame = userWinsGame ? userTeam.name : opponent.name;
    const loserNameForGame = userWinsGame ? opponent.name : userTeam.name;
    const gameEntry = {
      gameNumber: seriesGameLog.length + 1,
      formationUser: userTeam.formation,
      formationOpp: opponent.formation,
      winner: winnerNameForGame,
      usedSub: !!activeSub,
      playByPlay: generatePlayByPlay(winnerNameForGame, winnerSquad, loserNameForGame, loserSquad),
      mvp: pickGameMVP(winnerSquad),
    };
    const newLog = [...seriesGameLog, gameEntry];
    setSeriesWins(newWins);
    setSeriesGameLog(newLog);

    if (newWins.home >= winsNeeded || newWins.away >= winsNeeded) {
      const result = {
        home: userTeam.name,
        away: opponent.name,
        scoreHome: newWins.home,
        scoreAway: newWins.away,
        winner: newWins.home > newWins.away ? userTeam.name : opponent.name,
      };
      setMatchResults([
        ...matchResults,
        {
          result, opponentName: opponent.name, gameLog: newLog,
          userPower: basePowerA, oppPower: basePowerB, formationUsed: userTeam.formation,
          leg: getCurrentLeg(), side: gameMode === "liga1v1" ? activeSide : "A",
          matchMvp: computeSeriesMVP(newLog),
        },
      ]);
      setPhase("matchResult");
    } else {
      setPhase("matchGameResult");
    }
  }

  function continueRegularSeries() {
    setPhase("matchPrep");
  }

  function playABGame() {
    const teamA = getTeamObjForSide("A");
    const teamB = getTeamObjForSide("B");
    const basePowerA = teamPower(teamA.squad, teamA.formation);
    const basePowerB = teamPower(teamB.squad, teamB.formation);
    let aWinsGame = consumeSimOutcome(basePowerA, basePowerB);

    const winsNeeded = Math.ceil((REGULAR_BEST_OF + 1) / 2);
    const newWins = {
      home: seriesWins.home + (aWinsGame ? 1 : 0),
      away: seriesWins.away + (aWinsGame ? 0 : 1),
    };
    const winnerSquadAB = aWinsGame ? teamA.squad : teamB.squad;
    const loserSquadAB = aWinsGame ? teamB.squad : teamA.squad;
    const winnerNameAB = aWinsGame ? teamA.name : teamB.name;
    const loserNameAB = aWinsGame ? teamB.name : teamA.name;
    const gameEntry = {
      gameNumber: seriesGameLog.length + 1,
      formationUser: teamA.formation,
      formationOpp: teamB.formation,
      winner: winnerNameAB,
      usedSub: false,
      playByPlay: generatePlayByPlay(winnerNameAB, winnerSquadAB, loserNameAB, loserSquadAB),
      mvp: pickGameMVP(winnerSquadAB),
    };
    const newLog = [...seriesGameLog, gameEntry];
    setSeriesWins(newWins);
    setSeriesGameLog(newLog);

    if (newWins.home >= winsNeeded || newWins.away >= winsNeeded) {
      const result = {
        home: teamA.name, away: teamB.name,
        scoreHome: newWins.home, scoreAway: newWins.away,
        winner: newWins.home > newWins.away ? teamA.name : teamB.name,
      };
      setMatchResults([
        ...matchResults,
        {
          result, opponentName: teamB.name, gameLog: newLog,
          userPower: basePowerA, oppPower: basePowerB, formationUsed: teamA.formation,
          leg: matchQueue[queueIndex]?.leg || 1, side: "AB",
          matchMvp: computeSeriesMVP(newLog),
        },
      ]);
      setActiveSide("A");
      setPhase("matchResult");
    } else {
      setActiveSide("A");
      setPhase("abMetaA");
    }
  }

  function nextMatch() {
    setSeriesWins({ home: 0, away: 0 });
    setSeriesGameLog([]);
    if (gameMode === "liga1v1") {
      if (queueIndex + 1 < matchQueue.length) {
        const nextIdx = queueIndex + 1;
        setQueueIndex(nextIdx);
        const entry = matchQueue[nextIdx];
        if (entry.kind === "AB") {
          setActiveSide("A");
          setPhase("abMetaA");
        } else {
          setActiveSide(entry.side);
          setPhase("matchPrep");
        }
      } else {
        finalizeRegularSeason();
      }
      return;
    }
    if (currentMatchIndex + 1 < aiTeams.length * TOTAL_LEGS) {
      setCurrentMatchIndex(currentMatchIndex + 1);
      setPhase("matchPrep");
    } else {
      finalizeRegularSeason();
    }
  }

  function finalizeRegularSeason() {
    const allTeams = gameMode === "liga1v1"
      ? [getTeamObjForSide("A"), ...aiTeams]
      : [getUserTeamObj(), ...aiTeams];
    const userResults = matchResults.map((m) => m.result);
    const allResults = [...userResults, ...aiVsAiResults];

    const standings = {};
    allTeams.forEach((t) => {
      standings[t.name] = { name: t.name, isUser: !!t.isUser, formation: t.formation, w: 0, l: 0, gf: 0, ga: 0, pts: 0 };
    });
    allResults.forEach((r) => {
      standings[r.home].gf += r.scoreHome;
      standings[r.home].ga += r.scoreAway;
      standings[r.away].gf += r.scoreAway;
      standings[r.away].ga += r.scoreHome;
      if (r.winner === r.home) {
        standings[r.home].w += 1;
        standings[r.away].l += 1;
        standings[r.home].pts += 3;
      } else {
        standings[r.away].w += 1;
        standings[r.home].l += 1;
        standings[r.away].pts += 3;
      }
    });
    const table = Object.values(standings).sort(
      (a, b) => b.pts - a.pts || b.gf - b.ga - (a.gf - a.ga)
    );

    setSeason({ teams: allTeams, results: allResults, table });
    setPhase("standings");
  }

  function getPlayoffMatch(stage, seeds, bracketObj) {
    switch (stage) {
      case "m1": return { home: seeds[2], away: seeds[5] };
      case "m2": return { home: seeds[3], away: seeds[4] };
      case "m3": return { home: seeds[0], away: bracketObj.m1 };
      case "m4": return { home: seeds[1], away: bracketObj.m2 };
      case "m5": return { home: bracketObj.m3_loser, away: bracketObj.m4_loser };
      case "m6": return { home: bracketObj.m3, away: bracketObj.m4 };
      case "m7": return { home: bracketObj.m6_loser, away: bracketObj.m5 };
      case "m8": return { home: bracketObj.m6, away: bracketObj.m7 };
      default: return null;
    }
  }

  function playPlayoffGame(home, away, stage) {
    const bo = PLAYOFF_BEST_OF[stage];
    return bo ? simulateSeries(home, away, bo) : simulateMatch(home, away);
  }

  function resolveStage(stage, seeds, bracketObj) {
    const match = { ...getPlayoffMatch(stage, seeds, bracketObj), roundLabel: PLAYOFF_LABELS[stage] };
    setPlayoffStage(stage);
    setPendingPlayoffMatch(match);
    if (match.home.isUser || match.away.isUser) {
      setSeriesWins({ home: 0, away: 0 });
      setSeriesGameLog([]);
      setPhase("playoffPrep");
    } else {
      const result = playPlayoffGame(match.home, match.away, stage);
      const winnerTeam = result.winner === match.home.name ? match.home : match.away;
      const loserTeam = result.winner === match.home.name ? match.away : match.home;
      const logEntry = { roundLabel: match.roundLabel, result, interactive: false };
      setPlayoffLog((prev) => [...prev, logEntry]);
      setPendingAdvance({ stage, winnerTeam, loserTeam, bracketObj });
      setPhase("playoffResult");
    }
  }

  function startPlayoffs() {
    const seeds = season.table.slice(0, 6).map((row) => season.teams.find((t) => t.name === row.name));
    setPlayoffSeeds(seeds);
    setBracket({});
    setPlayoffLog([]);
    resolveStage("m1", seeds, {});
  }

  function playPlayoffGameSingle() {
    const match = pendingPlayoffMatch;
    const userIsHome = match.home.isUser;
    const home = userIsHome ? getUserTeamObj() : match.home;
    const away = userIsHome ? match.away : getUserTeamObj();
    const bo = PLAYOFF_BEST_OF[playoffStage];
    const winsNeeded = Math.ceil((bo + 1) / 2);

    const basePowerHome = teamPower(home.squad, home.formation);
    const basePowerAway = teamPower(away.squad, away.formation);
    let homeWinsGame = consumeSimOutcome(basePowerHome, basePowerAway);

    const newWins = {
      home: seriesWins.home + (homeWinsGame ? 1 : 0),
      away: seriesWins.away + (homeWinsGame ? 0 : 1),
    };
    const winnerSquadPO = homeWinsGame ? home.squad : away.squad;
    const loserSquadPO = homeWinsGame ? away.squad : home.squad;
    const winnerNamePO = homeWinsGame ? home.name : away.name;
    const loserNamePO = homeWinsGame ? away.name : home.name;
    const gameEntry = {
      gameNumber: seriesGameLog.length + 1,
      formationHome: home.formation,
      formationAway: away.formation,
      winner: winnerNamePO,
      usedSub: !!subSlotRole && !!userSub,
      playByPlay: generatePlayByPlay(winnerNamePO, winnerSquadPO, loserNamePO, loserSquadPO),
      mvp: pickGameMVP(winnerSquadPO),
    };
    const newLog = [...seriesGameLog, gameEntry];
    setSeriesWins(newWins);
    setSeriesGameLog(newLog);

    if (newWins.home >= winsNeeded || newWins.away >= winsNeeded) {
      const result = {
        home: home.name, away: away.name,
        scoreHome: newWins.home, scoreAway: newWins.away,
        winner: newWins.home > newWins.away ? home.name : away.name,
        bestOf: bo,
      };
      const winnerTeam = result.winner === home.name ? home : away;
      const loserTeam = result.winner === home.name ? away : home;
      const userTeamObj = userIsHome ? home : away;
      const oppTeamObj = userIsHome ? away : home;
      const userPower = teamPower(userTeamObj.squad, userTeamObj.formation);
      const oppPower = teamPower(oppTeamObj.squad, oppTeamObj.formation);
      const logEntry = {
        roundLabel: match.roundLabel, result, interactive: true, opponentName: oppTeamObj.name,
        userPower, oppPower, formationUsed: userTeamObj.formation, gameLog: newLog,
        matchMvp: computeSeriesMVP(newLog),
      };
      setPlayoffLog((prev) => [...prev, logEntry]);
      setPendingAdvance({ stage: playoffStage, winnerTeam, loserTeam, bracketObj: bracket });
      setPhase("playoffResult");
    } else {
      setPhase("playoffGameResult");
    }
  }

  function continuePlayoffSeries() {
    setPhase("playoffPrep");
  }

  function continuePlayoff() {
    const { stage, winnerTeam, loserTeam, bracketObj } = pendingAdvance;
    const newBracket = { ...bracketObj, [stage]: winnerTeam, [`${stage}_loser`]: loserTeam };
    setBracket(newBracket);
    const idx = PLAYOFF_ORDER.indexOf(stage);
    if (idx === PLAYOFF_ORDER.length - 1) {
      setChampionTeam(winnerTeam);
      setPhase("champion");
      return;
    }
    resolveStage(PLAYOFF_ORDER[idx + 1], playoffSeeds, newBracket);
  }


  return (
    <div className="ldm-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Inter:wght@400;500;600;700&display=swap');
        html, body, #root {
          margin: 0; padding: 0; min-height: 100%; height: 100%;
          background: #060811;
        }
        .ldm-page * { box-sizing: border-box; }
        .ldm-page {
          min-height: 100vh; width: 100%; color: #E5E9F0; display: flex; flex-direction: column;
          align-items: center; padding: 24px 16px; font-family: 'Inter', sans-serif;
          background:
            radial-gradient(1200px 600px at 50% -10%, #182240 0%, #0A0E1A 55%, #060811 100%),
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0);
          background-size: auto, 26px 26px;
        }
        .ldm-container { width: 100%; max-width: 720px; }
        .ldm-header { margin-bottom: 24px; margin-top: 8px; }
        .ldm-header-row { display: flex; align-items: center; gap: 8px; }
        .ldm-icon-box { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 12px; background: rgba(251,191,36,0.14); flex-shrink: 0; }
        .ldm-title { font-family: 'Rajdhani', sans-serif; font-size: 30px; font-weight: 700; letter-spacing: 0.02em; color: #FFFFFF; margin: 0; }
        .ldm-subtitle-row { display: flex; align-items: center; gap: 8px; margin-top: 8px; margin-left: 4px; }
        .ldm-subtitle-bar { height: 4px; width: 40px; border-radius: 999px; background: #22D3EE; }
        .ldm-subtitle-text { font-size: 12px; color: #94A3B8; }
        .ldm-card { border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.08); background: rgba(19,24,41,0.9); box-shadow: 0 10px 40px rgba(0,0,0,0.35); }
        .ldm-text { color: #CBD5E1; line-height: 1.6; margin-bottom: 16px; }
        .ldm-text-small { font-size: 12px; color: #64748B; line-height: 1.6; margin-bottom: 20px; }
        .ldm-label { display: block; font-size: 14px; margin-bottom: 6px; font-weight: 500; color: #94A3B8; }
        .ldm-input { width: 100%; margin-bottom: 20px; border-radius: 12px; padding: 0 16px; font-size: 20px; font-family: 'Rajdhani', sans-serif; font-weight: 700; outline: none; border: 1px solid rgba(255,255,255,0.1); color: #fff; background: #0F1424; height: 68px; transition: border-color .15s; display: block; }
        .ldm-input:focus { border-color: #22D3EE; }
        .ldm-input::placeholder { color: #475569; }
        .ldm-formation-grid { display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 24px; }
        @media (min-width: 640px) { .ldm-formation-grid { grid-template-columns: 1fr 1fr; } }
        .ldm-formation-card { text-align: left; border-radius: 16px; padding: 16px; display: flex; gap: 16px; align-items: center; transition: all .15s ease; cursor: pointer; width: 100%; }
        .ldm-formation-key-col { display: flex; flex-direction: column; align-items: center; justify-content: center; flex-shrink: 0; width: 64px; }
        .ldm-formation-key { font-family: 'Rajdhani', sans-serif; font-weight: 700; font-size: 22px; line-height: 1; }
        .ldm-formation-label { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em; margin-top: 4px; text-align: center; }
        .ldm-formation-lines { display: flex; flex-direction: column; gap: 6px; margin-bottom: 10px; }
        .ldm-formation-line { display: flex; align-items: center; gap: 6px; }
        .ldm-dot { width: 20px; height: 20px; border-radius: 999px; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; flex-shrink: 0; color: #0A0E1A; }
        .ldm-formation-desc { font-size: 13px; color: rgba(148,163,184,0.9); line-height: 1.5; }
        .ldm-btn-primary { display: inline-flex; align-items: center; gap: 8px; font-family: 'Rajdhani', sans-serif; font-weight: 700; font-size: 18px; letter-spacing: 0.02em; color: #0A0E1A; padding: 12px 22px; border-radius: 12px; border: none; background: #FBBF24; cursor: pointer; transition: filter .15s; }
        .ldm-btn-primary:hover { filter: brightness(1.1); }
        .ldm-btn-secondary { display: inline-flex; align-items: center; gap: 8px; font-family: 'Rajdhani', sans-serif; font-weight: 700; letter-spacing: 0.02em; padding: 12px 22px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.12); background: #0F1424; color: #E5E9F0; cursor: pointer; transition: filter .15s; }
        .ldm-btn-secondary:hover { filter: brightness(1.25); }
        .ldm-draft-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
        .ldm-draft-pick { display: flex; align-items: center; gap: 8px; color: #94A3B8; font-size: 14px; }
        .ldm-draft-role { font-family: 'Rajdhani', sans-serif; font-weight: 700; font-size: 20px; letter-spacing: 0.02em; }
        .ldm-formation-note { font-size: 12px; color: #64748B; margin-bottom: 16px; }
        .ldm-reroll-btn { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 600; color: #FBBF24; background: rgba(251,191,36,0.1); border: 1px solid rgba(251,191,36,0.3); padding: 5px 10px; border-radius: 999px; transition: filter .15s; }
        .ldm-reroll-btn:hover:not(:disabled) { filter: brightness(1.2); }
        .ldm-sim-dot { width: 8px; height: 8px; border-radius: 50%; background: #FBBF24; display: inline-block; animation: ldm-sim-bounce 1s infinite ease-in-out; }
        @keyframes ldm-sim-bounce { 0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); } 40% { opacity: 1; transform: scale(1.2); } }
        .ldm-sim-line { animation: ldm-sim-fadein .35s ease-out; }
        @keyframes ldm-sim-fadein { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        .ldm-player-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin-bottom: 24px; }
        @media (min-width: 640px) { .ldm-player-grid { grid-template-columns: 1fr 1fr 1fr; } }
        .ldm-player-btn { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; border-radius: 16px; padding: 24px; border-width: 2px; border-style: solid; background: #0F1424; cursor: pointer; transition: all .15s; min-height: 220px; width: 100%; }
        .ldm-player-btn:hover { filter: brightness(1.1); transform: scale(1.02); }
        .ldm-player-name { font-family: 'Rajdhani', sans-serif; font-weight: 700; font-size: 28px; color: #fff; margin-top: 16px; margin-bottom: 12px; line-height: 1.2; }
        .ldm-player-rating { display: flex; align-items: center; gap: 8px; font-size: 18px; font-weight: 700; color: #FBBF24; }
        .ldm-tag { font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px; font-family: 'Rajdhani', sans-serif; letter-spacing: 0.02em; display: inline-block; }
        .ldm-squad-label { font-size: 12px; color: #64748B; margin-bottom: 8px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.03em; }
        .ldm-squad-list { display: flex; flex-wrap: wrap; gap: 8px; }
        .ldm-squad-chip { display: flex; align-items: center; gap: 6px; font-size: 12px; border-radius: 999px; padding: 4px 12px 4px 4px; border: 1px solid rgba(255,255,255,0.08); background: #0F1424; }
        .ldm-squad-name { color: #E2E8F0; font-weight: 500; }
        .ldm-squad-rating { color: #64748B; }
        .ldm-trophy-card { border-radius: 16px; padding: 24px; display: flex; align-items: center; gap: 16px; border: 1px solid rgba(251,191,36,0.4); background: linear-gradient(135deg, rgba(251,191,36,0.16), rgba(19,24,41,0.4)); box-shadow: 0 8px 30px rgba(251,191,36,0.08); position: relative; overflow: hidden; margin-bottom: 20px; }
        .ldm-trophy-glow-bg { position: absolute; right: -32px; top: -32px; width: 128px; height: 128px; border-radius: 999px; opacity: 0.2; filter: blur(24px); background: #FBBF24; }
        .ldm-trophy-icon { display: flex; align-items: center; justify-content: center; width: 64px; height: 64px; border-radius: 16px; flex-shrink: 0; position: relative; background: rgba(251,191,36,0.16); animation: trophyGlow 2.4s ease-in-out infinite; }
        .ldm-trophy-label { font-size: 12px; color: #94A3B8; font-weight: 500; text-transform: uppercase; letter-spacing: 0.03em; }
        .ldm-trophy-name { font-family: 'Rajdhani', sans-serif; font-weight: 700; font-size: 24px; color: #fff; }
        .ldm-trophy-sub { font-size: 14px; color: #94A3B8; }
        .ldm-standings-card { border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); background: rgba(19,24,41,0.9); overflow: hidden; margin-bottom: 20px; }
        .ldm-tabs { display: flex; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .ldm-tab { flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 16px; font-size: 14px; font-family: 'Rajdhani', sans-serif; font-weight: 700; letter-spacing: 0.02em; background: none; border: none; cursor: pointer; border-bottom: 2px solid transparent; }
        .ldm-table { width: 100%; font-size: 14px; border-collapse: collapse; }
        .ldm-table th { text-align: left; font-size: 12px; color: #64748B; font-weight: 500; padding: 10px 16px; }
        .ldm-table th.center, .ldm-table td.center { text-align: center; }
        .ldm-table td { padding: 10px 16px; border-top: 1px solid rgba(255,255,255,0.06); }
        .ldm-table tbody tr:hover td { background: rgba(255,255,255,0.03); }
        .ldm-match-grid { padding: 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        @media (min-width: 640px) { .ldm-match-grid { grid-template-columns: 1fr 1fr 1fr; } }
        .ldm-match-card { font-size: 13px; border-radius: 8px; padding: 10px 12px; display: flex; flex-direction: column; align-items: center; gap: 4px; border: 1px solid rgba(255,255,255,0.06); background: #0F1424; transition: filter .15s; }
        .ldm-match-card:hover { filter: brightness(1.1); }
        .ldm-match-team { text-align: center; line-height: 1.3; color: #CBD5E1; width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .ldm-match-score { font-family: 'Rajdhani', sans-serif; font-weight: 700; font-size: 16px; color: #FBBF24; }
        @keyframes trophyGlow {
          0%, 100% { box-shadow: 0 0 0 rgba(251,191,36,0.0); }
          50% { box-shadow: 0 0 24px rgba(251,191,36,0.35); }
        }
      `}</style>

      <div className="ldm-container">
        <header className="ldm-header">
          <div className="ldm-header-row">
            <div className="ldm-icon-box">
              <img src={LOGO_DATA_URI} alt="Logo" style={{ width: "28px", height: "28px", objectFit: "contain" }} />
            </div>
            <h1 className="ldm-title">LIGA DRAFT ML</h1>
          </div>
          <div className="ldm-subtitle-row">
            <div className="ldm-subtitle-bar" />
            <span className="ldm-subtitle-text">ALL-STAR MPL ID S1-18</span>
          </div>
        </header>

        {phase === "simulating" && (
          <div className="ldm-card">
            <div className="ldm-draft-header">
              <div className="ldm-draft-pick">
                <Swords className="w-4 h-4" />
                <span>MATCH BERLANGSUNG...</span>
              </div>
            </div>

            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <span style={{ fontSize: "15px", fontWeight: 700, color: "#E5E9F0" }}>{simHomeName}</span>
              <span style={{ fontSize: "13px", color: "#64748B", margin: "0 10px" }}>VS</span>
              <span style={{ fontSize: "15px", fontWeight: 700, color: "#E5E9F0" }}>{simAwayName}</span>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginBottom: "20px" }}>
              <span className="ldm-sim-dot" style={{ animationDelay: "0s" }} />
              <span className="ldm-sim-dot" style={{ animationDelay: "0.2s" }} />
              <span className="ldm-sim-dot" style={{ animationDelay: "0.4s" }} />
            </div>

            <div style={{ background: "#0F1424", borderRadius: "14px", padding: "16px", border: "1px solid rgba(255,255,255,0.08)", minHeight: "160px" }}>
              <div className="ldm-squad-label" style={{ marginBottom: "10px" }}>Play-by-Play</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {simCommentary.length === 0 && (
                  <div style={{ fontSize: "12px", color: "#64748B" }}>Kick-off...</div>
                )}
                {simCommentary.map((line, i) => (
                  <div
                    key={i}
                    className="ldm-sim-line"
                    style={{
                      fontSize: "12px", color: "#CBD5E1", background: "#141A2E",
                      borderRadius: "8px", padding: "8px 12px", border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {phase === "modeSelect" && (
          <div className="ldm-card">
            <p className="ldm-text">Pilih Mode</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <button onClick={() => chooseMode("solo")} className="ldm-formation-card" style={{ border: "2px solid rgba(139,92,246,0.4)", background: "#0F1424" }}>
                <div style={{ textAlign: "left" }}>
                  <div className="ldm-formation-key" style={{ color: "#8B5CF6" }}>SOLO VS AI</div>
                  <div className="ldm-formation-desc">Draft 1 tim, main liga & playoff lawan 9 tim AI kayak biasa.</div>
                </div>
              </button>
              <button onClick={() => chooseMode("liga1v1")} className="ldm-formation-card" style={{ border: "2px solid rgba(34,211,238,0.4)", background: "#0F1424" }}>
                <div style={{ textAlign: "left" }}>
                  <div className="ldm-formation-key" style={{ color: "#22D3EE" }}>1V1 LIGA </div>
                  <div className="ldm-formation-desc">
                    Kamu (Tim A) & Tim B gantian milih pemain satu-satu waktu draft, abis itu dua-duanya
                    langsung main bareng di 1 liga yang sama lawan 9 tim AI lainnya.
                  </div>
                </div>
              </button>
              <button onClick={() => chooseMode("direct1v1")} className="ldm-formation-card" style={{ border: "2px solid rgba(251,191,36,0.4)", background: "#0F1424" }}>
                <div style={{ textAlign: "left" }}>
                  <div className="ldm-formation-key" style={{ color: "#FBBF24" }}>1V1</div>
                  <div className="ldm-formation-desc">
                    Tim A & Tim B draft skuad masing-masing (gantian device), abis itu langsung diadu Bo3
                    head-to-head, nggak ada AI.
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

        {phase === "intro" && (
          <div className="ldm-card">
            {gameMode && gameMode !== "solo" && (
            <div style={{ fontSize: "12px", color: "#FBBF24", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: "10px" }}>
              Giliran {draftingTeam === "A" ? "Tim A" : "Tim B"}
              </div>
            )}
            <p className="ldm-text">

               Menjadi coach tim MPL ID dengan draft 5 pemain (Jungler, Mid, Gold, Exp, Roamer) satu per satu dari player acak yang pernah
              Bermain di MPL ID S1-S18
            </p>

            <label className="ldm-label">{(gameMode === "liga1v1" || gameMode === "direct1v1") ? "Nama Tim A (kamu)" : "Nama timmu"}</label>
            <input
              value={userTeamName}
              onChange={(e) => setUserTeamName(e.target.value)}
              placeholder="Timku FC"
              className="ldm-input"
              maxLength={24}
            />

            {(gameMode === "liga1v1" || gameMode === "direct1v1") && (
              <>
                <label className="ldm-label">Nama Tim B</label>
                <input
                  value={teamBName}
                  onChange={(e) => setTeamBName(e.target.value)}
                  placeholder="Tim B"
                  className="ldm-input"
                  maxLength={24}
                />
              </>
            )}

            {gameMode === "solo" && (
              <>
                <label className="ldm-label">Pilih Meta</label>
                <div className="ldm-formation-grid">
                  {FORMATION_KEYS.map((key) => {
                    const f = FORMATIONS[key];
                    const active = formation === key;
                    const lineOrder = ["Depan", "Tengah", "Belakang"];
                    const grouped = { Depan: [], Tengah: [], Belakang: [] };
                    ROLES.forEach((r) => grouped[f.lines[r]]?.push(r));
                    return (
                      <button
                        key={key}
                        onClick={() => setFormation(key)}
                        className="ldm-formation-card"
                        style={{
                          border: `2px solid ${active ? f.accent : "rgba(255,255,255,0.06)"}`,
                          background: active ? f.accent + "14" : "#0F1424",
                        }}
                      >
                        <div className="ldm-formation-key-col">
                          <span className="ldm-formation-key" style={{ color: active ? f.accent : "#E5E9F0" }}>
                            {key}
                          </span>
                          <span className="ldm-formation-label" style={{ color: active ? f.accent : "#7C8797" }}>
                            {f.label}
                          </span>
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div className="ldm-formation-lines">
                            {lineOrder.map((line) => (
                              <div key={line} className="ldm-formation-line">
                                {grouped[line].map((r) => (
                                  <div key={r} title={r} className="ldm-dot" style={{ background: ROLE_STYLE[r].accent }}>
                                    {ROLE_STYLE[r].label[0]}
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                          <div className="ldm-formation-desc">{f.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            <button onClick={beginDraftPhase} className="ldm-btn-primary">
              MULAI DRAFT <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {phase === "draft" && (
          <div className="ldm-card">
            {(gameMode === "liga1v1" || gameMode === "direct1v1") && (
              <div style={{ fontSize: "12px", color: draftingTeam === "A" ? "#8B5CF6" : "#22D3EE", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: "10px" }}>
                Giliran {draftingTeam === "A" ? (userTeamName.trim() || "Tim A") : (teamBName.trim() || "Tim B")} milih pemain
              </div>
            )}
            <div className="ldm-draft-header">
              <div className="ldm-draft-pick">
                <Users className="w-4 h-4" />
                <span>PICK {roleIndex + 1} / {ROLES.length}</span>
              </div>
              <span className="ldm-draft-role" style={{ color: ROLE_STYLE[ROLES[roleIndex]].accent }}>
                {ROLES[roleIndex]}
              </span>
            </div>
            <div className="ldm-formation-note" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
              <span>
                Formasi: <strong style={{ color: "#CBD5E1" }}>{formation}</strong> — {FORMATIONS[formation].label}
              </span>
              <button
                onClick={rerollCandidates}
                disabled={((gameMode === "liga1v1" || gameMode === "direct1v1") && draftingTeam === "B" ? rerollsLeftB : rerollsLeft) <= 0}
                className="ldm-reroll-btn"
                style={{ opacity: ((gameMode === "liga1v1" || gameMode === "direct1v1") && draftingTeam === "B" ? rerollsLeftB : rerollsLeft) <= 0 ? 0.4 : 1, cursor: ((gameMode === "liga1v1" || gameMode === "direct1v1") && draftingTeam === "B" ? rerollsLeftB : rerollsLeft) <= 0 ? "not-allowed" : "pointer" }}
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reroll Player ({(gameMode === "liga1v1" || gameMode === "direct1v1") && draftingTeam === "B" ? rerollsLeftB : rerollsLeft} tersisa)
              </button>
            </div>

            <div className="ldm-player-grid">
              {candidates.map((p) => {
                const s = ROLE_STYLE[p.role];
                return (
                  <button
                    key={p.id}
                    onClick={() => pickPlayer(p)}
                    className="ldm-player-btn"
                    style={{ borderColor: s.accent + "66" }}
                  >
                    <RoleTag role={p.role} />
                    <div className="ldm-player-name">{p.name}</div>
                    <div className="ldm-player-rating">
                      <Star className="w-5 h-5" /> {p.rating} OVR
                    </div>
                  </button>
                );
              })}
            </div>

            {userSquad.length > 0 && (
              <div>
                <div className="ldm-squad-label">{(gameMode === "liga1v1" || gameMode === "direct1v1") ? `Squad ${userTeamName.trim() || "Tim A"}` : "Squad sejauh ini"}</div>
                <div className="ldm-squad-list">
                  {userSquad.map((p) => (
                    <span key={p.id} className="ldm-squad-chip">
                      <RoleTag role={p.role} />
                      <span className="ldm-squad-name">{p.name}</span>
                      <span className="ldm-squad-rating">{p.rating}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {(gameMode === "liga1v1" || gameMode === "direct1v1") && teamBSquad.length > 0 && (
              <div style={{ marginTop: "14px" }}>
                <div className="ldm-squad-label">Squad {teamBName.trim() || "Tim B"}</div>
                <div className="ldm-squad-list">
                  {teamBSquad.map((p) => (
                    <span key={p.id} className="ldm-squad-chip">
                      <RoleTag role={p.role} />
                      <span className="ldm-squad-name">{p.name}</span>
                      <span className="ldm-squad-rating">{p.rating}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {phase === "draftSub" && (
          <div className="ldm-card">
            {(gameMode === "liga1v1" || gameMode === "direct1v1") && (
              <div style={{ fontSize: "12px", color: draftingTeam === "A" ? "#8B5CF6" : "#22D3EE", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: "10px" }}>
                Giliran {draftingTeam === "A" ? (userTeamName.trim() || "Tim A") : (teamBName.trim() || "Tim B")} milih cadangan
              </div>
            )}
            <div className="ldm-draft-header">
              <div className="ldm-draft-pick">
                <Users className="w-4 h-4" />
                <span>PEMAIN CADANGAN</span>
              </div>
              <button
                onClick={rerollSubCandidates}
                disabled={((gameMode === "liga1v1" || gameMode === "direct1v1") && draftingTeam === "B" ? subRerollsLeftB : subRerollsLeft) <= 0}
                className="ldm-reroll-btn"
                style={{ opacity: ((gameMode === "liga1v1" || gameMode === "direct1v1") && draftingTeam === "B" ? subRerollsLeftB : subRerollsLeft) <= 0 ? 0.4 : 1, cursor: ((gameMode === "liga1v1" || gameMode === "direct1v1") && draftingTeam === "B" ? subRerollsLeftB : subRerollsLeft) <= 0 ? "not-allowed" : "pointer" }}
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reroll Player ({(gameMode === "liga1v1" || gameMode === "direct1v1") && draftingTeam === "B" ? subRerollsLeftB : subRerollsLeft} tersisa)
              </button>
            </div>
            <p className="ldm-text">
              Starting five kamu udah lengkap. Sekarang pilih 1 pemain cadangan — 3 kandidat di bawah
              masing-masing dari role yang beda-beda (acak, hoki-hokian). Setelah dipilih, cadangan ini
              bisa dipasang gantiin starter di role MANAPUN nanti — kalau dipasang di role aslinya OVR-nya
              penuh, kalau di role lain OVR-nya turun.
            </p>

            <div className="ldm-squad-label">
              Squad Starter {(gameMode === "liga1v1" || gameMode === "direct1v1") ? (draftingTeam === "A" ? (userTeamName.trim() || "Tim A") : (teamBName.trim() || "Tim B")) : ""}
            </div>
            <div className="ldm-squad-list" style={{ marginBottom: "20px" }}>
              {((gameMode === "liga1v1" || gameMode === "direct1v1") && draftingTeam === "B" ? teamBSquad : userSquad).map((p) => (
                <span key={p.id} className="ldm-squad-chip">
                  <RoleTag role={p.role} />
                  <span className="ldm-squad-name">{p.name}</span>
                  <span className="ldm-squad-rating">{p.rating}</span>
                </span>
              ))}
            </div>

            <div className="ldm-player-grid">
              {candidates.map((p) => {
                const s = ROLE_STYLE[p.role];
                return (
                  <button
                    key={p.id}
                    onClick={() => pickSubPlayer(p)}
                    className="ldm-player-btn"
                    style={{ borderColor: s.accent + "66" }}
                  >
                    <RoleTag role={p.role} />
                    <div className="ldm-player-name">{p.name}</div>
                    <div className="ldm-player-rating">
                      <Star className="w-5 h-5" /> {p.rating} OVR
                    </div>
                  </button>
                );
              })}
            </div>

            <button onClick={skipSubDraft} className="ldm-btn-secondary">
              LEWATI, MAIN TANPA CADANGAN
            </button>
          </div>
        )}

        {phase === "matchPrep" && aiTeams[currentMatchIndex % aiTeams.length] && (
          <div className="ldm-card">
            {gameMode === "liga1v1" && (
              <div style={{ fontSize: "12px", color: activeSide === "A" ? "#8B5CF6" : "#22D3EE", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: "10px" }}>
                Giliran {activeSide === "A" ? (userTeamName.trim() || "Tim A") : (teamBName.trim() || "Tim B")} main
              </div>
            )}
            <div className="ldm-draft-header">
              <div className="ldm-draft-pick">
                <Swords className="w-4 h-4" />
                <span>
                  MATCH {gameMode === "liga1v1" ? queueIndex + 1 : currentMatchIndex + 1} / {gameMode === "liga1v1" ? matchQueue.length : aiTeams.length * TOTAL_LEGS} &middot; LEG {getCurrentLeg()}
                </span>
              </div>
              <span className="ldm-draft-role" style={{ color: "#FBBF24" }}>
                vs {getCurrentOpponent().name}
              </span>
            </div>
            <div className="ldm-formation-note">
              GAME {seriesGameLog.length + 1} dari Bo{REGULAR_BEST_OF} &middot; Skor sementara{" "}
              <strong style={{ color: "#FBBF24" }}>{seriesWins.home}–{seriesWins.away}</strong>
            </div>

            <button
              onClick={() => setShowLiveStandings(!showLiveStandings)}
              className="ldm-reroll-btn"
              style={{ color: "#22D3EE", background: "rgba(34,211,238,0.1)", borderColor: "rgba(34,211,238,0.3)", marginTop: "10px" }}
            >
              <Shield className="w-3.5 h-3.5" /> {showLiveStandings ? "Tutup Klasemen" : "Lihat Klasemen Sementara"}
            </button>

            {showLiveStandings && (
              <div style={{ marginTop: "12px", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                <table className="ldm-table">
                  <thead>
                    <tr>
                      <th>Tim</th>
                      <th className="center">M</th>
                      <th className="center">K</th>
                      <th className="center">GF</th>
                      <th className="center">GA</th>
                      <th className="center">Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {computeLiveStandings().map((t, i) => (
                      <tr key={t.name} style={{ background: t.isUser ? "rgba(251,191,36,0.08)" : "transparent" }}>
                        <td style={{ fontWeight: 500, color: t.isUser ? "#FBBF24" : "#E5E9F0" }}>{i + 1}. {t.name}</td>
                        <td className="center" style={{ color: "#CBD5E1" }}>{t.w}</td>
                        <td className="center" style={{ color: "#CBD5E1" }}>{t.l}</td>
                        <td className="center" style={{ color: "#94A3B8" }}>{t.gf}</td>
                        <td className="center" style={{ color: "#94A3B8" }}>{t.ga}</td>
                        <td className="center" style={{ fontWeight: 700, color: "#fff" }}>{t.pts}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p style={{ fontSize: "10px", color: "#64748B", padding: "8px 16px", margin: 0 }}>
                  * Poin tim AI vs AI udah ikut kehitung sejak awal, bukan cuma dari match kamu.
                </p>
              </div>
            )}
            <p className="ldm-text" style={{ marginTop: "8px" }}>
              Sebelum game ini, mau pakai meta apa? Kamu bisa ganti-ganti meta & pemain di tiap game
              dalam match Bo{REGULAR_BEST_OF} ini buat nyari strategi yang paling pas lawan tim ini.
            </p>

            <ScoutingReport team={getCurrentOpponent()} />
            {renderSquadManager()}

            {seriesGameLog.length > 0 && (
              <div style={{ marginBottom: "20px" }}>
                <div className="ldm-squad-label">Riwayat Game Match Ini</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {seriesGameLog.map((g) => {
                    const finalName = getUserTeamObj().name;
                    const won = g.winner === finalName;
                    return (
                      <div
                        key={g.gameNumber}
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          fontSize: "12px", background: "#0F1424", borderRadius: "8px", padding: "8px 12px",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <span style={{ color: "#94A3B8" }}>Game {g.gameNumber} &middot; meta {g.formationUser}</span>
                        <span style={{ fontWeight: 700, color: won ? "#34D399" : "#FB7185" }}>
                          {won ? "MENANG" : "KALAH"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <label className="ldm-label">Pilih Meta</label>
            <div className="ldm-formation-grid">
              {FORMATION_KEYS.map((key) => {
                const f = FORMATIONS[key];
                const active = getActiveFormation() === key;
                const lineOrder = ["Depan", "Tengah", "Belakang"];
                const grouped = { Depan: [], Tengah: [], Belakang: [] };
                ROLES.forEach((r) => grouped[f.lines[r]]?.push(r));
                return (
                  <button
                    key={key}
                    onClick={() => setActiveFormation(key)}
                    className="ldm-formation-card"
                    style={{
                      border: `2px solid ${active ? f.accent : "rgba(255,255,255,0.06)"}`,
                      background: active ? f.accent + "14" : "#0F1424",
                    }}
                  >
                    <div className="ldm-formation-key-col">
                      <span className="ldm-formation-key" style={{ color: active ? f.accent : "#E5E9F0" }}>
                        {key}
                      </span>
                      <span className="ldm-formation-label" style={{ color: active ? f.accent : "#7C8797" }}>
                        {f.label}
                      </span>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="ldm-formation-lines">
                        {lineOrder.map((line) => (
                          <div key={line} className="ldm-formation-line">
                            {grouped[line].map((r) => (
                              <div key={r} title={r} className="ldm-dot" style={{ background: ROLE_STYLE[r].accent }}>
                                {ROLE_STYLE[r].label[0]}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="ldm-formation-desc">{f.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => {
                const uT = getUserTeamObj();
                const opp = getCurrentOpponent();
                startMatchSimulation(uT.name, opp.name, teamPower(uT.squad, uT.formation), teamPower(opp.squad, opp.formation), playRegularGame);
              }}
              className="ldm-btn-primary"
            >
              {seriesGameLog.length === 0 ? "MULAI GAME 1" : `MAIN GAME ${seriesGameLog.length + 1}`} <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {phase === "matchGameResult" && seriesGameLog.length > 0 && (() => {
          const last = seriesGameLog[seriesGameLog.length - 1];
          const finalName = getUserTeamObj().name;
          const won = last.winner === finalName;
          return (
            <div className="ldm-card">
              <div
                className="ldm-trophy-card"
                style={{
                  border: `1px solid ${won ? "rgba(52,211,153,0.4)" : "rgba(251,113,133,0.4)"}`,
                  background: won
                    ? "linear-gradient(135deg, rgba(52,211,153,0.16), rgba(19,24,41,0.4))"
                    : "linear-gradient(135deg, rgba(251,113,133,0.16), rgba(19,24,41,0.4))",
                  marginBottom: "20px",
                }}
              >
                <div
                  className="ldm-trophy-icon"
                  style={{ background: won ? "rgba(52,211,153,0.16)" : "rgba(251,113,133,0.16)", animation: "none" }}
                >
                  <Trophy className="w-9 h-9" style={{ color: won ? "#34D399" : "#FB7185" }} />
                </div>
                <div>
                  <div className="ldm-trophy-label">
                    Game {last.gameNumber} vs {getCurrentOpponent().name} &middot; meta {last.formationUser}
                  </div>
                  <div className="ldm-trophy-name">{won ? "MENANG" : "KALAH"}</div>
                  <div className="ldm-trophy-sub">
                    Skor sementara {seriesWins.home}–{seriesWins.away} (Bo{REGULAR_BEST_OF})
                  </div>
                </div>
              </div>

              {last.playByPlay && last.playByPlay.length > 0 && (
                <div style={{ background: "#0F1424", borderRadius: "12px", padding: "14px", border: "1px solid rgba(255,255,255,0.08)", marginBottom: "14px" }}>
                  <div className="ldm-squad-label" style={{ marginBottom: "8px" }}>Play-by-Play</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {last.playByPlay.map((line, idx) => (
                      <div key={idx} style={{ fontSize: "13px", color: "#CBD5E1", display: "flex", gap: "8px" }}>
                        <span style={{ color: "#FBBF24" }}>▸</span> {line}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {last.mvp && (
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.3)", borderRadius: "10px", padding: "10px 14px", marginBottom: "16px" }}>
                  <Star className="w-4 h-4" style={{ color: "#FBBF24" }} />
                  <span style={{ fontSize: "12px", color: "#94A3B8" }}>MVP Game Ini:</span>
                  <RoleTag role={last.mvp.role} />
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#FBBF24" }}>{last.mvp.name}</span>
                  <span style={{ fontSize: "11px", color: "#64748B" }}>{last.mvp.rating} OVR</span>
                </div>
              )}

              <p className="ldm-text-small" style={{ marginBottom: "16px" }}>
                Match belum selesai. Mau ganti meta atau pasang/lepas cadangan buat game berikutnya?
              </p>

              <button onClick={continueRegularSeries} className="ldm-btn-primary">
                LANJUT KE GAME {last.gameNumber + 1} <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          );
        })()}

        {phase === "abMetaA" && (
          <div className="ldm-card">
            <div style={{ fontSize: "12px", color: "#8B5CF6", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: "10px" }}>
              Duel Langsung &middot; Giliran {userTeamName.trim() || "Tim A"} atur meta dulu
            </div>
            <div className="ldm-draft-header">
              <div className="ldm-draft-pick">
                <Swords className="w-4 h-4" />
                <span>GAME {seriesGameLog.length + 1} dari Bo{REGULAR_BEST_OF} &middot; Skor {seriesWins.home}–{seriesWins.away}</span>
              </div>
              <span className="ldm-draft-role" style={{ color: "#FBBF24" }}>
                vs {teamBName.trim() || "Tim B"}
              </span>
            </div>
            <p className="ldm-text" style={{ marginTop: "8px" }}>
              Ketemu langsung sama Tim B! {userTeamName.trim() || "Tim A"} atur meta &amp; skuad dulu, abis itu
              baru gantian Tim B yang atur. Tim B nggak bisa lihat pilihan kamu.
            </p>

            {renderSquadManagerFor(userSquad, userSub, subSlotRole, setSubSlotRole)}

            <label className="ldm-label">Pilih Meta</label>
            <div className="ldm-formation-grid">
              {FORMATION_KEYS.map((key) => {
                const f = FORMATIONS[key];
                const active = formation === key;
                const lineOrder = ["Depan", "Tengah", "Belakang"];
                const grouped = { Depan: [], Tengah: [], Belakang: [] };
                ROLES.forEach((r) => grouped[f.lines[r]]?.push(r));
                return (
                  <button
                    key={key}
                    onClick={() => setFormation(key)}
                    className="ldm-formation-card"
                    style={{
                      border: `2px solid ${active ? f.accent : "rgba(255,255,255,0.06)"}`,
                      background: active ? f.accent + "14" : "#0F1424",
                    }}
                  >
                    <div className="ldm-formation-key-col">
                      <span className="ldm-formation-key" style={{ color: active ? f.accent : "#E5E9F0" }}>{key}</span>
                      <span className="ldm-formation-label" style={{ color: active ? f.accent : "#7C8797" }}>{f.label}</span>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="ldm-formation-lines">
                        {lineOrder.map((line) => (
                          <div key={line} className="ldm-formation-line">
                            {grouped[line].map((r) => (
                              <div key={r} title={r} className="ldm-dot" style={{ background: ROLE_STYLE[r].accent }}>
                                {ROLE_STYLE[r].label[0]}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="ldm-formation-desc">{f.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <button onClick={() => setPhase("abMetaB")} className="ldm-btn-primary">
              LANJUT: GILIRAN TIM B <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {phase === "abMetaB" && (
          <div className="ldm-card">
            <div style={{ fontSize: "12px", color: "#22D3EE", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: "10px" }}>
              Duel Langsung &middot; Giliran {teamBName.trim() || "Tim B"} atur meta
            </div>
            <div className="ldm-draft-header">
              <div className="ldm-draft-pick">
                <Swords className="w-4 h-4" />
                <span>GAME {seriesGameLog.length + 1} dari Bo{REGULAR_BEST_OF} &middot; Skor {seriesWins.home}–{seriesWins.away}</span>
              </div>
              <span className="ldm-draft-role" style={{ color: "#FBBF24" }}>
                vs {userTeamName.trim() || "Tim A"}
              </span>
            </div>
            <p className="ldm-text" style={{ marginTop: "8px" }}>
              Giliran {teamBName.trim() || "Tim B"} sekarang — meta {userTeamName.trim() || "Tim A"} udah dikunci,
              nggak bisa diliat. Atur meta &amp; skuad, terus mainkan game-nya.
            </p>

            {renderSquadManagerFor(teamBSquad, teamBSub, teamBSubSlotRole, setTeamBSubSlotRole)}

            <label className="ldm-label">Pilih Meta</label>
            <div className="ldm-formation-grid">
              {FORMATION_KEYS.map((key) => {
                const f = FORMATIONS[key];
                const active = teamBFormation === key;
                const lineOrder = ["Depan", "Tengah", "Belakang"];
                const grouped = { Depan: [], Tengah: [], Belakang: [] };
                ROLES.forEach((r) => grouped[f.lines[r]]?.push(r));
                return (
                  <button
                    key={key}
                    onClick={() => setTeamBFormation(key)}
                    className="ldm-formation-card"
                    style={{
                      border: `2px solid ${active ? f.accent : "rgba(255,255,255,0.06)"}`,
                      background: active ? f.accent + "14" : "#0F1424",
                    }}
                  >
                    <div className="ldm-formation-key-col">
                      <span className="ldm-formation-key" style={{ color: active ? f.accent : "#E5E9F0" }}>{key}</span>
                      <span className="ldm-formation-label" style={{ color: active ? f.accent : "#7C8797" }}>{f.label}</span>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="ldm-formation-lines">
                        {lineOrder.map((line) => (
                          <div key={line} className="ldm-formation-line">
                            {grouped[line].map((r) => (
                              <div key={r} title={r} className="ldm-dot" style={{ background: ROLE_STYLE[r].accent }}>
                                {ROLE_STYLE[r].label[0]}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="ldm-formation-desc">{f.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => {
                const tA = getTeamObjForSide("A");
                const tB = getTeamObjForSide("B");
                startMatchSimulation(tA.name, tB.name, teamPower(tA.squad, tA.formation), teamPower(tB.squad, tB.formation), playABGame);
              }}
              className="ldm-btn-primary"
            >
              {seriesGameLog.length === 0 ? "MAINKAN GAME 1" : `MAINKAN GAME ${seriesGameLog.length + 1}`} <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {phase === "matchResult" && matchResults.length > 0 && (() => {
          const last = matchResults[matchResults.length - 1];
          const finalName = getUserTeamObj().name;
          const won = last.result.winner === finalName;
          return (
            <div className="ldm-card">
              <div
                className="ldm-trophy-card"
                style={{
                  border: `1px solid ${won ? "rgba(52,211,153,0.4)" : "rgba(251,113,133,0.4)"}`,
                  background: won
                    ? "linear-gradient(135deg, rgba(52,211,153,0.16), rgba(19,24,41,0.4))"
                    : "linear-gradient(135deg, rgba(251,113,133,0.16), rgba(19,24,41,0.4))",
                  marginBottom: "20px",
                }}
              >
                <div
                  className="ldm-trophy-icon"
                  style={{ background: won ? "rgba(52,211,153,0.16)" : "rgba(251,113,133,0.16)", animation: "none" }}
                >
                  <Trophy className="w-9 h-9" style={{ color: won ? "#34D399" : "#FB7185" }} />
                </div>
                <div>
                  <div className="ldm-trophy-label">{won ? "Menang" : "Kalah"} vs {last.opponentName} &middot; Leg {last.leg}</div>
                  <div className="ldm-trophy-name">{last.result.scoreHome}–{last.result.scoreAway}</div>
                  <div className="ldm-trophy-sub">Meta game terakhir: {last.formationUsed}</div>
                </div>
              </div>

              {last.gameLog && last.gameLog.length > 0 && (
                <div style={{ marginBottom: "20px" }}>
                  <div className="ldm-squad-label">Rincian Per Game</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {last.gameLog.map((g) => {
                      const gWon = g.winner === finalName;
                      return (
                        <div
                          key={g.gameNumber}
                          style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                            fontSize: "12px", background: "#0F1424", borderRadius: "8px", padding: "8px 12px",
                            border: "1px solid rgba(255,255,255,0.06)",
                          }}
                        >
                          <span style={{ color: "#94A3B8" }}>Game {g.gameNumber} &middot; meta {g.formationUser}</span>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            {g.mvp && (
                              <span style={{ fontSize: "10px", color: "#FBBF24" }}>
                                <Star className="w-3 h-3" style={{ display: "inline", marginRight: "2px" }} />
                                {g.mvp.name}
                              </span>
                            )}
                            <span style={{ fontWeight: 700, color: gWon ? "#34D399" : "#FB7185" }}>
                              {gWon ? "MENANG" : "KALAH"}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {last.matchMvp && (
                <div
                  style={{
                    display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap",
                    background: "linear-gradient(135deg, rgba(251,191,36,0.16), rgba(19,24,41,0.4))",
                    border: "1px solid rgba(251,191,36,0.4)", borderRadius: "12px", padding: "12px 16px", marginBottom: "20px",
                  }}
                >
                  <Star className="w-6 h-6" style={{ color: "#FBBF24" }} />
                  <div>
                    <div style={{ fontSize: "10px", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.03em" }}>Match MVP</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <RoleTag role={last.matchMvp.role} />
                      <span style={{ fontSize: "15px", fontWeight: 700, color: "#FBBF24" }}>{last.matchMvp.name}</span>
                      <span style={{ fontSize: "12px", color: "#64748B" }}>{last.matchMvp.rating} OVR</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="ldm-squad-label">Rating Kekuatan Tim</div>
              <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
                <div style={{ flex: 1, background: "#0F1424", borderRadius: "12px", padding: "14px", textAlign: "center", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: "11px", color: "#64748B", marginBottom: "4px" }}>Timmu</div>
                  <div className="ldm-title" style={{ fontSize: "24px", color: "#FBBF24" }}>{last.userPower.toFixed(1)}</div>
                </div>
                <div style={{ flex: 1, background: "#0F1424", borderRadius: "12px", padding: "14px", textAlign: "center", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: "11px", color: "#64748B", marginBottom: "4px" }}>{last.opponentName}</div>
                  <div className="ldm-title" style={{ fontSize: "24px", color: "#E5E9F0" }}>{last.oppPower.toFixed(1)}</div>
                </div>
              </div>

              <p className="ldm-text-small" style={{ marginBottom: "16px" }}>
                {currentMatchIndex + 1 < aiTeams.length * TOTAL_LEGS
                  ? "Mau ganti meta buat match berikutnya, atau tetap pakai yang sekarang? Kamu bisa ubah pilihan di layar selanjutnya."
                  : "Ini match terakhir regular season — sisa pertandingan antar tim lawan bakal disimulasikan otomatis buat nentuin siapa yang lolos 6 besar."}
              </p>

              <button onClick={nextMatch} className="ldm-btn-primary">
                {currentMatchIndex + 1 < aiTeams.length * TOTAL_LEGS ? "LANJUT KE MATCH BERIKUTNYA" : "LIHAT HASIL REGULAR SEASON"} <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          );
        })()}

        {phase === "standings" && season && (
          <div>
            <div className="ldm-trophy-card">
              <div className="ldm-trophy-glow-bg" />
              <div className="ldm-trophy-icon">
                <Trophy className="w-9 h-9" style={{ color: "#FBBF24" }} />
              </div>
              <div style={{ position: "relative" }}>
                <div className="ldm-trophy-label">Regular Season Selesai</div>
                <div className="ldm-trophy-name">Puncak Klasemen: {season.table[0].name}</div>
                <div className="ldm-trophy-sub">
                  6 besar lolos ke babak playoff (1 leg, sistem gugur)
                </div>
              </div>
            </div>

            <div className="ldm-standings-card">
              <div className="ldm-tabs">
                <button
                  onClick={() => setStandingsTab("klasemen")}
                  className="ldm-tab"
                  style={{
                    color: standingsTab === "klasemen" ? "#FBBF24" : "#7C8797",
                    borderBottomColor: standingsTab === "klasemen" ? "#FBBF24" : "transparent",
                  }}
                >
                  <Shield className="w-4 h-4" /> KLASEMEN
                </button>
                <button
                  onClick={() => setStandingsTab("hasil")}
                  className="ldm-tab"
                  style={{
                    color: standingsTab === "hasil" ? "#FBBF24" : "#7C8797",
                    borderBottomColor: standingsTab === "hasil" ? "#FBBF24" : "transparent",
                  }}
                >
                  <Swords className="w-4 h-4" /> HASIL PERTANDINGAN
                </button>
              </div>

              {standingsTab === "klasemen" ? (
                <table className="ldm-table">
                  <thead>
                    <tr>
                      <th>Tim</th>
                      <th className="center">M</th>
                      <th className="center">K</th>
                      <th className="center">GF</th>
                      <th className="center">GA</th>
                      <th className="center">Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {season.table.map((t, i) => (
                      <tr key={t.name} style={{ background: t.isUser ? "rgba(251,191,36,0.08)" : "transparent" }}>
                        <td style={{ fontWeight: 500, color: t.isUser ? "#FBBF24" : "#E5E9F0" }}>
                          {i + 1}. {t.name}
                          {t.formation && (
                            <span style={{ marginLeft: "8px", fontSize: "10px", color: "#64748B", fontWeight: 400 }}>
                              ({t.formation})
                            </span>
                          )}
                          {i < 6 && (
                            <span style={{ marginLeft: "8px", fontSize: "9px", fontWeight: 700, color: "#34D399", background: "rgba(52,211,153,0.14)", padding: "2px 6px", borderRadius: "4px" }}>
                              LOLOS
                            </span>
                          )}
                        </td>
                        <td className="center" style={{ color: "#CBD5E1" }}>{t.w}</td>
                        <td className="center" style={{ color: "#CBD5E1" }}>{t.l}</td>
                        <td className="center" style={{ color: "#94A3B8" }}>{t.gf}</td>
                        <td className="center" style={{ color: "#94A3B8" }}>{t.ga}</td>
                        <td className="center" style={{ fontWeight: 700, color: "#fff" }}>{t.pts}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="ldm-match-grid">
                  {season.results.map((r, idx) => (
                    <div key={idx} className="ldm-match-card">
                      <span className="ldm-match-team">{r.home}</span>
                      <span className="ldm-match-score">{r.scoreHome}–{r.scoreAway}</span>
                      <span className="ldm-match-team">{r.away}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {(() => {
              const nameA = userTeamName.trim() || "Timku FC";
              const rankA = season.table.findIndex((t) => t.name === nameA);
              if (gameMode !== "liga1v1") {
                const qualified = rankA < 6;
                return (
                  <p className="ldm-text-small" style={{ margin: "16px 0" }}>
                    {qualified
                      ? `Timmu finish di posisi ke-${rankA + 1} — lolos ke playoff! Kamu bakal main tiap match yang melibatkan timmu.`
                      : `Timmu finish di posisi ke-${rankA + 1}, gak lolos 6 besar. Playoff tetap berjalan buat nentuin juara antar tim lain.`}
                  </p>
                );
              }
              const nameB = teamBName.trim() || "Tim B";
              const rankB = season.table.findIndex((t) => t.name === nameB);
              return (
                <p className="ldm-text-small" style={{ margin: "16px 0" }}>
                  {nameA} finish posisi ke-{rankA + 1} ({rankA < 6 ? "lolos playoff" : "gak lolos"}) &middot;{" "}
                  {nameB} finish posisi ke-{rankB + 1} ({rankB < 6 ? "lolos playoff" : "gak lolos"}).
                  Match yang melibatkan salah satu dari kalian tetap dimainkan interaktif gantian.
                </p>
              );
            })()}

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <button onClick={startPlayoffs} className="ldm-btn-primary">
                LANJUT KE PLAYOFF <ChevronRight className="w-5 h-5" />
              </button>
              <button onClick={() => openBracket("standings")} className="ldm-btn-secondary">
                <Trophy className="w-4 h-4" /> LIHAT BRACKET
              </button>
            </div>
          </div>
        )}

        {phase === "playoffPrep" && pendingPlayoffMatch && (
          <div className="ldm-card">
            <div className="ldm-draft-header">
              <div className="ldm-draft-pick">
                <Trophy className="w-4 h-4" />
                <span>PLAYOFF &middot; {pendingPlayoffMatch.roundLabel}</span>
              </div>
              <span className="ldm-draft-role" style={{ color: "#FBBF24" }}>
                {pendingPlayoffMatch.home.isUser
                  ? `vs ${pendingPlayoffMatch.away.name}`
                  : `vs ${pendingPlayoffMatch.home.name}`}
              </span>
            </div>

            <button
              onClick={() => openBracket("playoffPrep")}
              className="ldm-reroll-btn"
              style={{ color: "#8B5CF6", background: "rgba(139,92,246,0.1)", borderColor: "rgba(139,92,246,0.3)", marginTop: "10px", marginBottom: "10px" }}
            >
              <Trophy className="w-3.5 h-3.5" /> Lihat Bracket
            </button>

            <p className="ldm-text" style={{ marginTop: "4px" }}>
              Ini pertandingan Best of {PLAYOFF_BEST_OF[playoffStage]}. Pilih meta & susunan pemain terbaikmu
              buat tiap game — kamu bisa ganti-ganti lagi sebelum game berikutnya kalau seriesnya belum selesai.
            </p>

            <div className="ldm-formation-note">
              GAME {seriesGameLog.length + 1} dari Bo{PLAYOFF_BEST_OF[playoffStage]} &middot; Skor sementara{" "}
              <strong style={{ color: "#FBBF24" }}>
                {pendingPlayoffMatch.home.isUser ? seriesWins.home : seriesWins.away}–
                {pendingPlayoffMatch.home.isUser ? seriesWins.away : seriesWins.home}
              </strong>
            </div>

            <ScoutingReport team={pendingPlayoffMatch.home.isUser ? pendingPlayoffMatch.away : pendingPlayoffMatch.home} />
            {renderSquadManager()}

            {seriesGameLog.length > 0 && (
              <div style={{ marginBottom: "20px" }}>
                <div className="ldm-squad-label">Riwayat Game Series Ini</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {seriesGameLog.map((g) => {
                    const userIsHome = pendingPlayoffMatch.home.isUser;
                    const userFormation = userIsHome ? g.formationHome : g.formationAway;
                    const userTeamName_ = userIsHome ? pendingPlayoffMatch.home.name : pendingPlayoffMatch.away.name;
                    const won = g.winner === userTeamName_;
                    return (
                      <div
                        key={g.gameNumber}
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          fontSize: "12px", background: "#0F1424", borderRadius: "8px", padding: "8px 12px",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <span style={{ color: "#94A3B8" }}>Game {g.gameNumber} &middot; meta {userFormation}</span>
                        <span style={{ fontWeight: 700, color: won ? "#34D399" : "#FB7185" }}>
                          {won ? "MENANG" : "KALAH"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <label className="ldm-label">Pilih Meta</label>
            <div className="ldm-formation-grid">
              {FORMATION_KEYS.map((key) => {
                const f = FORMATIONS[key];
                const active = getActiveFormation() === key;
                const lineOrder = ["Depan", "Tengah", "Belakang"];
                const grouped = { Depan: [], Tengah: [], Belakang: [] };
                ROLES.forEach((r) => grouped[f.lines[r]]?.push(r));
                return (
                  <button
                    key={key}
                    onClick={() => setActiveFormation(key)}
                    className="ldm-formation-card"
                    style={{
                      border: `2px solid ${active ? f.accent : "rgba(255,255,255,0.06)"}`,
                      background: active ? f.accent + "14" : "#0F1424",
                    }}
                  >
                    <div className="ldm-formation-key-col">
                      <span className="ldm-formation-key" style={{ color: active ? f.accent : "#E5E9F0" }}>
                        {key}
                      </span>
                      <span className="ldm-formation-label" style={{ color: active ? f.accent : "#7C8797" }}>
                        {f.label}
                      </span>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="ldm-formation-lines">
                        {lineOrder.map((line) => (
                          <div key={line} className="ldm-formation-line">
                            {grouped[line].map((r) => (
                              <div key={r} title={r} className="ldm-dot" style={{ background: ROLE_STYLE[r].accent }}>
                                {ROLE_STYLE[r].label[0]}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="ldm-formation-desc">{f.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => {
                const userIsHome = pendingPlayoffMatch.home.isUser;
                const h = userIsHome ? getUserTeamObj() : pendingPlayoffMatch.home;
                const a = userIsHome ? pendingPlayoffMatch.away : getUserTeamObj();
                startMatchSimulation(h.name, a.name, teamPower(h.squad, h.formation), teamPower(a.squad, a.formation), playPlayoffGameSingle);
              }}
              className="ldm-btn-primary"
            >
              {seriesGameLog.length === 0 ? "MULAI GAME 1" : `MAIN GAME ${seriesGameLog.length + 1}`} <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {phase === "playoffGameResult" && seriesGameLog.length > 0 && pendingPlayoffMatch && (() => {
          const last = seriesGameLog[seriesGameLog.length - 1];
          const userIsHome = pendingPlayoffMatch.home.isUser;
          const userTeamName_ = userIsHome ? pendingPlayoffMatch.home.name : pendingPlayoffMatch.away.name;
          const oppName = userIsHome ? pendingPlayoffMatch.away.name : pendingPlayoffMatch.home.name;
          const userFormationUsed = userIsHome ? last.formationHome : last.formationAway;
          const won = last.winner === userTeamName_;
          const userScore = userIsHome ? seriesWins.home : seriesWins.away;
          const oppScore = userIsHome ? seriesWins.away : seriesWins.home;
          return (
            <div className="ldm-card">
              <div
                className="ldm-trophy-card"
                style={{
                  border: `1px solid ${won ? "rgba(52,211,153,0.4)" : "rgba(251,113,133,0.4)"}`,
                  background: won
                    ? "linear-gradient(135deg, rgba(52,211,153,0.16), rgba(19,24,41,0.4))"
                    : "linear-gradient(135deg, rgba(251,113,133,0.16), rgba(19,24,41,0.4))",
                  marginBottom: "20px",
                }}
              >
                <div
                  className="ldm-trophy-icon"
                  style={{ background: won ? "rgba(52,211,153,0.16)" : "rgba(251,113,133,0.16)", animation: "none" }}
                >
                  <Trophy className="w-9 h-9" style={{ color: won ? "#34D399" : "#FB7185" }} />
                </div>
                <div>
                  <div className="ldm-trophy-label">
                    Game {last.gameNumber} vs {oppName} &middot; meta {userFormationUsed}
                  </div>
                  <div className="ldm-trophy-name">{won ? "MENANG" : "KALAH"}</div>
                  <div className="ldm-trophy-sub">
                    Skor sementara {userScore}–{oppScore} (Bo{PLAYOFF_BEST_OF[playoffStage]})
                  </div>
                </div>
              </div>

              {last.playByPlay && last.playByPlay.length > 0 && (
                <div style={{ background: "#0F1424", borderRadius: "12px", padding: "14px", border: "1px solid rgba(255,255,255,0.08)", marginBottom: "14px" }}>
                  <div className="ldm-squad-label" style={{ marginBottom: "8px" }}>Play-by-Play</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {last.playByPlay.map((line, idx) => (
                      <div key={idx} style={{ fontSize: "13px", color: "#CBD5E1", display: "flex", gap: "8px" }}>
                        <span style={{ color: "#FBBF24" }}>▸</span> {line}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {last.mvp && (
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.3)", borderRadius: "10px", padding: "10px 14px", marginBottom: "16px" }}>
                  <Star className="w-4 h-4" style={{ color: "#FBBF24" }} />
                  <span style={{ fontSize: "12px", color: "#94A3B8" }}>MVP Game Ini:</span>
                  <RoleTag role={last.mvp.role} />
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#FBBF24" }}>{last.mvp.name}</span>
                  <span style={{ fontSize: "11px", color: "#64748B" }}>{last.mvp.rating} OVR</span>
                </div>
              )}

              <p className="ldm-text-small" style={{ marginBottom: "16px" }}>
                Series belum selesai. Mau ganti meta atau pasang/lepas cadangan buat game berikutnya?
              </p>

              <button onClick={continuePlayoffSeries} className="ldm-btn-primary">
                LANJUT KE GAME {last.gameNumber + 1} <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          );
        })()}

        {phase === "playoffResult" && playoffLog.length > 0 && (() => {
          const last = playoffLog[playoffLog.length - 1];
          const isFinalRound = pendingAdvance?.stage === "m8";
          const won = last.interactive ? pendingAdvance.winnerTeam.isUser : false;
          return (
            <div className="ldm-card">
              <div
                className="ldm-trophy-card"
                style={{
                  border: last.interactive
                    ? `1px solid ${won ? "rgba(52,211,153,0.4)" : "rgba(251,113,133,0.4)"}`
                    : "1px solid rgba(255,255,255,0.1)",
                  background: last.interactive
                    ? won
                      ? "linear-gradient(135deg, rgba(52,211,153,0.16), rgba(19,24,41,0.4))"
                      : "linear-gradient(135deg, rgba(251,113,133,0.16), rgba(19,24,41,0.4))"
                    : "linear-gradient(135deg, rgba(139,92,246,0.14), rgba(19,24,41,0.4))",
                  marginBottom: "20px",
                }}
              >
                <div
                  className="ldm-trophy-icon"
                  style={{
                    background: last.interactive ? (won ? "rgba(52,211,153,0.16)" : "rgba(251,113,133,0.16)") : "rgba(139,92,246,0.16)",
                    animation: "none",
                  }}
                >
                  <Trophy className="w-9 h-9" style={{ color: last.interactive ? (won ? "#34D399" : "#FB7185") : "#8B5CF6" }} />
                </div>
                <div>
                  <div className="ldm-trophy-label">{last.roundLabel}</div>
                  <div className="ldm-trophy-name">
                    {last.result.home} {last.result.scoreHome}–{last.result.scoreAway} {last.result.away}
                  </div>
                  <div className="ldm-trophy-sub">
                    {last.interactive
                      ? `${won ? "Timmu menang" : "Timmu kalah"} — pakai meta ${last.formationUsed}`
                      : `Pemenang: ${last.result.winner}`}
                  </div>
                </div>
              </div>

              {last.interactive && last.gameLog && last.gameLog.length > 0 && (
                <div style={{ marginBottom: "20px" }}>
                  <div className="ldm-squad-label">Rincian Per Game</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {last.gameLog.map((g) => {
                      const finalName = getUserTeamObj().name;
                      const userWonGame = g.winner === finalName;
                      return (
                        <div
                          key={g.gameNumber}
                          style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                            fontSize: "12px", background: "#0F1424", borderRadius: "8px", padding: "8px 12px",
                            border: "1px solid rgba(255,255,255,0.06)",
                          }}
                        >
                          <span style={{ color: "#94A3B8" }}>Game {g.gameNumber}</span>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            {g.mvp && (
                              <span style={{ fontSize: "10px", color: "#FBBF24" }}>
                                <Star className="w-3 h-3" style={{ display: "inline", marginRight: "2px" }} />
                                {g.mvp.name}
                              </span>
                            )}
                            <span style={{ fontWeight: 700, color: userWonGame ? "#34D399" : "#FB7185" }}>
                              {userWonGame ? "MENANG" : "KALAH"}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {last.matchMvp && (
                <div
                  style={{
                    display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap",
                    background: "linear-gradient(135deg, rgba(251,191,36,0.16), rgba(19,24,41,0.4))",
                    border: "1px solid rgba(251,191,36,0.4)", borderRadius: "12px", padding: "12px 16px", marginBottom: "20px",
                  }}
                >
                  <Star className="w-6 h-6" style={{ color: "#FBBF24" }} />
                  <div>
                    <div style={{ fontSize: "10px", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.03em" }}>Match MVP</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <RoleTag role={last.matchMvp.role} />
                      <span style={{ fontSize: "15px", fontWeight: 700, color: "#FBBF24" }}>{last.matchMvp.name}</span>
                      <span style={{ fontSize: "12px", color: "#64748B" }}>{last.matchMvp.rating} OVR</span>
                    </div>
                  </div>
                </div>
              )}

              {last.interactive && (
                <>
                  <div className="ldm-squad-label">Rating Kekuatan Tim</div>
                  <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
                    <div style={{ flex: 1, background: "#0F1424", borderRadius: "12px", padding: "14px", textAlign: "center", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div style={{ fontSize: "11px", color: "#64748B", marginBottom: "4px" }}>Timmu</div>
                      <div className="ldm-title" style={{ fontSize: "24px", color: "#FBBF24" }}>{last.userPower.toFixed(1)}</div>
                    </div>
                    <div style={{ flex: 1, background: "#0F1424", borderRadius: "12px", padding: "14px", textAlign: "center", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div style={{ fontSize: "11px", color: "#64748B", marginBottom: "4px" }}>{last.opponentName}</div>
                      <div className="ldm-title" style={{ fontSize: "24px", color: "#E5E9F0" }}>{last.oppPower.toFixed(1)}</div>
                    </div>
                  </div>
                </>
              )}

              <p className="ldm-text-small" style={{ marginBottom: "16px" }}>
                {isFinalRound ? "Ini Grand Final — saatnya lihat siapa juaranya!" : "Lanjut ke babak berikutnya."}
              </p>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <button onClick={continuePlayoff} className="ldm-btn-primary">
                  {isFinalRound ? "LIHAT JUARA" : "LANJUT BABAK BERIKUTNYA"} <ChevronRight className="w-5 h-5" />
                </button>
                <button onClick={() => openBracket("playoffResult")} className="ldm-btn-secondary">
                  <Trophy className="w-4 h-4" /> LIHAT BRACKET
                </button>
              </div>
            </div>
          );
        })()}

        {phase === "bracket" && season && (() => {
          const seeds = playoffSeeds.length
            ? playoffSeeds
            : season.table.slice(0, 6).map((row) => season.teams.find((t) => t.name === row.name));
          if (seeds.length < 6) return null;
          const m1h = seeds[2], m1a = seeds[5];
          const m2h = seeds[3], m2a = seeds[4];
          const m3h = seeds[0], m3a = bracket.m1 || null;
          const m4h = seeds[1], m4a = bracket.m2 || null;
          const m5h = bracket.m3_loser || null, m5a = bracket.m4_loser || null;
          const m6h = bracket.m3 || null, m6a = bracket.m4 || null;
          const m7h = bracket.m6_loser || null, m7a = bracket.m5 || null;
          const m8h = bracket.m6 || null, m8a = bracket.m7 || null;
          return (
            <div>
              <div className="ldm-card" style={{ marginBottom: "16px" }}>
                <div className="ldm-draft-header" style={{ marginBottom: "12px" }}>
                  <span className="ldm-draft-role" style={{ color: "#FBBF24" }}>
                    Playoff Bracket {playoffSeeds.length ? "" : "(Prediksi)"}
                  </span>
                </div>
                <p className="ldm-text-small" style={{ marginBottom: "16px" }}>
                  Seed 1 & 2 dapet bye langsung ke Ronde 2 Upper Bracket. Kalah di M1/M2 langsung tersingkir.
                  Pemenang M6 (Upper Bracket Final) lolos langsung ke Grand Final; yang kalah masih dapet
                  kesempatan lewat Lower Bracket Final (M7).
                </p>

                <div className="ldm-squad-label">Upper Bracket — Ronde 1</div>
                {renderBracketMatch("m1", m1h, m1a)}
                {renderBracketMatch("m2", m2h, m2a)}

                <div className="ldm-squad-label" style={{ marginTop: "12px" }}>Upper Bracket — Ronde 2</div>
                {renderBracketMatch("m3", m3h, m3a)}
                {renderBracketMatch("m4", m4h, m4a)}

                <div className="ldm-squad-label" style={{ marginTop: "12px" }}>Lower Bracket — Ronde 1</div>
                {renderBracketMatch("m5", m5h, m5a)}

                <div className="ldm-squad-label" style={{ marginTop: "12px" }}>Upper Bracket Final</div>
                {renderBracketMatch("m6", m6h, m6a)}

                <div className="ldm-squad-label" style={{ marginTop: "12px" }}>Lower Bracket Final</div>
                {renderBracketMatch("m7", m7h, m7a)}

                <div className="ldm-squad-label" style={{ marginTop: "12px" }}>Grand Final</div>
                {renderBracketMatch("m8", m8h, m8a)}
              </div>

              <button onClick={() => setPhase(bracketReturnPhase)} className="ldm-btn-secondary">
                KEMBALI
              </button>
            </div>
          );
        })()}

        {phase === "champion" && championTeam && (
          <div>
            <div
              className="ldm-trophy-card"
              style={{
                border: "1px solid rgba(251,191,36,0.5)",
                background: "linear-gradient(135deg, rgba(251,191,36,0.2), rgba(19,24,41,0.4))",
              }}
            >
              <div className="ldm-trophy-glow-bg" />
              <div className="ldm-trophy-icon">
                <Trophy className="w-9 h-9" style={{ color: "#FBBF24" }} />
              </div>
              <div style={{ position: "relative" }}>
                <div className="ldm-trophy-label">Juara MPL ID ALLSTAR</div>
                <div className="ldm-trophy-name" style={{ fontSize: "28px" }}>
                  {championTeam.isUser ? `🏆 ${championTeam.name} (Kamu!)` : championTeam.name}
                </div>
                <div className="ldm-trophy-sub">
                  {championTeam.isUser
                    ? "Selamat! Timmu berhasil jadi juara turnamen."
                    : "Timmu belum berhasil jadi juara musim ini."}
                </div>
              </div>
            </div>

            <div className="ldm-standings-card" style={{ padding: "16px" }}>
              <div className="ldm-squad-label" style={{ marginBottom: "12px" }}>Rekap Playoff</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {playoffLog.map((log, idx) => (
                  <div key={idx} className="ldm-match-card" style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "11px", color: "#64748B", width: "110px" }}>{log.roundLabel}</span>
                    <span className="ldm-match-team" style={{ width: "auto", flex: 1 }}>{log.result.home}</span>
                    <span className="ldm-match-score">{log.result.scoreHome}–{log.result.scoreAway}</span>
                    <span className="ldm-match-team" style={{ width: "auto", flex: 1 }}>{log.result.away}</span>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={startNewGame} className="ldm-btn-secondary" style={{ marginTop: "20px" }}>
              <RotateCcw className="w-4 h-4" /> MAIN LAGI
            </button>
          </div>
      )}

        {phase === "duelPrep" && teamAData && teamBData && (
          <div className="ldm-card">
            <div className="ldm-draft-header">
              <div className="ldm-draft-pick">
                <Swords className="w-4 h-4" />
                <span>HEAD-TO-HEAD &middot; GAME {duelGameLog.length + 1} (Bo{REGULAR_BEST_OF})</span>
              </div>
              <span className="ldm-draft-role" style={{ color: "#FBBF24" }}>
                Giliran {duelTurn === "A" ? teamAData.name : teamBData.name}
              </span>
              </div>

            <p className="ldm-text">
              {duelTurn === "A" ? teamAData.name : teamBData.name} pilih meta & susunan pemain dulu, abis itu oper device.
            </p>

            <div className="ldm-formation-note">
              Skor sementara: {teamAData.name} <strong style={{ color: "#FBBF24" }}>{duelWins.a}</strong> – <strong style={{ color: "#FBBF24" }}>{duelWins.b}</strong> {teamBData.name}
            </div>

            {renderDuelSquadManager(duelTurn)}

            <label className="ldm-label">Pilih Meta</label>
            {renderDuelFormationGrid(duelTurn)}

            <button
              onClick={() => (duelTurn === "A" ? setDuelTurn("B") : (() => {
                const tA = getDuelTeamObj("A");
                const tB = getDuelTeamObj("B");
                startMatchSimulation(tA.name, tB.name, teamPower(tA.squad, tA.formation), teamPower(tB.squad, tB.formation), playDuelGame);
              })())}
              className="ldm-btn-primary"
              >
              {duelTurn === "A" ? `LANJUT: GILIRAN ${teamBData.name}` : `MULAI GAME ${duelGameLog.length + 1}`} <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {phase === "duelGameResult" && duelGameLog.length > 0 && teamAData && teamBData && (() => {
          const last = duelGameLog[duelGameLog.length - 1];
          const winnerName = last.winner === "A" ? teamAData.name : teamBData.name;
          return (
            <div className="ldm-card">
              <div className="ldm-trophy-card" style={{ border: "1px solid rgba(251,191,36,0.4)", background: "linear-gradient(135deg, rgba(251,191,36,0.16), rgba(19,24,41,0.4))", marginBottom: "20px" }}>
                <div className="ldm-trophy-icon" style={{ background: "rgba(251,191,36,0.16)", animation: "none" }}>
                  <Trophy className="w-9 h-9" style={{ color: "#FBBF24" }} />
                </div>
                <div>
                   <div className="ldm-trophy-label">Game {last.gameNumber}</div>
                  <div className="ldm-trophy-name">{winnerName} Menang</div>
                  <div className="ldm-trophy-sub">
                    {teamAData.name} {duelWins.a} – {duelWins.b} {teamBData.name} &middot; meta {last.formationA} vs {last.formationB}
                  </div>
                </div>
              </div>
              <button onClick={() => { setDuelTurn((last.gameNumber + 1) % 2 === 0 ? "B" : "A"); setPhase("duelPrep"); }} className="ldm-btn-primary">
                LANJUT KE GAME {last.gameNumber + 1} <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          );
        })()}
{phase === "duelResult" && teamAData && teamBData && (() => {
          const championName = duelWins.a > duelWins.b ? teamAData.name : teamBData.name;
          return (
            <div>
              <div className="ldm-trophy-card" style={{ border: "1px solid rgba(251,191,36,0.5)", background: "linear-gradient(135deg, rgba(251,191,36,0.2), rgba(19,24,41,0.4))" }}>
                <div className="ldm-trophy-glow-bg" />
                <div className="ldm-trophy-icon">
                  <Trophy className="w-9 h-9" style={{ color: "#FBBF24" }} />
                </div>
                <div style={{ position: "relative" }}>
                  <div className="ldm-trophy-label">Hasil Head-to-Head</div>
                  <div className="ldm-trophy-name" style={{ fontSize: "28px" }}>🏆 {championName}</div>
                  <div className="ldm-trophy-sub">{teamAData.name} {duelWins.a} – {duelWins.b} {teamBData.name}</div>
                </div>
              </div>
 <div className="ldm-standings-card" style={{ padding: "16px" }}>
                <div className="ldm-squad-label" style={{ marginBottom: "12px" }}>Rincian Per Game</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {duelGameLog.map((g) => (
                    <div key={g.gameNumber} className="ldm-match-card" style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "11px", color: "#64748B", width: "60px" }}>Game {g.gameNumber}</span>
                      <span className="ldm-match-team" style={{ width: "auto", flex: 1 }}>{teamAData.name} ({g.formationA})</span>
                      <span className="ldm-match-score">{g.winner === "A" ? "W" : "L"}-{g.winner === "B" ? "W" : "L"}</span>
                      <span className="ldm-match-team" style={{ width: "auto", flex: 1 }}>{teamBData.name} ({g.formationB})</span>
                    </div>
                  ))}
                </div>
              </div>
               <button onClick={startNewGame} className="ldm-btn-secondary" style={{ marginTop: "20px" }}>
                <RotateCcw className="w-4 h-4" /> MAIN LAGI
              </button>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
