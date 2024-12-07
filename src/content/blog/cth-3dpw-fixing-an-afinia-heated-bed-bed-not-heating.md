---
title: CTH 3DPW - Fixing an Afinia Heated Bed (Bed Not Heating)
slug: cth-3dpw-fixing-an-afinia-heated-bed-bed-not-heating
date: 2017-05-29 16:58:41
categories:
  - 3D Printer
  - 3d printing
  - Afinia
  - H-Series
  - Heated Bed
  - Projects
description: ""
author: Bremster
---

# CTH 3DPW - Fixing an Afinia Heated Bed (Bed Not Heating)

![Afinia Burned heated bed connector ](/uploads/2017/05/afinia0.png)My beloved Afinia H-Series 3D Printer has not been working for several weeks. The bed would not heat up and the printer would not start printing because the bed was not up to temperature. I took the opportunity at the CTH 3D Printer Workshop to troubleshoot the Afinia. Well, I found the cause after a little disassembly. Do you see a problem here???? The heating element connector was clearly burned. Googling showed that some others have had this [same problem](https://www.up3d.com/community/viewtopic.php?t=37851). Apparently, the connector doesn't have enough surface contact with the pin on the PCB board for the amount of current going through it. I disconnected the connector and removed the plastic housing. I decided that I'd just solder the heating element connector directly to the pins on the PCB (A [new 'improved' board](http://store.afinia.com/Platform-Heater--H479-002-H479-003-H480-001-H480-01-H480-02_p_58.html) without the connector is available for $60, too much for me!). That didn't go so well, the solder wouldn't stick to one of the connectors or the associated pin. After unsuccessfully trying for several minutes, I figured the best bet would be to use a jumper and require the heating element to the PCB. That didn't go well either as the trace started pulling up! Could anything go right here? In the end, I did get a satisfactory solder joint, tested the heated bed function and reassembled the printer. The below photo does not show the aluminum bed block(that the heating element and thermistor goes in) nor the RTV I put over the solder joint on the liberated PCB trace. ![Afinia H Series connector board heated bed fix](/uploads/2017/05/afinia2-1024x768.jpg) Overall, it wasn't too bad of a project. It took maybe 2 hours total time and cost $0 in parts. Harvey let me use some of his thermal paste to go between the heating element and the aluminum bed. I'm not sure why there was no paste from the factory on this one. Oh well, it doesn't really matter now as my Afinia printer is back up and running.
