# The PICARD Project: Frontend Implementation

## Table of Contents
1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [How To Use Pages](#how-to-use-pages)
4. [Troubleshooting and Common Errors](#troubleshooting-and-common-errors)

## Overview

The PICARD Frontend provides users with a comprehensive and responsive UI that is capable of implementing all functionality of the API, while providing ease of use for its users.

## Quick Start

1. Follow the instructions provided in the API repository to get the backend running.
2. Install Node.js (https://nodejs.org/en/download/package-manager)
3. Clone the repository in the desired directory `git clone https://github.com/ThePICARDProject/481-FrontEnd`
4. To exuecute, navigate into the directory where you cloned the FrontEnd and run `npm run dev`

#### Integration with Front-End Applications (Copied from API Documentation)

The PICARD server does not have an open port for making requests. Integration should be achieved through an SSH tunnel to the server. To utilize the PICARD server, users must have SSH access to the WVU SSH Gateway, the PICARD Server, and have a user profile on the server. An SSH tunnel can be opened by following these instructions:

1. From the machine running the front end, open a terminal and execute `ssh -L 5080:localhost:5080 <username>@ssh.wvu.edu`
2. After creating a tunnel to the ssh gateway, tunnel from the gateway to the PICARD server by executing `ssh -L 5080:localhost:5080 <username>@157.182.194.132`
3. The tunnel should now allow server access through `https://localhost:5080/` on the front-end application.

## How To Use Pages

#### Login Page

#### Home Page

#### Upload Algorithms / Datasets

#### Experiment Setup

#### View Results

## Troubleshooting and Common Errors

1. Logging in
2. Homepage
3. Upload Datasets and Algorithms
4. Experiment Setup
5. View Results
