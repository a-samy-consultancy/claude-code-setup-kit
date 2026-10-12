# CLAUDE.md (Claude Code Setup Kit)

> 🌍 This repo is **public**. It holds one shareable file, `SETUP-CLAUDE-STRUCTURE.md`, that sets up a Claude Code project structure for anyone.

## 🚦 Rules

| Rule | Why |
|---|---|
| Everything here is public: no private names, clients, emails, accounts, private repos or local paths | Anyone can read it |
| `npm run check` before every commit (it also runs on push as `lint`) | Blocks any term on the maintainer's private list |
| The maintainer approves every push | Outward-facing |
| Edit `SETUP-CLAUDE-STRUCTURE.md` **in place**; each version = git tag + GitHub Release + `CHANGELOG.md` entry | Stable link for followers; git keeps old versions |
| Never write a new version unless the maintainer asks; then use `/release-kit` | Releases are a deliberate decision |
| Keep the credit line "Developed by Abdo Samy · abdosamy.com" | Attribution |

## 📁 Files

| File | What |
|---|---|
| `SETUP-CLAUDE-STRUCTURE.md` | The kit itself |
| `README.md` · `CHANGELOG.md` · `LICENSE` | Front page, version history, CC BY 4.0 |
| `scripts/check-private-terms.mjs` | Leak check (reads a private term list kept outside this repo) |
| `.claude/skills/release-kit/` | Release steps |

The backlog of improvements waiting for the next version is kept privately by the maintainer, not in this repo.
