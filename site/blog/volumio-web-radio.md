---
title: New Web Radio at CT Hackerspace
slug: volumio-web-radio
date: 2016-02-04 01:15:05
categories:
  - internet radio
  - music streamer
  - Projects
  - raspberry pi
  - web radio
description: ""
author: Bremster
---


You may be aware that CTH has a stereo which can play music from a dedicated MP3 Player or internet radio stations via the nearby netbook. The netbook doesn’t work so well in this setup with OS freezing and audio pauses due to stream buffering. As a result, the stereo system is getting an upgrade in the form of a dedicated music streamer!

The music streamer is based on a Raspberry Pi running the [Volumio](http://www.volumio.com/) OS distribution. It will play internet radio stations (m3u and pls files) as well as locally stored MP3’s. The Raspberry Pi has an analog audio output but it is low quality. There are different solutions available for this but the cheapest is to use a standard USB sound card. The audio output of the sound card is then piped into a standard Stereo Receiver.

The best part about the RaspPi/Volumio combo is that it does all the hard work while letting you control it via your phone. Sure, you could play an internet radio station on your phone and send it to the Stereo Receiver via Bluetooth or something, but your phone’s battery will take a beating the entire time the music is playing. The Raspberry Pi does all the work, you just control Volumio via a web browser on your phone or another PC on the CTH network.

## HOW TO USE VOLUMIO AT CTH:

For this to work, you have to be connected to the CTH network. To control Volumio, with a web browser, go to volumio.local/ or [192.168.1.133](http://192.168.1.133). The Volumio GUI will appear. You’ll have access to the volume, play/pause and (if playing local MP3s) FWD and RWD.

<figure><a href="/uploads/2016/01/2016-01-30-14.54.00.png"><img id="attachment_813" class="align-center" width="281" src="/uploads/2016/01/2016-01-30-14.54.00.png" alt="Volumio Raspberry Pi Music Streamer"></a><figcaption> volume control on your phone web browser</figcaption></figure>

To change Radio Stations, go to ‘PlayList’ on the bottom right of the Screen, click on ‘Web Radio’ on the top left. Find a station you’re interested in and select ‘add and play’ from the station’s menu.

Make sure the correct input is selected on the Stereo Receiver. The button is labeled as Volumio.

![Volumio Raspberry Pi Music Streamer](/uploads/2016/01/2016-01-30-14.54.12.png)

![Volumio Raspberry Pi Music Streamer](/uploads/2016/01/2016-01-30-14.54.29.png)
