# Docker Test Web App (Demo)

[![Docker Hub](https://img.shields.io/badge/docker-pull-blue.svg?logo=docker)](https://hub.docker.com/r/bhrigukd/webapp)
[![Release](https://img.shields.io/github/v/release/BhriguKumarDeka/docker-webapp)](https://github.com/BhriguKumarDeka/docker-webapp/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight Node.js/Express web application designed specifically for **testing Docker pulls and container connectivity**. Much like the `nginx` welcome page, this image provides a simple confirmation that your Docker environment is set up correctly.

---

## 🚀 Quick Start (Verify Docker is Working)

The fastest way to test your setup is to pull the image and run it:

```bash
docker run -d --init -p 3000:3000 bhrigukd/webapp:latest
```

Once running, visit [http://localhost:3000](http://localhost:3000) to see the "Hello Voyager" confirmation message.

To stop the container later:

```docker ps
docker stop <container_id>
```
---

## 🛠️ Usage Scenarios

- **Connectivity Check:** Verify if your machine can pull images from DockerHub.
- **Port Mapping Test:** Ensure `-p 3000:3000` is working as expected.
- **CI/CD Testing:** Use this as a simple image for testing deployment pipelines.
- **K8s Verification:** A lightweight pod to check if your cluster can access public registries.

---

## 📦 Docker Details

- **Official Image:** `bhrigukd/webapp`
- **Port:** `3000` (Internal)
- **Base Image:** `node:20-alpine` (Small footprint)

### Build Locally
If you want to modify the message or base image:
```bash
docker build -t bhrigukd/webapp:1.0 .
```

### Push to DockerHub
```bash
docker login

docker tag bhrigukd/webapp:1.0 bhrigukd/webapp:latest

docker push bhrigukd/webapp:1.0
docker push bhrigukd/webapp:latest
```

---

## 🖥️ Local Development (Source)

If you need to run the source code directly without Docker:

1. **Clone & Install:**
   ```bash
   git clone https://github.com/BhriguKumarDeka/docker-webapp.git
   cd web-docker
   npm install
   ```
2. **Start:**
   ```bash
   node index.js
   ```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
