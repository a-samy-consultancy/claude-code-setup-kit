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
7. After the maintainer's "yes": commit (no Claude co-author trailer), tag `vX.Y`, then push. Push and commit in **separate** commands, with a plain commit message (no ` + `), so the push guard only sees the push.
8. Write the release notes to a scratch file: the new version's `CHANGELOG.md` section (`awk '/^## vX.Y/{f=1;next} /^## v/{f=0} f' CHANGELOG.md > notes.md`).
9. Create the GitHub Release: `gh release create vX.Y --title "vX.Y · <short theme>" --notes-file notes.md --latest`. If the token or the command is blocked in this session, don't work around it: write a small `release.sh` next to the notes files (`set -euo pipefail`, `-R <owner/repo>`, every pending version, older ones with `--latest=false`, a 🟢 line at the end) and give the maintainer **one line to run in their own terminal**: `bash <absolute path>/release.sh`. Check every notes file exists first. Don't give a `!` command for a normal terminal: `!` only works in the Claude prompt.
10. In the private log: move the items from ⏳ Pending to 📜 History, update 🚦 At a glance (note any Release still waiting on the maintainer), push the private repo.
