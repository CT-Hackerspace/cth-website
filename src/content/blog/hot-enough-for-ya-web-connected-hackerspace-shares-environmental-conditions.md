---
title: Hot Enough For Ya? Web-Connected Hackerspace Shares Environmental Conditions
slug: hot-enough-for-ya-web-connected-hackerspace-shares-environmental-conditions
date: 2015-11-26 03:03:15
categories:
  - arduino
  - ESP8266
  - Internet of Things
  - IOT
  - Projects
description: ""
author: Bill
---

# Hot Enough For Ya? Web-Connected Hackerspace Shares Environmental Conditions

![hotenough](/uploads/2015/11/hotenough.jpg)

Come winter time, the hackerspace can get kind of cold. And in the summer, it can get darn hot! To give members a heads up of the current temperature in the 'space before making the journey out here, we created a web-enabled temperature/humidity sensor. The main device is an ESP8266 which reads a DHT-22 sensor. The temperature and humidity information is sent up to thingspeak.com. From there, a quick PHP script in our Wordpress Widgets section can read and display the current temperature on the website. Since the DHT-22 can also do humidity, we opted for displaying that as well. Visiting the thingspeak page shows a graph of [historical data](https://thingspeak.com/channels/66724/).

[![ESP8266 Temperature Humidity](/uploads/2015/11/2015-11-25-19.05.33-1024x768.jpg)](/uploads/2015/11/2015-11-25-19.05.33.jpg)

The hardware is super simple. A custom milled PCB breakout board holds the ESP8266, the DHT-22 and a couple of screw terminals for a 3.3vdc supply. Since we couldn't find a wall-wart with close to 3.3v, we opted for a 12 volter with an adjustable voltage regulator. Both PCBs were just glued to the wall-wart which was plugged into a ceiling outlet to keep it out of the way. Simple and effective!

![ESP8266 Temperature Humidity](/uploads/2015/11/temp-disp.png)

On the right side of our webpage, check out the displayed data, it's updated every minute: Below is what the Thingspeak historical data looks like:

![ESP8266 Temperature Humidity](/uploads/2015/11/temp-graph.png)
