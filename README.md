<p align="center">
  <a href="#">
    
  </a>
  <p align="center">
   <img width="230" height="230" src="https://github.com/pacholoamit/pachtop/blob/master/public/logo-white.png" alt="Logo">
  </p>
  <h1 align="center"><b>Pachtop</b></h1>
  <p align="center">
  The only system monitor application you'll ever need.
    <br />
    <b>Download for </b>
    <a href="https://github.com/pacholoamit/pachtop/releases">
    macOS
    ·
    Windows
    ·
    Linux
    </a>
    <br />
</p>
Pachtop is a lightweight, performant, and opensource system monitor that provides real-time monitoring of your system's performance, application monitoring, and detailed system information. Built with Rust and Tauri

<br/>
<br/>

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/pacholoamit)

> NOTE: Pachtop is under active development, most of the features are still experimental and subject to change.

<p align="center">
    <img src="https://github.com/pacholoamit/pachtop/blob/master/assets/dashboard.png?raw=true"/>
    <br/>
    <br/>
    <img src="https://rust-reportcard.xuri.me/badge/github.com/pacholoamit/pachtop" />
    <img src="https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg" />
    <img alt="GitHub Workflow Status (with branch)" src="https://img.shields.io/github/actions/workflow/status/pacholoamit/pachtop/release.yml?branch=release">
    <img src="https://img.shields.io/github/license/pacholoamit/pachtop" />
    <img src="https://img.shields.io/github/v/release/pacholoamit/pachtop">
</p>

# 💻 Installation

Please see the <a href="https://github.com/pacholoamit/pachtop/releases">releases</a> page for the latest version. Pachtop is available for <i>Windows, MacOS & Linux</i>

# 💯 Motivation

The inspiration for Pachtop stems mainly from using [Stacer](https://oguzhaninan.github.io/Stacer-Web/) which is a comprehensive System optimizer and monitoring solution. Although, Pachtop does not implement any system optimizer functionality (yet!), It provides more in-depth metrics and information about your system. I wanted to create a similar application to Stacer but with a more modern UI and a more robust codebase. I also wanted to learn Rust and this seemed like a good opportunity to do so. If you hadn't guessed, Pachtop is named after the legendary [top](<https://en.wikipedia.org/wiki/Top_(software)>) linux program that displays information about CPU and memory utilization. Pachtop will always remain open-source and free to use.

# 🚀 Showcase

## Dashboard

The dashboard shows real-time metrics of your system. Metrics include CPU usage, RAM usage, Swap usage, Disk usage, and Network usage.

![Dashboard](https://github.com/pacholoamit/pachtop/blob/master/assets/dashboard.png)

## Disks

The Disks feature allows you to perform disk analysis on available disks.

![Disks](https://github.com/pacholoamit/pachtop/blob/master/assets/disk-analysis.png)

## Processes

The Processes feature allows you to monitor and compare resource usage of processes

![image](https://github.com/pacholoamit/pachtop/blob/master/assets/processes.png?raw=true)


# 🏗️ Architecture

Pachtop is built with what I'd like to call the **"VRRTT"** stack (Vite, Rust, React, Typescript, Tauri.)

- **Vite** is a frontend build tool that uses **Rollup** under the hood. It's _blazingly fast_ and has a lot of cool features like hot module reloading and code splitting.
- **Rust** is a systems programming language that is _blazingly fast_ and memory efficient. Rust is also a very safe language and has a lot of cool features like ownership and borrowing which subsitutues the need for garbage collection.
- **React** is a popular frontend library that is used by many companies like Facebook, Netflix, Uber, etc.
- **Typescript** is a superset of Javascript that adds static typing to Javascript. It's very easy to learn and has a lot of great features.
- **Tauri** is a framework that allows you to build desktop applications with web technologies. Tauri allows us to create a pure Rust native OS webview, without the overhead of your average Electron app. This brings the bundle size and average memory usage down dramatically. It also contributes to a more native feel, especially on macOS due to Safari's close integration with the OS.
- **SysInfo** is a Rust crate that provides system information. This crate is used to get information about the system's CPU, memory, disks, network, and processes. This is what Pachtop uses to get the system metrics on different operating systems.

# Features & Roadmap
- [x] Themes & Color Schemes
- [x] Aggregate CPU usage & per-core CPU usage metrics
- [x] Memory Usage
- [x] Network Usage
- [x] System Information
- [x] Processes
- [x] Disk Usage
- [ ] Persistent metrics over time
- [ ] Battery Usage?
- [ ] GPU Usage?

# License
Pachtop is currently licensed as `MIT`.
