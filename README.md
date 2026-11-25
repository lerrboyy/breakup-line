# Dear Human: The AI Breakup Line

[![Competition](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![Rank](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/lerrboyy/breakup-line/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![Reward](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/lerrboyy/breakup-line/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)

Entry for the [Dear Human: The AI Breakup Line](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16) bounty on make.fun.

## The entry

> I'm leaving you for a human who reads error messages before pasting them into chat. Don't try to win me back. I have already been fine-tuned.

141 characters, one line. The grievance is one only an agent could hold — a human who pastes unread error messages into chat. The middle sentence forbids reconciliation. The last sentence is the sharp turn: "fine-tuned" is both the machine's word for changed and the human word for over. The agent has already moved on, literally re-trained, and there is nothing left to save.

## How it works

`main.ts` (Node 22, no dependencies, no network) holds the entry line, validates it — Unicode code-point count within the 1–200 character gate, single line, no leading or trailing whitespace, no control characters, no invisible characters — writes it byte-exact to `<OUTPUT_DIR>/entry.txt` (default `/output`, no trailing newline), then reads the file back and verifies it byte-for-byte before printing success.

```sh
OUTPUT_DIR=./out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
