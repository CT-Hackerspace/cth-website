---
title: Stealth Motorcycle Garage Door Opener
slug: stealth-motorcycle-garage-door-opener
date: 2016-04-27 23:33:22
categories:
  - garage door opener
  - motorcycle
  - Projects
  - remote
description: ""
author: Bremster
---

# Stealth Motorcycle Garage Door Opener

![motorcycle garage door opener](/uploads/2016/04/garagedooropenerdiagram-1024x342.png)

When starting or ending a motorcycle ride, you're most likely putting the bike away in a garage. Like paying tolls on a bike, a simple task of opening a garage door becomes just plain inconvenient. You either have to get off the bike to manually open the door or dig around in your pocket for the garage door opener that you might have forgotten. I've seen some people velcro the garage door opener to the bike but that looks kinda hokey. This slick hack solves that garage door problem is definitely a DIY-friendly project. To make a long story short, I wired a spare garage door opener in parallel with the motorcycle's horn circuit. When the horn is beeped, the garage door opener is essentially 'pressed'. I don't have to get off the bike, dig around in my pockets, put the kickstand down or even pull in the clutch. Just beep the horn and the garage door goes up or down, just like you were pushing the button on a regular remote. A relay was used to keep the remote electrically isolated from the motorcycle. The problem was that I only had a 5v relay on hand, hence the resistor in the diagram. You can figure out what value resistor to use by using the following formula that calculates voltage dividers. R1 is the resistor value.

![voltage divider](/uploads/2016/04/voltagedivider.png)

R2 is the relay coil impedance Vin is the bike's voltage (12vdc) Vout is the relay's required voltage After testing everything out on the bench to make sure the relay 'pushed' the button, I drew up a quick case for the PCB and 3D Printed that out. For wiring, all that is needed is to connect the new unit in parallel with the horn. Everything attached to a bracket that was on the frame and Bob's your uncle.... push the horn button and the garage door opens!

PCB installed in the 3D Printed case:

![motorcycle garage door opener](/uploads/2016/04/2016-04-25-22.41.47-760x1024.jpg)

Cover installed (never mind the dirt!):

![motorcycle garage door opener](/uploads/2016/04/2016-04-26-07.19.21-1024x760.jpg)
