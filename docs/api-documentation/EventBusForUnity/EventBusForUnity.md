---
title: Namespace EventBusForUnity
sidebar_label: EventBusForUnity
---
# Namespace EventBusForUnity
## Classes
### [EventDeregistration](../EventBusForUnity/EventDeregistration)
Handles the removal or deregistration of events from the system. This class serves
as a base for defining behavior specific to the point in the lifecycle when events
are unregistered, such as during application quit, disable, or object destruction.
### [EventDeregistrationOnApplicationQuit](../EventBusForUnity/EventDeregistrationOnApplicationQuit)
Represents an event deregistration process executed during the Application Quit
phase of the application's lifecycle. This class is designed to handle event
cleanup tasks when the application is about to terminate.
### [EventDeregistrationOnDestroy](../EventBusForUnity/EventDeregistrationOnDestroy)
Manages the deregistration of events during the destruction phase of an object's lifecycle.
This class ensures that event handlers are unregistered properly when the associated object is destroyed,
preventing potential memory leaks or unintended behavior.
### [EventDeregistrationOnDisable](../EventBusForUnity/EventDeregistrationOnDisable)
Defines behavior for deregistering events from the system when the associated
object or component is disabled. This class ensures that event listeners are
properly removed at the disable phase of the object's lifecycle to maintain system integrity.
### [EventRegistration](../EventBusForUnity/EventRegistration)
Handles the registration of events within the system. The base class
encapsulates the foundational behavior for event registration, and can
be further subclassed to specify the lifecycle method during which
registration occurs.
### [EventRegistrationAwake](../EventBusForUnity/EventRegistrationAwake)
Represents an event registration process that is executed during the Awake
phase of the game object lifecycle.
### [EventRegistrationOnEnable](../EventBusForUnity/EventRegistrationOnEnable)
Represents an event registration process that is executed during
the OnEnable phase of the game object lifecycle. This class ensures
that event subscriptions are established when the game object becomes active.
### [EventRegistrationStart](../EventBusForUnity/EventRegistrationStart)
Represents an event registration process that is executed during the Start
phase of the game object lifecycle. This class extends the standard event
registration behavior to ensure registration occurs at the appropriate point
in initialization.
### [ListenerAttribute](../EventBusForUnity/ListenerAttribute)
Specifies that the attributed method is an event listener that should be invoked by the EventBus system.
## Interfaces
### [IEventReceiver&lt;TRegistrationLifecycleMethod, TDeregistrationLifecycleMethod&gt;](../EventBusForUnity/IEventReceiver`TRegistrationLifecycleMethod,%20TDeregistrationLifecycleMethod`)
Defines a contract for components capable of receiving event notifications
and specifies the lifecycle methods for event registration and deregistration.
### [IEventReceiverWithHooks](../EventBusForUnity/IEventReceiverWithHooks)
When implemented, the source generator will add Hook() and Unhook() methods that need to be called to register the listeners contained in the class/struct/record.
