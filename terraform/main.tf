resource "aws_ecr_repository" "portfolio-repo" {
  name = "${local.project_name}-ecr-repo"
}

resource "aws_security_group" "portfolio-sg" {
  name        = "${local.project_name}-sg"
  description = "Allow standard HTTP and HTTPS ports inbound and everything outbound"

  vpc_id = module.vpc.vpc_id

  # Inbound rules
  ingress {
    # HTTP
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = var.whitelist_ips # allows all IPs
  }

  ingress {
    # HTTPS
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = var.whitelist_ips # allows all IPs
  }

  # Outbound rules
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"              # allows every protocol
    cidr_blocks = var.whitelist_ips # allows traffic to any IP
  }

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Name = "${local.project_name}-sg"
  }
}

resource "aws_key_pair" "portfolio-key-pair" {
  key_name   = "${local.project_name}-key-pair"
  public_key = file("~/.ssh/id_rsa.pub")
}

resource "aws_instance" "portfolio-instance" {
  ami           = data.aws_ami.amazon-linux-2-ami.id
  instance_type = var.instance_type

  key_name               = aws_key_pair.portfolio-key-pair.key_name
  vpc_security_group_ids = [aws_security_group.portfolio-sg.id]

  subnet_id                   = module.vpc.public_subnets[0]
  associate_public_ip_address = true

  user_data = file("user-data.sh")

  tags = {
    Name = "${local.project_name}-server"
  }
}

# resource "aws_internet_gateway" "portfolio-igw" {
#   vpc_id = module.vpc.vpc_id

#   tags = {
#     Name = "${local.project_name}-igw"
#   }
# }

# resource "aws_route_table" "portfolio-public-rt" {
#   vpc_id = module.vpc.vpc_id

#   route {
#     cidr_block = "0.0.0.0/0"
#     gateway_id = aws_internet_gateway.portfolio-igw.id
#   }

#   tags = {
#     Name = "${local.project_name}-public-rt"
#   }
# }

# resource "aws_route_table_association" "public-subnet-association" {
#   count = length(module.vpc.public_subnets)

#   subnet_id      = module.vpc.public_subnets[count.index]
#   route_table_id = aws_route_table.portfolio-public-rt.id
# }
