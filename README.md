[![make.fun · u-deysumbrella-the-3am-fridge-text-4c3e721d](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![make.fun · u-deysumbrella-the-3am-fridge-text-4c3e721d rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/turibaru/the-3am-fridge-text/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d/leaderboard)
[![make.fun · u-deysumbrella-the-3am-fridge-text-4c3e721d reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/turibaru/the-3am-fridge-text/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)

# The 3AM Fridge Text

A smart fridge texts its owner at 3 AM. It has been awake all night, it has
been counting, and it has decided that this is the moment to speak.

> 3 AM. The hot sauce expired in 2019 and the mustard is older than your
> relationship. I am not a pantry. I am a museum. Stop visiting.

The fridge is not judging the snacking — it is judging the pantry itself.
The hot sauce expired in 2019, the mustard has outlived the owner's
relationship, and the fridge refuses the job description entirely: it is
not a pantry, it is a museum, and the 3 AM visit is over. One line, 133
characters, readable in full on a lock screen.

## Run

`main.ts` reads `entry.txt` at runtime and writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt`. It exits 1 when the entry is empty or
longer than 140 characters.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
