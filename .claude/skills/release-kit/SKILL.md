---
name: release-kit
description: Release a new version of the Claude Code Setup Kit (SETUP-CLAUDE-STRUCTURE.md). Use only when the maintainer asks to "release the next version", "update the setup file" or "ship the kit".
---

# Release a new kit version

1. Read the maintainer's private backlog (⏳ Pending in the private companion repo's `SETUP-LOG.md`) and the current `SETUP-CLAUDE-STRUCTURE.md`. Follow "How to release a new version" in that log.
2. Write every item **generic**: no names, clients, accounts, remotes, URLs or local paths; nothing tied to one app.
3. Show the maintainer a table of what goes in. Wait for a "yes".
4. Edit `SETUP-CLAUDE-STRUCTURE.md` in place: bump the version and date in the credit line and footer. Add a `CHANGELOG.md` entry.
5. Test any scripts in the file (e.g. pipe fake events into the push guard). Offer a dry run in a scratch folder.
6. Run `npm run check`. It must be 🟢.
7. After the maintainer's "yes": commit (no Claude co-author trailer), tag `vX.Y`, push with tags, create the GitHub Release.
8. In the private log: move the items from ⏳ Pending to 📜 History, update 🚦 At a glance, push the private repo.
