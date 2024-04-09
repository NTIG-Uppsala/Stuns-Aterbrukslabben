#!/bin/bash

RESULT=$(curl --location --request POST "http://localhost:3000/api/send-mail-to-expiring-posts" \ --header "secret: ${MAIL_AUTOMATION_SECRET}")

CURRENT_DATE=$(date)

"$CURRENT_DATE - $RESULT" >> /results.txt