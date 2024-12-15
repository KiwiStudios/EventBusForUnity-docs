---
title: Interface IEventReceiver<TRegistrationLifecycleMethod, TDeregistrationLifecycleMethod>
sidebar_label: IEventReceiver<TRegistrationLifecycleMethod, TDeregistrationLifecycleMethod>
description: "Defines a contract for components capable of receiving event notifications
and specifies the lifecycle methods for event registration and deregistration."
---
# Interface IEventReceiver&lt;TRegistrationLifecycleMethod, TDeregistrationLifecycleMethod&gt;
Defines a contract for components capable of receiving event notifications
and specifies the lifecycle methods for event registration and deregistration.

###### **Assembly**: EventBusSourceGenerator.dll

```csharp title="Declaration"
public interface IEventReceiver<TRegistrationLifecycleMethod, TDeregistrationLifecycleMethod> where TRegistrationLifecycleMethod : EventRegistration where TDeregistrationLifecycleMethod : EventDeregistration
```
