---
title: Auto 3D Print Ejection, Kinda Works
slug: automatic-3d-print-ejection-kinda-works
date: 2015-07-04 00:11:36
categories:
  - 3D Printer
  - automated build platform
  - Projects
description: ""
author: Bremster
---

# Auto 3D Print Ejection, Kinda Works

I have successfully printed several parts in a row without human interaction. Check out the [video](https://www.youtube.com/watch?v=gnme8Tx00bg)

First things first, this is by no means a robust system. That said.... I made a few 3D printed brackets that support that new piece of aluminum angle that acts as a ram to pop the part off the bed. When printing with PLA, I've had great luck with it sticking to a hot kapton tape covered bed. It will not stick to a cold kapton tape though. So, I print the part as normal, let it cool down, pop off the part and then heat up the bed again and print the next part. The cool down and heat up cycles are a bit long at 5 minutes each. To make the multi-part g-code file, I used Cura to generate a separate g-code file for each part I want to print. Then using a text editor, I copy/paste the appropriate g-code from each file into a new file. Then I run that new file. This is not an elegant solution by any means. Although the process works, as shown in the video, there are some problems. My printed brackets hold the aluminum too high, you can see the gnome almost gets wedged in there when being ejected. The Makergear M2 printer's bed will drop when the Z axis motor is not powered. This becomes a problem during the cool-down cycle. I had to make a counter balance out of a vitamin bottle and a butt load of pennies. You can see it in the video, it's not pretty. Even so, the concept works.
