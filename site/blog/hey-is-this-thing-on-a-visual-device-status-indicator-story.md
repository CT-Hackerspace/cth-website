---
title: Hey, Is This Thing On? A Visual Device-Status Indicator Story
slug: hey-is-this-thing-on-a-visual-device-status-indicator-story
date: 2017-01-25 21:06:31
categories:
  - 24vac
  - humidifier
  - humidifier indicator LED
  - LED
  - Projects
description: ""
author: Bremster
---

# Hey, Is This Thing On? A Visual Device-Status Indicator Story

![DIY humidifier on active indicator LED assembled front](/uploads/2017/01/humid-1-1-300x290.jpg)

It's winter and the air in my house is dry, humidity at about 30%. That's too low to be comfortable. I've lived in my new place for less than one year so the low winter humidity hadn't been a problem for me yet. Good thing there's a whole-house humidifier on the forced-hot-air heating system. I'll just turn that on, right? Wrong. I don't think this system had ever worked since it was installed.... To make a long story short, I had to do the following unreasonable things to get the humidifier system to work:

1. replace the humidistat (it no longer worked)
2. finding out the required outside temperature sensor was never installed
3. hooking the humidistat to the correct output on the furnace
4. clearing out a clogged water supply line

While doing troubleshooting all that, it would have been very convenient if there was a way for me to see if the humidistat was sending a signal to the water-valve solenoid. I used my multimeter to get the job done but it was a pain because the humidisat was 20 feet from the solenoid and it is hard to read the multimeter's display from that far away. So, to combat that problem in the future, I made an indicator LED. The humidistat runs on 24vac and continually monitors 3 things: house humidity, outside temperature and if the furnace fan is on. When the furnace fan is on, the humidstat compares the outside temperature and humidity in the house. It then decides if the water-valve solenoid should be turned on in order to increase the humidity in the house. To do this, the humidistat sends 24vac to the solenoid valve, the valve opens and the water flows into the humidifier. My indicator will just be a standard LED. Like any LED, you'll need a resistor in series to limit the current. Based on the recommendation of one of my electrical engineer buddies, I used a 2.2kΩ resistor. Typically an LED is only used in DC circuits because they are polarized, but this setup works because the AC current is going in the correct direction for the LED half of the time. The LED is only on half of the time, switching on and off 60 times a second because our AC voltage frequency is 60 hz. 60 times a second is fast enough where our eyes can't see the flickering, so it appears the LED is on to us humans.

![HumidfierSchematic.png](/uploads/2017/01/HumidfierSchematic.png)

I didn't have any small project enclosures around so I design up and printed one. It came out pretty good I think. It accepts 0.200"-on-center screw terminals for the wires connected to the humidistat and the solenoid. The wiring is straight forward as shown above and below. The LED/resistor are basically just wired in parallel with the solenoid valve.

![DIY humidifier on active indicator LED case 3d model](/uploads/2017/01/humid-2-300x196.jpg)

[![Humid](/uploads/2017/01/humid-3.jpg)](/uploads/2017/01/humid-4.jpg)

Below is a photo of the before (just wires and wire nuts) on the left and the new indicator light on the right. I was originally going to screw the case to the humidifer but decided to just double-side tape it to the humidifier enclosure. The tape worked well. Now I have a good visual indicator when my humidifier is humidifying. And besides the couple hours it took to make and install the thing, it was pretty much free since the very small amount of necessary parts were just kicking around. Good deal!

[![DIY humidifier on active indicator LED working](/uploads/2017/01/humid-4.jpg)](/uploads/2017/01/humid-4.jpg)
