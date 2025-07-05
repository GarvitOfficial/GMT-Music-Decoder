#!/bin/bash

# 🎵 GMT Music Decoder - Setup Script
# This script will set up the project automatically

set -e

echo "🎵 Welcome to GMT Music Decoder Setup!"
echo "======================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
check_node() {
    print_status "Checking Node.js installation..."
    if command -v node &> /dev/null; then
        NODE_VERSION=$(node --version)
        print_success "Node.js is installed: $NODE_VERSION"
    else
        print_error "Node.js is not installed. Please install Node.js v16 or higher."
        print_status "Download from: https://nodejs.org/"
        exit 1
    fi
}

# Check if npm is installed
check_npm() {
    print_status "Checking npm installation..."
    if command -v npm &> /dev/null; then
        NPM_VERSION=$(npm --version)
        print_success "npm is installed: $NPM_VERSION"
    else
        print_error "npm is not installed. Please install npm."
        exit 1
    fi
}

# Install dependencies
install_dependencies() {
    print_status "Installing dependencies..."
    if npm install; then
        print_success "Dependencies installed successfully!"
    else
        print_error "Failed to install dependencies."
        exit 1
    fi
}

# Create environment file
create_env_file() {
    print_status "Creating environment file..."
    if [ ! -f .env ]; then
        cat > .env << EOF
# ACRCloud Configuration
VITE_ACR_HOST=identify-ap-southeast-1.acrcloud.com
VITE_ACR_ACCESS_KEY=your_access_key_here
VITE_ACR_ACCESS_SECRET=your_access_secret_here

# App Configuration
VITE_APP_NAME=GMT Music Decoder
VITE_APP_VERSION=1.0.0
EOF
        print_success "Environment file created: .env"
        print_warning "Please update the ACRCloud credentials in .env file"
    else
        print_status "Environment file already exists: .env"
    fi
}

# Check if port is available
check_port() {
    print_status "Checking if port 5173 is available..."
    if lsof -Pi :5173 -sTCP:LISTEN -t >/dev/null ; then
        print_warning "Port 5173 is already in use."
        print_status "You can either:"
        print_status "1. Kill the process using: lsof -ti:5173 | xargs kill -9"
        print_status "2. Use a different port: npm run dev -- --port 3000"
    else
        print_success "Port 5173 is available."
    fi
}

# Main setup function
main() {
    echo ""
    print_status "Starting setup process..."
    
    # Check prerequisites
    check_node
    check_npm
    
    # Install dependencies
    install_dependencies
    
    # Create environment file
    create_env_file
    
    # Check port availability
    check_port
    
    echo ""
    print_success "Setup completed successfully! 🎉"
    echo ""
    echo "Next steps:"
    echo "1. Update ACRCloud credentials in .env file (optional)"
    echo "2. Start the development server: npm run dev"
    echo "3. Open http://localhost:5173 in your browser"
    echo ""
    echo "For more information, see README.md and SETUP.md"
    echo ""
}

# Run main function
main "$@" 