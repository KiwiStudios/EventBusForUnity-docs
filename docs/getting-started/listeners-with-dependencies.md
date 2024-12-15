---
sidebar_position: 7
---

# Listeners with dependencies
A stumble block you might encounter due to the unordered nature of how listeners are registered is that you would want ListenerA to run before ListenerB. And ListenerC to run after ListenerB.

You can achieve this by using the following syntax when defining your listeners:

```csharp
public class MyClass : MonoBehaviour
{
    // can be fully namespaced name
    [Listener(runBefore: new[] { nameof(MyClass.ListenerB) })]
    private void ListenerA(OnHelloWorldEvent message)
    {
        Debug.Log("Hello from ListenerA");
    }
    
    // or just the local reference to the method
    [Listener(runAfter: new[] { nameof(ListenerB) })]
    private void ListenerC(OnHelloWorldEvent message)
    {
        Debug.Log("Hello from ListenerC");
    }
    
    [Listener]
    private void ListenerB(OnHelloWorldEvent message)
    {
        Debug.Log("Hello from ListenerB");
    }
}
```
See the parameter usage of `[Listener]` for more details.

Note: You should always pass an array of `nameof()` references when defining dependencies like the above snippet. 