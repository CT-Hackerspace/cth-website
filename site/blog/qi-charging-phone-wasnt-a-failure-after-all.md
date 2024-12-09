---
title: Qi Charging Phone Wasn't A Failure After All
slug: qi-charging-phone-wasnt-a-failure-after-all
date: 2016-09-15 01:18:47
categories:
  - cell phone
  - Exhilarate
  - Phone
  - Projects
  - Qi
  - Qi Wireless Charging
  - Samsung
  - SGH-i577
description: ""
author: Bremster
---


![Qi Wireless Charging Receiver Soldered - Samsung Galaxy Exhilarate SGH-i577](/uploads/2016/09/2016-09-10-14.32.03a-300x234.jpg)

A few days ago I posted how my [wireless phone charging hack](/blog/diy-wireless-phone-charging-works-and-doesnt-work-at-the-same-time/) was a failure. I tried soldering in a Qi Receiver into my old school Samsung Galaxy Exhilarte SGH-i577 phone. While I got all the goodies crammed in the phone, the phone got waaaaay hot when charging. So much so that the phone gave a warning saying the battery is over-temp and charging was stopped! Fast forward a couple days. I figured I could try a different charging pad. Guess what? It worked perfectly and the phone didn't get hot! I can't explain it. I'm not a Qi expert but I did poke around on Wikipedia to learn more about the [Qi technology](https://en.wikipedia.org/wiki/Qi_(inductive_power_standard)). From Wikipedia:

> "Regulation of the output voltage is provided by a digital control loop where the power receiver communicates with the power transmitter and requests more or less power."

So clearly the _Power Transmitter_ (base) has some control over the charging process. I'm speculating here, but if the _Power Transmitter_ was not working correctly and sending too much power to the receiver in the phone, it is believable that the receiver(and phone) could get pretty hot. Check out these two charger bases. The one on the left is a Yootech and the fancy-looking one on the right is not branded. Both bases were purchased off eBay in combination with a Qi receiver. The Yootech worked as expected, the un-branded fancy-looking charger caused the over-temp condition.

[![Qi Wireless Charging Receiver Soldered - Samsung Galaxy Exhilarate SGH-i577 ](/uploads/2016/09/20160912_181256-1024x407.jpg)](/uploads/2016/09/20160912_181256.jpg)

Here are the labels on the bottom of the bases. Both require 2 amps at 5vdc and put out 1 amp.

[![Qi Wireless Charging Receiver Soldered - Samsung Galaxy Exhilarate SGH-i577 ](/uploads/2016/09/20160912_181343-1024x360.jpg)](/uploads/2016/09/20160912_181343.jpg)

So, there's some rumors out there regarding wireless charging being slower than using a normal USB cable. Guess what, that hypothesis is testable! So, I did it. I charged the phone both wirelessly and plugged in, taking Battery % measurements every so often. The results are graphed below. Clearly shown, the wired connection is faster than the Qi charging. This makes sense since many subjective online opinions state that wireless charging is slower. Yes, by coincidence, I was able to start at 45% for both tests. The wired USB charger (a high-quality 2.4 amp unit) charged the phone in 80 minutes. The Qi charger took 130 minutes. So we can say that the USB method took only 61% of the time that did the Qi charger. Also, the Qi charger took 63% longer than the wired USB charger. For convenience reasons, I'm very happy with the Qi setup. And since I soldered the retriever pad directly to the PCB board of the phone, the USB port is still accessible in case I find myself needing a quick charge.

[![Cell Phone Charge Rate: USB vs Qi](/uploads/2016/09/rate.png)](/uploads/2016/09/rate.png)
