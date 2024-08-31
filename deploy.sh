#/bin/bash
./build_image.sh
gcloud run services replace service.yaml
