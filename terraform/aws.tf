data "aws_ami" "amazon-linux-2-ami" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*-x86_64-gp2"]
  }
}

module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "${local.project_name}-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["us-west-2a", "us-west-2c", "us-west-2d"]
#   private_subnets = ["10.0.4.0/24", "10.0.5.0/24", "10.0.6.0/24"]
  public_subnets  = ["10.0.111.0/24", "10.0.112.0/24", "10.0.113.0/24"]

  # by default this VPC module creates an IGW, RT, SG
  # Terraform keeps track of the resources it creates mostly in a module
  create_igw = true
  enable_nat_gateway = false
  manage_default_route_table = true
  default_route_table_routes = [ {
    cidr_block = "0.0.0.0/0", 
    gateway_id = module.vpc.igw_id
  } ]
  manage_default_security_group = false

  tags = {
    Terraform = "true"
  }
}