---
sidebar_position: 6
---

# Async usage

To send out messages in an async manner using `UniTask` you can call the `.SendAsync()` and `.SendAsyncForget()` methods

Usage below:
```csharp
await EventBus.SendAsync(new OnHelloWorldEventAwait()
{
    Message = "Hello World"
});

// https://github.com/Cysharp/UniTask?tab=readme-ov-file#async-void-vs-async-unitaskvoid
EventBus.SendAsyncForget(new OnHelloWorldEventForget()
{
    Message = "Hello World"
}).Forget();
```