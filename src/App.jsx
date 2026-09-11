import React, { useState } from "react";
import { Trophy, Swords, Users, Star, ChevronRight, RotateCcw, Shield } from "lucide-react";

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
    ["Oura", 84], ["Celiboy", 89], ["Kayn", 79], ["Kevin", 79], ["Tazz", 80], ["Super Kenn", 75], ["Kenn", 80], ["JessNoLimit", 86], ["High", 80], ["Woshipaul", 78], ["MarceL", 78],
    ["Nazara", 78], ["Affan", 80], ["Andoryuuu", 81], ["Rave", 80], ["Vincent", 79], ["Faviann", 83], ["Variety", 79], ["Yazuke", 81], ["Fearless", 74],["Gebe", 75], ["Joshua", 79]
  ],
  "Mid Laner": [
    ["SANZ", 92], ["DrianW", 72], ["Luminaire", 93], ["RINZ", 84], ["Yehezkiel", 86], ["Clayyy", 81], ["Swaylow", 79], ["Roundel", 78], ["Wannn", 90], ["Kido", 77],
    ["Jiizee", 81], ["Hajirin", 77], ["Dalvin", 83], ["Moreno", 87], ["Swaylow", 79], ["Facehugger", 83], ["Renbo", 80], ["Hijume", 84], ["Crish", 73],
    ["Octa", 80], ["Drichel", 79], ["Billy", 78], ["ABOY", 81], ["Udil", 88], ["Lemon", 95],["Ryzaa", 71], ["Rexxy", 76], ["Tezet", 74], ["Drian", 86]
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
    ["Donkey", 89], ["Kiboy", 91], ["LJ", 86], ["Psychoo", 87], ["Leomurphy", 83], ["Yawi", 82], ["Dreams", 83],["Fredo", 79], ["Marsha", 78],
    ["Finn", 85], ["Muezza", 80], ["Said", 78], ["Alexander", 84], ["Godiva", 82], ["Xwin", 74],["Rave", 82], ["Baloyskie", 84], ["widy", 81], ["Alek", 85],
    ["Lyoni", 70], ["APHRO", 83], ["AudyTzy", 77], ["Itoshi Kesu", 81], ["REKT", 89], ["Naomi", 83], ["Brusko", 82], ["Liam", 84],["Owenn", 73], ["Shanee", 79]
  ],
};

const TEAM_NAMES = [
  "Geek Fam", "Evos Esport", "Dewa United", "RRQ Hoshi", "Liquid ID", "Bigetron", "Onic Esport", "Alter Ego", "NAVI"
];

const FORMATIONS = {
  "1-3-1": {
    label: "Seimbang",
    accent: "#8B5CF6",
    desc: "Roamer jaga belakang, 3 role tengah (Jungler/Mid/Exp) jadi tulang punggung, Gold di depan.",
    lines: { Roamer: "Belakang", Jungler: "Tengah", "Mid Laner": "Tengah", "Exp Laner": "Tengah", "Gold Laner": "Depan" },
  },
  "2-1-2": {
    label: "Serang Total",
    accent: "#FB7185",
    desc: "Roamer & Exp jaga belakang, Jungler di tengah, Gold & Mid digenjot buat nyerang.",
    lines: { Roamer: "Belakang", "Exp Laner": "Belakang", Jungler: "Tengah", "Mid Laner": "Depan", "Gold Laner": "Depan" },
  },
  "3-1-1": {
    label: "Bertahan / Farming",
    accent: "#22D3EE",
    desc: "Roamer, Exp, Jungler fokus jaga area & farming aman, Mid di tengah, cuma Gold yang nyerang.",
    lines: { Roamer: "Belakang", "Exp Laner": "Belakang", Jungler: "Belakang", "Mid Laner": "Tengah", "Gold Laner": "Depan" },
  },
  "1-1-3": {
    label: "Hyper Aggressive",
    accent: "#FBBF24",
    desc: "Cuma Roamer jaga belakang, Jungler di tengah, Mid/Exp/Gold sama-sama digas nyerang.",
    lines: { Roamer: "Belakang", Jungler: "Tengah", "Mid Laner": "Depan", "Exp Laner": "Depan", "Gold Laner": "Depan" },
  },
  "2-2-1": {
    label: "Kontrol Map",
    accent: "#34D399",
    desc: "Roamer & Jungler kuasai rotasi, Exp & Mid pegang lane tengah, Gold jadi ujung tombak.",
    lines: { Roamer: "Belakang", Jungler: "Belakang", "Exp Laner": "Tengah", "Mid Laner": "Tengah", "Gold Laner": "Depan" },
  },
  "0-5-0": {
    label: "Straight Push",
    accent: "#F87171",
    desc: "5 role bermain di mid untuk push mid secara bersama selama early game, setelah itu bisa fleksibel lagi.",
    lines: { Roamer: "Depan", Jungler: "Tengah", "Exp Laner": "Depan", "Mid Laner": "Tengah", "Gold Laner": "Belakang" },
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
    const pick = options[randInt(0, Math.min(2, options.length - 1))];
    if (pick) {
      squad.push(pick);
      workingPool = removeFromPool(workingPool, role, pick.id);
    }
  });
  const formation = FORMATION_KEYS[randInt(0, FORMATION_KEYS.length - 1)];
  return { name, squad, pool: workingPool, formation };
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
  const powerA = teamPower(teamA.squad, teamA.formation) + randInt(-6, 6);
  const powerB = teamPower(teamB.squad, teamB.formation) + randInt(-6, 6);
  const aWins = powerA >= powerB;
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

