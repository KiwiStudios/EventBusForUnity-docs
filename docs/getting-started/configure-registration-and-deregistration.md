---
sidebar_position: 2
---

# Customizing registration in MonoBehaviours

This feature is specific for MonoBehaviours. See the below snippet for more info, pay attention in specific to the usage
of `IEventReceiver<T1, T2>`.

```csharp
public class OnHelloWorldEvent
{
    public string Message;
}

public partial class HelloWorldExample : MonoBehaviour, IEventReceiver<EventRegistrationAwake, EventDeregistrationOnApplicationQuit>
{
    [Listener]
    private void OnHelloWorld(OnHelloWorldEvent evnt)
    {
        Debug.Log(evnt.Message);
    }

    private void Start()
    {
        EventBus.Send(new OnHelloWorldEvent()
        {
            Message = "Hello World"
        });
    }
}
```

## Explanation

There are several classes available for customizing when registration and de-registration happens of your listener
methods. If you have a method already defined for these lifecycle methods (like `Start()` for example) you don't need to change your code at all. Behind
the scenes the source generator will patch your `Start()` method to register the listeners before your code is ran.

The available options are:

**Registration:**

- `EventRegistrationAwake` (when `Awake()` runs in the lifecycle)
- `EventRegistrationOnEnable` (when `OnEnable()` runs in the lifecycle)
- `EventRegistrationStart` (when `Start()` runs in the lifecycle)

**Deregistration**

- `EventDeregistrationOnApplicationQuit` (when `OnApplicationQuit()` runs in the lifecycle)
- `EventDeregistrationOnDisable` (when `OnDisable()` runs in the lifecycle)
- `EventDeregistrationOnDestroy` (when `OnDestroy()` runs in the lifecycle)