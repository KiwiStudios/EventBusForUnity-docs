---
sidebar_position: 9
---

# Frequently asked questions
These might prove useful in the case you're stuck, if you can't find your answer here feel free to reach out in the [discord](https://discord.gg/dqN3csvysQ).

## What types can I send through the EventBus?
You can pass any named type like a `class`, `record` or `struct`. E.g. `struct Foobar {}` works. You CANNOT pass `int`, `string`, etc. 

## My listeners are not being called!
Have you ensured that you called `EventBus.Initialize()` before sending out any events? And that you have called `EventBus.Initialize()` before sending out events in the same method? See [basic usage](./getting-started/basic-usage.md) for a quick overview for any gotchas