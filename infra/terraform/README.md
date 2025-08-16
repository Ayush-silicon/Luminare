# Terraform for MindTube (Free-Tier Friendly)

This is a minimal scaffold. Fill variables and expand modules as needed.

Resources you likely need:
- VPC (with public/private subnets)
- ECR (for backend image)
- ECS Fargate service + ALB
- S3 bucket for media (private) + optional CloudFront distribution
- IAM roles/policies
- (Optional) Cognito User Pool