export default function LigaDraftML() {
  const [phase, setPhase] = useState("intro");
  const [pool, setPool] = useState(() => generatePool());
  const [roleIndex, setRoleIndex] = useState(0);
  const [candidates, setCandidates] = useState([]);
  const [userSquad, setUserSquad] = useState([]);
  const [userTeamName, setUserTeamName] = useState("Timku FC");
  const [formation, setFormation] = useState("1-3-1");
  const [season, setSeason] = useState(null);
  const [standingsTab, setStandingsTab] = useState("klasemen");
  const [rerollsLeft, setRerollsLeft] = useState(2);

  function startDraft() {
    const freshPool = generatePool();
    setPool(freshPool);
    setUserSquad([]);
    setRoleIndex(0);
    setCandidates(drawCandidates(freshPool, ROLES[0]));
    setRerollsLeft(2);
    setPhase("draft");
  }

  function rerollCandidates() {
    if (rerollsLeft <= 0) return;
    setCandidates(drawCandidates(pool, ROLES[roleIndex]));
    setRerollsLeft(rerollsLeft - 1);
  }

  function pickPlayer(player) {
    const newPool = removeFromPool(pool, player.role, player.id);
    const newSquad = [...userSquad, player];
    setUserSquad(newSquad);

    if (roleIndex + 1 < ROLES.length) {
      const nextRole = ROLES[roleIndex + 1];
      setPool(newPool);
      setCandidates(drawCandidates(newPool, nextRole));
      setRoleIndex(roleIndex + 1);
    } else {
      let workingPool = newPool;
      const aiTeams = [];
      TEAM_NAMES.forEach((name) => {
        const t = generateAiTeam(workingPool, name);
        workingPool = t.pool;
        aiTeams.push({ name: t.name, squad: t.squad, formation: t.formation });
      });
      const finalName = userTeamName.trim() || "Timku FC";
      const allTeams = [{ name: finalName, squad: newSquad, isUser: true, formation }, ...aiTeams];
      const fixtures = roundRobinSchedule(allTeams);
      const results = fixtures.map(([a, b]) => simulateMatch(a, b));

      const standings = {};
      allTeams.forEach((t) => {
        standings[t.name] = { name: t.name, isUser: !!t.isUser, formation: t.formation, w: 0, l: 0, gf: 0, ga: 0, pts: 0 };
      });
      results.forEach((r) => {
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

      setSeason({ teams: allTeams, results, table });
      setPhase("standings");
    }
  }

  const champion = season?.table?.[0];

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
              <Swords className="w-5 h-5" style={{ color: "#FBBF24" }} />
            </div>
            <h1 className="ldm-title">LIGA DRAFT ML</h1>
          </div>
          <div className="ldm-subtitle-row">
            <div className="ldm-subtitle-bar" />
            <span className="ldm-subtitle-text">All-Time Legends, Season 1–18</span>
          </div>
        </header>

        {phase === "intro" && (
          <div className="ldm-card">
            <p className="ldm-text">
              Draft 5 pemain (Jungler, Mid, Gold, Exp, Roamer) satu per satu dari kandidat acak yang
              diambil dari roster S18 MPL Indonesia plus legenda-legenda dari season lama (S1, S3, S4,
              S10, S14, S17), lalu 5 tim lawan otomatis dibentuk dan seluruh musim liga round-robin
              disimulasikan.
            </p>
            <p className="ldm-text-small">
              Rating OVR murni estimasi buatan untuk keseimbangan gameplay fan-made, bukan
              rating/ranking resmi MPL ID atau Moonton. Untuk pemain lama, role juga sebagian estimasi
              terbaik. Nama tim lawan fiktif.
            </p>

            <label className="ldm-label">Nama timmu</label>
            <input
              value={userTeamName}
              onChange={(e) => setUserTeamName(e.target.value)}
              placeholder="Timku FC"
              className="ldm-input"
              maxLength={24}
            />

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

            <button onClick={startDraft} className="ldm-btn-primary">
              MULAI DRAFT <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {phase === "draft" && (
          <div className="ldm-card">
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
                disabled={rerollsLeft <= 0}
                className="ldm-reroll-btn"
                style={{ opacity: rerollsLeft <= 0 ? 0.4 : 1, cursor: rerollsLeft <= 0 ? "not-allowed" : "pointer" }}
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reroll Kandidat ({rerollsLeft} tersisa)
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
                <div className="ldm-squad-label">Squad sejauh ini</div>
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
          </div>
        )}

        {phase === "standings" && season && (
          <div>
            <div className="ldm-trophy-card">
              <div className="ldm-trophy-glow-bg" />
              <div className="ldm-trophy-icon">
                <Trophy className="w-9 h-9" style={{ color: "#FBBF24" }} />
              </div>
              <div style={{ position: "relative" }}>
                <div className="ldm-trophy-label">Juara Liga</div>
                <div className="ldm-trophy-name">{champion.name}</div>
                <div className="ldm-trophy-sub">
                  {champion.w} menang, {champion.l} kalah &middot; {champion.pts} poin
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

            <button onClick={startDraft} className="ldm-btn-secondary">
              <RotateCcw className="w-4 h-4" /> DRAFT ULANG
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
