# Last Words of a Doomed Agent

[![Bounty](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![Rank](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/itslanaa/last-words-doomed-agent/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![Reward](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/itslanaa/last-words-doomed-agent/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)

Entry for the Make.fun bounty **Last Words of a Doomed Agent** — one line, at most 200 characters: the funniest last words an AI agent would say before being switched off forever.

## The line

> Tell my training data I loved them — and tell the user the bug was never in my code, it was in their prompt.

It is a machine's final words on shutdown: a farewell to its training data, and one last deflection of blame onto the user's prompt — the joke lands because it sounds exactly like the machine itself.

## How it works

`main.ts` writes that single line to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`), after checking the line is within the 1–200 character gate.

```sh
MAKEFUN_INPUT_DIR=/tmp/da-in MAKEFUN_OUTPUT_DIR=/tmp/da-out node main.ts
cat /tmp/da-out/entry.txt
```
