---
layout: page
title: Open Parking System
permalink: /projects/ops
---
**Repo**: [github.com/w3slley/open-parking-system](https://github.com/w3slley/open-parking-system)

**Technologies used**: HTML5, CSS3, JavaScript, Socket.io, Arduino, LabVIEW

This project consists of an implementation of a basic prototype for a monitoring and control system of public parking spots using the internet. The system is designed to be used both by cities and drivers: for the former to optimize traffic control of the often chaotic public transport system that is a reality in major cities, and for the latter to find available parking spots across city hubs, reducing waste in fuel consumption, CO2 emissions and searching time.

One possible future for this project could be to decentralize the system so that all the data wouldn't be in a single company's server. Thus, to prevent a single point of failure, a technology like blockchain could be used to allow peer-to-peer interactions between the actors of the system, taking advantage of a public and distributed append-only ledger and concepts like proof-of-work and consensus to validate transactions in the system. These transactions would essentially be the renting of public parking spots for an amount of time, but could also later on support the transactions between drivers and private parking spots. And the use of a token for transactions within the system would be a natural step to consider. 

Regardless of the direction the project takes, I'll definetly invest more time to improve it. The first thing that comes to mind is to use an adequate sensor on nodes, which is what I called the electronic aparatus responsible for detecting the state of a parking spot. For the initial prototype, an optical sensor was used. However, it is far from the ideal sensor for this use case since its reach is very limited and would be affected very easily by outside influences (wheather, objects passing by, etc). Perhaps a better alternative would be to use a [magnetometer](https://en.wikipedia.org/wiki/Magnetometer) to measure the change in the magnetic field caused by a vehicle in a parking spot.

For a more technical description of the project, [here](https://w3slley.github.io/ops/report-portuguese.pdf) is the original written report for the class it was initially developed for.

**Prototype demo**:

![](https://w3slley.github.io/ops/demo.gif)