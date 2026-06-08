import { useState, useEffect, FormEvent } from "react";
import { Trash2, Lock, Unlock, Plus } from "lucide-react";

// ============================================================
//  DEVLOG PASSWORD — change this string to update your password
// ============================================================
const DEVLOG_PASSWORD = "AnshulRoyale10";
// ============================================================

type Entry = {
  id: string;
  title: string;
  body: string;
  date: string; // ISO
};

const STORAGE_KEY = "devlog_entries_v1";

const loadEntries = (): Entry[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Entry[];
  } catch {
    return [];
  }
};

const saveEntries = (entries: Entry[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};

const DevlogSection = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [unlocked, setUnlocked] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState("");
  const [showComposer, setShowComposer] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    setEntries(loadEntries());
  }, []);

  const tryUnlock = (e: FormEvent) => {
    e.preventDefault();
    if (pwInput === DEVLOG_PASSWORD) {
      setUnlocked(true);
      setPwError("");
      setPwInput("");
    } else {
      setPwError("ACCESS DENIED — WRONG CODE");
    }
  };

  const lock = () => {
    setUnlocked(false);
    setShowComposer(false);
    setTitle("");
    setBody("");
  };

  const addEntry = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    const next: Entry = {
      id: crypto.randomUUID(),
      title: title.trim(),
      body: body.trim(),
      date: new Date().toISOString(),
    };
    const updated = [next, ...entries];
    setEntries(updated);
    saveEntries(updated);
    setTitle("");
    setBody("");
    setShowComposer(false);
  };

  const deleteEntry = (id: string) => {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    saveEntries(updated);
  };

  return (
    <section id="devlog" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="scroll-reveal text-center mb-3">
        <span className="font-pixel text-[8px] text-accent">// QUEST_JOURNAL.LOG</span>
      </div>
      <h2 className="scroll-reveal font-pixel text-lg md:text-xl text-center text-primary glow-cyan mb-2">
        DEV LOG
      </h2>
      <p className="scroll-reveal text-center font-pixel text-[8px] text-muted-foreground mb-10">
        &gt; FIELD NOTES FROM THE INDIE GAME I&apos;M FORGING
      </p>

      {/* Admin bar */}
      <div className="scroll-reveal mb-8 flex items-center justify-center gap-3">
        {!unlocked ? (
          <form onSubmit={tryUnlock} className="flex flex-col sm:flex-row items-stretch gap-2 w-full max-w-md">
            <div className="flex items-center gap-2 flex-1 bg-card border-2 border-primary/40 px-3 py-2">
              <Lock className="w-3 h-3 text-primary shrink-0" />
              <input
                type="password"
                value={pwInput}
                onChange={(e) => setPwInput(e.target.value)}
                placeholder="ENTER DEV CODE..."
                className="bg-transparent outline-none flex-1 font-pixel text-[8px] text-primary placeholder:text-muted-foreground"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 border-2 border-primary bg-primary/10 font-pixel text-[8px] text-primary hover:box-glow-cyan transition-all"
            >
              UNLOCK
            </button>
          </form>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="font-pixel text-[8px] text-[hsl(var(--neon-green))] glow-purple flex items-center gap-2">
              <Unlock className="w-3 h-3" /> DEV MODE
            </span>
            <button
              onClick={() => setShowComposer((s) => !s)}
              className="flex items-center gap-2 px-4 py-2 border-2 border-secondary bg-secondary/10 font-pixel text-[8px] text-secondary hover:box-glow-magenta transition-all"
            >
              <Plus className="w-3 h-3" />
              {showComposer ? "CANCEL" : "NEW ENTRY"}
            </button>
            <button
              onClick={lock}
              className="px-4 py-2 border-2 border-muted-foreground/40 font-pixel text-[8px] text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              LOCK
            </button>
          </div>
        )}
      </div>

      {pwError && (
        <p className="text-center font-pixel text-[8px] text-destructive blink mb-6">{pwError}</p>
      )}

      {/* Composer */}
      {unlocked && showComposer && (
        <form
          onSubmit={addEntry}
          className="mb-10 bg-card border-2 border-secondary/60 p-5 pixel-border-magenta"
        >
          <label className="block font-pixel text-[8px] text-secondary mb-2">&gt; ENTRY_TITLE</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={120}
            placeholder="Day 14 — Procedural caves working!"
            className="w-full bg-background border-2 border-primary/30 px-3 py-2 mb-4 font-mono text-sm text-foreground outline-none focus:border-primary"
          />
          <label className="block font-pixel text-[8px] text-secondary mb-2">&gt; ENTRY_BODY</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={6}
            placeholder="Write today's progress, blockers, ideas..."
            className="w-full bg-background border-2 border-primary/30 px-3 py-2 mb-4 font-mono text-sm text-foreground outline-none focus:border-primary resize-y"
          />
          <button
            type="submit"
            className="px-5 py-2 border-2 border-primary bg-primary/10 font-pixel text-[8px] text-primary hover:box-glow-cyan transition-all"
          >
            SAVE_ENTRY.EXE
          </button>
        </form>
      )}

      {/* Entries */}
      <div className="space-y-6">
        {entries.length === 0 ? (
          <div className="scroll-reveal text-center py-12 border-2 border-dashed border-primary/20">
            <p className="font-pixel text-[10px] text-muted-foreground blink">
              [ NO LOG ENTRIES YET ]
            </p>
          </div>
        ) : (
          entries.map((entry) => (
            <article
              key={entry.id}
              className="scroll-reveal relative bg-card border-2 border-primary/40 p-5 hover:border-primary hover:box-glow-cyan transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <div className="font-pixel text-[8px] text-accent mb-1">
                    LOG_{formatDate(entry.date).toUpperCase()}
                  </div>
                  <h3 className="font-pixel text-[11px] md:text-sm text-secondary glow-magenta leading-relaxed">
                    {entry.title}
                  </h3>
                </div>
                {unlocked && (
                  <button
                    onClick={() => deleteEntry(entry.id)}
                    aria-label="Delete entry"
                    className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
              <p className="font-mono text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed">
                {entry.body}
              </p>
            </article>
          ))
        )}
      </div>

      <p className="mt-8 text-center font-pixel text-[7px] text-muted-foreground">
        // ENTRIES STORED LOCALLY IN YOUR BROWSER
      </p>
    </section>
  );
};

export default DevlogSection;
