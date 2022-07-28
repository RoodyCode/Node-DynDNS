# DynDNS

A simple lightweight DDNS-Updater written in NodeJS.

## Installation

Run following command

```
  docker run -e DDNS_URL="http://example.com?password=123&username=test" roodycode/dyndns
```

You can also set a custom checking interval by adding the following environment variable
```
  -e DDNS_CHECKING_INTERVAL=<seconds>
```
    
