---
sidebar_position: 5
---

# Dynamic/Runtime Listener registration 

You might want to add a listener during runtime for a certain event. Have a look at the below snippet
```csharp
using Assembly_CSharp.EventBusForUnity;

public class RuntimeListenerExample : MonoBehaviour
{
    public class RegisterHelloWorldEvent
    {
        public string Message;
    }
    
    private void Start() 
    {
        Action<RegisterHelloWorldEvent> listener = message =>
        {
            Debug.Log($"Message: {message.Message}");
        };

        EventBus.Register(listener);

        EventBus.Send(new RegisterHelloWorldEvent()
        {
            Message = "Hello World"
        });

        EventBus.Deregister(listener);
    }
}
```
Of course, this also works outside a `MonoBehaviour` component and can be called anywhere. 

When following this pattern it is important that what you pass to `EventBus.Register()` is the same as `EventBus.Deregister()`. For example if you do the below you will have a bad time:
```csharp
Action<RegisterHelloWorldEvent> listener = message =>
{
    Debug.Log($"Message: {message.Message}");
};

Action<RegisterHelloWorldEvent> listenerTwo = message =>
{
    Debug.Log($"Message: {message.Message}");
};

EventBus.Register(listener);
EventBus.Deregister(listenerTwo); // won't work!
```