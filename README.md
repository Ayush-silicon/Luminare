# MindTube – Wellness-First Video Streaming Platform (Starter)

A starter repository for a full‑stack, AWS‑powered, DevOps‑enabled **wellness-first video platform**.
This skeleton integrates:
- **Base code structure** compatible with Lama Dev's repo (`safak/youtube2022`).
- **MindTube UI** concepts from: `https://youtu.be/yIaXoop8gl4`
- **MindTube full‑stack logic** ideas from: `https://youtu.be/CCF-xV3RSSs`
- Frontend deploy on **Vercel**, backend/media on **AWS Free Tier**.

> Use this as a baseline, then progressively migrate features from the resources above.

## Monorepo Layout
```
mindtube-starter/
  frontend/              # React app (Vercel)
  backend/               # Express API (AWS ECS or EC2)
  infra/terraform/       # AWS infra with Terraform (free-tier friendly)
  .github/workflows/     # CI/CD pipelines
```

## Quickstart
### 1) Clone & install
```bash
git clone <your-fork-url> mindtube
cd mindtube
```

### 2) Backend (local)
```bash
cd backend
cp .env.example .env            # Fill in values
npm install
npm run dev
```

### 3) Frontend (local)
```bash
cd ../frontend
cp .env.example .env
npm install
npm run dev     # Vite: http://localhost:5173
```

### 4) Deploy
- **Frontend**: Connect `frontend/` to Vercel (GitHub import).  
- **Backend**: Push Docker image to ECR and deploy to ECS Fargate (Terraform stubs provided).  
- **Media**: Uploads to S3 via presigned URLs.  
- **Auth (optional)**: Replace custom JWT with Amazon Cognito later.

## Phase Mapping (from plan)
- **Phase 0–1**: Reverse‑engineer `safak/youtube2022`, copy components/controllers as needed.
- **Phase 2**: Re‑skin UI to MindTube style (`yIaXoop8gl4`), wire dark/light mode, dashboard shell.
- **Phase 3**: Add wellness features (`watch heartbeats`, limits, mood tags).
- **Phase 4**: AWS S3 + CloudFront media; backend on ECS; optional Cognito.
- **Phase 5**: CI/CD with GitHub Actions, security scans, Terraform for infra.
- **Phase 6**: Polish, SEO, demo video, portfolio README.

## License
MIT (you may change).
