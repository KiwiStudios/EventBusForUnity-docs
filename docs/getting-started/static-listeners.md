---
sidebar_position: 3
---

# Static [Listener] methods

Very straight forward, works out of the box. 

Does not need any form of registration or deregistration, as the Listener is just called directly and there is always only one Listener to call.

```csharp
using Assembly_CSharp.EventBusForUnity; // Note: per assembly an EventBus is generated, so this might have a different prefix than 'Assembly_CSharp'

public class OnHelloWorldEvent
{
    public string Message; 
}

public partial class HelloWorldExample : MonoBehaviour
{
    [Listener]
    private static void OnHelloWorld(OnHelloWorldEvent evnt)
    {
        // do whatever you want to do
        Debug.Log(evnt.Message);
    }
    
    private void Start()
    {
        EventBus.Send(new OnHelloWorldEvent()
        {
            Message = "Hello World from EventBus for Unity!"
        });
    }
}
```

You should see a log entry in Unity when running this now.