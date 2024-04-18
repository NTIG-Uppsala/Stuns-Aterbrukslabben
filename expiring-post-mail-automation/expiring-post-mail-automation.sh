#!/bin/bash

RESULT=$(curl --location --request POST "http://localhost:3000/api/send-mail-to-expiring-posts" \ --header "secret: YOUR SECRET KEY HERE")

CURRENT_DATE=$(date)

echo "$CURRENT_DATE - $RESULT" >> expiring-post-mail-automation/results