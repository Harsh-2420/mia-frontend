#/bin/bash
./build_image.sh
gcloud run services replace service.yaml
# gcloud run services update project-name --revision-suffix $(date +%s)
