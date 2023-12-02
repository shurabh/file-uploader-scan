# file-uploader-scan
UI to upload file and scan it with Virus total

# Pre-requisite
Docker/container engine must be installed to deploy this app.
# Steps
1: Clone the repo.
2: build container image :
   docker build -t scan-app .
3: Run the container :
   docker run -dit -p 3000:3000 image_name
