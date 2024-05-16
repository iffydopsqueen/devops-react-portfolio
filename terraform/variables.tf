variable "whitelist_ips" {
  type = list(string)
}

variable "instance_type" {
  type        = string
  description = "The size of the instance"
  validation {
    condition     = can(regex("^t2.", var.instance_type))
    error_message = "The instance must be a t2 type EC2 instance"
  }
}