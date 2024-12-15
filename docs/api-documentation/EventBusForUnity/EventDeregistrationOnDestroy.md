---
title: Class EventDeregistrationOnDestroy
sidebar_label: EventDeregistrationOnDestroy
description: "Manages the deregistration of events during the destruction phase of an object's lifecycle.
This class ensures that event handlers are unregistered properly when the associated object is destroyed,
preventing potential memory leaks or unintended behavior."
---
# Class EventDeregistrationOnDestroy
Manages the deregistration of events during the destruction phase of an object's lifecycle.
This class ensures that event handlers are unregistered properly when the associated object is destroyed,
preventing potential memory leaks or unintended behavior.

###### **Assembly**: EventBusSourceGenerator.dll

```csharp title="Declaration"
public abstract class EventDeregistrationOnDestroy : EventDeregistration
```
**Inheritance:** `System.Object` -> [EventBusForUnity.EventDeregistration](../EventBusForUnity/EventDeregistration)

