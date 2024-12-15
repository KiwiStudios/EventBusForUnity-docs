---
sidebar_position: 4
---
# Using the EventBus in pure `C#`

In this case you can use the `IEventReceiverWithHooks` interface, and declare your `class`, `record` or `struct` as `partial`. 

The source generator will add the `Hook()` and `Unhook()` methods to the implementing class/record/struct which you can then call however you want 

```csharp
using MyAssemblyName.EventBusForUnity;

public partial class MyPureCsharpClass : IEventReceiverWithHooks
{
    // call Hook() where you would like to register your listeners
    // call Unhook() to de-register your listeners
    
    public MyPureCsharpClass()
    {
        Hook();
        Process();
    }
    
    ~MyPureCsharpClass() // recommended: use IDisposable instead
    {
        Unhook();
    }
    
    [Listener]
    private void OnHelloWorld(OnHelloWorldEvent message)
    {
        Console.WriteLine("Hello there from the listener");
    }
    
    public void Process() // just for demo, you can of course call this method anywhere in your application in the same assembly 
    {
        EventBus.Send(new OnHelloWorldEvent()
        {
            Message = "Hello World"
        });
    }
}
```

