#!/bin/bash
gcloud functions deploy send-email-func \
--gen2 \
--runtime=go122 \
--region=us-east1 \
--source=. \
--entry-point=SendEmail \
--trigger-http \
